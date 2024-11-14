'use client'

import Image from 'next/image'

export function GlimpsesOfProminence() {
  return (
      <div className="max-w-7xl mx-auto p-4">
          <div className="text-center mb-6">
              <p className="text-red-600 text-sm">Prominence</p>
              <h1 className="text-3xl font-bold mt-2">
                  Glimpses Of Our Prominence
              </h1>
              <div className="w-48 h-0.5 bg-blue-600 mx-auto mt-2"></div>
          </div>

          <p className="text-center text-sm mb-6">
              The school crest has a bud, indicating the birth of a new life
              ready to blossom into a mature flower emitting fragrance. Our
              vision is "Grooming tomorrow's global citizen"
          </p>

          <div className="grid grid-cols-3 gap-4">
              {[
                  {
                      src: "/assets/abdul-kalam.png",
                      title: "Late Dr. APJ Abdul Kalam",
                      description: "Indian Scientist and President"
                  },
                  {
                      src: "/assets/visvesvaraiah.png",
                      title: "Late Shri Pejawar Swamiji",
                      description: "Swamiji of Shri Pejawar Math, Udupi"
                  },
                  {
                      src: "/assets/virendre-hegde.png",
                      title: "Dr. D. Veerendra Heggadeji",
                      description: "Dharmadhikari, Dharmasthala."
                  },
                  {
                      src: "/assets/students-8.png",
                      title: "Shri Ajaykumar Sharma",
                      description:
                          "General Manager, South Western Railway, Hubli"
                  },
                  {
                      src: "/assets/girls.png",
                      title: "General Champions",
                      description:
                          "Sanskaar won 3 General Champions in an academic year"
                  },
                  {
                      src: "/assets/students-3.png",
                      title: "General Champions",
                      description:
                          "Sanskaar won 3 General Champions in an academic year"
                  },
                  {
                      src: "/assets/students-4.png",
                      title: "Swachh Vidyalaya Award",
                      description:
                          "Sanskaar won District and State Swachh Vidyalaya Award"
                  },
                  {
                      src: "/assets/students-7.png",
                      title: "Annual Gathering",
                      description:
                          "Sanskaar Sandhya – Annual Gathering Special Welcome"
                  },
                  {
                      src: "/assets/students-6.png",
                      title: "Graduation Day",
                      description: "UKG Graduation Day"
                  }
              ].map((item, index) => (
                  <div key={index} className="text-center hover:bg-green-400">
                      <Image
                          src={item.src}
                          alt={item.title}
                          width={300}
                          height={200}
                          className="w-full h-72 object-cover mb-2"
                      />
                      <div className="p-4">
                          <h3 className="font-bold text-sm">{item.title}</h3>
                          <p className="text-xs">{item.description}</p>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
}