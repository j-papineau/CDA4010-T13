import React from 'react'
import ModalTitle from './ModalTitle'
import { Button } from '@mui/material'
import * as types from '@/app/util/types';
import { useRouter } from 'next/navigation';

type Props = {
    masterData: types.MasterData;
    goFirst: () => void;
}

const Final = (props: Props) => {
    const router = useRouter();

    const onFinish = () => {
        // //redir to thank you page
        router.push("/thankyou")
    }

    const onBack = () => {
        props.goFirst();
    }


    const {personalInfo, militaryInfo, jobReqs, education, work, skills, tcAccepted} = props.masterData

  return (
    <div className='h-full w-full flex flex-col space-y-2 justify-between p-4 items-center'>
    <div className='flex flex-col space-y-2'>
      <ModalTitle title='Does this look right?'/>
    </div>
    <div className='flex flex-row w-full space-x-10 justify-center'>
      <div className='flex flex-col items-center'>
        <p className=' font-semibold'>Name</p>
        <p className='text-sm'>{personalInfo.name.title} {personalInfo.name.first} {personalInfo.name.mi} {personalInfo.name.last}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className='font-semibold'>Address</p>
        <p className='text-sm'>{personalInfo.address.address} {personalInfo.address.city}, {personalInfo.address.state} {personalInfo.address.zip} </p>
      </div>
      <div className="flex flex-col items-center">
        <p className='font-semibold'>Email</p>
        <p className='text-sm'>{personalInfo.email}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className='font-semibold'>Phone</p>
        <p className='text-sm'>{personalInfo.phoneMobile}</p>
      </div>
    </div>
    <div className="flex flex-row w-full space-x-10 justify-center">
      <div className="flex flex-col items-center">
        <p className='font-semibold'>Military Service?</p>
        <p className='text-sm'>{militaryInfo.didServe ? "yes" : "no"}</p>
      </div>
    </div>
    <div className='grid grid-cols-3 w-full'>
      <p className='col-span-2 font-semibold'>Over 21?</p>
      <p className='text-sm'>{jobReqs.oldEnough ? "yes" : "no"}</p>

      <p className='col-span-2 font-semibold'>Drivers License?</p>
      <p className='text-sm'>{jobReqs.license ? "yes" : "no"}</p>

      <p className='col-span-2 font-semibold'>Recent Traffic Incident?</p>
      <p className='text-sm'>{jobReqs.trafficIncident? "yes" : "no"}</p>

      <p className='col-span-2 font-semibold'>DUI/DWI?</p>
      <p className='text-sm'>{jobReqs.dui ? "yes" : "no"}</p>

      <p className='col-span-2 font-semibold'>Employment Type?</p>
      <p className='text-sm'>{jobReqs.employmentType}</p>

      <p className='col-span-2 font-semibold'>Salary Preference?</p>
      <p className='text-sm'>{jobReqs.salaryReq}</p>

    </div>

    <div className='w-full flex flex-col space-y-4 items-center'>
        {education.map((item, key) => (
          <div key={key} className='flex flex-row w-full space-x-10 items-center justify-center'>
            <div className='flex flex-col items-center'>
              <p className='font-semibold'>Institution</p>
              <p className='text-sm'>{item.name}</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='font-semibold'>Degree/Certification</p>
              <p className='text-sm'>{item.degree}</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='font-semibold'>Graduation Year</p>
              <p className='text-sm'>{item.graduation}</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='font-semibold'>Completed</p>
              <p className='text-sm'>{item.completed ? "yes" : "no"}</p>
            </div>
          </div>
        ))}
    </div>
    <div className='w-full flex flex-col space-y-4 items-center'>
        {work.map((item, key) => (
          <div key={key} className='flex flex-row w-full space-x-10 items-center justify-center'>
            <div className='flex flex-col items-center'>
              <p className="font-semibold">Company</p>
              <p className="text-sm">{item.company}</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className="font-semibold">Start</p>
              <p className="text-sm">{item.start}</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className="font-semibold">End</p>
              <p className="text-sm">{item.end}</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className="font-semibold">Position</p>
              <p className="text-sm">{item.position}</p>
            </div>
          </div>
        ))}
    </div>
    <div className='w-full flex flex-col space-y-4 items-center'>
        {skills.map((item, key) => (
          <div key={key} className='flex flex-row w-full space-x-10 items-center justify-center'>
            <div className='flex flex-col items-center'>
              <p className="font-semibold">Skill</p>
              <p className="text-sm">{item.name}</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className="font-semibold">Proficiency</p>
              <p className="text-sm">{item.level}</p>
            </div>
          </div>
        ))}
    </div>





    <div className='flex flex-row w-full justify-between'>
        <Button variant='contained' onClick={onBack}>Go Back</Button>
        <Button variant='contained' onClick={onFinish} color='success'>Finish My Application</Button>
    </div>
  </div>
  )
}

export default Final