'use client'

import React from 'react'

import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

export default function Home() {
  // count state
  const [count, setCount] = React.useState(0)

  // increment count
  const increment = () => setCount((prev) => prev + 10)
  return (
    <main>
      <div className='h-screen flex items-center justify-center'>
        <div>
          <h1 className='font-bold text-3xl text-primary'>
            Welcome to Template Next.js with Talwindcss
          </h1>
          <div className='text-center mt-8'>
            <Button onClick={increment}>Click me</Button>
            <Progress value={count} className='bg-red-500 ' />
          </div>
        </div>
      </div>
    </main>
  )
}
