'use client';
import TaskBox from '../components/CreateTask/TaskBox';
import View from '@/components/TasksView/View';
import { useState } from 'react';
import Button from '@/components/Button';

export default function Home() {
  const [showCreateTask, setShowCreateTask] = useState<boolean>(false);
  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center'>
      {showCreateTask ? (
        <TaskBox setShowCreateTask={setShowCreateTask} />
      ) : (
        <>
          <View />
          <Button setShowCreateTask={setShowCreateTask} />
        </>
      )}
    </div>
  );
}
