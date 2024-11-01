import ButtonTest from '@/app/components/Header/ButtonTest'
import Header from '@/app/components/Header/Header'
import React from 'react'

type Props = {}

const ViewJob = (props: Props) => {



  return (
    <div className='flex flex-col items-center'>
      <Header titleText='UNFinished Business Job Portal'/>
      <ButtonTest />
    </div>
  )
}


export default ViewJob