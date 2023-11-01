import React from 'react';
import DropdownItem from '@/types/DropdownItem';

interface TaskLayoutProps {
  tags: DropdownItem[];
}
const TagsLayout: React.FC<TaskLayoutProps> = ({ tags }) => {
  return (
    <div className='flex flex-wrap items-center gap-2.5 pb-[16px] pt-2'>
      {tags.length > 0 && (
        <>
          {tags.map((item) => (
            <div
              key={item.name}
              className='fade-in flex items-center gap-2 rounded-[8px] border border-dashed border-[#DFE1E4] px-3 py-[5px] text-[12px] text-[#94989E]'
            >
              <i className={item.iconClass}></i> {item.name}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default TagsLayout;
