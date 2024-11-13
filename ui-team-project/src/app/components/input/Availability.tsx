
import { JobReqs } from '@/app/util/types';
import { Button, Select, Switch, MenuItem } from '@mui/material'
import React, {useState} from 'react'

type Props = {
    handleAvailabilityChange: (op: string, value: string) => void;
    tempData: JobReqs
    handleOpenAvail: () => void;
}

const Availability = (props: Props) => {

    const [openAvail, setOpenAvail] = useState(false);



  return (
    <div className='flex flex-col'>
        <p className='font-semibold text-lg'>Availability</p>
        <div className='flex flex-row space-x-4'>
            <p className=''>Open Availability</p>
            <Switch checked={openAvail} onChange={() => {
                setOpenAvail(!openAvail)
                props.handleOpenAvail()
                }} />
        </div>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
                <p className='font-semibold'>Monday</p>
                <Select value={props.tempData.availability[0]} onChange={(e) => {
                    props.handleAvailabilityChange("Monday", e.target.value);
                }} className='w-[150px]' disabled={openAvail}>
                    <MenuItem value={""}>No Availability</MenuItem>
                    <MenuItem value={"A"}>A Shift 9:00AM - 5:00 PM</MenuItem>
                    <MenuItem value={"B"}>B Shift 3:00PM - 11:00PM</MenuItem>
                    <MenuItem value={"C"}>C Shift 11:00PM - 7:00AM</MenuItem>
                    <MenuItem value={"Any"}>Open This Day</MenuItem>
                </Select>
            </div>
            <div className='flex flex-col'>
                <p className='font-semibold'>Tuesday</p>
                <Select className='w-[150px]' disabled={openAvail} 
                value={props.tempData.availability[1]}
                onChange={(e) => {
                    props.handleAvailabilityChange("Tuesday", e.target.value);
                }}>
                    <MenuItem value={""}>No Availability</MenuItem>
                    <MenuItem value={"A"}>A Shift 9:00AM - 5:00 PM</MenuItem>
                    <MenuItem value={"B"}>B Shift 3:00PM - 11:00PM</MenuItem>
                    <MenuItem value={"C"}>C Shift 11:00PM - 7:00AM</MenuItem>
                    <MenuItem value={"Any"}>Open This Day</MenuItem>
                </Select>
            </div>
            <div className='flex flex-col'>
                <p className='font-semibold'>Wednesday</p>
                <Select className='w-[150px]' disabled={openAvail}
                value={props.tempData.availability[2]}
                onChange={(e) => {
                    props.handleAvailabilityChange("Wednesday", e.target.value);
                }}>
                    <MenuItem value={""}>No Availability</MenuItem>
                    <MenuItem value={"A"}>A Shift 9:00AM - 5:00 PM</MenuItem>
                    <MenuItem value={"B"}>B Shift 3:00PM - 11:00PM</MenuItem>
                    <MenuItem value={"C"}>C Shift 11:00PM - 7:00AM</MenuItem>
                    <MenuItem value={"Any"}>Open This Day</MenuItem>
                </Select>
            </div>
            <div className='flex flex-col'>
                <p className='font-semibold'>Thursday</p>
                <Select className='w-[150px]' disabled={openAvail}
                value={props.tempData.availability[3]}
                onChange={(e) => {
                    props.handleAvailabilityChange("Thursday", e.target.value);
                }}>
                    <MenuItem value={""}>No Availability</MenuItem>
                    <MenuItem value={"A"}>A Shift 9:00AM - 5:00 PM</MenuItem>
                    <MenuItem value={"B"}>B Shift 3:00PM - 11:00PM</MenuItem>
                    <MenuItem value={"C"}>C Shift 11:00PM - 7:00AM</MenuItem>
                    <MenuItem value={"Any"}>Open This Day</MenuItem>
                </Select>
            </div>
            <div className='flex flex-col'>
                <p className='font-semibold'>Friday</p>
                <Select className='w-[150px]' disabled={openAvail}
                value={props.tempData.availability[4]}
                onChange={(e) => {
                    props.handleAvailabilityChange("Friday", e.target.value);
                }}>
                    <MenuItem value={""}>No Availability</MenuItem>
                    <MenuItem value={"A"}>A Shift 9:00AM - 5:00 PM</MenuItem>
                    <MenuItem value={"B"}>B Shift 3:00PM - 11:00PM</MenuItem>
                    <MenuItem value={"C"}>C Shift 11:00PM - 7:00AM</MenuItem>
                    <MenuItem value={"Any"}>Open This Day</MenuItem>
                </Select>
            </div>
            <div className='flex flex-col'>
                <p className='font-semibold'>Weekend</p>
                <Select className='w-[150px]' disabled={openAvail}
                value={props.tempData.availability[5]}
                onChange={(e) => {
                    props.handleAvailabilityChange("Weekend", e.target.value);
                }}>
                    <MenuItem value={""}>No Availability</MenuItem>
                    <MenuItem value={"A"}>A Shift 9:00AM - 5:00 PM</MenuItem>
                    <MenuItem value={"B"}>B Shift 3:00PM - 11:00PM</MenuItem>
                    <MenuItem value={"C"}>C Shift 11:00PM - 7:00AM</MenuItem>
                    <MenuItem value={"Any"}>Open This Day</MenuItem>
                </Select>
            </div>
        </div>
    </div>
  )
}

export default Availability