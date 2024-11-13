import React, { useEffect, useState } from 'react'
import ModalTitle from './ModalTitle'
import PrevNextBtn from './PrevNextBtn'
import Availability from '../input/Availability';
import { Switch } from '@mui/material';
import * as types from "@/app/util/types"

type Props = {
    goNext: () => void;
    goPrev: () => void;
    changeMasterState: (attribute: string, value: types.MilitaryService | types.JobReqs | types.PersonalInfo | types.Education[] | types.WorkXP[] | types.Skill[] | boolean) => void;
    masterData: types.MasterData
}

const empty: types.JobReqs = {
  availability: ["", "", "", "", "", ""],
  oldEnough: false,
  license: false,
  liftTwenty: false,
  trafficIncident: false,
  dui: false
}

const JobReqs = (props: Props) => {

    const [pDisabled, setPDisabled] = useState(false);
    const [nDisabled, setNDisabled] = useState(false);
    const [tempData, setTempData] = useState<types.JobReqs>(empty);

    useEffect(() => {
        setTempData(props.masterData.jobReqs)
    }, [props.masterData])

    const onNext = () => {
        props.changeMasterState("jobReqs", tempData)
        props.goNext();
    }

    const onPrev = () => {
        props.goPrev();
    }

    const handleAvailabilityChange = (op: string, value: string) => {
      setTempData(prev => {
        let newAvailability = [...prev.availability]; // Make a shallow copy of the availability array

        switch (op) {
            case "Monday":
                newAvailability[0] = value; // Update Monday (index 0)
                break;
            case "Tuesday":
                newAvailability[1] = value; // Update Tuesday (index 1)
                break;
            case "Wednesday":
                newAvailability[2] = value; // Update Wednesday (index 2)
                break;
            case "Thursday":
                newAvailability[3] = value; // Update Thursday (index 3)
                break;
            case "Friday":
                newAvailability[4] = value; // Update Friday (index 4)
                break;
            case "Weekend":
                newAvailability[5] = value; // Update Weekend (index 5)
                break;
            default:
                break; // Do nothing for unrecognized `op` values
        }

        // Return the updated state with the new availability
        return {
            ...prev,
            availability: newAvailability
        };
      })
    }

    const handleOpenAvail = () => {
      setTempData(prev => ({
        ...prev,
        availability: ["Any", "Any", "Any", "Any", "Any", "Any"]
      }))
    }

  return (
    <div className='h-full w-full flex flex-col space-y-4 justify-between p-4'>
      <div className='flex flex-col space-y-2'>
        <ModalTitle title='Our Requirements'/>
        <Availability handleOpenAvail={handleOpenAvail} tempData={tempData} handleAvailabilityChange={handleAvailabilityChange}/>
        <p className='font-semibold'>Select all that apply</p>
        <div className='grid grid-cols-3 justify-between w-full space-y-2 items-center'>
          <p className='text-lg col-span-2'>Are you over 21?</p>
          <Switch checked={tempData.oldEnough} 
          onClick={() => {
            setTempData(prev => ({
              ...prev,
              oldEnough: !prev.oldEnough
            }))
          }}/>
          <p className='text-lg col-span-2'>Do you have a driver's license?</p>
          <Switch checked={tempData.license}
          onClick={() => {
            setTempData(prev => ({
              ...prev,
              license: !prev.license
            }))
          }}/>
          <p className='text-lg col-span-2'>Are you able to lift 20+ lbs.?</p>
          <Switch checked={tempData.liftTwenty}
          onClick={() => {
            setTempData(prev => ({
              ...prev,
              liftTwenty: !prev.liftTwenty
            }))
          }}/>
          <p className='text-lg col-span-2'>Have you been ruled at fault for a traffic incident in the last 3 years?</p>
          <Switch checked={tempData.trafficIncident}
          onClick={() => {
            setTempData(prev => ({
              ...prev,
              trafficIncident: !prev.trafficIncident
            }))
          }}/>
          <p className='text-lg col-span-2'>Have you ever had a DUI/DWI?</p>
          <Switch checked={tempData.dui}
          onClick={() => {
            setTempData(prev => ({
              ...prev,
              dui: !prev.dui
            }))
          }}/>
        </div>
      </div>

      <PrevNextBtn goNext={onNext} goPrev={onPrev} prevDisabled={pDisabled} nextDisabled={nDisabled}/>
    </div>
  )
}

export default JobReqs