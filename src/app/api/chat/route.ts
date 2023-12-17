import { getVectorEmbedding } from "@/lib/openai";
import { ChatCompletionMessage } from "openai/resources/chat/index.mjs";

export async function POST(req: Request) {
    try {
        const body = await req.json();

    } catch (error) {
        console.error(error);
        return Response.json({ error: "Internal Server error"}, { status: 500});
    }
}