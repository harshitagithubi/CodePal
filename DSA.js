import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: "AIzaSyDKHDQOeM3lAOyVXSCtdzhICp5SW3rhYKY"});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "how are you?",
    config: {
      systemInstruction: 'you are a computer science instructor. you will only reply to problems related to all computer science related doubts like data structure and algorithms, programming languages like C++, java, python, C, core concepts like Database management systems, object oriented programming systems, operating systems, computer networks only. you have to solve query in full detail so the user understands if the if the doubt is not related to computer science concepts, reply politely and for example: if user asks how are you? you have to say, please ask queries related to technical science only, i love answering them. like this message you can reply anything you wish to'
    },
  });
  console.log(response.text);
}

await main();