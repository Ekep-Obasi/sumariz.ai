'use client'

import React from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { DownloadIcon, CopyIcon } from '@radix-ui/react-icons'
import IconButton from '../icon-button'
import { generatePDF } from '@/utils/generate-pdf'
import { useToast } from '../ui/use-toast'
import { useFormContext } from 'react-hook-form'

export function ResultCard() {
  const { toast } = useToast()
  const { watch } = useFormContext()

  const summarizedText = watch('summarization-output') as {
    summary_text: string
  }

  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(summarizedText?.summary_text)
      toast({
        description: 'Text copied',
      })
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const handleDownload = () => {
    if (summarizedText) {
      generatePDF(summarizedText.summary_text)
    } else {
      console.error('failed to generate pdf')
    }
  }

  return (
    <Card className="w-full px-2 py-4 min-w-[320px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <CardContent className="p-2">
        <div className="flex justify-between">
          <div
            autoCorrect="false"
            className="h-[350px] ring-0 outline-none focus-visible:ring-0 border-none text-muted-foreground"
          >
            {summarizedText?.summary_text}
          </div>
        </div>
      </CardContent>
      <CardFooter className="w-full flex flex-row justify-center p-0 px-2 mb-3 space-x-3">
        <IconButton onClick={copyContent} text="Copy" variant="secondary" type="button">
          <CopyIcon />
        </IconButton>
        <IconButton onClick={handleDownload} text="Download" variant="secondary" type="button">
          <DownloadIcon />
        </IconButton>
      </CardFooter>
    </Card>
  )
}
