import React, { useEffect, useState } from 'react'
import PrevNextBtn from './PrevNextBtn';
import ModalTitle from './ModalTitle';
import EducationItem from '../input/EducationItem';
import { Button } from '@mui/material';
import { FaPlus, FaTrash } from 'react-icons/fa';
import * as types from '@/app/util/types'
import toast from 'react-hot-toast';

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
    var anyErrs = false;

    items.forEach(item => {
      if(item.name.length == 0){
        toast.error("Please enter a valid institution name.");
        anyErrs = true;
        return;
      }
      if(item.degree.length == 0){
        toast.error("Please enter a valid degree or certificate obtained from " + item.name);
        anyErrs = true;
        return;
      }
    })

    if(!anyErrs){
      props.changeMasterState("education", items);
      props.goNextPage()
    }

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

  const removeItem = (index: number) => {
      let filtered = items.filter((item, key) => {
        return key != index
      })

      setItems(filtered);
  }


  return (
    <div className='h-full w-full flex flex-col space-y-2 justify-between p-4'>
      <div className='flex flex-col space-y-2 items-center'>
        <ModalTitle title='Your Education'/>
        {items.map((item, key) => (
          <div key={key} className='flex flex-row space-x-2 items-center'>
            <EducationItem data={item} index={key} updateItemString={updateItemString} updateItemBool={updateItemBool}/>
            <FaTrash onClick={(e) => removeItem(key)} size={20} className='text-red-600 hover:text-red-300 hover:cursor-pointer' />
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