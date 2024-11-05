import { Button, Select, Switch } from '@chakra-ui/react'
import React, {useState} from 'react'

type Props = {}

const Availability = (props: Props) => {

    const [openAvail, setOpenAvail] = useState(false);


  return (
    <div className='flex flex-col'>
        <p className='font-semibold text-lg'>Availability</p>
        <div className='flex flex-row space-x-4'>
            <p className=''>Open Availability</p>
            <Switch size={"lg"} checked={openAvail} onChange={() => setOpenAvail(!openAvail)} />
        </div>
        <div className='flex flex-row'>
            <div className='flex flex-col'>
                <p className='font-semibold'>Monday</p>
                <Select disabled={openAvail}>
                    <option value={"none"}>No Availability</option>
                    <option value={"A"}>A Shift 9:00AM - 5:00 PM</option>
                    <option value={"B"}>B Shift 3:00PM - 11:00PM</option>
                    <option value={"C"}>C Shift 11:00PM - 7:00AM</option>
                </Select>
            </div>
            <div className='flex flex-col'>
                <p className='font-semibold'>Tuesday</p>
                <Select disabled={openAvail}>
                    <option value={"none"}>No Availability</option>
                    <option value={"A"}>A Shift 9:00AM - 5:00 PM</option>
                    <option value={"B"}>B Shift 3:00PM - 11:00PM</option>
                    <option value={"C"}>C Shift 11:00PM - 7:00AM</option>
                </Select>
            </div>
            <div className='flex flex-col'>
                <p className='font-semibold'>Wednesday</p>
                <Select disabled={openAvail}>
                    <option value={"none"}>No Availability</option>
                    <option value={"A"}>A Shift 9:00AM - 5:00 PM</option>
                    <option value={"B"}>B Shift 3:00PM - 11:00PM</option>
                    <option value={"C"}>C Shift 11:00PM - 7:00AM</option>
                </Select>
            </div>
            <div className='flex flex-col'>
                <p className='font-semibold'>Thursday</p>
                <Select disabled={openAvail}>
                    <option value={"none"}>No Availability</option>
                    <option value={"A"}>A Shift 9:00AM - 5:00 PM</option>
                    <option value={"B"}>B Shift 3:00PM - 11:00PM</option>
                    <option value={"C"}>C Shift 11:00PM - 7:00AM</option>
                </Select>
            </div>
            <div className='flex flex-col'>
                <p className='font-semibold'>Friday</p>
                <Select disabled={openAvail}>
                    <option value={"none"}>No Availability</option>
                    <option value={"A"}>A Shift 9:00AM - 5:00 PM</option>
                    <option value={"B"}>B Shift 3:00PM - 11:00PM</option>
                    <option value={"C"}>C Shift 11:00PM - 7:00AM</option>
                </Select>
            </div>
            <div className='flex flex-col'>
                <p className='font-semibold'>Weekend</p>
                <Select disabled={openAvail}>
                    <option value={"none"}>No Availability</option>
                    <option value={"A"}>A Shift 9:00AM - 5:00 PM</option>
                    <option value={"B"}>B Shift 3:00PM - 11:00PM</option>
                    <option value={"C"}>C Shift 11:00PM - 7:00AM</option>
                </Select>
            </div>
        </div>
    </div>
  )
}

export default Availability