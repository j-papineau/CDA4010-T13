import React, { useEffect, useState } from 'react'
import PrevNextBtn from './PrevNextBtn';
import ModalTitle from './ModalTitle';
import WorkItem from '../input/WorkItem';
import { Button } from '@mui/material';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { WorkXP } from '@/app/util/types';
import * as types from '@/app/util/types'
import toast from 'react-hot-toast';

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
    let errs = false;
    items.forEach((item) => {
      if(item.company.length == 0){
        errs = true;
        toast.error("Please enter a valid company name");
      }
      if(item.start.length == 0){
        errs = true;
        toast.error("Please enter a valid start date for your time at " + item.company);
      }
      if(item.end.length == 0){
        errs = true;
        toast.error("Please enter a valid end date for your time at " + item.company);
      }
      if(item.position.length == 0){
        toast.error("Please enter a valid position for your time at " + item.company);
      }
      if(item.duties.length == 0){
        toast.error("Please enter your duties for your time at " + item.company);
      }
    })
    if(!errs){
      props.changeMasterState("work", items);
      props.goNextPage();
    }

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

  const removeItem = (index: number) => {
    let filtered = items.filter((item, key) => {
      return key != index
    })
    setItems(filtered);
}


  return (
    <div className='h-full w-full flex flex-col space-y-2 justify-between p-4'>
      <div className='flex flex-col space-y-2'>
        <ModalTitle title='Your Work Experience'/>
      </div>
      {items.map((item, key) => (
        <div key={key} className='flex flex-row space-x-4 items-center'>
          <WorkItem data={item} updateItem={updateItem} updateItemDate={updateItemDate} index={key} />
          <FaTrash onClick={(e) => removeItem(key)} size={20} className='text-red-600 hover:text-red-300 hover:cursor-pointer' />
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