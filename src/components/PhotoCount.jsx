import React from 'react';

const PhotoCount = ({ activeIndex }) => {
  return (
    <span className="text-white block mb-12">{activeIndex + 1}/9 Photos</span>
  );
};

export default PhotoCount;
