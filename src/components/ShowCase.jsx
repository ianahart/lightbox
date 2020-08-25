import React, { useRef } from 'react';
import ShowCaseText from './ShowCaseText';
const ShowCase = ({
  currentPhoto,
  photoData,
  setCurrentPhoto,
  activeIndex,
  setActiveIndex,
}) => {
  const imageRef = useRef(null);
  const handleLeftArrowClick = () => {
    if (activeIndex <= 0) {
      setCurrentPhoto(photoData[photoData.length - 1]);
    } else {
      setCurrentPhoto(photoData[activeIndex - 1]);
    }
  };

  const handleRightArrowClick = () => {
    if (activeIndex >= photoData.length - 1) {
      setActiveIndex(0);
      setCurrentPhoto(photoData[0]);
    } else {
      setCurrentPhoto(photoData[activeIndex + 1]);
    }
  };
  return (
    <div className="mb-16">
      <div className="relative">
        <img
          ref={imageRef}
          src={currentPhoto.src}
          alt={currentPhoto.alt}
          className="w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25">
          <i
            onClick={handleLeftArrowClick}
            className="fas fa-arrow-left fa-3x absolute left-0 cursor-pointer text-white"
          ></i>
          <i
            onClick={handleRightArrowClick}
            className="fas fa-arrow-right fa-3x absolute right-0 cursor-pointer text-white"
          ></i>
          <ShowCaseText imageRef={imageRef} currentPhoto={currentPhoto} />
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
