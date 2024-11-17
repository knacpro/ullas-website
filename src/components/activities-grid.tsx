'use client'

import { Card, CardContent } from "@/components/ui/card4"
import { GraduationCap, Users, BookOpen, School, Trophy, PartyPopper, Building } from 'lucide-react'

export function ActivitiesGridComponent() {
  const activities = [
    {
      icon: GraduationCap,
      title: "Graduation day",
      description: "Graduation day for UKG – Swaagat Divas"
    },
    {
      icon: Users,
      title: "Assembly",
      description: "Separate Assembly for Bal Sanskaar"
    },
    {
      icon: BookOpen,
      title: "Quiz",
      description: "Spellings and Quizzes during the Assembly"
    },
    {
      icon: School,
      title: "Four Houses",
      description: "Entire section is divided into four Houses: Ashoka, Bendre, Raman, Tagore"
    },
    {
      icon: Trophy,
      title: "Competitions",
      description: "Story Telling, Rhyme Recitation, Fancy Dress, Sketching, Drawing, Colouring, Thumb-Art, Cutting—n-sticking, Weekly Worksheet and many more."
    },
    {
      icon: PartyPopper,
      title: "Festivals",
      description: "All festivals like Holi, Raksha Bandhan, Diwali, Eid and Christmas are celebrated with full vigor and vivacity."
    },
    {
      icon: Building,
      title: "Visits",
      description: "Visits to Airport, Railway Station, Post Office, Animal Farm & Park, Arrangements are made for community helpers like Doctors, Carpenters to interact with the little children in the school."
    }
  ]

  return (
    <div className="min-h-screen bg-purple-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif italic text-center mb-12">
          KG Section - Bal Sanskaar Special Days/Activities
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <Card key={index} className={index === activities.length - 1 ? "md:col-span-2" : ""}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <activity.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h2 className="text-xl font-serif italic mb-2">{activity.title}</h2>
                <p className="text-sm text-gray-600">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}