import React from 'react';
import TasksArray from '@/types/Tasks';
import { htmlToMarkdown } from '@/utils/Parser';
import MarkdownViewer from '@/components/TasksView/MarkdownViewer';
import TagsLayout from '@/components/TasksView/TagsLayout';
import TaskBarTitle from '@/components/TasksView/TaskBarTitle';

interface LayoutProps {
  tasks: TasksArray[];
}

const Layout: React.FC<LayoutProps> = ({ tasks }) => {
  return (
    <div className='flex w-2/5 flex-col gap-16 py-4 max-[800px]:w-2/3'>
      {tasks.map((task) => (
        <div className='border-1 flex flex-col rounded-[10px] shadow-3xl '>
          <div key={task.id} className='px-3 py-3'>
            <TaskBarTitle />
            <div className='px-2'>
              <h1 className='text-md py-2 text-[#6C6F75]'>{task.taskTitle}</h1>
              <div className='px-2 py-1' id='markdown'>
                <MarkdownViewer
                  htmlString={htmlToMarkdown(task.taskDescription)}
                />
              </div>
              <TagsLayout tags={task.tags} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Layout;
