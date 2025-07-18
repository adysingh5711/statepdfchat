import { ChatOpenAI } from "@langchain/openai";
import { env } from './env';

export const streamingModel = new ChatOpenAI({
    modelName: "gpt-3.5-turbo",
    streaming: true,
    verbose: true,
    temperature: 0,
    openAIApiKey: env.OPENAI_API_KEY,
});

export const nonStreamingModel = new ChatOpenAI({
    modelName: "gpt-3.5-turbo",
    verbose: true,
    temperature: 0,
    openAIApiKey: env.OPENAI_API_KEY,
});