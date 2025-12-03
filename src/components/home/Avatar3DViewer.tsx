"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

function Loader() {
  return (
    <Html center>
      <span className="text-white text-sm">Loading 3D model...</span>
    </Html>
  );
}

function Model({ src }: { src: string }) {
  const [object, setObject] = useState<THREE.Object3D | null>(null);
  const { camera, controls } = useThree() as {
    camera: THREE.PerspectiveCamera;
    controls?: any;
  };

  useEffect(() => {
    if (!src) return;

    const objPath = src;
    const basePath = objPath.substring(0, objPath.lastIndexOf("/") + 1);
    const mtlPath = objPath.replace(".obj", ".mtl");

    const mtlLoader = new MTLLoader();
    mtlLoader.setResourcePath(basePath);
    mtlLoader.setPath(basePath);

    // Try to load .mtl; fallback to plain OBJ if missing
    mtlLoader.load(
      mtlPath,
      (materials) => {
        materials.preload();
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath(basePath);
        objLoader.load(objPath, (obj) => processModel(obj));
      },
      undefined,
      () => {
        // No .mtl found → load plain .obj
        const objLoader = new OBJLoader();
        objLoader.setPath(basePath);
        objLoader.load(objPath, (obj) => processModel(obj));
      }
    );

    function processModel(obj: THREE.Object3D) {
      // Center + scale model
      const box = new THREE.Box3().setFromObject(obj);
      const size = new THREE.Vector3();
      const center = new THREE.Vector3();
      box.getSize(size);
      box.getCenter(center);

      obj.position.sub(center);
      obj.position.y -= size.y / 2; // feet on ground

      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 1 / (maxDim / 4);
      obj.scale.setScalar(scale);

      // Dynamic camera position (bottom-up)
      const fitHeightDistance =
        maxDim / (2 * Math.tan((camera.fov * Math.PI) / 360));
      const distance = fitHeightDistance * 1.3;

      camera.position.set(0, -distance * 0.4, distance);
      camera.lookAt(0, size.y * 0.25, 0);
      camera.updateProjectionMatrix();

      if (controls) {
        controls.target.set(0, size.y * 0.25, 0);
        controls.update();
      }

      setObject(obj);
    }
  }, [src, camera, controls]);

  return object ? <primitive object={object} /> : null;
}

export default function Avatar3DViewer({ src }: { src: string }) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ fov: 55, position: [0, 0, 5] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={1.4} />
        <Suspense fallback={<Loader />}>
          <Model src={src} />
        </Suspense>
        <OrbitControls enablePan enableRotate enableZoom />
      </Canvas>
    </div>
  );
}
