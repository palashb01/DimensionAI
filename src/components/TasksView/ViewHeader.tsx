import Lottie from 'lottie-react';
import Header from '@/lotties/Header.json';
import React from 'react';
const ViewHeader = () => {
  return <Lottie animationData={Header} loop={true} className='h-[200px]' />;
};

export default ViewHeader;
