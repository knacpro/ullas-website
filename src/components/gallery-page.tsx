'use client'

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card4"

export function GalleryPage() {
  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "School entrance with students and parents"
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Students with Mickey Mouse character"
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Students displaying artwork"
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Bal Sanskaar entrance with balloon decoration"
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Mickey Mouse with students in garden"
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Close up of Mickey Mouse with students"
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Group photo of students and staff"
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Mickey Mouse interacting with students"
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Birthday themed wall art"
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Reading themed wall art"
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Tree themed wall art"
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Playground themed wall art"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <div className="absolute inset-0 bg-[#E6E6FA] h-48">
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
              <path
                fill="white"
                d="M0,96L80,106.7C160,117,320,139,480,144C640,149,800,139,960,122.7C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              />
            </svg>
          </div>
        </div>
        <div className="relative pt-8 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-center text-4xl font-serif italic mb-16 pt-4">
            Our Infrastructure & Gallery
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-12">
            {galleryImages.map((image, index) => (
              <Card key={index} className="overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}