"use client"

import FooterSection from "@/components/footer/footer";
import { HeaderSection } from "@/components/header/header";
import { useState } from "react";

export default function prescribedbooks() {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
        };
    return (
        <>
            <HeaderSection isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

            {/* Prescribed Books Section */}
            <div id="prescribedbooks">
                <div className="py-10 px-4 sm:px-10 lg:px-20 bg-white mt-10">
                    <h3 className="text-2xl md:text-3xl font-semibold text-center">
                        Prescribed Books
                    </h3>

                    <hr className="border-t-2 border-blue-500 w-16 my-4 mx-auto" />

                    {/* Nursery Section */}
                    <h3 className="text-2xl md:text-3xl font-semibold text-center">
                        Nursery
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 text-left text-sm md:text-base">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-2 px-4 border-b">
                                        Sl. No.
                                    </th>
                                    <th className="py-2 px-4 border-b">
                                        Subjects
                                    </th>
                                    <th className="py-2 px-4 border-b">
                                        Description
                                    </th>
                                    <th className="py-2 px-4 border-b">
                                        Publications
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4 border-b">1</td>
                                    <td className="py-2 px-4 border-b">
                                        Spring Board - Integrated Monthly Series
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        FLN - SERIES
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        A division of Jeevandeep Edumedia Pvt.
                                        Ltd.
                                    </td>
                                </tr>
                                {/* Repeat rows for each grade as needed */}
                            </tbody>
                        </table>
                    </div>

                    {/* LKG Section */}
                    <h3 className="text-2xl md:text-3xl font-semibold text-center mt-10">
                        LKG
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 text-left text-sm md:text-base">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-2 px-4 border-b">
                                        Sl. No.
                                    </th>
                                    <th className="py-2 px-4 border-b">
                                        Subjects
                                    </th>
                                    <th className="py-2 px-4 border-b">
                                        Description
                                    </th>
                                    <th className="py-2 px-4 border-b">
                                        Publications
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4 border-b">1</td>
                                    <td className="py-2 px-4 border-b">
                                        Spring Board - Integrated Monthly Series
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        FLN - SERIES
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        A division of Jeevandeep Edumedia Pvt.
                                        Ltd.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* UKG Section */}
                    <h3 className="text-2xl md:text-3xl font-semibold text-center mt-10">
                        UKG
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 text-left text-sm md:text-base">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-2 px-4 border-b">
                                        Sl. No.
                                    </th>
                                    <th className="py-2 px-4 border-b">
                                        Subjects
                                    </th>
                                    <th className="py-2 px-4 border-b">
                                        Description
                                    </th>
                                    <th className="py-2 px-4 border-b">
                                        Publications
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4 border-b">1</td>
                                    <td className="py-2 px-4 border-b">
                                        Spring Board - Integrated Monthly Series
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        FLN - SERIES
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        A division of Jeevandeep Edumedia Pvt.
                                        Ltd.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <FooterSection />
        </>
    );
}