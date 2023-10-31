// DropdownContainer.tsx
import React from 'react';
import SingleSelectDropdown from '@/components/Dropdown/SingleSelectDropdown';
import MultiSelectDropdown from '@/components/Dropdown/MultiSelectDropDown';
import {
  todo,
  priority,
  assignee,
  tags,
  project,
  duedate,
} from '@/DropDownContent/DropdownContent';

interface DropdownItem {
  id: string;
  name: string;
  iconClass: string;
}

interface DropdownContainerProps {
  selectedItems: DropdownItem[];
  setSelectedItems: (items: DropdownItem[]) => void;
}

const DropdownContainer: React.FC<DropdownContainerProps> = ({
  selectedItems,
  setSelectedItems,
}) => {
  const handleItemSelected = (item: DropdownItem) => {
    if (
      !selectedItems.some(
        (selectedItem) =>
          selectedItem.name === item.name &&
          selectedItem.iconClass === item.iconClass
      )
    ) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className='flex flex-wrap gap-2 px-[8px]'>
      <SingleSelectDropdown
        items={todo}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        onItemSelected={handleItemSelected}
        buttonTitle='ToDo'
        buttonIcon={`
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6.5" stroke="#94989E" stroke-linejoin="round" stroke-dasharray="2 2"/>
          </svg>
        `}
      />
      <MultiSelectDropdown
        items={assignee}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        onItemSelected={handleItemSelected}
        buttonTitle='Assignee'
        buttonIcon={`
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M13.3745 12.465C14.0926 11.6011 14.592 10.5769 14.8305 9.47909C15.069 8.38131 15.0396 7.24223 14.7448 6.15821C14.45 5.07419 13.8985 4.07711 13.1368 3.25134C12.3752 2.42556 11.4258 1.79538 10.3691 1.41409C9.31242 1.03281 8.17943 0.911639 7.06598 1.06084C5.95254 1.21004 4.89141 1.62522 3.97236 2.27125C3.05331 2.91729 2.30337 3.77517 1.786 4.77234C1.26862 5.7695 0.999019 6.87661 1 8C1.00038 9.63309 1.57588 11.2139 2.6255 12.465L2.6155 12.4735C2.6505 12.5155 2.6905 12.5515 2.7265 12.593C2.7715 12.6445 2.82 12.693 2.8665 12.743C3.0065 12.895 3.1505 13.041 3.3015 13.178C3.3475 13.22 3.395 13.259 3.4415 13.299C3.6015 13.437 3.766 13.568 3.9365 13.69C3.9585 13.705 3.9785 13.7245 4.0005 13.74V13.734C5.17156 14.5581 6.56855 15.0004 8.0005 15.0004C9.43245 15.0004 10.8295 14.5581 12.0005 13.734V13.74C12.0225 13.7245 12.042 13.705 12.0645 13.69C12.2345 13.5675 12.3995 13.437 12.5595 13.299C12.606 13.259 12.6535 13.2195 12.6995 13.178C12.8505 13.0405 12.9945 12.895 13.1345 12.743C13.181 12.693 13.229 12.6445 13.2745 12.593C13.31 12.5515 13.3505 12.5155 13.3855 12.473L13.3745 12.465ZM8 4C8.44501 4 8.88003 4.13196 9.25004 4.37919C9.62005 4.62643 9.90844 4.97783 10.0787 5.38896C10.249 5.8001 10.2936 6.2525 10.2068 6.68895C10.12 7.12541 9.90566 7.52632 9.59099 7.84099C9.27633 8.15566 8.87541 8.36995 8.43896 8.45677C8.0025 8.54358 7.5501 8.49902 7.13897 8.32873C6.72783 8.15843 6.37643 7.87004 6.1292 7.50003C5.88196 7.13002 5.75 6.69501 5.75 6.25C5.75 5.65326 5.98706 5.08097 6.40901 4.65901C6.83097 4.23705 7.40327 4 8 4ZM4.0035 12.465C4.01218 11.8085 4.27898 11.1818 4.74618 10.7205C5.21339 10.2592 5.84343 10.0003 6.5 10H9.5C10.1566 10.0003 10.7866 10.2592 11.2538 10.7205C11.721 11.1818 11.9878 11.8085 11.9965 12.465C10.8999 13.4532 9.47613 14 8 14C6.52387 14 5.10008 13.4532 4.0035 12.465Z" fill="#94989E"/>
</svg>
        `}
      />
      <SingleSelectDropdown
        items={priority}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        onItemSelected={handleItemSelected}
        buttonTitle='Priority'
        buttonIcon={`
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_1_49)">
    <path d="M3.33331 9.33334H12.6666V3.33334H3.33331V14" stroke="#94989E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_1_49">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
  `}
      />
      <MultiSelectDropdown
        items={tags}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        onItemSelected={handleItemSelected}
        buttonTitle='Tags'
        buttonIcon={`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_1_35)">
    <path d="M5.66667 6.33333C6.03486 6.33333 6.33333 6.03486 6.33333 5.66667C6.33333 5.29848 6.03486 5 5.66667 5C5.29848 5 5 5.29848 5 5.66667C5 6.03486 5.29848 6.33333 5.66667 6.33333Z" fill="#94989E" stroke="#94989E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2.66663 4.66666V7.23933C2.66663 7.59733 2.80863 7.94066 3.06196 8.194L8.47263 13.6047C8.59799 13.73 8.74682 13.8295 8.91062 13.8974C9.07443 13.9652 9.24999 14.0001 9.42729 14.0001C9.60459 14.0001 9.78016 13.9652 9.94396 13.8974C10.1078 13.8295 10.2566 13.73 10.382 13.6047L13.6046 10.382C13.73 10.2566 13.8295 10.1078 13.8973 9.944C13.9652 9.7802 14.0001 9.60463 14.0001 9.42733C14.0001 9.25003 13.9652 9.07446 13.8973 8.91066C13.8295 8.74686 13.73 8.59803 13.6046 8.47266L8.19329 3.062C7.94025 2.809 7.59712 2.6668 7.23929 2.66666H4.66663C4.13619 2.66666 3.62749 2.87738 3.25241 3.25245C2.87734 3.62752 2.66663 4.13623 2.66663 4.66666Z" stroke="#94989E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_1_35">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
  `}
      />
      <SingleSelectDropdown
        items={project}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        onItemSelected={handleItemSelected}
        buttonTitle='Project'
        buttonIcon={`
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_1_43)">
    <path d="M2.66663 3.33333C2.66663 3.15652 2.73686 2.98695 2.86189 2.86193C2.98691 2.7369 3.15648 2.66666 3.33329 2.66666H5.99996C6.17677 2.66666 6.34634 2.7369 6.47136 2.86193C6.59639 2.98695 6.66663 3.15652 6.66663 3.33333V6C6.66663 6.17681 6.59639 6.34638 6.47136 6.4714C6.34634 6.59643 6.17677 6.66666 5.99996 6.66666H3.33329C3.15648 6.66666 2.98691 6.59643 2.86189 6.4714C2.73686 6.34638 2.66663 6.17681 2.66663 6V3.33333Z" stroke="#94989E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.33337 3.33333C9.33337 3.15652 9.40361 2.98695 9.52864 2.86193C9.65366 2.7369 9.82323 2.66666 10 2.66666H12.6667C12.8435 2.66666 13.0131 2.7369 13.1381 2.86193C13.2631 2.98695 13.3334 3.15652 13.3334 3.33333V6C13.3334 6.17681 13.2631 6.34638 13.1381 6.4714C13.0131 6.59643 12.8435 6.66666 12.6667 6.66666H10C9.82323 6.66666 9.65366 6.59643 9.52864 6.4714C9.40361 6.34638 9.33337 6.17681 9.33337 6V3.33333Z" stroke="#94989E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2.66663 10C2.66663 9.82319 2.73686 9.65362 2.86189 9.5286C2.98691 9.40357 3.15648 9.33334 3.33329 9.33334H5.99996C6.17677 9.33334 6.34634 9.40357 6.47136 9.5286C6.59639 9.65362 6.66663 9.82319 6.66663 10V12.6667C6.66663 12.8435 6.59639 13.0131 6.47136 13.1381C6.34634 13.2631 6.17677 13.3333 5.99996 13.3333H3.33329C3.15648 13.3333 2.98691 13.2631 2.86189 13.1381C2.73686 13.0131 2.66663 12.8435 2.66663 12.6667V10Z" stroke="#94989E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.33337 10C9.33337 9.82319 9.40361 9.65362 9.52864 9.5286C9.65366 9.40357 9.82323 9.33334 10 9.33334H12.6667C12.8435 9.33334 13.0131 9.40357 13.1381 9.5286C13.2631 9.65362 13.3334 9.82319 13.3334 10V12.6667C13.3334 12.8435 13.2631 13.0131 13.1381 13.1381C13.0131 13.2631 12.8435 13.3333 12.6667 13.3333H10C9.82323 13.3333 9.65366 13.2631 9.52864 13.1381C9.40361 13.0131 9.33337 12.8435 9.33337 12.6667V10Z" stroke="#94989E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_1_43">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
  `}
      />
      <SingleSelectDropdown
        items={duedate}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        onItemSelected={handleItemSelected}
        buttonTitle='Due Date'
        buttonIcon={`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M11.6 2.4C12.1305 2.4 12.6392 2.61072 13.0142 2.98579C13.3893 3.36086 13.6 3.86957 13.6 4.4V7.68C13.3443 7.54918 13.0764 7.44387 12.8 7.3656V5.6H3.20002V11.6C3.20002 11.9183 3.32645 12.2235 3.5515 12.4485C3.77654 12.6736 4.08176 12.8 4.40002 12.8H7.36562C7.44482 13.0792 7.54962 13.3464 7.68002 13.6H4.40002C3.86959 13.6 3.36088 13.3893 2.98581 13.0142C2.61074 12.6391 2.40002 12.1304 2.40002 11.6V4.4C2.40002 3.86957 2.61074 3.36086 2.98581 2.98579C3.36088 2.61072 3.86959 2.4 4.40002 2.4H11.6ZM11.6 3.2H4.40002C4.08176 3.2 3.77654 3.32643 3.5515 3.55147C3.32645 3.77652 3.20002 4.08174 3.20002 4.4V4.8H12.8V4.4C12.8 4.08174 12.6736 3.77652 12.4486 3.55147C12.2235 3.32643 11.9183 3.2 11.6 3.2ZM15.2 11.6C15.2 12.5548 14.8207 13.4705 14.1456 14.1456C13.4705 14.8207 12.5548 15.2 11.6 15.2C10.6452 15.2 9.72957 14.8207 9.05444 14.1456C8.37931 13.4705 8.00002 12.5548 8.00002 11.6C8.00002 10.6452 8.37931 9.72955 9.05444 9.05442C9.72957 8.37929 10.6452 8 11.6 8C12.5548 8 13.4705 8.37929 14.1456 9.05442C14.8207 9.72955 15.2 10.6452 15.2 11.6ZM12 10C12 9.89392 11.9579 9.79217 11.8829 9.71716C11.8079 9.64214 11.7061 9.6 11.6 9.6C11.4939 9.6 11.3922 9.64214 11.3172 9.71716C11.2422 9.79217 11.2 9.89392 11.2 10V11.2H10C9.89394 11.2 9.7922 11.2421 9.71718 11.3172C9.64217 11.3922 9.60002 11.4939 9.60002 11.6C9.60002 11.7061 9.64217 11.8078 9.71718 11.8828C9.7922 11.9579 9.89394 12 10 12H11.2V13.2C11.2 13.3061 11.2422 13.4078 11.3172 13.4828C11.3922 13.5579 11.4939 13.6 11.6 13.6C11.7061 13.6 11.8079 13.5579 11.8829 13.4828C11.9579 13.4078 12 13.3061 12 13.2V12H13.2C13.3061 12 13.4079 11.9579 13.4829 11.8828C13.5579 11.8078 13.6 11.7061 13.6 11.6C13.6 11.4939 13.5579 11.3922 13.4829 11.3172C13.4079 11.2421 13.3061 11.2 13.2 11.2H12V10Z" fill="#94989E"/>
</svg>
  `}
      />
    </div>
  );
};

export default DropdownContainer;
