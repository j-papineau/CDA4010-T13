"use client"
import Image from 'next/image'
import React from 'react'

type Props = {
    titleText: string;
}


const Header = (props: Props) => {


  return (
    <div className='flex flex-row p-2 w-[50%] items-center justify-between'>
        <Image width={100} height={100} src="data:image/jpeg;base64,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" alt="" />
        <p className='text-3xl text-blue-700 font-semibold'>{props.titleText}</p>
    </div>
  )
}

export default Header