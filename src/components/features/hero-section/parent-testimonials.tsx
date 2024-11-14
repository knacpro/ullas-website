"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card-3";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        content:
            "Our child would love to attend school because in this school, every child is encouraged, given equal opportunity to participate in activities. She does her homework without taking parents support much. She won't spend time watching TV and mobile. She used to check her uniform daily. School is good for its curriculum, co-curricular activities, students-teacher ratio and teaching and learning styles.",
        author: "SPOORTI SAJJAN – VI A",
        avatar: "/assets/logo.png"
    },
    {
        content:
            "Ayesha is happy with the school. She loves the library, the teaching staff, especially the class teacher, who is the most supportive. She was always a good learning, however the teaching pattern, extra-curricular activities are giving her a better exposure. She is improving with every passing day. The focus on etiquettes and good habits at the school is very fruitful. I can see Ayesha learning to share, being good to others; all these reflect the classroom rules taught by the class teacher.",
        author: "AYESHA KHATIB – VI A",
        avatar: "/assets/logo.png"
    },
    {
        content:
            "Our child would love to attend school because in this school, every child is encouraged, given equal opportunity to participate in activities. She does her homework without taking parents support much. She won't spend time watching TV and mobile. She used to check her uniform daily. School is good for its curriculum, co-curricular activities, students-teacher ratio and teaching and learning styles.",
        author: "SPOORTI SAJJAN – VI A",
        avatar: "/assets/logo.png"
    },
    {
        content:
            "Our child would love to attend school because in this school, every child is encouraged, given equal opportunity to participate in activities. She does her homework without taking parents support much. She won't spend time watching TV and mobile. She used to check her uniform daily. School is good for its curriculum, co-curricular activities, students-teacher ratio and teaching and learning styles.",
        author: "SPOORTI SAJJAN – VI A",
        avatar: "/assets/logo.png"
    },
    {
        content:
            "Our child would love to attend school because in this school, every child is encouraged, given equal opportunity to participate in activities. She does her homework without taking parents support much. She won't spend time watching TV and mobile. She used to check her uniform daily. School is good for its curriculum, co-curricular activities, students-teacher ratio and teaching and learning styles.",
        author: "SPOORTI SAJJAN – VI A",
        avatar: "/assets/logo.png"
    }
];

export function ParentTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex(
            prevIndex =>
                (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <div className="w-[1200px] mx-auto px-4 py-12">
            <div className="text-center mb-8">
                <p className="text-red-500 font-semibold">Feedbacks</p>
                <h2 className="text-3xl font-bold mt-2">
                    Parent's Testimonials
                </h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto mt-2"></div>
            </div>

            <div className="flex items-center justify-between mb-8">
                <div className="w-1/3">
                    <Image
                        src={'/assets/parent-testimonials.png'}
                        alt={'parent testimonials'}
                        width={300}
                        height={200}
                        className="w-96 h-72 object-cover mb-2"
                    />
                </div>
                <Card className="w-2/3 ml-8 h-60 flex-shrink-0 overflow-hidden">
                    <CardContent className="p-6 h-full flex flex-col justify-between">
                        <p className="text-gray-700 mb-4 overflow-y-auto max-h-36">
                            {testimonials[currentIndex].content}
                        </p>
                        <div className="flex items-center mt-4">
                            <Avatar className="h-10 w-10 mr-4">
                                <AvatarImage
                                    src={testimonials[currentIndex].avatar}
                                    alt="Avatar"
                                />
                                <AvatarFallback>PA</AvatarFallback>
                            </Avatar>
                            <p className="font-semibold">
                                {testimonials[currentIndex].author}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex justify-center space-x-4">
                <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
