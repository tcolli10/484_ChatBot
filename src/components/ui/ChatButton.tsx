"use client";
import Image from "next/image";
import ChatbotBox from "./ChatbotBox";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import backgroundImage from "../../assets/logo.png";


export default function ChatButton(){
    const [ChatbotBoxOpen, setChatbotBoxOpen] = useState(false);

    return (
        <>
          <Button
            variant="default"
            onClick={() => setChatbotBoxOpen(true)}
          >
            {/* use logo image as the background */}
            <Image
              src={backgroundImage}
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </Button>
          <ChatbotBox open={ChatbotBoxOpen} onClose={() => setChatbotBoxOpen(false)} />
        </>
      );
}
