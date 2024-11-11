// "use client";

// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { config } from "@fortawesome/fontawesome-svg-core";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import Image from "next/image";
// import { useState } from "react";
// config.autoAddCss = false;

// interface HeaderSectionPropType {
//     isMenuOpen: boolean;
//     toggleMenu: () => void;
// }

// export function HeaderSection({ isMenuOpen, toggleMenu }: HeaderSectionPropType) {
//     return (
//         <div>
//             <header
//                 className={`bg-[#fef0ef] fixed top-0 left-0 p-2 w-full z-50 sm:flex justify-between items-center`}>
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
//                             Byahatti-580023
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

//                 {/* Nav Links with Dropdown */}
//                 <nav
//                     className={`${
//                         isMenuOpen ? "block" : "hidden"
//                     } sm:flex transition-all duration-300 ease-in-out`}>
//                     <ul className="flex flex-col items-center space-y-4 py-4 sm:flex-row sm:space-y-0 sm:space-x-6 sm:pt-1">
//                         <DropdownItem
//                             title="About Us"
//                             links={[
//                                 { name: "Overview", href: "/about/overview" },
//                                 {
//                                     name: "Vision & Mission",
//                                     href: "/about/mission"
//                                 },
//                                 {
//                                     name: "Founder's Message",
//                                     href: "/about/founder"
//                                 },
//                                 {
//                                     name: "Guest's Opine",
//                                     href: "/about/guest-opine"
//                                 }
//                             ]}
//                         />
//                         <DropdownItem
//                             title="Academics"
//                             links={[
//                                 {
//                                     name: "Programs",
//                                     href: "/academics/programs"
//                                 },
//                                 { name: "Faculty", href: "/academics/faculty" },
//                                 {
//                                     name: "Admissions",
//                                     href: "/academics/admissions"
//                                 }
//                             ]}
//                         />

//                         <DropdownItem
//                             title="Facilities"
//                             links={[
//                                 {
//                                     name: "Library",
//                                     href: "/facilities/library"
//                                 },
//                                 { name: "Labs", href: "/facilities/labs" }
//                             ]}
//                         />
//                         <DropdownItem
//                             title="Activities"
//                             links={[
//                                 { name: "Sports", href: "/activities/sports" },
//                                 {
//                                     name: "Art & Culture",
//                                     href: "/activities/art"
//                                 }
//                             ]}
//                         />
//                         <li>
//                             <Link
//                                 href="/gallery"
//                                 onClick={toggleMenu}
//                                 className="text-sm sm:text-base text-black hover:text-gray-300 transition-colors font-semibold focus:outline-none">
//                                 Gallery
//                             </Link>
//                         </li>
//                         <li>
//                             <Link
//                                 href="/contact"
//                                 onClick={toggleMenu}
//                                 className="text-sm sm:text-base text-black hover:text-gray-300 transition-colors font-semibold focus:outline-none">
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

// function DropdownItem({
//     title,
//     links
// }: {
//     title: string;
//     links: { name: string; href: string }[];
// }) {
//     const [open, setOpen] = useState(false);

//     return (
//         <div
//             className="relative">
//             <button
//                 onClick={() => setOpen(!open)}
//                 className="text-sm sm:text-base text-black hover:text-gray-300 transition-colors font-semibold focus:outline-none">
//                 {title} <span className="ml-1">&#9662;</span>
//             </button>
//             {open && (
//                 <ul className="absolute left-0 w-40 bg-white shadow-lg rounded-md mt-2 py-2">
//                     {links.map(link => (
//                         <li key={link.name}>
//                             <Link
//                                 href={link.href}
//                                 className="block px-4 py-2 text-sm text-black hover:bg-gray-200">
//                                 {link.name}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//             )}
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
import { useState, useEffect } from "react";
config.autoAddCss = false;

interface HeaderSectionPropType {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

export function HeaderSection({
    isMenuOpen,
    toggleMenu
}: HeaderSectionPropType) {
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
                        <DropdownItem
                            title="About Us"
                            route="/about"
                            links={[
                                { name: "Overview", hash: "#overview" },
                                { name: "Vision & Mission", hash: "#mission" },
                                { name: "Founder's Message", hash: "#founder" },
                                { name: "Guest's Opine", hash: "#guest-opine" }
                            ]}
                        />
                        <DropdownItem
                            title="Academics"
                            route="/academics"
                            links={[
                                { name: "Programs", hash: "#programs" },
                                { name: "Faculty", hash: "#faculty" },
                                { name: "Admissions", hash: "#admissions" }
                            ]}
                        />
                        <DropdownItem
                            title="Facilities"
                            route="/facilities"
                            links={[
                                { name: "Library", hash: "#library" },
                                { name: "Labs", hash: "#labs" }
                            ]}
                        />
                        <DropdownItem
                            title="Activities"
                            route="/activities"
                            links={[
                                { name: "Sports", hash: "#sports" },
                                { name: "Art & Culture", hash: "#art" }
                            ]}
                        />
                        <li>
                            <Link
                                href="/gallery"
                                onClick={toggleMenu}
                                className="text-sm sm:text-base text-black hover:text-gray-300 transition-colors font-semibold focus:outline-none">
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                onClick={toggleMenu}
                                className="text-sm sm:text-base text-black hover:text-gray-300 transition-colors font-semibold focus:outline-none">
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

// DropdownItem component for main routes with hash-based sub-routes
function DropdownItem({
    title,
    route,
    links
}: {
    title: string;
    route: string;
    links: { name: string; hash: string }[];
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="text-sm sm:text-base text-black hover:text-gray-300 transition-colors font-semibold focus:outline-none">
                {title} <span className="ml-1">&#9662;</span>
            </button>
            {open && (
                <ul className="absolute left-0 w-40 bg-white shadow-lg rounded-md mt-2 py-2">
                    {links.map(link => (
                        <li key={link.name}>
                            <Link
                                href={`${route}${link.hash}`}
                                className="block px-4 py-2 text-sm text-black hover:bg-gray-200">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

// MainContent component to render sections based on hash in URL
export function MainContent() {
    const [section, setSection] = useState("overview");

    useEffect(() => {
        const handleHashChange = () => {
            setSection(window.location.hash.substring(1) || "overview");
        };

        // Listen for hash changes
        window.addEventListener("hashchange", handleHashChange);
        handleHashChange(); // Set initial section on load

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    // Render content based on the current section
    return (
        <div className="mt-16 p-4">
            {section === "overview" && <div>Overview Content</div>}
            {section === "mission" && <div>Vision & Mission Content</div>}
            {section === "founder" && <div>Founder's Message Content</div>}
            {section === "guest-opine" && <div>Guest's Opine Content</div>}
            {section === "programs" && <div>Programs Content</div>}
            {section === "faculty" && <div>Faculty Content</div>}
            {section === "admissions" && <div>Admissions Content</div>}
            {section === "library" && <div>Library Content</div>}
            {section === "labs" && <div>Labs Content</div>}
            {section === "sports" && <div>Sports Content</div>}
            {section === "art" && <div>Art & Culture Content</div>}
            {section === "gallery" && <div>Gallery Content</div>}
            {section === "contact" && <div>Contact Us Content</div>}
        </div>
    );
}

