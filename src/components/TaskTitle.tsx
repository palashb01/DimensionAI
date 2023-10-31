const TaskTitle = () => {
  return (
    <div className='flex h-fit w-full items-center'>
      <span className='flex items-center gap-2 rounded-sm bg-lightgray px-3 py-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
        >
          <g clipPath='url(#clip0_1_29)'>
            <path
              d='M8.66665 2V6.66667H12.6666L7.33331 14V9.33333H3.33331L8.66665 2Z'
              fill='#3FBC77'
              stroke='#3FBC77'
              strokeWidth='1.25'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <defs>
            <clipPath id='clip0_1_29'>
              <rect width='16' height='16' fill='white' />
            </clipPath>
          </defs>
        </svg>
        <h1 className='text-sm text-[#6C6F75]'>Frontend</h1>
      </span>
      <span className='ml-[2px]'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
        >
          <path
            d='M9.08002 13.88L8.52002 13.32L11.84 9.99999L8.52002 6.68L9.08002 6.12L12.96 9.99999L9.08002 13.88Z'
            fill='#6C6F75'
          />
        </svg>
      </span>
      <span className='ml-[2px]'>
        <h1 className='text-sm text-[#6C6F75]'>New Task</h1>
      </span>
    </div>
  );
};

export default TaskTitle;
