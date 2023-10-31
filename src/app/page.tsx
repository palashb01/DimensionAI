import Image from 'next/image';
import TaskBox from '../components/taskBox';

export default function Home() {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center'>
      <TaskBox />
    </div>
  );
}
