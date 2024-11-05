"use client"
import { Divider } from '@chakra-ui/react';
import React from 'react'

type Props = {
    title: string;
}

const ModalTitle = (props: Props) => {
  return (
    <div className='flex flex-col w-full items-center space-y-2'>
        <p className='italic text-2xl font-semibold tracking-wider'>{props.title}</p>
        <Divider colorScheme='blue'/>
    </div>
  )
}

export default ModalTitle