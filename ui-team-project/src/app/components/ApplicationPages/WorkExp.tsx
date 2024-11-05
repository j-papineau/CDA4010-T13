import React, { useState } from 'react'
import PrevNextBtn from './PrevNextBtn';
import ModalTitle from './ModalTitle';
import WorkItem from '../input/WorkItem';
import { Button } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';

type Props = {
  goNextPage: () => void;
  goPrevPage: () => void;
}

export interface WorkXP {
  company: string;
  start: Date;
  end: Date;
  position: string;
  duties: string;
}

const WorkExp = (props: Props) => {

  var blankItem: WorkXP = {
      company: "",
      start: new Date(),
      end: new Date(),
      position: "",
      duties: ""
  }

  const [items, setItems] = useState<WorkXP[]>([blankItem])
  const [pDisabled, setPDisabled] = useState(false);
  const [nDisabled, setNDisabled] = useState(false);

  const onNext = () => {
    props.goNextPage();
  }

  const onPrev = () => {
    props.goPrevPage();
  }

  const updateItem = (index: number, attribute: string, newVal: string) => {

  }

  const addItem = () => {
    setItems([...items, blankItem])
  }


  return (
    <div className='h-full w-full flex flex-col space-y-2 justify-between p-4'>
      <div className='flex flex-col space-y-2'>
        <ModalTitle title='Your Work Experience'/>
      </div>
      {items.map((item, key) => (
        <div key={key}>
          <WorkItem />
        </div>
      ))}
      <Button onClick={addItem} colorScheme='blue' width={220}>
        <div className='flex flex-row space-x-2 items-center'>
          <FaPlus/>
          <p>Add Another</p>
        </div>
      </Button>
      <PrevNextBtn goNext={onNext} goPrev={onPrev} prevDisabled={pDisabled} nextDisabled={nDisabled}/>
    </div>
  )
}

export default WorkExp