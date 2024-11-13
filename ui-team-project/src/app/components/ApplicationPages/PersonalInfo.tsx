"use client"
import { AlertInfo } from '@/app/(main-pages)/application/page'
// import { Button, Input, Select } from '@chakra-ui/react';
import { Button, Input, Select } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PrevNextBtn from './PrevNextBtn';
import ModalTitle from './ModalTitle';
import * as types from "@/app/util/types"
import toast from 'react-hot-toast';


type Props = {
    setAlertInfo: (info: AlertInfo) => void;
    goNextPage: () => void;
    changeMasterState: (attribute: string, value: types.MilitaryService | types.PersonalInfo | types.Education[] | types.WorkXP[] | types.Skill[] | boolean) => void;
    masterData: types.MasterData
}

const empty: types.PersonalInfo = {
    name: {
        title: "",
        first: "",
        mi: "",
        last: ""
    },
    email: "",
    phoneMobile: "",
    phoneHome: "",
    address: {
        address: "",
        city: "",
        zip: "",
        state: ""
    }
}

const PersonalInfo = (props: Props) => {


    const goPrev = () => {
        
    }

    const goNext = () => {
        //validate info
        if(tempPersonal.name.first.length == 0){
            toast.error("Please enter your first name");
            return;
        }
        props.changeMasterState("personalInfo", tempPersonal);
        props.goNextPage()
    }

    const [tempPersonal, setTempPersonal] = useState<types.PersonalInfo>(empty)

    useEffect(() => {
        
        setTempPersonal(props.masterData.personalInfo);

    }, [props.masterData])

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
                    <Input placeholder='Don' value={tempPersonal.name.title}
                    onChange={(e) => {
                        setTempPersonal(prev => ({
                            ...prev,
                            name: {
                                ...prev.name,
                                title: e.target.value
                            }
                        }))
                    }}/>
                    <p className='text-xs'>Title</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Input placeholder='Tony' value={tempPersonal.name.first}
                    onChange={(e) => {
                        setTempPersonal(prev => ({
                            ...prev,
                            name: {
                                ...prev.name,
                                first: e.target.value
                            }
                        }))
                    }} />
                    <p className='text-xs'>First</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Input placeholder='J' value={tempPersonal.name.mi}
                    onChange={(e) => {
                        setTempPersonal(prev => ({
                            ...prev,
                            name: {
                                ...prev.name,
                                mi: e.target.value
                            }
                        }))
                    }}/>
                    <p className='text-xs'>M.I.</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Input placeholder='Soprano' value={tempPersonal.name.last}
                    onChange={(e) => {
                        setTempPersonal(prev => ({
                            ...prev,
                            name: {
                                ...prev.name,
                                last: e.target.value
                            }
                        }))
                    }}/>
                    <p className='text-xs'>Last</p>
                </div>
            </div>
            <p className='font-semibold text-lg'>Home Residence</p>
            <div className='flex flex-row justify-between space-x-4'>
                <div className='flex flex-col items-center'>
                    <Input placeholder='32 Park Street' value={tempPersonal.address.address} 
                    onChange={(e) => {
                        setTempPersonal(prev => ({
                            ...prev,
                            address: {
                                ...prev.address,
                                address: e.target.value
                            }
                        }))
                    }}/>
                    <p className='text-xs'>Street Address</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Input placeholder='Newark' value={tempPersonal.address.city}
                    onChange={(e) => {
                        setTempPersonal(prev => ({
                            ...prev,
                            address: {
                                ...prev.address,
                                city: e.target.value
                            }
                        }))
                    }}/>
                    <p className='text-xs'>City</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Input placeholder='33211' type='numeric' value={tempPersonal.address.zip}
                    onChange={(e) => {
                        setTempPersonal(prev => ({
                            ...prev,
                            address: {
                                ...prev.address,
                                zip: e.target.value
                            }
                        }))
                    }}/>
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
            <Input type='email' placeholder='tony@sopranowastemanagement.com' value={tempPersonal.email}
            onChange={(e) => {
                setTempPersonal(prev => ({
                    ...prev,
                    email: e.target.value
                }))
            }}/>
            <div className='flex flex-row space-x-4'>
                <div className='flex flex-col'>
                    <p className='font-semibold text-lg'>Phone Number (Mobile)</p>
                    <Input type='tel' placeholder='(123) 123-1234' value={tempPersonal.phoneMobile}
                    onChange={(e) => {
                        setTempPersonal(prev => ({
                            ...prev,
                            phoneMobile: e.target.value
                        }))
                    }}/>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold text-lg'>Phone Number (Home)</p>
                    <Input type='tel' placeholder='(123) 123-1234' value={tempPersonal.phoneHome}
                    onChange={(e) => {
                        setTempPersonal(prev => ({
                            ...prev,
                            phoneHome: e.target.value
                        }))
                    }}/>
                </div>
            </div>
        </div>

        <PrevNextBtn goNext={goNext} goPrev={goPrev} prevDisabled={pDisabled} nextDisabled={nDisabled} />
    </div>
  )
}

export default PersonalInfo