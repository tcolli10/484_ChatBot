import {useChat} from "ai/react"
import {cn} from "@/lib/utils"
import { X, SendHorizonal, Maximize2, Minimize2 } from "lucide-react";
import { Input } from "./input";
import Image from "next/image";
import { useState } from "react";
import { ChatBubble } from "./ChatBubble";


interface ChatbotBoxProps{
    open: boolean;
    onClose:() => void;
}

const internshipUserQuestion = 'How do I get internship credit?'
const officeHoursQuestion = 'How do I find a professor\'s office hours?'
const permissionNumberQuestion = 'How do I get a permission number?'




export default function ChatbotBox({open, onClose}: ChatbotBoxProps){
    const {
        input, 
        handleInputChange,
        handleSubmit,
        setMessages
    } = useChat();

    const [atStart, setAtStart] = useState(true);
    const [showIntershipQuestions, setShowInternshipQuestions] = useState(false);
    const [showOfficeHoursQuestions, setShowOfficeHoursQuestions] = useState(false);
    const [showPermissionNumberQuestions, setShowPermissionNUmberQuestions] = useState(false);


    const maximizeWindow = () => {
        window.resizeTo(screen.width, screen.height);
      };
    
    const minimizeWindow = () => {
        window.resizeTo(400, 608);
    };

    const onClosePanel = (onClose: () => void): void => {
        setAtStart(true)
        setShowInternshipQuestions(false)
        setShowOfficeHoursQuestions(false)
        setShowPermissionNUmberQuestions(false)
        onClose()
    }

    // handles + navigates to corresponding chatbot flow
    const handleButtonClick = (buttonText: string, setMessages: any) => {
        console.log(`button clicked, buttonText: ${buttonText} setMessages: ${setMessages}`)
        setAtStart(false)
        switch (buttonText) {
            case "Option 1":
                setShowInternshipQuestions(true)
                setMessages([
                    {
                    text:
                        "With the 2022-2025 catalog, CSC 493 has been modified to allow degree credit.",
                    fromUser: false,
                    },
                    {
                    text:
                        "The degree programs (CSC and SE) are updated to include this course in the technical elective listings.",
                    fromUser: false,
                    },
                ]);
                break;
            case "Option 2":
                setShowOfficeHoursQuestions(true)
                break;
            case "Option 3":
                setShowPermissionNUmberQuestions(true)
                break;
            default:
                break;
        }
    };

    return <div className={cn(
        "bottom-0 right-0 z-10 w-[25%] max-w-[50%] p-1", 
        open ? "fixed" : "hidden"
    )}>
        <div className="flex h-[600px] flex-col rounded bg-background border shadow-xl justify-between">
            <div className="flex justify-between m-3">
                <button onClick={maximizeWindow}>
                    <Maximize2 size={30} />
                </button>
                {/* <button onClick={minimizeWindow}>
                    <Minimize2 size={30} />
                </button> */}
                <button onClick={() => onClosePanel(onClose)} className="mb-1 ms-auto block left-0 top-0">
                    <X size={30} />
                </button>
            </div> 
            {atStart && 
                <>
                    <div className="h-full flex flex-col justify-center items-center">
                        <Image
                            src="/logo.png"
                            alt="Image of the chatbot logo"
                            className="mb-2" 
                            width={100}
                            height={100}
                        />
                        <div>Hello there!</div>
                        <div>How can I help?</div>
                    </div>
                    <div className="flex gap-2 p-2">
                        <button 
                        onClick={() => handleButtonClick("Option 1", setMessages)}
                        className="border border-black bg-gray-300 px-4 py-2 rounded-lg text-sm"
                        >
                            How do I get internship credit?
                        </button>
                        <button 
                        onClick={() => handleButtonClick("Option 2", setMessages)}
                        className="border border-black bg-gray-300 px-4 py-2 rounded-lg text-sm"
                        >
                            How do I find a professor&apos;s office hours?
                        </button>
                        <button
                        onClick={() => handleButtonClick("Option 3", setMessages)}
                        className="border border-black bg-gray-300 px-4 py-2 rounded-lg text-sm"
                        >
                            How do I get a permission number?
                        </button>
                    </div>
                </>
            }
            {showIntershipQuestions &&
                <div className='h-3/4 flex flex-col-reverse'>
                    <div className="flex justify-end mr-2">
                        <ChatBubble message={internshipUserQuestion} />
                    </div>
                </div>
            }
            {showOfficeHoursQuestions &&
                <div className='h-3/4 flex flex-col-reverse'>
                    <div className="flex justify-end mr-2">
                        <ChatBubble message={officeHoursQuestion} />
                    </div>
                </div>
            }
            {showPermissionNumberQuestions &&
                <div className='h-3/4 flex flex-col-reverse'>
                    <div className="flex justify-end mr-2">
                        <ChatBubble message={permissionNumberQuestion} />
                    </div>
                </div>
            }

            
            <form onSubmit={handleSubmit} className="m-3 flex gap-1">
                <Input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type something..."
                />
                <button type="submit" >
                    <SendHorizonal size={30}/>
                </button>
            </form>
        </div>
    </div>
}