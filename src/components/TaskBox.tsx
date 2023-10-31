'use client';
import TaskTitle from '@/components/TaskTitle';
import React, { useState } from 'react';
import TagsSection from '@/components/TagsSection';
import DropdownContainer from './DropdownContainer';
import CreateButton from '@/components/Button/CreateButton';
import dynamic from 'next/dynamic';

const DynamicEditor = dynamic(
  () => {
    return import('@/components/Editor/Editor');
  },
  {
    ssr: false,
  }
);

const DynamicToolbar = dynamic(
  () => {
    return import('@/components/Editor/CustomToolbar');
  },
  {
    ssr: false,
  }
);

interface DropdownItem {
  id: string;
  name: string;
  iconClass: string;
}

const TaskBox = () => {
  const [selectedItems, setSelectedItems] = useState<DropdownItem[]>([]);
  const [taskTitle, setTaskTitle] = useState<string>('');
  const [taskDescription, setTaskDescription] = useState<string>('');

  const removeItem = (item: DropdownItem) => {
    setSelectedItems(
      selectedItems.filter((selected) => selected.name !== item.name)
    );
  };

  return (
    <>
      <div className='border-1 flex min-h-[271px] flex-col rounded-[10px] shadow-3xl max-[630px]:w-[350px] sm:w-[500px] md:w-[600px] lg:w-[718px]'>
        <div className='w-full px-[16px] pt-[16px]'>
          <TaskTitle />
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
                  taskTitle={taskTitle}
                  taskDescription={taskDescription}
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
