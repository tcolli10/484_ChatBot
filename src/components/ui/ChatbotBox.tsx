import {useChat} from "ai/react"
import {cn} from "@/lib/utils"
import { X, SendHorizonal } from "lucide-react";
import { Input } from "./input";

interface ChatbotBoxProps{
    open: boolean;
    onClose:() => void;
}


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
            <div className="h-full">Messages</div>
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