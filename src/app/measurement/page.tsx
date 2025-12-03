"use client";
import React, { useState } from "react";
import MeasurementForm from "@/components/home/MeasurementForm";
import { BodyMeasurement, BodyType } from "@/types";
import { toast } from "@/hooks/use-toast";

const MeasurementPage = () => {
    const [bodyType, setBodyType] = useState<BodyType | null>(null);
    const [measurements, setMeasurements] = useState<BodyMeasurement | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const handleBodyTypeChange = (newBodyType: BodyType, newMeasurements: BodyMeasurement) => {
        setIsLoading(true);

        // Simulate API call delay
        setTimeout(() => {
            setBodyType(newBodyType);
            setMeasurements(newMeasurements);
            setIsLoading(false);
            if (newBodyType !== "unknown") {
                toast({
                    title: "Body Shape Analysis Complete",
                    description: `We've analyzed your measurements and found personalized recommendations.`,
                    duration: 5000
                });
            }
        }, 1500);
    };
    return (
        <div className="pt-16">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-5xl mx-auto mt-8 px-4">
                    <div className="flex justify-center">
                        <MeasurementForm onBodyTypeChange={handleBodyTypeChange} isLoading={isLoading} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeasurementPage;