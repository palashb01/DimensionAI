'use client';
import TaskTitle from '@/components/CreateTask/TaskTitle';
import React, { useState } from 'react';
import TagsSection from '@/components/CreateTask/TagsSection';
import DropdownContainer from './DropdownContainer';
import CreateButton from '@/components/CreateTask/Button/CreateButton';
import dynamic from 'next/dynamic';
import DropdownItem from '@/types/DropdownItem';
import AiRecommendation from '@/components/CreateTask/Recommendation/AiRecommendation';
import { createTask } from '@/components/CreateTask/Button/CreateButton';

const DynamicEditor = dynamic(
  () => {
    return import('@/components/CreateTask/Editor/Editor');
  },
  {
    ssr: false,
  }
);

const DynamicToolbar = dynamic(
  () => {
    return import('@/components/CreateTask/Editor/CustomToolbar');
  },
  {
    ssr: false,
  }
);

interface TaskBoxProps {
  setShowCreateTask: React.Dispatch<React.SetStateAction<boolean>>;
}
const TaskBox: React.FC<TaskBoxProps> = ({ setShowCreateTask }) => {
  const [selectedItems, setSelectedItems] = useState<DropdownItem[]>([]);
  const [taskTitle, setTaskTitle] = useState<string>('');
  const [taskDescription, setTaskDescription] = useState<string>('');
  const [creatingTask, setcreatingTask] = useState(false);
  const removeItem = (item: DropdownItem) => {
    setSelectedItems(
      selectedItems.filter((selected) => selected.name !== item.name)
    );
  };

  function buttonisPressed(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      if (taskTitle !== '' && taskDescription !== '') {
        createTask({
          tags: selectedItems,
          taskTitle,
          taskDescription,
          setcreatingTask,
          setTaskTitle,
          setTaskDescription,
          setSelectedItems,
        });
      }
    }
  }

  return (
    <>
      <div
        onKeyDown={buttonisPressed}
        className='border-1 flex min-h-[271px] flex-col rounded-[10px] shadow-3xl max-[630px]:w-[350px] sm:w-[500px] md:w-[600px] lg:w-[718px]'
      >
        <div className='w-full px-[16px] pt-[16px]'>
          <TaskTitle setShowCreateTask={setShowCreateTask} />
          <div className='w-full px-[8px]'>
            <DynamicEditor
              setTaskTitle={setTaskTitle}
              taskTitle={taskTitle}
              taskDescription={taskDescription}
              setTaskDescription={setTaskDescription}
            />
          </div>
        </div>
        <div className='mt-auto'>
          <div className='w-full px-[16px] py-[16px]'>
            <div>
              <TagsSection
                selectedItems={selectedItems}
                removeItem={removeItem}
              />
            </div>
            <div className='px-[8px]'>
              <AiRecommendation
                taskTitle={taskTitle}
                taskDescription={taskDescription}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
              />
            </div>
            <div>
              <DropdownContainer
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
              />
            </div>
          </div>
          <hr className='bg-linebreakergray' />
          <div className='w-full px-[16px] py-[16px]'>
            <div className='flex flex-wrap items-center justify-between px-2 max-[630px]:gap-3'>
              <DynamicToolbar />
              <span>
                <CreateButton
                  tags={selectedItems}
                  taskTitle={taskTitle}
                  taskDescription={taskDescription}
                  setTaskTitle={setTaskTitle}
                  setTaskDescription={setTaskDescription}
                  creatingTask={creatingTask}
                  setcreatingTask={setcreatingTask}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskBox;
