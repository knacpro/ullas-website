"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { HeaderSection } from "@/components/header/header";
import { useState } from "react";
import FooterSection from "@/components/footer/footer";

export default function Overview() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <HeaderSection isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

            <div className="p-6 bg-gray-100">
                {/* Hero Section */}
                <div
                    className="relative h-64 w-full bg-cover bg-center text-white flex items-center justify-center"
                    style={{ backgroundImage: "url('/assets/Faculty.png')" }}>
                    <h1 className="text-3xl md:text-5xl font-bold">Faculty</h1>
                </div>

                {/* Faculty Description */}
                <div className="py-10 px-4 sm:px-10 lg:px-20 bg-white">
                    <h2 className="text-lg md:text-xl font-semibold text-green-600">
                        Ullas Nursery School
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-semibold mt-2">
                        Faculty
                    </h3>
                    <hr className="border-t-2 border-blue-500 w-16 my-4" />
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        At Ullas Nursery School, we believe that exceptional
                        teaching faculty are the cornerstone of a thriving
                        educational environment. The nurturing and purposeful
                        work of our teachers plays a vital role in shaping young
                        minds, fostering curiosity, and building the foundation
                        for lifelong learning. With a deep commitment to the
                        growth and development of each child, our educators are
                        more than just instructors—they are mentors, role
                        models, and guides, dedicated to creating opportunities
                        for exploration and growth. We handpick teachers who
                        embody patience, creativity, and a passion for early
                        childhood education, ensuring that every child’s
                        learning experience is rich, engaging, and
                        transformative.
                    </p>
                    <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
                        At Ullas Nursery School, we believe that the early years
                        of a child’s education are the most formative. Our
                        mission is to provide a nurturing, safe, and engaging
                        environment where young minds can explore, discover, and
                        grow. We aim to lay a strong foundation for lifelong
                        learning by focusing on each child’s unique strengths,
                        interests, and developmental needs.
                    </p>
                </div>

                {/* Image Section */}
                <div
                    className="relative h-64 md:h-80 lg:h-96 bg-cover bg-center text-white flex items-center justify-center"
                    style={{
                        backgroundImage: "url('/assets/facultygroup1.png')"
                    }}>
                    {/* No content in this div, but you can add some text or other elements */}
                </div>

                {/* Staff Members Table */}
                <div className="py-10 px-4 sm:px-10 lg:px-20 bg-white mt-10">
                    <h3 className="text-2xl md:text-3xl font-semibold text-center">
                        Staff Members (Teaching & Non-Teaching) 2023 – 2024
                    </h3>
                    <hr className="border-t-2 border-blue-500 w-16 my-4 mx-auto" />

                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 text-left text-sm md:text-base">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-2 px-4 border-b border-gray-300">
                                        Sl. No.
                                    </th>
                                    <th className="py-2 px-4 border-b border-gray-300">
                                        Name of the Staff Members
                                    </th>
                                    <th className="py-2 px-4 border-b border-gray-300">
                                        Designation
                                    </th>
                                    <th className="py-2 px-4 border-b border-gray-300">
                                        Qualification
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4 border-b">1</td>
                                    <td className="py-2 px-4 border-b">
                                        Naina P.C
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        Principal
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        MA, B.Ed
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b">2</td>
                                    <td className="py-2 px-4 border-b">
                                        Anu Maskara
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        Vice-Principal
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        MA, B.Ed
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b">3</td>
                                    <td className="py-2 px-4 border-b">
                                        Mary Leema B Ponnuswamy
                                    </td>
                                    <td className="py-2 px-4 border-b">KGT</td>
                                    <td className="py-2 px-4 border-b">
                                        BA, D.Ed
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b">4</td>
                                    <td className="py-2 px-4 border-b">
                                        Nilofar Dharwar
                                    </td>
                                    <td className="py-2 px-4 border-b">KGT</td>
                                    <td className="py-2 px-4 border-b">
                                        B.Com, B.Ed
                                    </td>
                                </tr>
                                {/* Add more rows if needed */}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Teachers Benefits Section */}
                <div className="py-10 px-4 sm:px-10 lg:px-20 bg-white mt-10">
                    <h3 className="text-2xl md:text-3xl font-semibold text-center">
                        Teachers in Ullas Nursery School
                    </h3>
                    <hr className="border-t-2 border-blue-500 w-16 my-4 mx-auto" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 text-center">
                        <div>
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="text-green-500 text-lg md:text-xl"
                            />
                            <p className="mt-2">
                                Have freedom to express and share ideas.
                            </p>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="text-green-500 text-lg md:text-xl"
                            />
                            <p className="mt-2">
                                Get appreciation and recognition for their work.
                            </p>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="text-green-500 text-lg md:text-xl"
                            />
                            <p className="mt-2">
                                Work with parents to help students.
                            </p>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="text-green-500 text-lg md:text-xl"
                            />
                            <p className="mt-2">
                                Get trained regularly by educational consultants
                                and counselors.
                            </p>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="text-green-500 text-lg md:text-xl"
                            />
                            <p className="mt-2">
                                Support hands-on project and experiential
                                learning.
                            </p>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="text-green-500 text-lg md:text-xl"
                            />
                            <p className="mt-2">
                                Enjoy a long and satisfying tenure.
                            </p>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="text-green-500 text-lg md:text-xl"
                            />
                            <p className="mt-2">
                                Work in a familial environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <FooterSection />
        </>
    );
}
