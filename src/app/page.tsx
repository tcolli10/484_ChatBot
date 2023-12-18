'use client';
import ChatButton from "@/components/ui/ChatButton";
import Image from "../../node_modules/next/image";
import websiteImage from "../../public/CSC_484_ss_chatbot.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-0">
      <div className="w-full h-24 bg-cp-dark-green">
      </div>
      <div className="w-full bg-darker-gray-header border flex justify-between m-y-auto py-2 px-4 font-sans p-2">
          <p className="text-black font-light text-xl">Computer Science &amp; <br />Software Engineering</p>
          <div className="flex flex-col justify-center gap-2 font-bold">
            <div className="flex flex-row gap-4 text-cp-dark-green text-xs">
              <span>COVID-19 FAQ</span>
              <span className="text-cp-dark-gold">HOME</span>
              <span>ABOUT US</span>
              <span>PROGRAMS</span>
              <span>GRADUATE PROGRAMS</span>
              <span>STUDENTS</span>
            </div>
            <div className="flex flex-row gap-4 text-cp-dark-green text-xs justify-end">
              <span>FACULTY &amp; STAFF</span>
              <span>LINKS AND FORMS</span>
              <span>GIVING</span>
            </div>
          </div>
      </div>

      <div className="flex items-center justify-center flex-grow">
        {/* Centered image */}
        <Image src={websiteImage} alt="Logo" width={1000} height={1000} />
      </div>

      <div>
        <ChatButton />
      </div>
    </main>
  )
}
