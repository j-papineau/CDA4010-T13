"use client"
import React from 'react'

type Props = {}

const ThankYou = (props: Props) => {
  return (
    <div className='w-full items-center flex flex-col space-y-2 p-10'>
        <p>Image</p>
        <p className='text-3xl font-semibold text-blue-900'>Thank you for your application to UNFinished Business</p>
        <p className='italic'>We will definitely actually read your application and possibly never reach out to you ever again</p>
    </div>
  )
}

export default ThankYou