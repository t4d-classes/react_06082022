import { useEffect, useCallback, useState } from 'react';

import { allColors, appendColor, removeColor } from '../services/colorsData';

export const useColorToolStore = () => {

  const [ colors, setColors ] = useState([]);

  const refreshColors = useCallback(async () => {
    const colors = await allColors();
    setColors(colors);
  }, []);

  const addColor = useCallback(async color => {
    await appendColor(color);
    await refreshColors();
  }, [refreshColors]);

  const deleteColor = useCallback(async colorId => {
    await removeColor(colorId);
    await refreshColors();
  }, [refreshColors]);

  useEffect(() => {
    refreshColors();
  }, [refreshColors]);

  return {
    colors,
    addColor,
    deleteColor,
  };

};