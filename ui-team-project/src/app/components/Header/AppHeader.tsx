import React from 'react'
import Image from 'next/image'

type Props = {}

const AppHeader = (props: Props) => {
  return (
    <div className='flex flex-col space-y-4 w-full items-center'>
        <div className='flex flex-row p-2 w-[70%] items-center justify-center space-x-4'>
            <Image alt='UNF logo' src={"/img/UNF.png"} width={100} height={100} />
            <p className='text-4xl text-blue-900 font-semibold'>UNFinished Business</p>
        </div>
        <div>
            <p className='text-2xl'>Whatmacallit Automation Flumbologist Application</p>
        </div>
    </div>
  )
}

export default AppHeader