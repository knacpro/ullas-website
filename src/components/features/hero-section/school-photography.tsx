'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button-1'
import Link from 'next/link'

const images = [
  '/assets/students-1.png',
  '/assets/students.png',
]

export function SchoolPhotography() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
      <div className="h-[650px] bg-pink-50 flex flex-col p-4 pl-20 mb-6">
          <h1 className="text-3xl font-bold mb-4">Ullas School Photography</h1>
          <div className="w-full max-w-md relative">
              <div className="border-b-2 border-red-500 w-16 mx-auto mb-8"></div>
              <div className="relative aspect-[5/3] mb-4 h-96">
                  <Image
                      src={images[currentImageIndex]}
                      alt={`School photograph ${currentImageIndex + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                  />
              </div>
              <div className="flex justify-center space-x-4 mb-4 ml-20">
                  <Button
                      variant="ghost"
                      size="icon"
                      onClick={prevImage}
                      className="p-0 hover:bg-transparent">
                      <ChevronLeft className="h-10 w-10 text-gray-500" />
                  </Button>
                  <Button
                      variant="ghost"
                      size="icon"
                      onClick={nextImage}
                      className="p-0 hover:bg-transparent">
                      <ChevronRight className="h-10 w-10 text-gray-500" />
                  </Button>
              </div>
              <div className="h-10 w-40 bg-red-500 hover:bg-red-600 text-center pt-2 rounded-lg font-semibold">
                  <Link href={"/gallery"} className="text-white">
                      VIEW MORE
                  </Link>
              </div>
          </div>
      </div>
  );
}