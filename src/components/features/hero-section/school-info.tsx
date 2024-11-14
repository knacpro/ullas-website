'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card-1"
import { Flower, HandshakeIcon as HandsClapping, Users } from 'lucide-react'

export function SchoolInfo() {
  return (
    <div className="container p-6 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Who We Are */}
        <Card className="relative border-dashed">
          <CardHeader>
            <div className="mx-auto mb-4">
              <HandsClapping className="w-12 h-12 text-gray-600" />
            </div>
            <CardTitle className="text-center text-xl">Who We Are</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">
              Ullas Nursery School, is a Kinder garden school, situated at Byahtti, Off Kusugal Road, Just 16 kilometres from Hubballi.
            </p>
          </CardContent>
        </Card>

        {/* Our Motto */}
        <Card className="relative border-dashed">
          <CardHeader>
            <div className="mx-auto mb-4">
              <div className="text-2xl font-bold text-center">
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  children matter!
                </span>
              </div>
            </div>
            <CardTitle className="text-center text-xl">Our Motto</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold">&quot;Vidya Vinayena Shobhate&quot;</span> We believe that our children should be moulded by this motto. We hope they will lead a balanced and humble life of honour under all circumstances.
            </p>
          </CardContent>
        </Card>

        {/* School Crest */}
        <Card className="relative border-dashed">
          <CardHeader>
            <div className="mx-auto mb-4">
              <Flower className="w-12 h-12 text-pink-400" />
            </div>
            <CardTitle className="text-center text-xl">School Crest</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">
              The school crest has a bud, indicating the birth of a new life ready to blossom into a mature flower emitting fragrance. Our vision is <span className="font-semibold">&quot;Grooming tomorrow&apos;s global citizen&quot;</span>
            </p>
          </CardContent>
        </Card>

        {/* The Essence */}
        <Card className="relative border-dashed">
          <CardHeader>
            <div className="mx-auto mb-4">
              <Users className="w-12 h-12 text-primary" />
            </div>
            <CardTitle className="text-center text-xl">The Essence</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">
              School is a temple of Unity. Therefore, Ullas emphasizes respect for others who belong to different faith, language, colour, region and social segregated section.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}