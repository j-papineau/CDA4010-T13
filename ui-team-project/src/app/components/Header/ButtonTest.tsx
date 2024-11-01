"use client"
import { Button } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const ButtonTest = (props: Props) => {

    const handleButton = () => {
        
    }


  return (
    <div>
        <Button onClick={handleButton} size={'lg'} colorScheme='teal' >Test</Button>
    </div>
  )
}

export default ButtonTest