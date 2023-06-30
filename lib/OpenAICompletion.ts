import { OpenAIApi, Configuration, ChatCompletionRequestMessage } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function createCompletion(
  messages: ChatCompletionRequestMessage[],
  functions: any[]
) {
  try {
    const result = await openai.createChatCompletion({
      model: "gpt-3.5-turbo-0613",
      messages,
      functions,
    });
    console.log("result", result.data.choices);
    return result;
  } catch (err: any) {
    console.log("Error creating the completion.", err);
  }
}
