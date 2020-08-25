import React, { useState } from 'react';
const Photo = ({ photo, setCurrentPhoto, currentPhoto }) => {
  const [showZoomIcon, setShowZoomIcon] = useState(false);
  const handlePhotoClick = (e) => {
    const { src, id, alt, author, quote } = photo;
    setCurrentPhoto({
      src,
      id,
      alt,
      author,
      quote,
    });
  };

  const checkForCurrentPhoto = (photo) => {
    return Object.keys(photo).length !== 0;
  };

  const handleMouse = (bool, set, photo) => {
    if (checkForCurrentPhoto(photo)) {
      set(bool);
    }
  };

  const selected =
    photo.id === currentPhoto.id ? 'border-2 border-yellow-500' : '';
  return (
    <div className="overflow-hidden relative md:w-full w-2/4 h-full m-auto">
      <img
        data-id={photo.id}
        onClick={handlePhotoClick}
        onMouseEnter={() => handleMouse(true, setShowZoomIcon, currentPhoto)}
        onMouseLeave={() => handleMouse(false, setShowZoomIcon, currentPhoto)}
        className={`w-full h-full z-0  m-auto relative cursor-pointer ${
          checkForCurrentPhoto(currentPhoto)
            ? 'transition ease-in duration-500 transform hover:scale-125  hover:opacity-75'
            : ''
        } ${selected} `}
        src={photo.src}
        alt={photo.alt}
      />
      {showZoomIcon ? (
        <i className="text-white  absolute top-1/2 left-1/2  fas fa-search fa-2x"></i>
      ) : null}
    </div>
  );
};

export default Photo;
