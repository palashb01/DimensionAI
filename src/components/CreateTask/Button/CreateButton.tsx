import React, { useState } from 'react';
import DropdownItem from '@/types/DropdownItem';
import axios from 'axios';
import Lottie from 'lottie-react';
import loader from '@/lotties/loader.json';

interface CreateButtonProps {
  tags: DropdownItem[];
  taskTitle: string;
  taskDescription: string;
  setcreatingTask?: React.Dispatch<React.SetStateAction<boolean>>;
  setTaskTitle?: React.Dispatch<React.SetStateAction<string>>;
  setTaskDescription?: React.Dispatch<React.SetStateAction<string>>;
  setSelectedItems?: React.Dispatch<React.SetStateAction<DropdownItem[]>>;
  creatingTask?: boolean;
}

export const createTask = async ({
  tags,
  taskTitle,
  taskDescription,
  setcreatingTask,
  setTaskTitle,
  setTaskDescription,
  setSelectedItems,
}: CreateButtonProps) => {
  try {
    const response = await axios.post('/api/CreateTask', {
      taskTitle,
      taskDescription,
      tags,
    });
    if (response.status === 200) {
      setcreatingTask && setcreatingTask(false);
      setTaskTitle && setTaskTitle('');
      setTaskDescription && setTaskDescription('');
      setSelectedItems && setSelectedItems([]);
    }
  } catch (error) {
    console.error('Error creating task:', error);
  }
};

const CreateButton: React.FC<CreateButtonProps> = ({
  tags,
  taskTitle,
  taskDescription,
  setTaskTitle,
  setTaskDescription,
  setSelectedItems,
  creatingTask,
  setcreatingTask,
}) => {
  const handleSubmit = () => {
    if (taskTitle !== '' && taskDescription !== '') {
      if (setcreatingTask) {
        setcreatingTask(true);
      }
      createTask({
        tags,
        taskTitle,
        taskDescription,
        setcreatingTask,
        setTaskTitle,
        setTaskDescription,
        setSelectedItems,
      });
    }
  };
  return (
    <button
      onClick={handleSubmit}
      className='flex items-center gap-3 rounded-[8px] border border-[#533BE5] bg-[#533BE5] px-3 font-medium text-[#FFFFFF] shadow-1xl'
    >
      {creatingTask ? (
        <Lottie
          animationData={loader}
          loop={true}
          className='h-[30px] w-[30px]'
        />
      ) : (
        <span>Create</span>
      )}
      <span className='h-[33px] w-[1px] bg-breaker' />
      <span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
        >
          <path
            d='M12.6667 4C12.4899 4 12.3203 4.07024 12.1953 4.19526C12.0703 4.32029 12.0001 4.48986 12.0001 4.66667V7.33333C12.0001 7.51014 11.9298 7.67971 11.8048 7.80474C11.6798 7.92976 11.5102 8 11.3334 8H4.94005L5.80672 7.14C5.93226 7.01446 6.00278 6.8442 6.00278 6.66667C6.00278 6.48913 5.93226 6.31887 5.80672 6.19333C5.68118 6.0678 5.51092 5.99727 5.33339 5.99727C5.15585 5.99727 4.98559 6.0678 4.86005 6.19333L2.86005 8.19333C2.79936 8.25674 2.75178 8.3315 2.72005 8.41333C2.65337 8.57564 2.65337 8.75769 2.72005 8.92C2.75178 9.00183 2.79936 9.0766 2.86005 9.14L4.86005 11.14C4.92203 11.2025 4.99576 11.2521 5.077 11.2859C5.15824 11.3198 5.24538 11.3372 5.33339 11.3372C5.42139 11.3372 5.50853 11.3198 5.58977 11.2859C5.67101 11.2521 5.74474 11.2025 5.80672 11.14C5.86921 11.078 5.9188 11.0043 5.95265 10.9231C5.98649 10.8418 6.00392 10.7547 6.00392 10.6667C6.00392 10.5787 5.98649 10.4915 5.95265 10.4103C5.9188 10.329 5.86921 10.2553 5.80672 10.1933L4.94005 9.33333H11.3334C11.8638 9.33333 12.3725 9.12262 12.7476 8.74755C13.1227 8.37247 13.3334 7.86377 13.3334 7.33333V4.66667C13.3334 4.48986 13.2631 4.32029 13.1381 4.19526C13.0131 4.07024 12.8435 4 12.6667 4Z'
            fill='white'
          />
        </svg>
      </span>
    </button>
  );
};

export default CreateButton;
