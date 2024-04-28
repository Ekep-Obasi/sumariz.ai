import { pipeline } from '@xenova/transformers'

export const summarizeText = async (text: string) => {
  const pipe = await pipeline('summarization')

  const summarizationOutput = await pipe(text, { max_length: text.length / 2 })

  return summarizationOutput
}
