'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card-2"

export function CurriculumOverview() {
  return (
    <Card className="w-full mx-auto bg-[#7dd3d1] mb-6 h-[500px]">
      <CardHeader className="pb-2">
        <CardTitle className="text-center">
          <div className="text-red-500 text-lg font-normal mb-2">Overview</div>
          <div className="text-gray-800 text-3xl font-bold">Ullas School Curriculum Programs</div>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#1e4d5e] p-10 rounded-lg">
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="World Environment Day (HEAL THE EARTH)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Ullas School - Hubballi - Aerial View"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Stu. Itishree's Mohanpuria's 1st Prize"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </CardContent>
    </Card>
  )
}