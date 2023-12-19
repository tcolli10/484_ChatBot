import { FunctionComponent } from "react";
import { measureMemory } from "vm";


interface ChatBubbleProps {
    message: string;
}
export const ChatBubble: FunctionComponent<ChatBubbleProps> = (props) => {
    const { message } = props; 
    
    return(
        <div className="bg-chat-bubble-green w-3/4 text-white p-2 rounded-md">
            <div className="text-center">{message}</div>
        </div>
    );
}