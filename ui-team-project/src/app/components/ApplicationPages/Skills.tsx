import React, { useEffect, useState } from 'react'
import PrevNextBtn from './PrevNextBtn';
import ModalTitle from './ModalTitle';
import * as types from "@/app/util/types"
import { Button, Input, MenuItem, Select } from '@mui/material';
import { FaPlus } from 'react-icons/fa';

type Props = {
  goNextPage: () => void;
  goPrevPage: () => void;
  changeMasterState: (attribute: string, value: types.MilitaryService | types.JobReqs | types.PersonalInfo | types.Education[] | types.WorkXP[] | types.Skill[] | boolean) => void;
  masterData: types.MasterData;
}

const blankItem: types.Skill = {
  name: "",
  level: ""
}



const Skills = (props: Props) => {

  const [pDisabled, setPDisabled] = useState(false);
  const [nDisabled, setNDisabled] = useState(false);
  const [items, setItems] = useState<types.Skill[]>([blankItem])

  useEffect(() => {
    setItems(props.masterData.skills)
  }, [props.masterData])


  const onNext = () => {
    //validation
    props.changeMasterState("skills", items)
    props.goNextPage();
  }

  const onPrev = () => {
    props.goPrevPage();
  }

  const updateItem = (index: number, attribute: "name" | "level", newVal: string) => {
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
    setItems([...items, blankItem]);
  }
  


  return (
    <div className='h-full w-full flex flex-col space-y-2 justify-between p-4'>
      <div className='flex flex-col space-y-2'>
        <ModalTitle title='Your Skills'/>
      </div>
      {items.map((item, key) => (
        <div key={key} className='flex flex-row w-full p-4 space-x-4'>
          <div className='flex flex-col'>
            <p>Skill</p>
            <Input value={item.name} onChange={(e) => updateItem(key, "name", e.target.value)} placeholder='React Development'/>
          </div>
          <div className='flex flex-col w-[200px]'>
            <p>Proficiency</p>
            <Select value={item.level} size='small' onChange={(e) => {
              updateItem(key, "level", e.target.value as string);
            }}>
              <MenuItem value="Proficient">Proficient</MenuItem>
              <MenuItem value="Intermediate">Intermediate</MenuItem>
              <MenuItem value="Beginner">Beginner</MenuItem>
            </Select>
          </div>
        </div>
      ))}
      <Button className='flex flex-row items-center space-x-2' onClick={addItem}>
        <FaPlus/>
        <p>Add New Skill</p>
      </Button>
      <PrevNextBtn goNext={onNext} goPrev={onPrev} prevDisabled={pDisabled} nextDisabled={nDisabled}/>
    </div>
  )
}

export default Skills