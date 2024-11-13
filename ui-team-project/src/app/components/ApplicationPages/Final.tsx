import React from 'react'
import ModalTitle from './ModalTitle'
import { Button } from '@mui/material'
import * as types from '@/app/util/types';
import { useRouter } from 'next/navigation';

type Props = {
    masterData: types.MasterData;
    goFirst: () => void;
}

const Final = (props: Props) => {
    const router = useRouter();

    const onFinish = () => {
        // //redir to thank you page
        // router.push("/thankyou")
    }

    const onBack = () => {
        props.goFirst();
    }



  return (
    <div className='h-full w-full flex flex-col space-y-2 justify-between p-4 items-center'>
    <div className='flex flex-col space-y-2'>
      <ModalTitle title='Does this look right?'/>
    </div>
    <div>
        <p>Overview of entered data will be here</p>
    </div>
    <div className='flex flex-row w-full justify-between'>
        <Button variant='contained' onClick={onBack}>Go Back</Button>
        <Button variant='contained' color='success'>Finish My Application</Button>
    </div>
  </div>
  )
}

export default Final