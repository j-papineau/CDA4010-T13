import React, { useState } from 'react'
import PrevNextBtn from './PrevNextBtn';
import ModalTitle from './ModalTitle';

type Props = {
  goNextPage: () => void;
  goPrevPage: () => void;
}

const Skills = (props: Props) => {

  const [pDisabled, setPDisabled] = useState(false);
  const [nDisabled, setNDisabled] = useState(false);

  const onNext = () => {
    props.goNextPage();
  }

  const onPrev = () => {
    props.goPrevPage();
  }


  return (
    <div className='h-full w-full flex flex-col space-y-2 justify-between p-4'>
      <div className='flex flex-col space-y-2'>
        <ModalTitle title='Your Skills'/>
      </div>
      <PrevNextBtn goNext={onNext} goPrev={onPrev} prevDisabled={pDisabled} nextDisabled={nDisabled}/>
    </div>
  )
}

export default Skills