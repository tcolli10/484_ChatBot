import { getVectorEmbedding } from "@/lib/openai";
import { Content } from "next/font/google";

//possibly use this to add in new information

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const embedding = await getVectorEmbeddingForDialogue(body);
        return Response.json({ status: 201});
    } catch (error) {
        console.error(error);
        return Response.json({ error: "Internal Server error"}, { status: 500});
    }
}

async function getVectorEmbeddingForDialogue(content: string|undefined){
    return getVectorEmbedding(content ?? ""); // give content else print nothing
}
