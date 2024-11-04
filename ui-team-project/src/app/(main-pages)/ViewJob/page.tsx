"use client"
import ButtonTest from '@/app/components/Header/ButtonTest'
import Header from '@/app/components/Header/Header'
import React from 'react'
import Image from 'next/image'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

type Props = {}

const ViewJob = (props: Props) => {

  const router = useRouter();

  const handleApplyButton = () => {
      router.push("/application");
  }

  return (
    <div className='flex flex-col items-center w-full space-y-2 bg-[#f2f2f2] py-10'>
      <Header titleText='UNFinished Business Job Portal'/>
      <div className='flex flex-col md:flex-row justify-between w-[75%]'>
        <div className='flex flex-col space-x-2 text-center'>
          <p className='text-3xl tracking-wider'>Whatmacallit Automation Flumbologist</p>
          <p className='text-xl tracking-wide italic'>UNF Campus | $90,000 TC</p>
        </div>
        <div>
          <Image src="/img/map.png" alt="map location" height={500} width={500}/>
        </div>
      </div>
      <div className='flex flex-col w-[75%] text-center'>
        <p className='text-2xl italic tracking-wide'>Job Description</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatum facilis ea. Recusandae esse nostrum praesentium quas earum nemo saepe voluptas ipsum numquam suscipit mollitia, voluptate harum veniam quibusdam hic!
        Ea obcaecati eius, hic officia facere quis laboriosam expedita? Excepturi a totam deleniti soluta quisquam rerum facere, odit, veritatis optio eos ratione consequuntur perspiciatis, in saepe iste non maxime perferendis.
        Quasi sit ea magnam debitis suscipit voluptatem quae! Error assumenda, nemo aliquam cupiditate quasi quidem id atque dicta culpa totam beatae et voluptate ea laudantium odio cum natus quia facilis!
        Culpa quaerat dicta aliquid reiciendis ea architecto quis harum magni provident. Ea, ipsa fuga placeat magnam quae labore temporibus earum alias dolorem quas. Est, esse id incidunt ipsum magni delectus.
        Fugit exercitationem ex vitae consequuntur aspernatur, eos asperiores possimus adipisci, soluta nisi quos repellendus perspiciatis fuga blanditiis totam corrupti eligendi quaerat distinctio veniam vel minus necessitatibus tempora accusantium quas. Accusamus.
        Explicabo iusto tempore ipsam possimus, at, sit tenetur laudantium nemo optio voluptatibus ducimus iste quibusdam eum sunt temporibus nisi nulla? Consequatur quasi provident, ducimus nulla sequi dolor doloribus voluptas voluptatem!
        Quae libero beatae fuga possimus dignissimos neque amet voluptatum alias nam sequi repellat vel quo odio laboriosam autem inventore recusandae, dolorum explicabo nihil perspiciatis, minima pariatur doloribus accusantium. Maiores, doloremque.
        Eligendi eius voluptates minus ea, tenetur, exercitationem aut possimus inventore nisi saepe vitae adipisci, fuga non voluptas accusamus reprehenderit nihil suscipit sequi et similique sunt blanditiis. Quis quaerat id ad!
        Fugiat commodi eum facilis! Minus, dolorum aliquid natus mollitia quam blanditiis veniam ex ipsam voluptatum doloribus soluta. Eum illum iure pariatur. Accusantium illo dolorum nam vero voluptatem id porro doloremque.
        Architecto incidunt laudantium mollitia, blanditiis possimus porro, perferendis, eaque nemo explicabo hic harum quo omnis? Corrupti doloremque harum nihil! Quidem veniam porro quasi voluptatum ducimus sunt ratione molestias vero dignissimos!</p>
      </div>
      <Button onClick={handleApplyButton} colorScheme='blue'>Apply Now</Button>
    </div>
  )
}


export default ViewJob