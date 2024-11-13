"use client"
import React, { useEffect, useState } from 'react'
import PrevNextBtn from './PrevNextBtn';
import ModalTitle from './ModalTitle';
import { Select, Switch, TextareaAutosize, TextField } from '@mui/material';
import * as types from "@/app/util/types"

type Props = {
  goNextPage: () => void;
  goPrevPage: () => void;
  changeMasterState: (attribute: string, value: types.MilitaryService | types.PersonalInfo | types.Education[] | types.WorkXP[] | types.Skill | boolean) => void;
  masterData: types.MasterData
}

const Military = (props: Props) => {

  const [pDisabled, setPDisabled] = useState(false);
  const [nDisabled, setNDisabled] = useState(false);
  const [didServe, setDidServe] = useState(false);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    setDidServe(props.masterData.militaryInfo.didServe);
    setTextInput(props.masterData.militaryInfo.info);
  }, [props.masterData])

  const onNext = () => {
    props.changeMasterState("militaryInfo", {didServe: didServe, info: textInput})
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
          <TextareaAutosize disabled={!didServe} 
          className="w-80 text-sm font-normal font-sans leading-normal rounded-md p-3 rounded-br-none shadow-lg shadow-slate-100  focus-visible:outline-0 box-border"
          minRows={8}
          value={textInput} 
          onChange={(e) => setTextInput(e.target.value)} />
        </div>
      </div>
      <PrevNextBtn goNext={onNext} goPrev={onPrev} prevDisabled={pDisabled} nextDisabled={nDisabled}/>
    </div>
  )
}

export default Military