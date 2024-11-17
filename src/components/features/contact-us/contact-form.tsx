// 'use client'

// import { Facebook, Instagram, Youtube, MapPin, Mail, Phone } from 'lucide-react'

// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { useState } from 'react'

// const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

// export function ContactForm() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid gap-8 lg:grid-cols-2">
//         <div>
//           <h1 className="text-2xl font-bold mb-8">
//             Fill the below form to get in touch with us.
//             <div className="h-0.5 w-48 bg-primary mt-1" />
//           </h1>
//           <form className="space-y-6">
//             <div>
//               <Input placeholder="Fullname" />
//             </div>
//             <div>
//               <Input type="email" placeholder="Email Address" />
//             </div>
//             <div>
//               <Input type="tel" placeholder="Phone Number" />
//             </div>
//             <div>
//               <Textarea placeholder="Message" className="min-h-[120px]" />
//             </div>
//             <Button className="w-full bg-[#5DD1D7] hover:bg-[#4bc0c6]">SUBMIT</Button>
//           </form>
//         </div>
//         <Card className="p-6 bg-[#F8FAFC]">
//           <div className="space-y-6">
//             <div className="space-y-2">
//               <div className="flex items-center gap-2 font-semibold">
//                 <MapPin className="h-5 w-5 text-[#5DD1D7]" />
//                 Address:
//               </div>
//               <div>
//                 <h3 className="font-bold">SANSKAAR CBSE English Medium School</h3>
//                 <p>Sanskaar Nagar, Keshwapur, Kusugal Road, Hubli – 23</p>
//               </div>
//             </div>
//             <div className="space-y-2">
//               <div className="flex items-center gap-2 font-semibold">
//                 <Mail className="h-5 w-5 text-[#5DD1D7]" />
//                 Email:
//               </div>
//               <div className="space-y-1">
//                 <p>admin@sanskaarhubli.edu.in</p>
//                 <p>office@sanskaarhubli.edu.in</p>
//               </div>
//             </div>
//             <div className="space-y-2">
//               <div className="flex items-center gap-2 font-semibold">
//                 <Mail className="h-5 w-5 text-[#5DD1D7]" />
//                 For any grievances/complaints, reach us at:
//               </div>
//               <p>grievance@sanskaarhubli.edu.in</p>
//             </div>
//             <div className="space-y-2">
//               <div className="flex items-center gap-2 font-semibold">
//                 <Phone className="h-5 w-5 text-[#5DD1D7]" />
//                 Phone:
//               </div>
//               <p>(+91) 9481011791 | 0836 2216722</p>
//             </div>
//             <div className="flex gap-4 pt-4">
//               <a href="#" className="text-[#5DD1D7] hover:text-[#4bc0c6]">
//                 <Facebook className="h-6 w-6" />
//               </a>
//               <a href="#" className="text-[#5DD1D7] hover:text-[#4bc0c6]">
//                 <Instagram className="h-6 w-6" />
//               </a>
//               <a href="#" className="text-[#5DD1D7] hover:text-[#4bc0c6]">
//                 <Youtube className="h-6 w-6" />
//               </a>
//             </div>
//           </div>
//         </Card>
//       </div>
//     </div>
//   )
// }

'use client';

import { Facebook, Instagram, Youtube, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from 'react';

interface ContactFormProps {
  isMenuOpen?: boolean; // Optional prop to prevent errors
}

export function ContactForm({ isMenuOpen }: ContactFormProps) {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("Your name");
  const [email, setEmail] = useState("Your email");
  const [message, setMessage] = useState("Message");
  const resultRef = useRef<HTMLDivElement>(null);

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("access_key", "23edcf39-1e81-4564-bef2-2de46cae2c29");

    const formObject = Object.fromEntries(formData);
    const json = JSON.stringify(formObject);

    if (resultRef.current) resultRef.current.innerHTML = "Please wait...";

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (response.ok) {
            resultRef.current!.innerHTML = result.message;
        } else {
            console.error(result);
            resultRef.current!.innerHTML =
                result.message || "Error occurred";
        }
    } catch (error) {
        console.error(error);
        resultRef.current!.innerHTML = "Something went wrong!";
    } finally {
        (e.target as HTMLFormElement).reset();
        setTimeout(() => {
            if (resultRef.current) resultRef.current.style.display = "none";
        }, 3000);
    }
};



  return (
    <div className="container mx-auto px-4 py-8 pt-40">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h1 className="text-2xl font-bold mb-8 text-black">
            Fill the below form to get in touch with us.
            <div className="h-0.5 w-48 bg-primary mt-1" />
          </h1>
          <form className="space-y-6 text-black">
            <form
                        method="POST"
                        id="form"
                        onSubmit={handleSubmit}
                        className="w-full max-w-4xl space-y-6">
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Full Name"
                                className="w-full sm:w-[50%] bg-white text-black placeholder-gray-900 py-3 px-4 rounded"
                                required
                            />
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                placeholder="Your Email"
                                className="w-full sm:w-[50%] bg-white text-black py-3 px-4 rounded placeholder-gray-900"
                                required
                            />
                        </div>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            className="w-full bg-white py-3 px-4 rounded mb-6 h-40 text-black placeholder-gray-900"
                            required></textarea>
                        <div className="justify-center sm:justify-end">
                            <button
                                type="submit"
                                className="bg-[#4A7AFF] text-white py-2 px-8 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors mb-2 ml-4">
                                Submit
                            </button>
                            <div
                                id="result"
                                ref={resultRef}
                                className="dark:text-white ml-4"></div>
                        </div>
                    </form>
          </form>
        </div>
        <Card className="p-6 bg-[#F8FAFC]">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-semibold">
                <MapPin className="h-5 w-5 text-[#5DD1D7]" />
                Address:
              </div>
              <div>
                <h3 className="font-bold">ULLAS Nursery School</h3>
                <p>2nd Bus Stop , Byahatti – 580023</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-semibold">
                <Mail className="h-5 w-5 text-[#5DD1D7]" />
                Email:
              </div>
              <div className="space-y-1">
                <p>admin@ullasnursery.edu.in</p>
                <p>office@ullasnursery.edu.in</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-semibold">
                <Mail className="h-5 w-5 text-[#5DD1D7]" />
                For any grievances/complaints, reach us at:
              </div>
              <p>grievance@ullasnursery.edu.in</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-semibold">
                <Phone className="h-5 w-5 text-[#5DD1D7]" />
                Phone:
              </div>
              <p>(+91) 9900741240 | 0836 2216722</p>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-[#5DD1D7] hover:text-[#4bc0c6]">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#5DD1D7] hover:text-[#4bc0c6]">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#5DD1D7] hover:text-[#4bc0c6]">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
