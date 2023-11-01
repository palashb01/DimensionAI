'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '@/components/TasksView/layout';
import TasksArray from '@/types/Tasks';
import ViewHeader from '@/components/TasksView/ViewHeader';
import Button from '@/components/Button';

const View: React.FC = () => {
  const [tasks, setTasks] = useState<TasksArray[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/api/GetTask');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className='flex w-full flex-col items-center justify-center'>
      <ViewHeader />
      <Layout tasks={tasks} />
    </div>
  );
};

export default View;
