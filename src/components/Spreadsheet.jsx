import useSpreadsheetStore from '../store/useSpreadsheetStore';

const Spreadsheet = () => {
  const grid = useSpreadsheetStore((state) => state.grid);
  const setCell = useSpreadsheetStore((state) => state.setCell);
  const setAlignment = useSpreadsheetStore((state) => state.setAlignment);

  return (
    <div className="grid grid-cols-20 gap-10 p-4 bg-rose-400 overflow-auto">
      {grid.map((cell, index) => (
        <div key={index} className="relative">
          <input
            value={cell.value}
            onChange={(e) => setCell(index, e.target.value)}
            className={`border p-2 h-10 flex items-center w-30 justify-${cell.align} bg-white focus:outline-none`}
          />
          <div className="absolute">
            <button className='bg-gray-500 hover:bg-slate-300 p-1 text-white' onClick={() => setAlignment(index, 'left')}>LEFT</button>
            <button className='bg-gray-500 hover:bg-slate-300 m-1 p-1 text-white' onClick={() => setAlignment(index, 'center')}>CENTER</button>
            <button className='bg-gray-500 hover:bg-slate-300 p-1 text-white' onClick={() => setAlignment(index, 'right')}>RIGHT</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Spreadsheet;