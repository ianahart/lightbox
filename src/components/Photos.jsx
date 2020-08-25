import React from 'react';

import Photo from './Photo';

const Photos = ({ photoData, currentPhoto, setCurrentPhoto, lightBox }) => {
  const renderPhotos = () => {
    return photoData.map((photo) => {
      return (
        <Photo
          currentPhoto={currentPhoto}
          setCurrentPhoto={setCurrentPhoto}
          key={photo.id}
          photo={photo}
        />
      );
    });
  };
  const photos = renderPhotos();
  return <div className="grid md:grid-cols-3 relative">{photos}</div>;
};

export default Photos;
