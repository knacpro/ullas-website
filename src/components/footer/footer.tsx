import { Mail, Phone, MapPin } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function FooterSection() {
    return (
        <footer className="bg-[#001524] text-gray-300 py-12 px-4 md:px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Section */}
                <div className="space-y-4">
                    <Image
                        src="/assets/parent-testimonials.png"
                        alt="Ullas English Medium School"
                        width={300}
                        height={100}
                        className="mb-4"
                    />
                    <h2 className="text-xl font-semibold">
                        "Ullas Nursery School"
                    </h2>
                    <p className="text-sm opacity-80">
                        We believe that our children should be moulded by this
                        motto. We hope they will lead a balanced and humble life
                        of honour under all circumstances.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <Link
                            href="#"
                            className="hover:text-slate-50 transition-colors">
                            <Facebook className="w-5 h-5" />
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-slate-50 transition-colors">
                            <Instagram className="w-5 h-5" />
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-slate-50 transition-colors">
                            <Youtube className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
                    <div className="space-y-2 text-sm">
                        <p>
                            Basaveshwar Medicals, Byahatti,
                            <br />
                            Kusugal Road, Hubli - 23
                        </p>
                        <p>
                            <Link
                                href="tel:+919481011791"
                                className="hover:text-slate-50">
                                (+91) 9481011791
                            </Link>
                        </p>
                        <p>
                            <Link
                                href="mailto:knacprosolutions@gmail.com?subject=Subject"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-slate-50">
                                ullasnurseryschool@gmail.com
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Quick & Important Links */}
                <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Quick Links</h2>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-slate-50 hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-slate-50 hover:underline">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-slate-50 hover:underline">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/academics"
                                    className="hover:text-slate-50 hover:underline">
                                    Admissions
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            Important Links
                        </h2>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/results"
                                    className="hover:text-slate-50 flex items-center gap-1 hover:underline">
                                    Results
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/gallery"
                                    className="hover:text-slate-50 hover:underline">
                                    Gallery
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/faculty"
                                    className="hover:text-slate-50 hover:underline">
                                    Alumni Corner
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/school-circular"
                                    className="hover:text-slate-50 hover:underline">
                                    School Circulars
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto mt-12 pt-4 border-t border-gray-800 text-sm text-center opacity-60">
                © 2024 ULLAS Nursery School - All rights reserved | Digital
                Partner -
                <Link
                    href="https://knacpro.vercel.app/"
                    className="hover:text-slate-50 hover:underline ml-1">
                    Knacpro Solutions
                </Link>
            </div>
        </footer>
    );
}
