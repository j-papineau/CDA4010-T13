"use client"
import Military from '@/app/components/ApplicationPages/Military'
import PersonalInfo from '@/app/components/ApplicationPages/PersonalInfo'
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

  const modalPages = [
    <PersonalInfo setAlertInfo={setAlertInfo}/>,
    <Military/>
  ]

  return (
    <div className='flex flex-col items-center space-y-4 bg-[#f2f2f2] h-screen'>
      <AppHeader/>
      <div className='flex flex-col w-full items-center'>
        <Progress backgroundColor={"blue.100"} colorScheme='blue' value={progress} className='w-[75%]'/>
        <p>{progress}% Done</p>
      </div>
      {/* main modal */}
      <div className='w-[90%] shadow-xl h-[65%] border border-slate-300 p-2 rounded-sm'>
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