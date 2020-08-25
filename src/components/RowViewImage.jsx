import React, { useState } from 'react';

const RowViewImage = ({
  imageData,
  rightArrow,
  leftArrow,
  setCurrentPhoto,
  photoData,
  rightArrowClick,
  currentPhoto,
  leftArrowClick,
  loadPhotos,
}) => {
  const [showZoomIcon, setShowZoomIcon] = useState(false);

  const handlePhotoClick = (e, data) => {
    data.forEach((photo) => {
      if (e.target.src.includes(photo.src)) {
        const { src, id, alt, author, quote } = photo;
        setCurrentPhoto({
          src,
          id,
          alt,
          author,
          quote,
        });
      }
    });
  };

  const selected =
    currentPhoto.id === imageData.id ? 'border border-yellow-500' : '';

  const imgClassName = `w-full h-full transition 0.7s ${
    loadPhotos ? 'animate-showimage' : ''
  } ease-in  ${selected}  m-auto relative  transition ease-in duration-500 transform hover:scale-125 cursor-pointer hover:opacity-75  `;
  const divClassName = 'overflow-hidden relative md:w-full w-2/4 h-full m-auto';
  return (
    <div className={divClassName}>
      <img
        data-id={`${imageData.id}`}
        onClick={(e) => handlePhotoClick(e, photoData)}
        className={imgClassName}
        src={`${imageData.src}`}
        onMouseEnter={() => setShowZoomIcon(true)}
        onMouseLeave={() => setShowZoomIcon(false)}
        alt={`${imageData.alt}`}
      />
      {rightArrow ? (
        <i
          onClick={rightArrowClick}
          className="fas fa-arrow-right fa-3x absolute top-0 right-0 text-white cursor-pointer"
        ></i>
      ) : null}
      {leftArrow ? (
        <i
          onClick={leftArrowClick}
          className="fas fa-arrow-left fa-3x absolute top-0 left-0 text-white cursor-pointer"
        ></i>
      ) : null}
      {showZoomIcon ? (
        <i className="text-white  absolute top-1/2 left-1/2  fas fa-search fa-2x"></i>
      ) : null}
    </div>
  );
};

export default RowViewImage;
