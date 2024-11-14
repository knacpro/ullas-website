'use client'

export function FounderProfile() {
  return (
    <div className="relative w-full max-w-6xl mx-auto p-6 bg-white">
      <div className="flex flex-col md:flex-row gap-8 items-start relative">
        {/* Decorative elements */}
        <div className="absolute left-0 top-0 w-72 h-72 -z-10">
          <div className="absolute left-0 top-0 w-48 h-48 rounded-full border-[16px] border-[#FFE4E4] opacity-40" />
          <div className="absolute right-0 bottom-0 w-32 h-32">
            <div className="absolute right-0 bottom-0 w-full h-full">
              <div className="absolute right-0 bottom-0 w-16 h-16 border-4 border-[#FF9F6B] rounded-full" />
              <div className="absolute left-0 top-0 w-16 h-16 flex items-center">
                <div className="w-full h-2 bg-[#FF9F6B]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 25% 50%)' }} />
              </div>
            </div>
          </div>
          <div className="absolute left-12 top-12 w-full h-full">
            <div className="grid grid-cols-6 gap-2">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-[#E4E8F3]" />
              ))}
            </div>
          </div>
        </div>

        {/* Profile image */}
        <div className="w-full md:w-96 relative z-10">
          <img
            src="/assets/founder.png"
            alt="Founder Chairman"
            className="w-96 rounded-lg shadow-lg h-[450px]"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            Smt. Pushpa Huli Founder-Chairman
          </h1>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed">
              Ullas is headed by the dynamic and visionary Founder-Mentor, Shri.Mahendra H. Singhi. He is associated with several institutions and Trusts, prominent among them is the Most Holy Advaith Mutt Shri. Siddharoodh Swami Mutt Trust Committee, of which he served 3 terms as the Chairman. Since 1997, Shri. Mahendra H. Singhi has engaged in social work through Mahaveer Limb Center (MLC), Hubli which is awarded the most prestigious Karnataka Rajyothsava – a State Award, for the outstanding service for the physically challenged.
            </p>
            <p className="text-gray-600 leading-relaxed">
              He is currently a member of the Zonal Railway Users' Consultative Committee (ZRUCC), South Western Railway, and has been for several years. He is also a member of the management or committee of several educational institutions in the city. ullas School is his dream project and a means of giving back to the society. He is supported by the Management and Betterment Committees, comprising of dedicated social workers and people from various professions, in the strengthening his hands in shaping ullas into an institution, which will fulfill the dream, "Grooming Tomorrow's Global Citizens".
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}