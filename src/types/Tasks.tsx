import DropdownItem from '@/types/DropdownItem';

export default interface TasksArray {
  id: number;
  taskTitle: string;
  taskDescription: string;
  tags: DropdownItem[];
}
