'use client'
import React from 'react'
import { Boxes } from './background-boxes'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Banner() {
  return (
    <div className="h-[635px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.6,
          ease: 'easeInOut',
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 lg:w-2/3"
      >
        <h1 className={cn('text-3xl md:text-7xl font-bold dark:text-white text-center')}>
          Effortlessly Summarize Text with AI
        </h1>
        <p className="text-xl text-center mt-4 text-neutral-300 relative z-20 md:w-2/3">
          Simplify your text content within seconds with Sumariz.ai, type or upload images or pdf text and click
          &ldquo;Summarize&rdquo;
        </p>
        <Button variant="default" className="mt-8 z-30 font-bold">
          <Link href="#start">Get Started</Link>
        </Button>
      </motion.div>
    </div>
  )
}
