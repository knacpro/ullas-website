"use client";

import { HeroSection } from "@/components/features/hero-section/heropage";
import WhyChooseUs from "@/components/features/why-us/whyus";
import FooterSection from "@/components/footer/footer";
import { HeaderSection } from "@/components/header/header";
import { Montserrat } from "next/font/google";
import { useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });
export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <head>
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-3CT1Y43Z0M"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-3CT1Y43Z0M');`
                    }}></script>
            </head>
            <div
                className="bg-white text-black min-h-screen"
                style={montserrat.style}>
                <HeaderSection
                    isMenuOpen={isMenuOpen}
                    toggleMenu={toggleMenu}
                />
                <HeroSection isMenuOpen={isMenuOpen} />
                <WhyChooseUs />
                <FooterSection />
            </div>
        </>
    );
}
