import React from 'react';

const LBCloseBtn = ({ setLightBox, setCurrentPhoto, setView }) => {
  const handleCloseLightBox = () => {
    setLightBox(false);
    setView('grid');
    setCurrentPhoto({});
  };

  return (
    <div
      onClick={handleCloseLightBox}
      className="flex justify-end mr-3 mt-3 cursor-pointer"
    >
      <div className="relative mr-3">
        <div className="w-1 h-8 py-2 bg-white text-white absolute transition ease-in-out duration-700 transform rotate-45"></div>
        <div className="w-1 h-8 py-2 bg-white text-white absolute  transform -rotate-45"></div>
      </div>
    </div>
  );
};

export default LBCloseBtn;
