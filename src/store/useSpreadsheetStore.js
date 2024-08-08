// src/store/useSpreadsheetStore.js
import create from 'zustand';

const useSpreadsheetStore = create((set) => ({
  grid: Array(1000).fill({ value: '', align: 'left' }),
  setCell: (index, value) =>
    set((state) => {
      const newGrid = [...state.grid];
      newGrid[index] = { ...newGrid[index], value };
      return { grid: newGrid };
    }),
  setAlignment: (index, align) =>
    set((state) => {
      const newGrid = [...state.grid];
      newGrid[index] = { ...newGrid[index], align };
      return { grid: newGrid };
    }),
}));

export default useSpreadsheetStore;
