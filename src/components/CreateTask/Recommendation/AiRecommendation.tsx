'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TwinkleStar from '@/components/CreateTask/Recommendation/TwinkleStar';

interface DropdownItem {
  dropdownName: string;
  name: string;
  iconClass: string;
}

interface AiRecommendationProps {
  taskTitle: string;
  taskDescription: string;
  selectedItems: DropdownItem[];
  setSelectedItems: (items: DropdownItem[]) => void;
}

const AiRecommendation: React.FC<AiRecommendationProps> = ({
  taskTitle,
  taskDescription,
  selectedItems,
  setSelectedItems,
}) => {
  const [recommendationsItems, setrecommendationsItems] = useState<
    DropdownItem[]
  >([]);

  const getRecommendations = async () => {
    try {
      const response = await axios.post('/api/Recommendations', {
        taskTitle,
        taskDescription,
      });
      const recommendationObjects = response.data.split('\n\n').filter(Boolean);

      const parsedRecommendations = recommendationObjects.map(
        (jsonString: any) => {
          try {
            return JSON.parse(jsonString);
          } catch (error) {
            console.error('Error parsing recommendation JSON:', error);
            return null;
          }
        }
      );

      const validRecommendations = parsedRecommendations.filter(
        (item: any) => item !== null
      );
      console.log(validRecommendations);
      setrecommendationsItems(validRecommendations);
    } catch (error) {
      console.error('Error getting recommendations:', error);
    }
  };

  const requestDelay = 2000; // (4 seconds)

  let timeout: NodeJS.Timeout | null = null;
  useEffect(() => {
    if (taskDescription.length >= 20) {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        getRecommendations();
      }, requestDelay);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [taskDescription]);

  function addToTagsSection(item: DropdownItem) {
    if (
      !selectedItems.some((selectedItem) => selectedItem.name === item.name)
    ) {
      setSelectedItems([...selectedItems, item]);
      setrecommendationsItems((prevItems) =>
        prevItems.filter((prevItem) => prevItem.name !== item.name)
      );
    }
  }

  return (
    <div className='flex flex-wrap items-center gap-2.5 pb-[16px] pt-2'>
      <TwinkleStar />
      {recommendationsItems.length > 0 && (
        <>
          {recommendationsItems.map((item) => (
            <div
              onClick={() => addToTagsSection(item)}
              key={item.name}
              className='fade-in flex cursor-pointer items-center gap-2 rounded-[8px] border border-dashed border-[#DFE1E4] px-3 py-[5px] text-[12px] text-[#94989E]'
            >
              <i className={item.iconClass}></i> {item.name}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default AiRecommendation;
