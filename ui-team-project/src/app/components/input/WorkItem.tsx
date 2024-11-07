import { Input, TextField } from '@mui/material'
import React from 'react'

type Props = {}

const WorkItem = (props: Props) => {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-row space-x-4'>
            <div className='flex flex-col space-y-2'>
                <p>Company</p>
                <Input placeholder="Apple, inc." />
            </div>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col'>
                    <p>Start</p>
                    <Input type='date' />
                </div>
                <div className='flex flex-col'>
                    <p>End</p>
                    <Input type='date' />
                </div>
            </div>
            <div className='flex flex-col'>
                <p>Position</p>
                <Input placeholder='Software Dev'/>
            </div>
        </div>
        <div className='flex flex-col'>
            <p>Roles and Responsibilities</p>
            <TextField rows={4} />
        </div>
    </div>
  )
}

export default WorkItem