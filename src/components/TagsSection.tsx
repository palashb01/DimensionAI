import React from 'react';
interface DropdownItem {
  id: string;
  name: string;
  iconClass: string;
}
interface TagsSectionProps {
  selectedItems: DropdownItem[];
  removeItem: (item: DropdownItem) => void;
}

const TagsSection: React.FC<TagsSectionProps> = ({
  selectedItems,
  removeItem,
}) => {
  return (
    <div className='flex flex-wrap gap-2 px-[16px] py-[16px]'>
      {selectedItems.map((item) => (
        <div
          key={item.name}
          className='flex items-center gap-2 rounded-[8px] border border-dashed border-[#DFE1E4] px-3 py-[5px] text-[12px] text-[#94989E]'
        >
          <i className={item.iconClass}></i> {item.name}
          <span
            className='ml-2 cursor-pointer'
            onClick={() => removeItem(item)}
          >
            &times;
          </span>
        </div>
      ))}
    </div>
  );
};

export default TagsSection;
