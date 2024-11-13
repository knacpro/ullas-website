
// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import FooterSection from "@/components/footer/footer";
// import { HeaderSection } from "@/components/header/header";

// export default function Facilities() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const facilitiesData = [
//     {
//       title: "Class Rooms",
//       image: "/assets/class rooms.png",
//       description: "Every child’s face glows due to the well-lit and spacious classroom with enough space for 40 students. It is so spacious, they not only study in the class, and they do many activities. The classrooms allow them to enjoy a healthy camaraderie with each other. Each classroom has a smart class installed in it for audio and visual learning."
//     },
//     {
//       title: "Transportation",
//       image: "/assets/schoolbus.jpg",
//       description: "Whether to the school or back to home, students reach their destination safely. Students are entrusted in the experienced and trained drivers of our school. All the buses are tracked with the aid of ‘LETSTRACK’ tracking device. Our drivers follow cleanliness in speech and habits.",
//       highlightColor: "bg-blue-500 text-white"
//     },
//     {
//       title: "Activity Room",
//       image: "/assets/class activitives.jpg",
//       description: "Quiz, Debates, Yoga, Speeches, Art, Craft, Singing, Yoga, Karate, small meetings etc., are conducted in here."
//     },
//     {
//       title: "Computer Lab",
//       image: "/assets/computer labs.jpg",
//       description: "Sanskaar school provides state-of-the-art computer knowledge with an advanced & fully equipped computer lab."
//     },
//     {
//       title: "Sports",
//       image: "/assets/sports.jpg",
//       description: "Sanskaar believes in overall development of students, and sports is given importance."
//     },
//     {
//       title: "RO Water Plant",
//       image: "/assets/drinking.jpg",
//       description: "For clean and safe drinking water, an RO plant is built especially for the students."
//     },
//   ];

//   return (
//     <>
//       <HeaderSection isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

//       <div className="p-6 bg-gray-100">
//         {/* Hero Section */}
//         <div className="relative h-64 w-full bg-cover bg-center text-white flex items-center justify-center" 
//              style={{ backgroundImage: "url('/assets/Facilities.png')" }}>
//           <div className="absolute inset-0 bg-blue-900 opacity-70"></div> {/* Overlay */}
//           <h1 className="relative text-4xl font-bold">Facilities</h1>
//         </div>

//         {/* Facilities Grid */}
//         <div className="py-10 px-4 sm:px-10 lg:px-20 bg-white">
//           <h2 className="text-md font-semibold text-red-500 text-center">Our Core Facilities</h2>
//           <h3 className="text-2xl md:text-3xl font-bold mt-2 text-center">We Provide Distinctive Learning Facilities</h3>
//           <hr className="border-t-2 border-blue-500 w-16 my-4 mx-auto" />

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
//             {facilitiesData.map((facility, index) => (
//               <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
//                 <Image
//                   src={facility.image}
//                   alt={facility.title}
//                   width={400}
//                   height={300}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6 text-center">
//                   <h4 className="text-xl font-bold mb-2">{facility.title}</h4>
//                   <p className="text-gray-700 text-sm leading-relaxed">
//                     {facility.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <FooterSection />
//     </>
//   );
// }


"use client";

import Image from "next/image";
import { useState } from "react";
import FooterSection from "@/components/footer/footer";
import { HeaderSection } from "@/components/header/header";

export default function Facilities() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const facilitiesData = [
    {
      title: "Class Rooms",
      image: "/assets/class rooms.png",
      description: "Every child’s face glows due to the well-lit and spacious classroom with enough space for 40 students. It is so spacious, they not only study in the class, and they do many activities. The classrooms allow them to enjoy a healthy camaraderie with each other. Each classroom has a smart class installed in it for audio and visual learning."
    },
    {
      title: "Transportation",
      image: "/assets/schoolbus.jpg",
      description: "Whether to the school or back to home, students reach their destination safely. Students are entrusted in the experienced and trained drivers of our school. All the buses are tracked with the aid of ‘LETSTRACK’ tracking device. Our drivers follow cleanliness in speech and habits."
    },
    {
      title: "Activity Room",
      image: "/assets/class activitives.jpg",
      description: "Quiz, Debates, Yoga, Speeches, Art, Craft, Singing, Yoga, Karate, small meetings etc., are conducted in here."
    },
    {
      title: "Computer Lab",
      image: "/assets/computer labs.jpg",
      description: "Sanskaar school provides state-of-the-art computer knowledge with an advanced & fully equipped computer lab."
    },
    {
      title: "Sports",
      image: "/assets/sports.jpg",
      description: "Sanskaar believes in overall development of students, and sports is given importance."
    },
    {
      title: "RO Water Plant",
      image: "/assets/drinking.jpg",
      description: "For clean and safe drinking water, an RO plant is built especially for the students."
    },
  ];

  return (
    <>
      <HeaderSection isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <div className="p-6 bg-gray-100">
        {/* Hero Section */}
        <div className="relative h-64 w-full bg-cover bg-center text-white flex items-center justify-center" 
             style={{ backgroundImage: "url('/assets/Facilities.png')" }}>
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div> {/* Overlay */}
          <h1 className="relative text-3xl sm:text-4xl font-bold text-center px-4">Facilities</h1>
        </div>

        {/* Facilities Grid */}
        <div className="py-10 px-4 sm:px-10 lg:px-20 bg-white">
          <h2 className="text-md font-semibold text-red-500 text-center">Our Core Facilities</h2>
          <h3 className="text-xl md:text-2xl font-bold mt-2 text-center px-4">We Provide Distinctive Learning Facilities</h3>
          <hr className="border-t-2 border-blue-500 w-16 my-4 mx-auto" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {facilitiesData.map((facility, index) => (
              <div 
                key={index} 
                className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={facility.image}
                  alt={facility.title}
                  width={400}
                  height={300}
                  className="w-full h-48 sm:h-64 object-cover"
                />
                <div className="p-4 sm:p-6 text-center">
                  <h4 className="text-lg sm:text-xl font-bold mb-2">{facility.title}</h4>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FooterSection />
    </>
  );
}
