"use client";
import {
    GraduationCap,
    Users,
    School,
    Brain,
    Trophy,
    PartyPopper,
    Building
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card4";
import { HeaderSection } from "@/components/header/header";
import { useState } from "react";
import FooterSection from "@/components/footer/footer";

export default function Activities() {
    const activities = [
        {
            icon: GraduationCap,
            title: "Graduation day",
            description: "Graduation day for UKG – Swaagat Divas"
        },
        {
            icon: Users,
            title: "Assembly",
            description: "Separate Assembly for Bal Ullas"
        },
        {
            icon: Brain,
            title: "Quiz",
            description: "Spellings and Quizzes during the Assembly"
        },
        {
            icon: School,
            title: "Four Houses",
            description:
                "Entire section is divided into four Houses: Ashoka, Bendre, Raman, Tagore"
        },
        {
            icon: Trophy,
            title: "Competitions",
            description:
                "Story Telling, Rhyme Recitation, Fancy Dress, Sketching, Drawing, Colouring, Thumb-Art, Cutting—n-sticking, Weekly Worksheet and many more."
        },
        {
            icon: PartyPopper,
            title: "Festivals",
            description:
                "All festivals like Holi, Raksha Bandhan, Diwali, Eid and Chirstmas are celebrated with full vigor and vivacity."
        },
        {
            icon: Building,
            title: "Visits",
            description:
                "Visits to Airport, Railway Station, Post Office, Animal Farm & Park, Arrangements are made for community helpers like Doctors, Carpenters to interact with the little children in the school."
        }
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <HeaderSection isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <div className="min-h-screen bg-background pt-16">
                <div className="relative">
                    <div className="absolute inset-0 bg-[#E6E6FA] h-48">
                        <div className="absolute bottom-0 left-0 right-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1440 320"
                                className="w-full">
                                <path
                                    fill="white"
                                    d="M0,96L80,106.7C160,117,320,139,480,144C640,149,800,139,960,122.7C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="relative pt-8 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
                        <h1 className="text-center text-4xl font-serif italic mb-16 pt-4">
                            KG Section - Bal Ullas Special Days/Activities
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
                            {activities.map((activity, index) => (
                                <Card
                                    key={index}
                                    className={
                                        index === activities.length - 1
                                            ? "md:col-span-2 lg:col-span-1"
                                            : ""
                                    }>
                                    <CardContent className="p-6 text-center">
                                        <div className="mb-4 flex justify-center">
                                            <activity.icon className="w-12 h-12 text-primary" />
                                        </div>
                                        <h2 className="text-2xl font-serif italic mb-2">
                                            {activity.title}
                                        </h2>
                                        <p className="text-muted-foreground">
                                            {activity.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <FooterSection />
        </>
    );
}
