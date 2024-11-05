import React, { useState } from 'react'
import ModalTitle from './ModalTitle'
import PrevNextBtn from './PrevNextBtn'
import Availability from '../input/Availability';
import { Switch } from '@chakra-ui/react';

type Props = {
    goNext: () => void;
    goPrev: () => void;
}

const JobReqs = (props: Props) => {

    const [pDisabled, setPDisabled] = useState(false);
    const [nDisabled, setNDisabled] = useState(false);

    const onNext = () => {
        props.goNext();
    }

    const onPrev = () => {
        props.goPrev();
    }


  return (
    <div className='h-full w-full flex flex-col space-y-4 justify-between p-4'>
      <div className='flex flex-col space-y-2'>
        <ModalTitle title='Our Requirements'/>
        <Availability/>
        <p className='font-semibold'>Select all that apply</p>
        <div className='grid grid-cols-3 justify-between w-full space-y-2 items-center'>
          <p className='text-lg col-span-2'>Are you over 21?</p>
          <Switch/>
          <p className='text-lg col-span-2'>Do you have a driver's license?</p>
          <Switch/>
          <p className='text-lg col-span-2'>Are you able to lift 20+ lbs.?</p>
          <Switch/>
          <p className='text-lg col-span-2'>Have you been ruled at fault for a traffic incident in the last 3 years?</p>
          <Switch/>
          <p className='text-lg col-span-2'>Have you ever had a DUI/DWI?</p>
          <Switch/>
        </div>
      </div>

      <PrevNextBtn goNext={onNext} goPrev={onPrev} prevDisabled={pDisabled} nextDisabled={nDisabled}/>
    </div>
  )
}

export default JobReqs