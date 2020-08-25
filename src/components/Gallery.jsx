import React, { useState, useCallback, useEffect } from 'react';

import LightBox from './LightBox';
import Photos from './Photos';
import data from '../data/photos';

const Gallery = ({
  setLightBox,
  currentPhoto,
  setCurrentPhoto,
  lightBox,
  view,
  setView,
}) => {
  const [photoData, setPhotoData] = useState([]);
  const findActiveIndex = useCallback(
    (data) => {
      return data.findIndex((photo) => {
        return photo.id === currentPhoto.id;
      });
    },
    [currentPhoto.id]
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const index = findActiveIndex(photoData);

    setActiveIndex(index);
  }, [currentPhoto, findActiveIndex, photoData]);

  useEffect(() => {
    setPhotoData(data);
  }, []);

  return (
    <div className="w-9/12 m-auto mt-8">
      {!currentPhoto ? (
        <Photos
          currentPhoto={currentPhoto}
          setCurrentPhoto={setCurrentPhoto}
          photoData={photoData}
        />
      ) : (
        <LightBox
          setCurrentPhoto={setCurrentPhoto}
          setLightBox={setLightBox}
          photoData={photoData}
          currentPhoto={currentPhoto}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          setView={setView}
          view={view}
        />
      )}
    </div>
  );
};

export default Gallery;
