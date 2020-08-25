import React from 'react';

const ViewButtons = ({ view, setView }) => {
  const setActiveGridStyle =
    view === 'grid' ? 'text-gray-700' : 'text-gray-500';
  const setActiveRowStyle = view === 'row' ? 'bg-gray-700' : 'bg-gray-500';
  return (
    <div className="flex justify-center">
      <i
        onClick={() => setView('grid')}
        className={`fas fa-th-large fa-2x transition ease-in-out duration-700  ${setActiveGridStyle} cursor-pointer m-4`}
      ></i>
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setView('row')}
      >
        <div
          className={`${setActiveRowStyle} transition ease-in-out duration-700 p-2 rounded m-1 inline-block`}
        ></div>
        <div
          className={`${setActiveRowStyle} transition ease-in-out duration-700  p-2 rounded m-1 inline-block`}
        ></div>
        <div
          className={`${setActiveRowStyle} transition ease-in-out duration-700  p-2 rounded m-1 inline-block`}
        ></div>
        <div
          className={`${setActiveRowStyle} transition ease-in-out duration-700  p-2 rounded m-1 inline-block`}
        ></div>
      </div>
    </div>
  );
};

export default ViewButtons;
