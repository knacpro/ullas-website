"use client"

import FooterSection from "@/components/footer/footer";
import { HeaderSection } from "@/components/header/header";
import { useState } from "react";

export default function HolidayList() {
            const [isMenuOpen, setIsMenuOpen] = useState(false);
            const toggleMenu = () => {
                setIsMenuOpen(!isMenuOpen);
            };
    return (
        <>
            <HeaderSection isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

            {/* Holiday List Section */}
            <div className="py-10 px-4 sm:px-10 lg:px-20 bg-white pt-40">
                <h3 className="text-2xl md:text-3xl font-semibold text-center">
                    Holiday List 2024-25
                </h3>
                <hr className="border-t-2 border-blue-500 w-16 my-4 mx-auto" />

                <div className="overflow-x-auto">
                    {" "}
                    {/* Added overflow-x-auto for horizontal scrolling on small screens */}
                    <table className="min-w-full border border-gray-300 text-left text-sm md:text-base">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="py-2 px-4 border-b">Sl. No.</th>
                                <th className="py-2 px-4 border-b">Month</th>
                                <th className="py-2 px-4 border-b">Date</th>
                                <th className="py-2 px-4 border-b">Day</th>
                                <th className="py-2 px-4 border-b">Occasion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">1</td>
                                <td className="py-2 px-4 border-b">May</td>
                                <td className="py-2 px-4 border-b">1</td>
                                <td className="py-2 px-4 border-b">
                                    Wednesday
                                </td>
                                <td className="py-2 px-4 border-b">May Day</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">2</td>
                                <td className="py-2 px-4 border-b">May</td>
                                <td className="py-2 px-4 border-b">10</td>
                                <td className="py-2 px-4 border-b">Friday</td>
                                <td className="py-2 px-4 border-b">
                                    Basava Jayanti/Akshaya Tritiya
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">3</td>
                                <td className="py-2 px-4 border-b">June</td>
                                <td className="py-2 px-4 border-b">17</td>
                                <td className="py-2 px-4 border-b">Monday</td>
                                <td className="py-2 px-4 border-b">Bakrid</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">4</td>
                                <td className="py-2 px-4 border-b">July</td>
                                <td className="py-2 px-4 border-b">17</td>
                                <td className="py-2 px-4 border-b">
                                    Wednesday
                                </td>
                                <td className="py-2 px-4 border-b">
                                    Last Day of Moharram
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">5</td>
                                <td className="py-2 px-4 border-b">August</td>
                                <td className="py-2 px-4 border-b">10</td>
                                <td className="py-2 px-4 border-b">Friday</td>
                                <td className="py-2 px-4 border-b">
                                    Nagapanchami (Restricted Holiday)
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">6</td>
                                <td className="py-2 px-4 border-b">August</td>
                                <td className="py-2 px-4 border-b">15</td>
                                <td className="py-2 px-4 border-b">Thursday</td>
                                <td className="py-2 px-4 border-b">
                                    Independence Day
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">7</td>
                                <td className="py-2 px-4 border-b">
                                    September
                                </td>
                                <td className="py-2 px-4 border-b">7</td>
                                <td className="py-2 px-4 border-b">Saturday</td>
                                <td className="py-2 px-4 border-b">
                                    Ganesh Chaturthi
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">8</td>
                                <td className="py-2 px-4 border-b">
                                    September
                                </td>
                                <td className="py-2 px-4 border-b">16</td>
                                <td className="py-2 px-4 border-b">Monday</td>
                                <td className="py-2 px-4 border-b">
                                    Eid-E-Nad
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">9</td>
                                <td className="py-2 px-4 border-b">October</td>
                                <td className="py-2 px-4 border-b">2</td>
                                <td className="py-2 px-4 border-b">
                                    Wednesday
                                </td>
                                <td className="py-2 px-4 border-b">
                                    Gandhi Jayanti/Shasti Jayanti/Mahalaya
                                    Amavasya
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">10</td>
                                <td className="py-2 px-4 border-b">October</td>
                                <td className="py-2 px-4 border-b">11</td>
                                <td className="py-2 px-4 border-b">Friday</td>
                                <td className="py-2 px-4 border-b">
                                    Mahanavmi/Ayudhapooja
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">11</td>
                                <td className="py-2 px-4 border-b">October</td>
                                <td className="py-2 px-4 border-b">12</td>
                                <td className="py-2 px-4 border-b">Saturday</td>
                                <td className="py-2 px-4 border-b">
                                    Vijaya Dashami
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">12</td>
                                <td className="py-2 px-4 border-b">October</td>
                                <td className="py-2 px-4 border-b">27</td>
                                <td className="py-2 px-4 border-b">Thursday</td>
                                <td className="py-2 px-4 border-b">
                                    Maharashi Valmiki Jayanti
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">13</td>
                                <td className="py-2 px-4 border-b">October</td>
                                <td className="py-2 px-4 border-b">31</td>
                                <td className="py-2 px-4 border-b">Thursday</td>
                                <td className="py-2 px-4 border-b">
                                    Naraka Chaturdashi
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">14</td>
                                <td className="py-2 px-4 border-b">November</td>
                                <td className="py-2 px-4 border-b">1</td>
                                <td className="py-2 px-4 border-b">Friday</td>
                                <td className="py-2 px-4 border-b">
                                    Kannada Rajyotsava/Deepavali Amavasya
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">15</td>
                                <td className="py-2 px-4 border-b">November</td>
                                <td className="py-2 px-4 border-b">2</td>
                                <td className="py-2 px-4 border-b">Saturday</td>
                                <td className="py-2 px-4 border-b">
                                    Balipadyami Deepavali
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">16</td>
                                <td className="py-2 px-4 border-b">November</td>
                                <td className="py-2 px-4 border-b">18</td>
                                <td className="py-2 px-4 border-b">Monday</td>
                                <td className="py-2 px-4 border-b">
                                    Kanakdasa Jayanthi
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">17</td>
                                <td className="py-2 px-4 border-b">December</td>
                                <td className="py-2 px-4 border-b">25</td>
                                <td className="py-2 px-4 border-b">
                                    Wednesday
                                </td>
                                <td className="py-2 px-4 border-b">
                                    Christmas Day
                                </td>
                            </tr>

                            <tr>
                                <td className="py-2 px-4 border-b">18</td>
                                <td className="py-2 px-4 border-b">December</td>
                                <td className="py-2 px-4 border-b">26</td>
                                <td className="py-2 px-4 border-b">
                                    Wednesday
                                </td>
                                <td className="py-2 px-4 border-b">
                                    Post-Christma
                                </td>
                            </tr>

                            <tr>
                                <td className="py-2 px-4 border-b  text-center">
                                    2025
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <FooterSection />
        </>
    );
}
