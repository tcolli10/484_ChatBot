import {useChat} from "ai/react"
import {cn} from "@/lib/utils"
import { X, SendHorizonal } from "lucide-react";
import { Input } from "./input";

interface ChatbotBoxProps{
    open: boolean;
    onClose:() => void;
}

  // handles + navigates to corresponding chatbot flow
  const handleButtonClick = (buttonText: string) => {
    switch (buttonText) {
        case "Option 1":
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
        messages,
        input, 
        handleInputChange,
        handleSubmit,
        setMessages,
        isLoading,
        error
    } = useChat();

    return <div className={cn(
        "bottom-0 right-0 z-10 w-[25%] max-w-[50%] p-1", 
        open ? "fixed" : "hidden"
    )}>
        <button onClick={onClose} className="mb-1 ms-auto block left-0 top-0">
            <X size={30} />
        </button>
        <div className="flex h-[600px] flex-col rounded bg-background border shadow-xl">
            <div className="h-full">Hello there! How can I help?</div>
            <div className="flex gap-2 p-2">
                <button 
                onClick={() => handleButtonClick("Option 1")}
                className="border border-black bg-gray-300 px-4 py-2 rounded-lg"
                >
                    How do I get internship credit?
                </button>
                <button 
                onClick={() => handleButtonClick("Option 2")}
                className="border border-black bg-gray-300 px-4 py-2 rounded-lg"
                >
                    How do I find a professor's office hours?
                </button>
                <button
                onClick={() => handleButtonClick("Option 3")}
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