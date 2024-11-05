"use client"
import Education from '@/app/components/ApplicationPages/Education'
import JobReqs from '@/app/components/ApplicationPages/JobReqs'
import Military from '@/app/components/ApplicationPages/Military'
import PersonalInfo from '@/app/components/ApplicationPages/PersonalInfo'
import Skills from '@/app/components/ApplicationPages/Skills'
import TC from '@/app/components/ApplicationPages/TC'
import WorkExp from '@/app/components/ApplicationPages/WorkExp'
import AppHeader from '@/app/components/Header/AppHeader'
import { Alert, AlertDescription, AlertIcon, AlertTitle, Progress } from '@chakra-ui/react'
import React, { useState } from 'react'


type Props = {}

export interface AlertInfo {
  isShowing: boolean;
  title: string;
  description: string;
  status: "success" | "error" | "warning";
}

const Application = (props: Props) => {

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
    6: 90
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

  const modalPages = [
    <PersonalInfo setAlertInfo={setAlertInfo} goNextPage={goNextPage}/>,
    <Military goNextPage={goNextPage} goPrevPage={goPrevPage}/>,
    <JobReqs goNext={goNextPage} goPrev={goPrevPage}/>,
    <Education goNextPage={goNextPage} goPrevPage={goPrevPage}/>,
    <WorkExp goNextPage={goNextPage} goPrevPage={goPrevPage}/>,
    <Skills goNextPage={goNextPage} goPrevPage={goPrevPage}/>,
    <TC goNextPage={goNextPage} goPrevPage={goPrevPage}/>
  ]

  return (
    <div className='flex flex-col items-center space-y-4 bg-[#f2f2f2] min-h-screen'>
      <AppHeader/>
      <div className='flex flex-col w-full items-center'>
        <Progress backgroundColor={"blue.100"} colorScheme='blue' value={progress} className='w-[75%]'/>
        <p>{progress}% Done</p>
      </div>
      {/* main modal */}
      <div className='w-[90%] shadow-xl min-h-[65%] border border-slate-300 p-2 rounded-sm'>
        {alertInfo.isShowing && (
        <Alert status={alertInfo.status}>
          <AlertIcon/>
          <AlertTitle>{alertInfo.title}</AlertTitle>
          <AlertDescription>{alertInfo.description}</AlertDescription>
        </Alert>
        )}

        {modalPages[currentPage] || null}
      </div>
    </div>
  )
}

export default Application