// "use client";

// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { config } from "@fortawesome/fontawesome-svg-core";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import Image from "next/image";
// config.autoAddCss = false;

// interface HeaderSectionPropType {
//     isMenuOpen: boolean;
//     toggleMenu: () => void;
// }

// export function HeaderSection({ isMenuOpen, toggleMenu }: HeaderSectionPropType) {
//     return (
//         <div>
//             <header
//                 className={`bg-[#2A2A5A] fixed top-0 left-0 p-2 w-full z-50 sm:flex justify-between items-center`}>
//                 <div className="pl-4 sm:pl-10 text-black flex space-x-4 items-center">
//                     <Image
//                         src={"/assets/logo.png"}
//                         width={400}
//                         height={400}
//                         alt={"logo"}
//                         className="object-cover w-10 h-10 sm:w-20 sm:h-20"
//                     />
//                     <div>
//                         <h1 className="text-sm sm:text-2xl font-bold tracking-wider">
//                             Ullas Nursery School
//                         </h1>
//                         <p className="text-xs sm:text-sm tracking-widest">
//                            Byahatti-580023
//                         </p>
//                     </div>
//                 </div>

//                 {/* Toggle button for small screens */}
//                 <div className="flex space-x-2 absolute top-4 right-2 sm:hidden">
//                     <button
//                         className="text-black"
//                         onClick={toggleMenu}
//                         aria-label="Toggle Menu">
//                         <FontAwesomeIcon
//                             icon={isMenuOpen ? faTimes : faBars}
//                             className="text-2xl"
//                         />
//                     </button>
//                     <Image
//                         src={"/assets/rayaru.png"}
//                         width={400}
//                         height={400}
//                         alt={"logo"}
//                         className="object-cover block sm:hidden w-8 h-8 rounded-full"
//                     />
//                 </div>

//                 {/* Nav Links */}
//                 <nav
//                     className={`${
//                         isMenuOpen ? "block" : "hidden"
//                     } sm:flex transition-all duration-300 ease-in-out`}>
//                     <ul className="flex flex-col items-center space-y-4 py-4 sm:flex-row sm:space-y-0 sm:space-x-6 sm:pt-1">
//                         <li>
//                             <Link
//                                 href="/"
//                                 onClick={toggleMenu}
//                                 className="text-sm sm:text-base text-black hover:text-gray-300 transition-colors">
//                                 Home
//                             </Link>
//                         </li>
//                         <li>
//                             <Link
//                                 href="/about"
//                                 onClick={toggleMenu}
//                                 className="text-sm sm:text-base text-black hover:text-gray-300 transition-colors">
//                                 About Us
//                             </Link>
//                         </li>
//                         <li>
//                             <Link
//                                 href="/services"
//                                 onClick={toggleMenu}
//                                 className="text-sm sm:text-base text-black hover:text-gray-300 transition-colors">
//                                 Services
//                             </Link>
//                         </li>
//                         <li>
//                             <Link
//                                 href="/contact"
//                                 onClick={toggleMenu}
//                                 className="text-sm sm:text-base text-black hover:text-gray-300 transition-colors">
//                                 Contact Us
//                             </Link>
//                         </li>
//                         <Image
//                             src={"/assets/rayaru.png"}
//                             width={400}
//                             height={400}
//                             alt={"logo"}
//                             className="object-cover hidden sm:block sm:w-14 sm:h-14 rounded-full"
//                         />
//                     </ul>
//                 </nav>
//             </header>
//         </div>
//     );
// }

"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Image from "next/image";
import { useState } from "react";
config.autoAddCss = false;

interface HeaderSectionPropType {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

export function HeaderSection({ isMenuOpen, toggleMenu }: HeaderSectionPropType) {
    return (
        <div>
            <header
                className={`bg-[#fef0ef] fixed top-0 left-0 p-2 w-full z-50 sm:flex justify-between items-center`}>
                <div className="pl-4 sm:pl-10 text-black flex space-x-4 items-center">
                    <Image
                        src={"/assets/logo.png"}
                        width={400}
                        height={400}
                        alt={"logo"}
                        className="object-cover w-10 h-10 sm:w-20 sm:h-20"
                    />
                    <div>
                        <h1 className="text-sm sm:text-2xl font-bold tracking-wider">
                            Ullas Nursery School
                        </h1>
                        <p className="text-xs sm:text-sm tracking-widest">
                           Byahatti-580023
                        </p>
                    </div>
                </div>

                {/* Toggle button for small screens */}
                <div className="flex space-x-2 absolute top-4 right-2 sm:hidden">
                    <button
                        className="text-black"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu">
                        <FontAwesomeIcon
                            icon={isMenuOpen ? faTimes : faBars}
                            className="text-2xl"
                        />
                    </button>
                    <Image
                        src={"/assets/rayaru.png"}
                        width={400}
                        height={400}
                        alt={"logo"}
                        className="object-cover block sm:hidden w-8 h-8 rounded-full"
                    />
                </div>

                {/* Nav Links with Dropdown */}
                <nav
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } sm:flex transition-all duration-300 ease-in-out`}>
                    <ul className="flex flex-col items-center space-y-4 py-4 sm:flex-row sm:space-y-0 sm:space-x-6 sm:pt-1">
                        <li>
                            <Link
                                href="/"
                                onClick={toggleMenu}
                                className="text-sm sm:text-base text-black hover:text-gray-300 transition-colors">
                                  
                                Home
                            </Link>
                        </li>
                        <DropdownItem title="About Us" links={[{ name: "Overview", href: "/about/overview" }, { name: "Vision &Mission", href: "/about/mission" },
                            {name: "Commitee Members", href: "/about/mission" }]} />
                        <DropdownItem title="Academics" links={[{ name: "Programs", href: "/academics/programs" }, { name: "Curriculum", href: "/academics/curriculum" }]} />
                        <DropdownItem title="Facilities" links={[{ name: "Library", href: "/facilities/library" }, { name: "Labs", href: "/facilities/labs" }]} />
                        <DropdownItem title="Activities" links={[{ name: "Sports", href: "/activities/sports" }, { name: "Art & Culture", href: "/activities/art" }]} />
                        <li>
                            <Link
                                href="/gallery"
                                onClick={toggleMenu}
                                className="text-sm sm:text-base text-black hover:text-gray-300 transition-colors">
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                onClick={toggleMenu}
                                className="text-sm sm:text-base text-black hover:text-gray-300 transition-colors">
                                Contact Us
                            </Link>
                        </li>
                        <Image
                            src={"/assets/rayaru.png"}
                            width={400}
                            height={400}
                            alt={"logo"}
                            className="object-cover hidden sm:block sm:w-14 sm:h-14 rounded-full"
                        />
                    </ul>
                </nav>
            </header>
        </div>
    );
}

function DropdownItem({ title, links }: { title: string; links: { name: string; href: string }[] }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                onBlur={() => setOpen(false)}
                className="text-sm sm:text-base text-black hover:text-gray-300 transition-colors font-semibold focus:outline-none">
                {title} <span className="ml-1">&#9662;</span>
            </button>
            {open && (
                <ul className="absolute left-0 w-40 bg-white shadow-lg rounded-md mt-2 py-2">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href} className="block px-4 py-2 text-sm text-black hover:bg-gray-200">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
