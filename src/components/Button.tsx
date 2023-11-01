import Lottie from 'lottie-react';
import loader from '@/lotties/loader.json';
import React from 'react';
import Header from '@/lotties/Header.json';

interface ButtonProps {
  setShowCreateTask: React.Dispatch<React.SetStateAction<boolean>>;
}

const Button: React.FC<ButtonProps> = ({ setShowCreateTask }) => {
  return (
    <button
      onClick={() => setShowCreateTask(true)}
      className='mb-3 mt-3 flex items-center gap-3 rounded-[8px] border border-[#533BE5] bg-[#533BE5] px-3 font-medium text-[#FFFFFF] shadow-1xl'
    >
      <span>Create Task</span>
      <span className='h-[33px] w-[1px] bg-breaker' />
    </button>
  );
};

export default Button;
