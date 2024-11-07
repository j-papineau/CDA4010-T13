import { Checkbox, Input } from '@mui/material'
import React from 'react'

type Props = {
    updateFunc: (index: number, att: string, newVal: string | boolean) => void;
}

const EducationItem = (props: Props) => {
  return (
    <div className='flex flex-row space-x-4'>
        <div className='flex flex-col items-center space-y-2'>
            <p>Institution</p>
            <Input placeholder="University of North Florida"/>
        </div>
        <div className="flex flex-col items-center space-y-2">
            <p>Degree/Diploma</p>
            <Input placeholder="Bachelor's"/>
        </div>
        <div className='flex flex-col items-center space-y-2'>
            <p>Major</p>
            <Input placeholder='Comp. Sci.'/>
        </div>
        <div className='flex flex-col items-center space-y-2'>
            <p>Graduation</p>
            <Input placeholder='2022'/>
        </div>
        <div className='flex flex-col items-center space-y-2'>
            <p>Completed?</p>
            <Checkbox/>
        </div>
    </div>
  )
}

export default EducationItem