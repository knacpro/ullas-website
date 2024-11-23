"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    ChevronLeft,
    ChevronRight,
    Download,
    Maximize2,
    RotateCw,
    Share2,
    ZoomIn
} from "lucide-react";
import Image from "next/image";
import { HeaderSection } from "@/components/header/header";
import FooterSection from "@/components/footer/footer";
import { useState } from "react";

export default function SchoolCircular() {
        const [isMenuOpen, setIsMenuOpen] = useState(false);

        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
        };
    return (
        <div className="pt-24">
            <HeaderSection isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <div className="flex flex-col min-h-screen">
                <header className="relative h-40 bg-[#1a237e] text-white flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90" />
                    <h1 className="text-4xl font-bold relative z-10">
                        School Circulars
                    </h1>
                </header>

                <main className="container mx-auto p-6 grid gap-6 md:grid-cols-2">
                    <Card className="overflow-hidden">
                        <CardHeader>
                            <CardTitle>School Communication Letter</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="relative bg-white rounded-md shadow">
                                <Image
                                    src="/placeholder.svg?height=800&width=600"
                                    width={600}
                                    height={800}
                                    alt="School Communication Letter"
                                    className="w-full"
                                />
                                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-2 bg-white border-t">
                                    <div className="flex items-center gap-1">
                                        <span className="text-sm">1/1</span>
                                        <Button variant="ghost" size="icon">
                                            <ChevronLeft className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <ChevronRight className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Button variant="ghost" size="icon">
                                            <ZoomIn className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <RotateCw className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <Maximize2 className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <Share2 className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <Download className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="overflow-hidden">
                        <CardHeader>
                            <CardTitle>Mid Term Time Table 2024</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="relative bg-white rounded-md shadow">
                                <Image
                                    src="/placeholder.svg?height=800&width=600"
                                    width={600}
                                    height={800}
                                    alt="Mid Term Time Table"
                                    className="w-full"
                                />
                                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-2 bg-white border-t">
                                    <div className="flex items-center gap-1">
                                        <span className="text-sm">1/1</span>
                                        <Button variant="ghost" size="icon">
                                            <ChevronLeft className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <ChevronRight className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Button variant="ghost" size="icon">
                                            <ZoomIn className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <RotateCw className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <Maximize2 className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <Share2 className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <Download className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </main>
            </div>
            <FooterSection />
        </div>
    );
}