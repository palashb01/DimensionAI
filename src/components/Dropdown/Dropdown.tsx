'use client';
import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const items = [
    { name: 'Item 1', iconClass: 'fa fa-star' },
    { name: 'Item 2', iconClass: 'fa fa-heart' },
    { name: 'Item 3', iconClass: 'fa fa-smile' },
    { name: 'Item 4', iconClass: 'fa fa-thumbs-up' },
    { name: 'Item 5', iconClass: 'fa fa-check' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const toggleItem = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className='relative inline-block text-left'>
      <button
        onClick={toggleDropdown}
        className='w-64 rounded-md border border-gray-300 px-4 py-2 text-gray-600'
      >
        Select Item(s)
      </button>

      {isOpen && (
        <div className='absolute right-0 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
          <div className='py-2'>
            <input
              type='text'
              value={search}
              onChange={handleSearch}
              placeholder='Search...'
              className='block w-full border-b border-gray-300 px-4 py-2'
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
                  onClick={() => toggleItem(item.name)}
                  className='px-4 py-2'
                >
                  <i className={item.iconClass}></i> {item.name}
                </li>
              ))}
          </ul>
        </div>
      )}
      {selectedItems.length > 0 && (
        <div className='ml-4 mt-2 flex flex-wrap'>
          {selectedItems.map((item) => (
            <div
              key={item}
              className='m-1 rounded-full bg-gray-200 px-2 py-1 text-gray-600'
            >
              {item}
              <span
                className='ml-2 cursor-pointer'
                onClick={() => toggleItem(item)}
              >
                &times;
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
