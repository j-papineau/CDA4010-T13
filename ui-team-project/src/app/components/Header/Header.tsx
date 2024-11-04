"use client"
import Image from 'next/image'
import React from 'react'

type Props = {
    titleText: string;
}


const Header = (props: Props) => {


  return (
    <div className='flex flex-row p-2 w-[70%] items-center justify-center space-x-4'>
      <Image alt='UNF logo' src={"/img/UNF.png"} width={100} height={100} />
        <p className='text-4xl text-blue-900 font-semibold'>{props.titleText}</p>
    </div>
  )
}

export default Header