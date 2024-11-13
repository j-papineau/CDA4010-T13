import React, { useEffect, useState } from 'react'
import PrevNextBtn from './PrevNextBtn';
import ModalTitle from './ModalTitle';
import WorkItem from '../input/WorkItem';
import { Button } from '@mui/material';
import { FaPlus } from 'react-icons/fa';
import { WorkXP } from '@/app/util/types';
import * as types from '@/app/util/types'

type Props = {
  goNextPage: () => void;
  goPrevPage: () => void;
  changeMasterState: (attribute: string, value: types.MilitaryService | types.JobReqs | types.PersonalInfo | types.Education[] | types.WorkXP[] | types.Skill[] | boolean) => void;
  masterData: types.MasterData
}

const blankItem: WorkXP = {
  company: "",
  start: "",
  end: "",
  position: "",
  duties: ""
}



const WorkExp = (props: Props) => {



  const [items, setItems] = useState<WorkXP[]>([blankItem])
  const [pDisabled, setPDisabled] = useState(false);
  const [nDisabled, setNDisabled] = useState(false);

  const onNext = () => {
    props.changeMasterState("work", items);
    props.goNextPage();
  }

  const onPrev = () => {
    props.goPrevPage();
  }

  useEffect(() => {
    setItems(props.masterData.work);
  }, [props.masterData])

  const updateItem = (index: number, attribute: "company" | "position" | "duties" | "start" | "end", newVal: string) => {
    setItems((prev) => {
      const updatedItems = [...prev];
      const itemToUpdate = updatedItems[index];
      if(itemToUpdate){
        itemToUpdate[attribute] = newVal;
      }

      return updatedItems
    })
  }

  const updateItemDate = (index: number, attribute: "start" | "end", newVal: Date) => {

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
          <WorkItem data={item} updateItem={updateItem} updateItemDate={updateItemDate} index={key} />
        </div>
      ))}
      <Button onClick={addItem}>
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