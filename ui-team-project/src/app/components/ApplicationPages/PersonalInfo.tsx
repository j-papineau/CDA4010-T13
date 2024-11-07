"use client"
import { AlertInfo } from '@/app/(main-pages)/application/page'
// import { Button, Input, Select } from '@chakra-ui/react';
import { Button, Input, Select } from '@mui/material';
import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PrevNextBtn from './PrevNextBtn';
import ModalTitle from './ModalTitle';


type Props = {
    setAlertInfo: (info: AlertInfo) => void;
    goNextPage: () => void;
}

const PersonalInfo = (props: Props) => {

    const goPrev = () => {
        
    }

    const goNext = () => {
        //validate info
        props.goNextPage()
    }

    const [title, setTitle] = useState("");
    const [first, setFirst] = useState("");
    const [mi, setMi] = useState("");
    const [last, setLast] = useState("")

    const [pDisabled, setPDisabled] = useState(true);
    const [nDisabled, setNDisabled] = useState(false);



  return (
    <div className='h-full w-full flex flex-col space-y-2 justify-between p-4'>
        <div className='flex flex-col space-y-2'>
            <ModalTitle title="Let's Get to Know You"/>
            <p className='font-semibold text-lg'>Name</p>
            <div className='flex flex-row justify-between space-x-4'>
                <div className='flex flex-col items-center'>
                    <Input placeholder='Don' />
                    <p className='text-xs'>Title</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Input placeholder='Tony' />
                    <p className='text-xs'>First</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Input placeholder='J' />
                    <p className='text-xs'>M.I.</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Input placeholder='Soprano' />
                    <p className='text-xs'>Last</p>
                </div>
            </div>
            <p className='font-semibold text-lg'>Home Residence</p>
            <div className='flex flex-row justify-between space-x-4'>
                <div className='flex flex-col items-center'>
                    <Input placeholder='32 Park Street' />
                    <p className='text-xs'>Street Address</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Input placeholder='Newark' />
                    <p className='text-xs'>City</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Input placeholder='33211' type='numeric' />
                    <p className='text-xs'>ZIP</p>
                </div>
                <div className='flex flex-col items-center'>
                    {/* <Select>
                        <option value='NJ'>New Jersey</option>
                    </Select> */}
                    <p className='text-xs'>State</p>
                </div>
            </div>
            <p className='font-semibold text-lg'>Email</p>
            <Input type='email' placeholder='tony@sopranowastemanagement.com'/>
            <div className='flex flex-row space-x-4'>
                <div className='flex flex-col'>
                    <p className='font-semibold text-lg'>Phone Number (Mobile)</p>
                    <Input type='tel' placeholder='(123) 123-1234'/>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold text-lg'>Phone Number (Home)</p>
                    <Input type='tel' placeholder='(123) 123-1234'/>
                </div>
            </div>
        </div>

        <PrevNextBtn goNext={goNext} goPrev={goPrev} prevDisabled={pDisabled} nextDisabled={nDisabled} />
    </div>
  )
}

export default PersonalInfo