"use client";
import { Button } from '@mui/material';
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
    <Button disabled={props.prevDisabled} onClick={props.goPrev}>
        <FaChevronLeft/>
        <p>Previous</p>
    </Button>
    <Button disabled={props.nextDisabled} onClick={props.goNext}>
        <p>Next</p>
        <FaChevronRight/>
    </Button>
    </div>  
  )
}

export default PrevNextBtn