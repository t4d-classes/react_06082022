import { useEffect, useCallback, useState } from 'react';

import { useList } from '../hooks/useList';

import { allColors } from '../services/colorsData';

export const useColorToolStore = () => {

  const [ colors, setColors ] = useState([]);

  const refreshColors = useCallback(async () => {
    const colors = await allColors();
    setColors(colors);
  }, []);

  const addColor = () => {};
  const deleteColor = () => {};

  useEffect(() => {
    refreshColors();
  }, [refreshColors]);

  return {
    colors,
    addColor,
    deleteColor,
  };

};