import React, { useState, useEffect, useRef } from 'react';

interface DropdownItem {
  id: string;
  name: string;
  iconClass: string;
}

interface SingleSelectDropdownProps {
  items: DropdownItem[];
  selectedItems: DropdownItem[];
  setSelectedItems: (items: DropdownItem[]) => void;
  onItemSelected: (item: DropdownItem) => void;
  buttonTitle: string;
  buttonIcon: string;
}

const SingleSelectDropdown: React.FC<SingleSelectDropdownProps> = ({
  items,
  selectedItems,
  setSelectedItems,
  onItemSelected,
  buttonTitle,
  buttonIcon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const selectItem = (item: DropdownItem) => {
    // Remove the item from selectedItems for the specific dropdown (id)
    const updatedSelectedItems = selectedItems.filter(
      (selectedItem) => selectedItem.id !== item.id
    );

    setSelectedItems([...updatedSelectedItems, item]);
    setIsOpen(false);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const getWidthForDropdown = () => {
    const maxWidth = items.reduce((max, item) => {
      const itemWidth = item.name.length * 8;
      return itemWidth > max ? itemWidth : max;
    }, 100); // Minimum width

    return maxWidth + 20;
  };

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        closeDropdown();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleDocumentClick);
    } else {
      document.removeEventListener('click', handleDocumentClick);
    }

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isOpen]);

  return (
    <div className='relative inline-block text-left' ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className='flex items-center gap-2 rounded-[8px] border border-[#DFE1E4] px-3 py-[5px] text-[12px] text-[#94989E]'
      >
        {buttonIcon && (
          <span dangerouslySetInnerHTML={{ __html: buttonIcon }} />
        )}
        {buttonTitle}
      </button>

      {isOpen && (
        <div
          style={{ width: `${getWidthForDropdown()}px` }} // Set the dynamic width
          className='absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5'
        >
          <div className='py-2'>
            <input
              type='text'
              value={search}
              onChange={handleSearch}
              placeholder='Search...'
              className='block w-full border-b border-gray-300 px-3 py-2 text-[12px] outline-none'
            />
          </div>

          <ul className='py-2'>
            {items
              .filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => (
                <li
                  key={item.name}
                  onClick={() => selectItem(item)}
                  className={`flex cursor-pointer items-center gap-2 px-3 py-2 text-[12px] text-[#6C6F75] ${
                    selectedItems.some(
                      (selectedItem) => selectedItem.name === item.name
                    )
                      ? 'bg-[#e2e8f0]'
                      : ''
                  }`}
                >
                  <i className={item.iconClass}></i> {item.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SingleSelectDropdown;
