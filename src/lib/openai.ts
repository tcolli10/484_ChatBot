import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
    throw Error("can't find OPENAI_API_KEY");
}

const openai = new OpenAI({ apiKey });

export default openai;

export async function getVectorEmbedding(text: string) {
    const response = await openai.embeddings.create({
        model: "text-embedding-ada-002",
        input: text
    })

    const embedding = response.data[0].embedding;

    if (!embedding) throw Error("Embedding failed to generated.");

    console.log(embedding);

    return embedding;
}