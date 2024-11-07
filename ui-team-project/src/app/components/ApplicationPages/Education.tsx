import React, { useState } from 'react'
import PrevNextBtn from './PrevNextBtn';
import ModalTitle from './ModalTitle';
import EducationItem from '../input/EducationItem';
import { Button } from '@mui/material';
import { FaPlus } from 'react-icons/fa';

type Props = {
  goNextPage: () => void;
  goPrevPage: () => void;
}

export interface Education {
  name: string;
  degree: string;
  major: string;
  graduation: string;
  completed: boolean;
}

const Education = (props: Props) => {

  var blankItem: Education = {
    name: "",
    degree: "",
    major: "",
    graduation: "",
    completed: false,
  }

  const [items, setItems] = useState<Education[]>([blankItem])
  const [pDisabled, setPDisabled] = useState(false);
  const [nDisabled, setNDisabled] = useState(false);

  const onNext = () => {
    props.goNextPage();
  }

  const onPrev = () => {
    props.goPrevPage();
  }

  const addNewItem = () => {

  }

  const updateItem = (index: number, attribute: string, newVal: string | boolean) => {

  }

  const addItem = () => {
    console.log(items)
    setItems([...items, blankItem])

  }


  return (
    <div className='h-full w-full flex flex-col space-y-2 justify-between p-4'>
      <div className='flex flex-col space-y-2 items-center'>
        <ModalTitle title='Your Education'/>
        {items.map((item, key) => (
          <div key={key}>
            <EducationItem updateFunc={updateItem}/>
          </div>
        ))}
        <Button onClick={addItem}>
          <div className='flex flex-row space-x-2 items-center'>
            <FaPlus/>
            <p>Add Another</p>
          </div>
        </Button>
      </div>
      <PrevNextBtn goNext={onNext} goPrev={onPrev} prevDisabled={pDisabled} nextDisabled={nDisabled}/>
    </div>
  )
}

export default Education