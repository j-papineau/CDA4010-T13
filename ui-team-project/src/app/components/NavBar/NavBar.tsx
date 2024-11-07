import Image from 'next/image'
import React from 'react'


const NavBar = () => {
  return (
    <div className='flex flex-row justify-between py-4 bg-blue-950 text-white items-center px-10'>
        <div className='flex flex-row space-x-2 items-center'>
          <Image src={"/img/osprey.png"} height={50} width={50} alt='osprey logo'/>
          <p className='tracking-wide font-bold'>UNFinished Business</p>
        </div>
        <div className='flex flex-row space-x-6'>
          <a className='hover:underline hover:cursor-pointer' href='/'>Home</a>
          <a className='hover:underline hover:cursor-pointer'>About</a>
          <a className='hover:underline hover:cursor-pointer'>Our Team</a>
        </div>
    </div>
  )
}

export default NavBar