// pages/Overview.tsx

import Image from "next/image";

export default function Overview() {
    return (
        <div className="p-6 bg-gray-100">
            <div className="relative h-64 w-full bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: "url('/path-to-banner-image.jpg')" }}>
                <h1 className="text-3xl font-bold">About Us</h1>
                <p className="text-lg">"Vidya Vinayena Shobhate" - Knowledge Shines by Humbleness.</p>
            </div>
            
            <div className="py-10 px-4 sm:px-20 bg-white">
                <h2 className="text-2xl font-semibold">Children of Today are the Citizens of Tomorrow</h2>
                <p className="mt-4 text-gray-700">
                    It is only in a school that a child gets moulded and gets imbibed with all good qualities of sound formative ideals...
                </p>
                {/* Additional content from the screenshot */}
            </div>

            <div className="mt-8">
                <Image
                    src="/path-to-image.jpg"
                    alt="School Activity"
                    width={800}
                    height={450}
                    className="rounded-md shadow-md"
                />
            </div>
        </div>
    );
}
