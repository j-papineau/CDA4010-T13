import { Education } from '@/app/util/types';
import { Checkbox, Input } from '@mui/material'
import React from 'react'

type Props = {
    updateItemString: (index: number, att: "name" | "degree" | "major" | "graduation", newVal: string) => void;
    updateItemBool: (index: number, att: "completed" , newVal: boolean) => void;
    index: number;
    data: Education
}

const EducationItem = (props: Props) => {
  return (
    <div className='flex flex-row space-x-4'>
        <div className='flex flex-col items-center space-y-2'>
            <p>Institution</p>
            <Input value={props.data.name} onChange={(e) => props.updateItemString(props.index, "name", e.target.value)} placeholder="University of North Florida"/>
        </div>
        <div className="flex flex-col items-center space-y-2">
            <p>Degree/Diploma</p>
            <Input value={props.data.degree} onChange={(e) => props.updateItemString(props.index, "degree", e.target.value)} placeholder="Bachelor's"/>
        </div>
        <div className='flex flex-col items-center space-y-2'>
            <p>Major</p>
            <Input value={props.data.major} onChange={(e) => props.updateItemString(props.index, "major", e.target.value)} placeholder='Comp. Sci.'/>
        </div>
        <div className='flex flex-col items-center space-y-2'>
            <p>Graduation</p>
            <Input value={props.data.graduation} onChange={(e) => props.updateItemString(props.index, "graduation", e.target.value)} placeholder='2022'/>
        </div>
        <div className='flex flex-col items-center space-y-2'>
            <p>Completed?</p>
            <Checkbox value={props.data.completed} onChange={(e) => props.updateItemBool(props.index, "completed", !props.data.completed)}/>
        </div>
    </div>
  )
}

export default EducationItem