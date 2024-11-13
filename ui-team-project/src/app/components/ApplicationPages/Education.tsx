import React, { useEffect, useState } from 'react'
import PrevNextBtn from './PrevNextBtn';
import ModalTitle from './ModalTitle';
import EducationItem from '../input/EducationItem';
import { Button } from '@mui/material';
import { FaPlus } from 'react-icons/fa';
import * as types from '@/app/util/types'

type Props = {
  goNextPage: () => void;
  goPrevPage: () => void;
  changeMasterState: (attribute: string, value: types.MilitaryService | types.JobReqs | types.PersonalInfo | types.Education[] | types.WorkXP[] | types.Skill[] | boolean) => void;
  masterData: types.MasterData
}


const Education = (props: Props) => {

  var blankItem: types.Education = {
    name: "",
    degree: "",
    major: "",
    graduation: "",
    completed: false,
  }

  const [items, setItems] = useState<types.Education[]>([blankItem])
  const [pDisabled, setPDisabled] = useState(false);
  const [nDisabled, setNDisabled] = useState(false);

  const onNext = () => {
    // console.log(items);
    props.changeMasterState("education", items);
    props.goNextPage()
    // props.goNextPage();
  }

  const onPrev = () => {
    props.goPrevPage();
  }



  useEffect(() => {
    setItems(props.masterData.education)
  }, [props.masterData])

  const updateItemString = (index: number, attribute: "name" | "degree" | "major" | "graduation", newVal: string) => {
    setItems((prev) => {
      const updatedItems = [...prev];
      const itemToUpdate = updatedItems[index];
      if(itemToUpdate){
        itemToUpdate[attribute] = newVal;
      }

      return updatedItems
    })
  }

  const updateItemBool = (index: number, attribute: "completed", newVal: boolean) => {
    setItems((prev) => {
      const updatedItems = [...prev];
      const itemToUpdate = updatedItems[index];
      if(itemToUpdate){
        itemToUpdate[attribute] = newVal;
      }

      return updatedItems
    })
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
            <EducationItem data={item} index={key} updateItemString={updateItemString} updateItemBool={updateItemBool}/>
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