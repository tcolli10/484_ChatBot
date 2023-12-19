import {useChat} from "ai/react"
import {cn} from "@/lib/utils"
import { X, SendHorizonal } from "lucide-react";
import { Input } from "./input";


interface ChatbotBoxProps{
    open: boolean;
    onClose:() => void;
}

// handles + navigates to corresponding chatbot flow
const handleButtonClick = (buttonText: string, setMessages: any) => {
    switch (buttonText) {
        case "Option 1":
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
            break;
        case "Option 3":
            break;
        default:
            break;
    }
};

export default function ChatbotBox({open, onClose}: ChatbotBoxProps){
    const {
        input, 
        handleInputChange,
        handleSubmit,
        setMessages
    } = useChat();

    return <div className={cn(
        "bottom-0 right-0 z-10 w-[25%] max-w-[50%] p-1", 
        open ? "fixed" : "hidden"
    )}>
        <button onClick={onClose} className="mb-1 ms-auto block left-0 top-0">
            <X size={30} />
        </button>
        <div className="flex h-[600px] flex-col rounded bg-background border shadow-xl">
            <div className="h-full flex flex-col justify-center items-center">
                <img
                    src="logo.png"
                    alt="Image of the chatbot logo"
                    className="mb-2" 
                />
                <div>Hello there!</div>
                <div>How can I help?</div>
            </div>
            <div className="flex gap-2 p-2">
                <button 
                onClick={() => handleButtonClick("Option 1", setMessages)}
                className="border border-black bg-gray-300 px-4 py-2 rounded-lg"
                >
                    How do I get internship credit?
                </button>
                <button 
                onClick={() => handleButtonClick("Option 2", setMessages)}
                className="border border-black bg-gray-300 px-4 py-2 rounded-lg"
                >
                    How do I find a professor's office hours?
                </button>
                <button
                onClick={() => handleButtonClick("Option 3", setMessages)}
                className="border border-black bg-gray-300 px-4 py-2 rounded-lg"
                >
                    How do I get a permission number?
                </button>
            </div>
            <form onSubmit={handleSubmit} className="m-3 flex gap-1">
                <Input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type something..."
                />
                <button type="submit">
                    <SendHorizonal size={30}/>
                </button>
            </form>
        </div>
    </div>
}