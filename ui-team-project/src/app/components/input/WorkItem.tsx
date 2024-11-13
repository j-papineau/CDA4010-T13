import { WorkXP } from '@/app/util/types';
import { Divider, Input, TextField } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import React from 'react'

type Props = {
    index: number;
    updateItem: (index: number, att: "company" | "position" | "duties" | "start" | "end", newVal: string) => void;
    updateItemDate: (index: number, att: "start" | "end", newVal: Date) => void;
    data: WorkXP;
}

const WorkItem = (props: Props) => {
  return (
    <div className='flex flex-col space-y-4'>
        <div className='flex flex-row space-x-4'>
            <div className='flex flex-col'>
                <p>Company</p>
                <Input value={props.data.company} onChange={(e) => props.updateItem(props.index, "company", e.target.value)} placeholder="Apple, inc." />
            </div>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col'>
                    <p>Start Year</p>
                    <Input value={props.data.start} onChange={(e) => props.updateItem(props.index, "start", e.target.value)} placeholder="2024" />                </div>
                <div className='flex flex-col'>
                    <p>End Year</p>
                    <Input value={props.data.end} onChange={(e) => props.updateItem(props.index, "end", e.target.value)} placeholder="2024" />
                </div>
            </div>
            <div className='flex flex-col'>
                <p>Position</p>
                <Input value={props.data.position} onChange={(e) => props.updateItem(props.index, "position", e.target.value)} placeholder='Software Dev'/>
            </div>
        </div>
        <div className='flex flex-col'>
            <p>Roles and Responsibilities</p>
            <TextField value={props.data.duties} onChange={(e) => props.updateItem(props.index, "duties", e.target.value)} rows={4} />
        </div>
        <div className='w-full py-4'>
        <Divider/>
        </div>
    </div>
  )
}

export default WorkItem