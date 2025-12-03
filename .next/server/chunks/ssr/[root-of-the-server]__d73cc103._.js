module.exports = [
"[project]/Documents/Workspace/new/style-my-fit-customer-app/.next-internal/server/app/body-shape-guide/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/favicon.ico.mjs { IMAGE => \"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/favicon.ico.mjs { IMAGE => \"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/body-shape-guide/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BodyShape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-rsc] (ecmascript)");
;
;
function BodyShape({ measurements }) {
    // Normalize measurements to proportions (0-1 range for scaling)
    const bustScale = (measurements.bust - 20) / 30; // 20-50 range
    const waistScale = (measurements.waist - 20) / 25; // 20-45 range
    const hipsScale = (measurements.hips - 20) / 35; // 20-55 range
    const shouldersScale = (measurements.shoulders - 20) / 30; // 20-50 range
    const heightScale = (measurements.height - 48) / 36; // 48-84 range
    // Base measurements for the SVG
    const baseWidth = 200;
    const baseHeight = 400;
    // Calculate dynamic measurements with smooth interpolation
    const shoulderWidth = 80 + shouldersScale * 40; // 80-120
    const bustWidth = 70 + bustScale * 35; // 70-105
    const waistWidth = 50 + waistScale * 30; // 50-80
    const hipsWidth = 75 + hipsScale * 40; // 75-115
    // Height affects the overall vertical scale
    const heightFactor = 0.85 + heightScale * 0.3; // 0.85-1.15
    // Skin tone
    const skinTone = "#f4c2a8";
    const hairColor = "#5a3825";
    const outlineColor = "#b2833a";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].ellipse, {
                cx: baseWidth / 2,
                cy: baseHeight * heightFactor - 10,
                rx: hipsWidth * 0.6,
                ry: "8",
                fill: "rgba(0,0,0,0.1)",
                animate: {
                    rx: hipsWidth * 0.6
                },
                transition: {
                    duration: 0.5,
                    ease: "easeOut"
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/body-shape-guide/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].path, {
                d: `
          M ${baseWidth / 2 - shoulderWidth / 2} ${80 * heightFactor}
          L ${baseWidth / 2 - shoulderWidth / 2 + 5} ${90 * heightFactor}
          Q ${baseWidth / 2 - bustWidth / 2} ${120 * heightFactor}, ${baseWidth / 2 - bustWidth / 2} ${150 * heightFactor}
          Q ${baseWidth / 2 - waistWidth / 2} ${180 * heightFactor}, ${baseWidth / 2 - waistWidth / 2} ${200 * heightFactor}
          Q ${baseWidth / 2 - hipsWidth / 2} ${240 * heightFactor}, ${baseWidth / 2 - hipsWidth / 2} ${270 * heightFactor}
          L ${baseWidth / 2 - hipsWidth / 2 + 10} ${340 * heightFactor}
          L ${baseWidth / 2 - 15} ${340 * heightFactor}
          L ${baseWidth / 2} ${baseHeight * heightFactor - 20}
          L ${baseWidth / 2 + 15} ${340 * heightFactor}
          L ${baseWidth / 2 + hipsWidth / 2 - 10} ${340 * heightFactor}
          L ${baseWidth / 2 + hipsWidth / 2} ${270 * heightFactor}
          Q ${baseWidth / 2 + hipsWidth / 2} ${240 * heightFactor}, ${baseWidth / 2 + waistWidth / 2} ${200 * heightFactor}
          Q ${baseWidth / 2 + waistWidth / 2} ${180 * heightFactor}, ${baseWidth / 2 + bustWidth / 2} ${150 * heightFactor}
          Q ${baseWidth / 2 + bustWidth / 2} ${120 * heightFactor}, ${baseWidth / 2 + shoulderWidth / 2 - 5} ${90 * heightFactor}
          L ${baseWidth / 2 + shoulderWidth / 2} ${80 * heightFactor}
          Z
        `,
                fill: skinTone,
                stroke: outlineColor,
                strokeWidth: "2",
                animate: {
                    d: `
            M ${baseWidth / 2 - shoulderWidth / 2} ${80 * heightFactor}
            L ${baseWidth / 2 - shoulderWidth / 2 + 5} ${90 * heightFactor}
            Q ${baseWidth / 2 - bustWidth / 2} ${120 * heightFactor}, ${baseWidth / 2 - bustWidth / 2} ${150 * heightFactor}
            Q ${baseWidth / 2 - waistWidth / 2} ${180 * heightFactor}, ${baseWidth / 2 - waistWidth / 2} ${200 * heightFactor}
            Q ${baseWidth / 2 - hipsWidth / 2} ${240 * heightFactor}, ${baseWidth / 2 - hipsWidth / 2} ${270 * heightFactor}
            L ${baseWidth / 2 - hipsWidth / 2 + 10} ${340 * heightFactor}
            L ${baseWidth / 2 - 15} ${340 * heightFactor}
            L ${baseWidth / 2} ${baseHeight * heightFactor - 20}
            L ${baseWidth / 2 + 15} ${340 * heightFactor}
            L ${baseWidth / 2 + hipsWidth / 2 - 10} ${340 * heightFactor}
            L ${baseWidth / 2 + hipsWidth / 2} ${270 * heightFactor}
            Q ${baseWidth / 2 + hipsWidth / 2} ${240 * heightFactor}, ${baseWidth / 2 + waistWidth / 2} ${200 * heightFactor}
            Q ${baseWidth / 2 + waistWidth / 2} ${180 * heightFactor}, ${baseWidth / 2 + bustWidth / 2} ${150 * heightFactor}
            Q ${baseWidth / 2 + bustWidth / 2} ${120 * heightFactor}, ${baseWidth / 2 + shoulderWidth / 2 - 5} ${90 * heightFactor}
            L ${baseWidth / 2 + shoulderWidth / 2} ${80 * heightFactor}
            Z
          `
                },
                transition: {
                    duration: 0.5,
                    ease: "easeOut"
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/body-shape-guide/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].path, {
                d: `
          M ${baseWidth / 2 - shoulderWidth / 2} ${85 * heightFactor}
          L ${baseWidth / 2 - shoulderWidth / 2 - 15} ${100 * heightFactor}
          L ${baseWidth / 2 - shoulderWidth / 2 - 18} ${180 * heightFactor}
          L ${baseWidth / 2 - shoulderWidth / 2 - 15} ${200 * heightFactor}
          L ${baseWidth / 2 - shoulderWidth / 2 - 10} ${200 * heightFactor}
          L ${baseWidth / 2 - shoulderWidth / 2 - 8} ${180 * heightFactor}
          L ${baseWidth / 2 - shoulderWidth / 2 - 5} ${100 * heightFactor}
          Z
        `,
                fill: skinTone,
                stroke: outlineColor,
                strokeWidth: "2",
                animate: {
                    d: `
            M ${baseWidth / 2 - shoulderWidth / 2} ${85 * heightFactor}
            L ${baseWidth / 2 - shoulderWidth / 2 - 15} ${100 * heightFactor}
            L ${baseWidth / 2 - shoulderWidth / 2 - 18} ${180 * heightFactor}
            L ${baseWidth / 2 - shoulderWidth / 2 - 15} ${200 * heightFactor}
            L ${baseWidth / 2 - shoulderWidth / 2 - 10} ${200 * heightFactor}
            L ${baseWidth / 2 - shoulderWidth / 2 - 8} ${180 * heightFactor}
            L ${baseWidth / 2 - shoulderWidth / 2 - 5} ${100 * heightFactor}
            Z
          `
                },
                transition: {
                    duration: 0.5,
                    ease: "easeOut"
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/body-shape-guide/page.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].path, {
                d: `
          M ${baseWidth / 2 + shoulderWidth / 2} ${85 * heightFactor}
          L ${baseWidth / 2 + shoulderWidth / 2 + 15} ${100 * heightFactor}
          L ${baseWidth / 2 + shoulderWidth / 2 + 18} ${180 * heightFactor}
          L ${baseWidth / 2 + shoulderWidth / 2 + 15} ${200 * heightFactor}
          L ${baseWidth / 2 + shoulderWidth / 2 + 10} ${200 * heightFactor}
          L ${baseWidth / 2 + shoulderWidth / 2 + 8} ${180 * heightFactor}
          L ${baseWidth / 2 + shoulderWidth / 2 + 5} ${100 * heightFactor}
          Z
        `,
                fill: skinTone,
                stroke: outlineColor,
                strokeWidth: "2",
                animate: {
                    d: `
            M ${baseWidth / 2 + shoulderWidth / 2} ${85 * heightFactor}
            L ${baseWidth / 2 + shoulderWidth / 2 + 15} ${100 * heightFactor}
            L ${baseWidth / 2 + shoulderWidth / 2 + 18} ${180 * heightFactor}
            L ${baseWidth / 2 + shoulderWidth / 2 + 15} ${200 * heightFactor}
            L ${baseWidth / 2 + shoulderWidth / 2 + 10} ${200 * heightFactor}
            L ${baseWidth / 2 + shoulderWidth / 2 + 8} ${180 * heightFactor}
            L ${baseWidth / 2 + shoulderWidth / 2 + 5} ${100 * heightFactor}
            Z
          `
                },
                transition: {
                    duration: 0.5,
                    ease: "easeOut"
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/body-shape-guide/page.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].rect, {
                x: baseWidth / 2 - 10,
                y: 60 * heightFactor,
                width: "20",
                height: 25 * heightFactor,
                fill: skinTone,
                stroke: outlineColor,
                strokeWidth: "2",
                rx: "3",
                animate: {
                    y: 60 * heightFactor,
                    height: 25 * heightFactor
                },
                transition: {
                    duration: 0.5,
                    ease: "easeOut"
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/body-shape-guide/page.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].circle, {
                cx: baseWidth / 2,
                cy: 40 * heightFactor,
                r: "28",
                fill: skinTone,
                stroke: outlineColor,
                strokeWidth: "2",
                animate: {
                    cy: 40 * heightFactor
                },
                transition: {
                    duration: 0.5,
                    ease: "easeOut"
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/body-shape-guide/page.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].ellipse, {
                cx: baseWidth / 2,
                cy: 35 * heightFactor,
                rx: "30",
                ry: "25",
                fill: hairColor,
                animate: {
                    cy: 35 * heightFactor
                },
                transition: {
                    duration: 0.5,
                    ease: "easeOut"
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/body-shape-guide/page.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].g, {
                animate: {
                    transform: `translate(0, ${(40 - 40 * heightFactor) * -1}px)`
                },
                transition: {
                    duration: 0.5,
                    ease: "easeOut"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: baseWidth / 2 - 10,
                        cy: "35",
                        r: "2",
                        fill: "#222222"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/body-shape-guide/page.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: baseWidth / 2 + 10,
                        cy: "35",
                        r: "2",
                        fill: "#222222"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/body-shape-guide/page.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `M ${baseWidth / 2 - 8} 45 Q ${baseWidth / 2} 48 ${baseWidth / 2 + 8} 45`,
                        stroke: "#222222",
                        strokeWidth: "1.5",
                        fill: "none",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/body-shape-guide/page.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/body-shape-guide/page.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].g, {
                opacity: "0.6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].line, {
                        x1: baseWidth / 2 - bustWidth / 2 - 10,
                        y1: 150 * heightFactor,
                        x2: baseWidth / 2 + bustWidth / 2 + 10,
                        y2: 150 * heightFactor,
                        stroke: "#b2833a",
                        strokeWidth: "1",
                        strokeDasharray: "3,3",
                        animate: {
                            x1: baseWidth / 2 - bustWidth / 2 - 10,
                            x2: baseWidth / 2 + bustWidth / 2 + 10,
                            y1: 150 * heightFactor,
                            y2: 150 * heightFactor
                        },
                        transition: {
                            duration: 0.5,
                            ease: "easeOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/body-shape-guide/page.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].line, {
                        x1: baseWidth / 2 - waistWidth / 2 - 10,
                        y1: 200 * heightFactor,
                        x2: baseWidth / 2 + waistWidth / 2 + 10,
                        y2: 200 * heightFactor,
                        stroke: "#b2833a",
                        strokeWidth: "1",
                        strokeDasharray: "3,3",
                        animate: {
                            x1: baseWidth / 2 - waistWidth / 2 - 10,
                            x2: baseWidth / 2 + waistWidth / 2 + 10,
                            y1: 200 * heightFactor,
                            y2: 200 * heightFactor
                        },
                        transition: {
                            duration: 0.5,
                            ease: "easeOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/body-shape-guide/page.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].line, {
                        x1: baseWidth / 2 - hipsWidth / 2 - 10,
                        y1: 270 * heightFactor,
                        x2: baseWidth / 2 + hipsWidth / 2 + 10,
                        y2: 270 * heightFactor,
                        stroke: "#b2833a",
                        strokeWidth: "1",
                        strokeDasharray: "3,3",
                        animate: {
                            x1: baseWidth / 2 - hipsWidth / 2 - 10,
                            x2: baseWidth / 2 + hipsWidth / 2 + 10,
                            y1: 270 * heightFactor,
                            y2: 270 * heightFactor
                        },
                        transition: {
                            duration: 0.5,
                            ease: "easeOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/body-shape-guide/page.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/body-shape-guide/page.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/body-shape-guide/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/body-shape-guide/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d73cc103._.js.map