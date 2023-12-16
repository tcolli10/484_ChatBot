import {useChat} from "ai/react"
import {cn} from "@/lib/utils"
import { XCircle } from "lucide-react";

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

    return <div className={cn("bottom-0 right-0 z-10 w-full max-w-[250px] p-1 xl:right-36", 
        open ? "fixed" : "hidden"
    )}>
        <button onClick={onClose} className="mb-1 ms-auto block">
            <XCircle size={30} />
        </button>
        <div className="flex h-[600px] flex-col rounded bg-backgroundborder shadow-xl">
            <div className="h-full">Messages</div>
        </div>
    </div>
}