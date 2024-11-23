'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button-1"
import { Facebook, Twitter } from 'lucide-react'

export function AdmissionPage() {
  return (
      <div className="flex h-96 bg-white my-5">
          {/* Left Section */}
          <div className="w-1/2 p-8 relative">
              <div className="absolute top-8 left-8">
                  <h1 className="text-4xl font-bold text-[#3b4a81]">
                      ULLAS NURSERY
                      <br />
                      SCHOOL
                  </h1>
                  <div className="text-center mr-44 mt-4">
                      <Button className="bg-[#3b4a81] text-white px-6 py-2 rounded-md mb-20">
                          ENROL NOW
                      </Button>
                  </div>
                  <div className="absolute bottom-8 flex space-x-4">
                      <Facebook className="text-[#3b4a81]" />
                      <Twitter className="text-[#3b4a81]" />
                      <span className="text-[#3b4a81]">/ullasnurseryschool</span>
                  </div>
              </div>
              <div className="relative w-[400px] h-[400px] mx-auto mt-20">
                  <Image
                      src="/assets/block.png"
                      alt="School Building"
                      width={400}
                      height={400}
                      className="rounded-full w-80 -mt-20 h-80 ml-40"
                  />
                  <div className="absolute bottom-10 left-0">
                      <Image
                          src="/assets/students.png"
                          alt="Students 1"
                          width={100}
                          height={100}
                          className="rounded-full border-4 border-white w-20 h-20 ml-32 mb-20"
                      />
                  </div>
                  <div className="absolute bottom-0 right-10">
                      <Image
                          src="/assets/students-1.png"
                          alt="Students 2"
                          width={80}
                          height={80}
                          className="rounded-full border-4 border-white w-20 h-20 mr-20 mb-16"
                      />
                  </div>
                  <div className="absolute bottom-0 right-10">
                      <Image
                          src="/assets/students-2.png"
                          alt="Students 2"
                          width={80}
                          height={80}
                          className="rounded-full border-4 border-white w-20 h-20 ml-40 mb-10"
                      />
                  </div>
              </div>
          </div>

          {/* Right Section */}
          <div className="w-1/2 bg-[#1e2756] p-12 text-white">
              <h2 className="text-4xl font-bold mb-4">Apply for Admission</h2>
              <p className="text-[#4caf50] text-xl mb-6">
                  Applications are now open
              </p>
              <p className="mb-8">
                  School is a temple of Unity. Therefore, ullas emphasizes
                  respect for others who belong to different faith, language,
                  colour, region and social segregated section.
              </p>
              <div className="flex space-x-4">
                  <Button className="bg-[#d32f2f] text-white px-6 py-2 rounded-md">
                      APPLY NOW
                  </Button>
                  <Button className="bg-[#d32f2f] text-white px-6 py-2 rounded-md">
                      FIX YOUR APPOINTMENT
                  </Button>
              </div>
          </div>
      </div>
  );
}