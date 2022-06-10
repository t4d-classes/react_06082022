import { useState, useCallback } from 'react';

export const useList = (initialItems) => {

  const [ items, setItems ] = useState([...initialItems]);

  const appendItem = useCallback(item => {
    setItems([
      ...items,
      {
        ...item,
        id: Math.max(...items.map(c => c.id), 0) + 1,
      },
    ]);
  }, [items]);

  const replaceItem = useCallback(item => {
    const itemIndex = items.findIndex(c => c.id === item.id);
    const newItems = [...items];
    newItems[itemIndex] = item;
    setItems(newItems);
  }, [items]);

  const removeItem = useCallback(itemId => {
    setItems(items.filter(item => item.id !== itemId));
  }, [items]);
  
  return [ items, appendItem, replaceItem, removeItem ];

}