import React from 'react';

const Pagination = ({ activeIndex, photoData }) => {
  const getSelectedPage = (aIndex, pIndex) => {
    return aIndex === pIndex;
  };

  const renderPagination = () => {
    return photoData.map((photo, index) => {
      return (
        <div data-id={index} key={photo.id}>
          {getSelectedPage(activeIndex, index) ? (
            <span className="circle transition ease-in-out duration-700 transform scale-150 bg-yellow-500"></span>
          ) : (
            <span className="circle transition ease-in-out duration-700"></span>
          )}
        </div>
      );
    });
  };

  return (
    <div className="text-white flex justify-center mb-12">
      {renderPagination()}
    </div>
  );
};

export default Pagination;
