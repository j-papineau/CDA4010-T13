"use client";
import { Button } from '@chakra-ui/react';
import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type Props = {
    goPrev: () => void;
    goNext: () => void;
    prevDisabled: boolean;
    nextDisabled: boolean;
}

const PrevNextBtn = (props: Props) => {
  return (
    <div className='flex flex-row justify-between p-4'>
    <Button disabled={props.prevDisabled} onClick={props.goPrev} colorScheme='blue' width={200}>
        <FaChevronLeft/>
        <p>Previous</p>
    </Button>
    <Button disabled={props.nextDisabled} onClick={props.goNext} colorScheme='blue' width={200}>
        <p>Next</p>
        <FaChevronRight/>
    </Button>
    </div>  
  )
}

export default PrevNextBtn