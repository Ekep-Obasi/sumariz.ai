import { OpenAI } from '@langchain/openai'
import { loadSummarizationChain } from 'langchain/chains'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'

export const summarizeText = async (text: string) => {
  const model = new OpenAI({
    temperature: 0,
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  })
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000, chunkOverlap: 500 })
  const docs = await textSplitter.createDocuments([text])

  const chain = loadSummarizationChain(model, { type: 'map_reduce' })

  const result = await chain.invoke({
    input_documents: docs,
  })

  return result
}
