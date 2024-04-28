'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import ImagePicker from '../image-picker'
import { Textarea } from '../ui/textarea'
import { useFormContext } from 'react-hook-form'
import { FormControl, FormField, FormItem } from '../ui/form'
import { Icons } from '../icons'
import IconButton from '../icon-button'
import { summarizeText } from '@/utils/summarize'

export function UploadCard() {
  const method = useFormContext()
  const [loading, setLoading] = useState(false)

  const handleDelete = () => method.setValue('prompt', '')

  const userInput = method.watch('prompt')

  const handleSummarize = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    method.setValue('summarization-output', 'loading...')

    const result = await summarizeText(userInput)

    console.log(result)

    method.setValue('summarization-output', result[0])

    setLoading(false)
  }

  return (
    <Card className="w-full px-2 py-4 min-w-[320px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <form onSubmit={handleSummarize} className="flex flex-col justify-center items-center space-y-3">
        <CardContent className="w-full p-2">
          <FormField
            control={method.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="h-[350px] focus-visible:ring-0"
                    placeholder="Type or paste the text you want to summarize here"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </CardContent>
        <CardFooter className="w-full flex flex-row justify-between p-0 px-2 mb-3">
          <ImagePicker />
          <Button type="submit" disabled={loading}>
            {loading ? 'Please wait' : 'Summarize'}
          </Button>
          <IconButton className="text-red-300" text="Delete" variant="ghost" type="button" onClick={handleDelete}>
            <Icons.trash color="text-red-300" />
          </IconButton>
        </CardFooter>
      </form>
    </Card>
  )
}
