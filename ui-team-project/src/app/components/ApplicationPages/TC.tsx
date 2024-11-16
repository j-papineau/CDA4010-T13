import React, { useState } from 'react'
import PrevNextBtn from './PrevNextBtn';
import ModalTitle from './ModalTitle';
import * as types from "@/app/util/types"
import { Button, Checkbox } from '@mui/material';
import toast from 'react-hot-toast';

type Props = {
  goNextPage: () => void;
  goPrevPage: () => void;
  changeMasterState: (attribute: string, value: types.MilitaryService | types.JobReqs | types.PersonalInfo | types.Education[] | types.WorkXP[] | types.Skill[] | boolean) => void;
  masterData: types.MasterData;
}

const TC = (props: Props) => {

  const [pDisabled, setPDisabled] = useState(false);
  const [nDisabled, setNDisabled] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const onNext = () => {
    if(!accepted){
      toast.error("You must accept the terms and conditions to submit your application");
      return;
    }
    props.goNextPage();
  }

  const onPrev = () => {
    props.goPrevPage();
  }


  return (
    <div className='h-full w-full flex flex-col space-y-2 justify-between p-4 items-center'>
      <div className='flex flex-col space-y-2'>
        <ModalTitle title='Terms and Conditions'/>
      </div>
      
      <div className='h-[50%] overflow-y-scroll w-[75%]'>
          <p>TO HAVE UNFINISHED BUSINESS LOOK AT MY FORM, I AGREE THAT:
          THE ACCEPTANCE OF THIS FORM IS NOT A CONTRACT OF EMPLOYMENT. NO EMPLOYMENT SHALL BEGIN UNTIL A FORMAL OFFER IS GIVEN AND SIGNED BY BOTH THE EMPLOYER AND EMPLOYEE. IF I GET THE JOB, THE COMPANY CAN STILL END IT FOR ANY REASON NO MATTER WHAT ANY COMPANY FORMS OR RULES SAY. ONLY THE COMPANY PRESIDENT OR GENERAL MANAGER CAN MAKE A WRITTEN FORM CHANGING THIS FACT. THE COMPANY IS ALSO ALLOWED TO CUT BENEFITS AND CHANGE IT’S RULES.
          I ALLOW EVERYTHING I SAID IN THIS FORM TO BE CHECKED. IF I LIE OR LEAVE OUT DETAILS IT CAN CAUSE ME TO LOSE THE JOB. I ALLOW THE COMPANY TO CONTACT EVERY PERSON OR PLACE IN THE FORM THAT I PERMITTED TO BE CONTACTED. I WILL NOT BLAME THE COMPANY FOR ANYTHING THAT MIGHT HAPPEN BECAUSE OF THIS CONTACT.
          I AGREE TO THE COMPANY DRUG AND ALCOHOL RULES. THESE RULES WILL NEED ME TO DO TESTS BEFORE AND AFTER I START MY JOB, AND TO KEEP THE JOB I NEED TO KEEP PASSING THESE TESTS AND OTHER HEALTH EXAMS NEEDED FOR THE JOB.
          I KNOW THAT THE COMPANY CAN ASK FOR A REPORT ON MY CREDIT, BACKGROUND, CHARACTER, PERSONAL TRAITS, AND MODE OF LIVING. I AM ALLOWED TO WRITE ASKING ABOUT ANY OTHER INFORMATION THAT IS ON THIS REQUESTED REPORT, WHICH IS ALLOWED UNDER THE FAIR CREDIT REPORTING ACT.
          I AGREE THAT IF I GET THE JOB, THEN FOR 60 DAYS AFTER EITHER THE COMPANY OR I CAN END THE JOB FOR ANY REASON.
      </p>
      </div>
      <div className='flex flex-row space-x-2 items-center'>
        <Checkbox checked={accepted} onClick={(e) => setAccepted(!accepted)} />
        <p>I agree to these terms and conditions</p>
      </div>
      <div className='flex flex-row justify-between p-10 w-full'>
        <Button onClick={onPrev} variant='contained' color='error'>Go Back</Button>
        <Button onClick={onNext} variant='contained' color='success'>Finish Application</Button>
      </div>
    </div>
  )
}

export default TC