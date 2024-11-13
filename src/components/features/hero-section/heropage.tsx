"use client";

import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface PropType {
    isMenuOpen: boolean;
}

export function HeroSection({ isMenuOpen }: PropType) {
    const [loading, setLoading] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        "/assets/hero-school-1.png",
        "/assets/hero-school-2.png",
        "/assets/hero-school-3.png"
    ];

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(slideInterval);
    }, [images.length]);

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
                </div>
            ) : (
                <main className="relative w-full h-screen">
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                        <Image
                            src={images[currentImageIndex]}
                            alt="Hero Background"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {currentImageIndex === 0 && (
                        <div className="relative z-30 ml-72 h-full pt-32">
                            <div className="bg-orange-200/40 backdrop-blur-sm p-8 rounded-lg shadow-lg w-[1000px]">
                                <h1
                                    className={`text-orange-950 text-4xl md:text-6xl font-bold ${playfair.className} text-center`}>
                                    Ullas Nursery School
                                    <p className="text-orange-950 text-2xl mt-4 font-extrabold">
                                        Where Little Dreams Grow Big – Inspiring
                                        Young Minds to Blossom!
                                    </p>
                                </h1>
                            </div>
                        </div>
                    )}
                </main>
            )}
        </>
    );
}

