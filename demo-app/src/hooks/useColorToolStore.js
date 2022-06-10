import { useList } from '../hooks/useList';

export const useColorToolStore = (initialColors) => {

  const [
    colors, addColor, , deleteColor
  ] = useList([...initialColors]);

  return {
    colors,
    addColor,
    deleteColor,
  };

};