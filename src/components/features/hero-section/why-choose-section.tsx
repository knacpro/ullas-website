'use client'

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card-2"

export function WhyChooseSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Why Choose ULLAS School?
          <div className="h-1 w-48 bg-sky-400 mx-auto mt-2"></div>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We at ullas, strive to provide an environment conducive for healthy
            communication and for a purposeful learning. The focus is laid on inculcating
            values for a qualitative life and to promote brotherhood among students of various
            religious and linguistic backgrounds, for a unique and cohesive society.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Understanding that a school has the responsibility to mould the minds and groom
            the hearts of the young citizens for a better tomorrow, ullas prepares every
            student to be metamorphosed into a complete, competent, well-groomed, well-developed
            individual, with intelligence, human values and capabilities, as if
            acquired from the second &apos;womb&apos; i.e., which we fondly call ullas.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card className="text-center p-6">
          <CardContent>
            <h3 className="text-xl font-bold mb-2">10 +</h3>
            <p className="text-gray-600 italic">Years of Education</p>
          </CardContent>
        </Card>
        <Card className="text-center p-6">
          <CardContent>
            <h3 className="text-xl font-bold mb-2">10 +</h3>
            <p className="text-gray-600 italic">Completed 10<sup>th</sup> Batches</p>
          </CardContent>
        </Card>
        <Card className="text-center p-6">
          <CardContent>
            <h3 className="text-xl font-bold mb-2">5 ★</h3>
            <p className="text-gray-600 italic">Happy Ratings</p>
          </CardContent>
        </Card>
      </div>

      <div className="relative rounded-lg overflow-hidden">
        <Image
          src="/assets/school.png"
          alt="ullas School Building"
          width={1200}
          height={600}
          className="object-cover w-[1300px] h-[600px]"
        />
        <div className="absolute top-0 right-0 bg-white/40 p-6 rounded-tl-lg backdrop-blur-sm shadow-lg">
          <h3 className="text-lg font-bold uppercase mb-2">ullas School Tour</h3>
          <p className="text-xl font-semibold">
            Welcome To The World Of Distinctive Learning....
          </p>
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-gray-600">🏆 10+ Years of Experience.</p>
      </div>
    </section>
  )
}