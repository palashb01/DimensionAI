import React from 'react';
import Lottie from 'lottie-react';
import twinkle from '@/lotties/twinkle.json';

const TwinkleStar = () => (
  <span>
    <Lottie animationData={twinkle} loop={true} className='h-[20px] w-[20px]' />
  </span>
);

export default TwinkleStar;
