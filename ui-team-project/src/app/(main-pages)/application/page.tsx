"use client"
import Education from '@/app/components/ApplicationPages/Education'
import Final from '@/app/components/ApplicationPages/Final'
import JobReqs from '@/app/components/ApplicationPages/JobReqs'
import Military from '@/app/components/ApplicationPages/Military'
import PersonalInfo from '@/app/components/ApplicationPages/PersonalInfo'
import Skills from '@/app/components/ApplicationPages/Skills'
import TC from '@/app/components/ApplicationPages/TC'
import WorkExp from '@/app/components/ApplicationPages/WorkExp'
import AppHeader from '@/app/components/Header/AppHeader'
import * as types from '@/app/util/types';
import { LinearProgress } from '@mui/material'
import React, { useState } from 'react'


type Props = {}

export interface AlertInfo {
  isShowing: boolean;
  title: string;
  description: string;
  status: "success" | "error" | "warning";
}

const blankData: types.MasterData = {
  personalInfo: {
    name: {
      title: "",
      first: "",
      mi: "",
      last: ""
    },
    email: "",
    phoneMobile: "",
    phoneHome: "",
    address: {
      address: "",
      city: "",
      zip: "",
      state: ""
    }
  },
  militaryInfo: {
    didServe: false,
    info: ""
  },
  jobReqs: {
    availability: ["none", "none", "none", "none", "none", "none", "none",],
    oldEnough: false,
    license: false,
    liftTwenty: false,
    trafficIncident: false,
    dui: false,
    employmentType: "Part Time",
    salaryReq: "0",
    startDate: "10/27/2000"
  },
  education: [
    {
      name: "",
      degree: "",
      major: "",
      graduation: "",
      completed: false
    }
  ],
  work: [ 
    {
      company: "",
      start: "",
      end: "",
      position: "",
      duties: ""
    }
  ],
  skills: [
    {
      name: "",
      level: "beginner"
    }
  ],
  tcAccepted: false
}



const Application = (props: Props) => {

  const [appData, setAppData] = useState<types.MasterData>(blankData);
  const [progress, setProgress] = useState(1);
  //page array counted 0 - ...
  const [currentPage, setCurrentPage] = useState(0);
  const [alertInfo, setAlertInfo] = useState<AlertInfo>({
    isShowing: false,
    title: "Test",
    description: "testing",
    status: 'error'
  })

  const progressVals: Record<number, number> = {
    0: 1,
    1: 25,
    2: 40,
    3: 50,
    4: 65,
    5: 75,
    6: 90,
    7: 99,
  }

  const goNextPage = () => {
    setCurrentPage(currentPage + 1)
    if(progressVals[currentPage + 1]){
      setProgress(progressVals[currentPage + 1]);
    }
  }

  const goPrevPage = () => {
    setCurrentPage(currentPage - 1)
    if(progressVals[currentPage - 1]){
      setProgress(progressVals[currentPage - 1]);
    }
  }

  const goFirst = () => {
    setCurrentPage(0)
    setProgress(1);
  }

  const changeMasterState = (attribute: string, value: types.MilitaryService | types.PersonalInfo | types.JobReqs | types.Education[] | types.WorkXP[] | types.Skill[] | boolean) => {
    setAppData(prev => ({
      ...prev,
      [attribute]: value
    }))
  }

  const modalPages = [
    <PersonalInfo masterData={appData} changeMasterState={changeMasterState} setAlertInfo={setAlertInfo} goNextPage={goNextPage}/>,
    <Military masterData={appData} changeMasterState={changeMasterState} goNextPage={goNextPage} goPrevPage={goPrevPage}/>,
    <JobReqs masterData={appData} changeMasterState={changeMasterState} goNext={goNextPage} goPrev={goPrevPage}/>,
    <Education changeMasterState={changeMasterState} masterData={appData} goNextPage={goNextPage} goPrevPage={goPrevPage}/>,
    <WorkExp changeMasterState={changeMasterState} masterData={appData} goNextPage={goNextPage} goPrevPage={goPrevPage}/>,
    <Skills changeMasterState={changeMasterState} masterData={appData} goNextPage={goNextPage} goPrevPage={goPrevPage}/>,
    <TC changeMasterState={changeMasterState} masterData={appData} goNextPage={goNextPage} goPrevPage={goPrevPage}/>,
    <Final masterData={appData} goFirst={goFirst}/>
  ]

  return (
    <div className='flex flex-col items-center space-y-4 bg-[#f2f2f2] min-h-screen'>
      <AppHeader/>
      <div className='flex flex-col w-full items-center'>
        {/* <Progress backgroundColor={"blue.100"} colorScheme='blue' value={progress} className='w-[75%]'/> */}
        <LinearProgress className='w-[75%]' color='primary' variant='determinate' value={progress}/>
        <p>{progress}% Done</p>
      </div>
      {/* main modal */}
      <div className='w-[90%] shadow-xl min-h-[65%] border border-slate-300 p-2 rounded-sm'>


        {modalPages[currentPage] || null}
      </div>
    </div>
  )
}

export default Application