"use client"

import React, { useState } from "react";
import FooterSection from "@/components/footer/footer";
import { HeaderSection } from "@/components/header/header";

export default function Admissions() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    }); // State to store form data
    const [isFormSubmitted, setIsFormSubmitted] = useState(false); // State to check form submission status

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleChange = (e :any ) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e :any) => {
        e.preventDefault();
        // For demonstration purposes, we'll just log the form data
        console.log("Form Submitted:", formData);
        
        // After form submission, reset the form and close the modal
        setFormData({
            name: "",
            email: "",
            phone: "",
        });
        setIsFormSubmitted(true);
        
        // Optionally, you can hide the modal after submission
        setIsModalOpen(false);

        // You can replace the following line with an actual form submission to a backend
        // alert("Your appointment has been scheduled!");
    };

    return (
        <>
            {/* Header Section */}
            <HeaderSection isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

            {/* Main Content Section */}
            <div className="p-4 md:p-8 bg-gray-100 pt-24 md:pt-32 lg:pt-40">
                {/* Banner Section */}
                <div className="relative mb-6">
                    <div
                        className="h-32 md:h-48 lg:h-64 bg-cover bg-center flex items-center justify-center"
                        style={{
                            backgroundImage: "url('bg-image-path.jpg')", // replace with your image path
                        }}
                    >
                        <div className="absolute inset-0 bg-blue-900 opacity-60"></div> {/* Overlay */}
                        <h1 className="relative text-3xl md:text-4xl lg:text-5xl font-bold text-white z-10">Admissions</h1>
                    </div>
                </div>

                {/* Admissions Content Section */}
                <div className="p-4 md:p-6 bg-gray-100 text-gray-900">
                    <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">Admissions</h1>
                    <hr className="border-gray-400 mb-6" />
                    
                    <p className="text-md md:text-lg font-semibold text-green-600 mb-4">
                        Admission Procedure & Rules – Pre-school
                    </p>
                    
                    <p className="text-sm md:text-base mb-4">
                        An institute dedicated to the society, Ullas CBSE offers parents of all religious, ethnic, and social backgrounds, admission to their children at Ullas English Medium School. Ullas English Medium School upholds democratic and secular values in all its dealings.
                    </p>
                    
                    <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">Schedule of the School</h2>
                    
                    <table className="w-full border border-gray-300 mb-4 text-sm md:text-base">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-2 md:px-4 py-2 text-center">Class</th>
                                <th className="border border-gray-300 px-2 md:px-4 py-2 text-center">
                                    Age By 1<sup>st</sup> June
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center">
                                <td className="border border-gray-300 px-2 md:px-4 py-2">NURSERY</td>
                                <td className="border border-gray-300 px-2 md:px-4 py-2">3</td>
                            </tr>
                            <tr className="text-center">
                                <td className="border border-gray-300 px-2 md:px-4 py-2">LKG</td>
                                <td className="border border-gray-300 px-2 md:px-4 py-2">4</td>
                            </tr>
                            <tr className="text-center">
                                <td className="border border-gray-300 px-2 md:px-4 py-2">UKG</td>
                                <td className="border border-gray-300 px-2 md:px-4 py-2">5</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <p className="text-sm md:text-base mb-4">
                        A written assessment is conducted to ascertain the basic level of understanding of the student. Admission is given wherever there are vacancies. The decision of the school authorities shall be final.
                    </p>
                    
                    <p className="text-sm md:text-base mb-4">
                        In both the semesters, examinations are conducted and grades are given according to the guidelines of the CBSE, New Delhi. The students are promoted to the successive class when they obtain passing grades. Those who do not achieve the passing grades in any particular subject would have to appear for a re-exam/re-test.
                    </p>
                </div>
            </div>

            {/* Schedule Appointment Section */}
            <div className="bg-blue-900 text-white py-12 px-4 md:px-8 lg:px-16">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule your Appointment</h2>
                    <p className="text-lg md:text-xl mb-6">
                        You can fix your appointment to visit Ullas School by filling the following form. Once you have filled the form, our admission department will reach out to you with the scheduled date and time.
                    </p>
                    <button 
                        onClick={toggleModal} // Toggle modal visibility on button click
                        className="bg-white text-blue-900 font-semibold py-2 px-4 rounded-md shadow hover:bg-gray-200 transition duration-200">
                        Fix Your Visit!
                    </button>
                </div>
            </div>

            {/* Parent’s Testimonials Section */}
            <div className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Parent’s Testimonials</h2>
                    <p className="text-red-500 font-semibold text-lg">Feedbacks</p>
                    <hr className="border-blue-400 w-24 mx-auto mt-2 mb-6" />
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                    {/* Left Arrow */}
                    <button className="text-blue-900 hover:text-blue-600 transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Testimonials Card */}
                    <div className="flex space-x-4 overflow-hidden max-w-3xl">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
                            <p className="text-gray-700 mb-4">
                                My child is happy to attend the school daily. He is learning and showing signs of improvement after joining Ullas. He is more confident now. His capability of understanding and thinking has improved. My son always knows his answers. This proves that the explanation given by the teachers is extremely good.
                            </p>
                            <p className="font-bold text-gray-800">Parents,</p>
                            <p className="text-sm text-gray-500">HAMDAN SYED – III A</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
                            <p className="text-gray-700 mb-4">
                                Our child would love to attend school because in this school, every child is encouraged, given equal opportunity to participate in activities. She does her homework without taking parents' support much. She won’t spend time watching TV and mobile. School is good for its curriculum, co-curricular activities, student-teacher ratio, and teaching and learning styles.
                            </p>
                            <p className="font-bold text-gray-800">Parents,</p>
                            <p className="text-sm text-gray-500">Anonymous</p>
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button className="text-blue-900 hover:text-blue-600 transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Modal for Fix Your Visit Form */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h3 className="text-xl font-semibold mb-4">Fix Your Appointment</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    required
                                />
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="submit"
                                    className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                                >
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    onClick={toggleModal}
                                    className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-500 transition duration-200"
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Footer Section */}
            <FooterSection />
        </>
    );
}
