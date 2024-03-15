"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { Button } from "./ui/moving-border";


function FeatureCard({ feature }: any) {
    console.log(feature);

    return (
        <div>
            <BackgroundGradient className="rounded-[22px]  p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <div className="relative">
                    <Image
                        src={feature.image}
                        alt="Feature Image"
                        height={400}
                        width={400}
                        className="object-cover rounded"
                    />
                    <div className="absolute inset-0 flex flex-col justify-between bg-black bg-opacity-50 rounded">
                        <div className="p-4">
                            <h3 className="text-2xl font-bold text-white mb-2">{feature.name}</h3>
                            <p className="text-sm text-gray-200">{feature.description.substring(0, 250)}...</p>
                        </div>
                        <div className="p-4">
                            <Button
                                borderRadius='1rem'
                                duration={8000}
                                borderClassName="bg-gradient-to-r from-orange-500 to-transparent via-orange-300"
                                className='bg-black text-white border border-neutral-200 dark:border-slate-800 py-2 px-4 rounded-md hover:bg-orange-400 hover:text-white transition-colors duration-300 ease-in-out'
                            >
                                Know More
                            </Button>
                        </div>
                    </div>
                </div>


            </BackgroundGradient>
        </div>
    );
}
export default FeatureCard;