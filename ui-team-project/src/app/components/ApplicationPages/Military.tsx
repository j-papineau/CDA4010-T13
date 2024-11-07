"use client"
import React, { useState } from 'react'
import PrevNextBtn from './PrevNextBtn';
import ModalTitle from './ModalTitle';
import { Select, Switch, TextField } from '@mui/material';

type Props = {
  goNextPage: () => void;
  goPrevPage: () => void;
}

const Military = (props: Props) => {

  const [pDisabled, setPDisabled] = useState(false);
  const [nDisabled, setNDisabled] = useState(false);
  const [didServe, setDidServe] = useState(false);
  const [textInput, setTextInput] = useState("");

  const onNext = () => {
    props.goNextPage();
  }

  const onPrev = () => {
    props.goPrevPage();
  }


  return (
    <div className='h-full w-full flex flex-col space-y-2 justify-between p-4'>
      <div className='flex flex-col space-y-2'>
        <ModalTitle title='Military Sevice'/>
        <div className='flex flex-col space-y-2'>
          <p className='font-semibold text-lg'>Have you ever served in the US Military?</p>
          <Switch checked={didServe} onChange={() => setDidServe(!didServe)}/>
        </div>
        <div>
          <p className={`font-semibold text-lg ${!didServe ? "text-slate-500" : "text-black"}`}>What skills has your service given you?</p>
          <TextField disabled={!didServe} 
          rows={8}
          value={textInput} 
          onChange={(e) => setTextInput(e.target.value)} />
        </div>
      </div>
      <PrevNextBtn goNext={onNext} goPrev={onPrev} prevDisabled={pDisabled} nextDisabled={nDisabled}/>
    </div>
  )
}

export default Military