import Image from 'next/image';
import DialogBox from '../components/dialogBox';

export default function Home() {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center'>
      <DialogBox />
    </div>
  );
}
