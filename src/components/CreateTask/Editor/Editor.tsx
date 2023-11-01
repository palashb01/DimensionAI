'use client';
import React, { ChangeEvent } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { modules, formats } from './CustomToolbar';
import { Dispatch, SetStateAction } from 'react';

interface EditorProps {
  taskTitle: string;
  setTaskTitle?: Dispatch<SetStateAction<string>>;
  taskDescription: string;
  setTaskDescription?: Dispatch<SetStateAction<string>>;
}

const Editor: React.FC<EditorProps> = ({
  taskTitle,
  setTaskTitle,
  taskDescription,
  setTaskDescription,
}) => {
  const handleChange = (value: string) => {
    if (setTaskDescription) {
      setTaskDescription(value);
    }
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (setTaskTitle) {
      setTaskTitle(event.target.value);
    }
  };

  return (
    <div className='mt-6'>
      <input
        type='text'
        value={taskTitle}
        onChange={handleTitleChange}
        placeholder='Task title'
        className='w-full text-sm text-[#94989E] focus:outline-none'
      />
      <ReactQuill
        theme='default'
        value={taskDescription}
        onChange={handleChange}
        placeholder={'Describe this task...'}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Editor;
