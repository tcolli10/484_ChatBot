import { Pinecone } from "@pinecone-database/pinecone";

const apiKey = process.env.PINECONE_API_KEY;

if (!apiKey) {
    throw Error("can't find PINECONE_API_KEY");
}

const pinecone = new Pinecone({ 
    environment: "gcp_starter",
    apiKey, 
});

export const dialogueIndex = pinecone.Index("csc-484-chatbot");
