"use client";

import { AdmissionPage } from "@/components/features/hero-section/admission-page";
import { CurriculumOverview } from "@/components/features/hero-section/curriculum-overview";
import { FounderProfile } from "@/components/features/hero-section/founder-profile";
import { GlimpsesOfProminence } from "@/components/features/hero-section/glimpses-of-prominence";
import { HeroSection } from "@/components/features/hero-section/heropage";
import { SchoolInfo } from "@/components/features/hero-section/school-info";
import { SchoolPhotography } from "@/components/features/hero-section/school-photography";
import { WhyChooseSection } from "@/components/features/hero-section/why-choose-section";
import WhyChooseUs from "@/components/features/why-us/whyus";
import FooterSection from "@/components/footer/footer";
import { HeaderSection } from "@/components/header/header";
import { ParentTestimonials } from "@/components/features/hero-section/parent-testimonials";
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
                <AdmissionPage />
                <SchoolInfo />
                <WhyChooseSection />
                <FounderProfile />
                <CurriculumOverview />
                <GlimpsesOfProminence />
                <SchoolPhotography />
                <ParentTestimonials />
                <FooterSection />
            </div>
        </>
    );
}
