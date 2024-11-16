"use client"
import { AlertInfo } from '@/app/(main-pages)/application/page'
// import { Button, Input, Select } from '@chakra-ui/react';
import { Button, Input, MenuItem, Select } from '@mui/material';
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

const states = [
    {"name": "Alabama", "value": "AL"},
    {"name": "Alaska", "value": "AK"},
    {"name": "Arizona", "value": "AZ"},
    {"name": "Arkansas", "value": "AR"},
    {"name": "California", "value": "CA"},
    {"name": "Colorado", "value": "CO"},
    {"name": "Connecticut", "value": "CT"},
    {"name": "Delaware", "value": "DE"},
    {"name": "Florida", "value": "FL"},
    {"name": "Georgia", "value": "GA"},
    {"name": "Hawaii", "value": "HI"},
    {"name": "Idaho", "value": "ID"},
    {"name": "Illinois", "value": "IL"},
    {"name": "Indiana", "value": "IN"},
    {"name": "Iowa", "value": "IA"},
    {"name": "Kansas", "value": "KS"},
    {"name": "Kentucky", "value": "KY"},
    {"name": "Louisiana", "value": "LA"},
    {"name": "Maine", "value": "ME"},
    {"name": "Maryland", "value": "MD"},
    {"name": "Massachusetts", "value": "MA"},
    {"name": "Michigan", "value": "MI"},
    {"name": "Minnesota", "value": "MN"},
    {"name": "Mississippi", "value": "MS"},
    {"name": "Missouri", "value": "MO"},
    {"name": "Montana", "value": "MT"},
    {"name": "Nebraska", "value": "NE"},
    {"name": "Nevada", "value": "NV"},
    {"name": "New Hampshire", "value": "NH"},
    {"name": "New Jersey", "value": "NJ"},
    {"name": "New Mexico", "value": "NM"},
    {"name": "New York", "value": "NY"},
    {"name": "North Carolina", "value": "NC"},
    {"name": "North Dakota", "value": "ND"},
    {"name": "Ohio", "value": "OH"},
    {"name": "Oklahoma", "value": "OK"},
    {"name": "Oregon", "value": "OR"},
    {"name": "Pennsylvania", "value": "PA"},
    {"name": "Rhode Island", "value": "RI"},
    {"name": "South Carolina", "value": "SC"},
    {"name": "South Dakota", "value": "SD"},
    {"name": "Tennessee", "value": "TN"},
    {"name": "Texas", "value": "TX"},
    {"name": "Utah", "value": "UT"},
    {"name": "Vermont", "value": "VT"},
    {"name": "Virginia", "value": "VA"},
    {"name": "Washington", "value": "WA"},
    {"name": "West Virginia", "value": "WV"},
    {"name": "Wisconsin", "value": "WI"},
    {"name": "Wyoming", "value": "WY"}
]
  

const PersonalInfo = (props: Props) => {


    const goPrev = () => {
        
    }

    const goNext = () => {
        if(!tempPersonal.name.first.match("[a-zA-Z]") || tempPersonal.name.first.length == 0){
            toast.error("Please enter a valid first name.");
            return;
        }
        if(!tempPersonal.name.last.match("[a-zA-Z]") || tempPersonal.name.last.length == 0){
            toast.error("Please enter a valid last name.");
            return;
        }
        if(tempPersonal.address.address.length == 0){
            toast.error("Please enter a valid street address.");
            return;
        }
        if(!tempPersonal.address.city.match("[a-zA-Z]") || tempPersonal.address.city.length == 0){
            toast.error("Please enter a valid city name");
            return;
        }
        if(tempPersonal.address.zip.length != 5 || !tempPersonal.address.zip.match("[0-9]")){
            toast.error("Please enter a valid zip code");
            return;
        }
        if(!tempPersonal.email.match("^[^@]+@[^@]+\.[^@]+$") || tempPersonal.email.length == 0){
            toast.error("Please enter a valid email address");
            return;
        }
        if(!tempPersonal.phoneMobile.match('^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$') || tempPersonal.phoneMobile.length == 0){
            toast.error("Please enter a valid mobile phone number");
            return;
        }

        props.changeMasterState("personalInfo", tempPersonal);
        props.goNextPage()
    }

    const [tempPersonal, setTempPersonal] = useState<types.PersonalInfo>(empty)

    useEffect(() => {
        
        setTempPersonal(props.masterData.personalInfo);

    }, [props.masterData])


    const [pDisabled, setPDisabled] = useState(true);
    const [nDisabled, setNDisabled] = useState(false);



  return (
    <div className='h-full w-full flex flex-col space-y-2 justify-between p-4'>
        <div className='flex flex-col space-y-2'>
            <ModalTitle title="Let's Get to Know You"/>
            <p className='font-semibold text-lg'>Name</p>
            <div className='flex flex-row justify-between space-x-4'>
                <div className='flex flex-col items-center'>
                    <div className='w-[50px]'>
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
                    <p className='text-xs'>First*</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-[100px]'>
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
                    <p className='text-xs'>Last*</p>
                </div>
            </div>
            <p className='font-semibold text-lg'>Home Residence</p>
            <div className='flex flex-row justify-between space-x-4 items-center'>
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
                    <p className='text-xs'>Street Address*</p>
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
                    <p className='text-xs'>City*</p>
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
                    <p className='text-xs'>5 digit zip code*</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Select onChange={(e) => {
                            setTempPersonal(prev => ({
                                ...prev,
                                address: {
                                    ...prev.address,
                                    state: e.target.value as string
                                }
                            }))
                    }} 
                         className='w-[200px]'>
                        {states.map((item) => (
                            <MenuItem value={item.value}>{item.name}</MenuItem>
                        ))}
                    </Select>
                    <p className='text-xs'>State*</p>
                </div>
            </div>
            <p className='font-semibold text-lg'>Email*</p>
            <Input type='email' placeholder='tony@sopranowastemanagement.com' value={tempPersonal.email}
            onChange={(e) => {
                setTempPersonal(prev => ({
                    ...prev,
                    email: e.target.value
                }))
            }}/>
            <div className='flex flex-row space-x-4'>
                <div className='flex flex-col'>
                    <p className='font-semibold text-lg'>Phone Number (Mobile)*</p>
                    <Input type='tel' placeholder='(123) 123-1234' value={tempPersonal.phoneMobile}
                    onChange={(e) => {
                        setTempPersonal(prev => ({
                            ...prev,
                            phoneMobile: e.target.value
                        }))
                    }}/>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold text-lg'>Phone Number (Alternate)</p>
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