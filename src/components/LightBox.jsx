import React, { useEffect } from 'react';
import PhotoCount from './PhotoCount';
import ShowCase from './ShowCase';
import Pagination from './Pagination';
import Photos from './Photos';
import ViewButtons from './ViewButtons';
import RowView from './RowView';

const LightBox = ({
  setCurrentPhoto,
  photoData,
  currentPhoto,
  activeIndex,
  setActiveIndex,
  setLightBox,
  setView,
  view,
}) => {
  const checkForCurrentPhoto = (photo) => {
    if (Object.keys(photo).length !== 0) {
      return true;
    }
  };

  useEffect(() => {
    if (checkForCurrentPhoto(currentPhoto)) {
      setLightBox(true);
    }
  }, [setLightBox, currentPhoto]);
  return (
    <div>
      {checkForCurrentPhoto(currentPhoto) ? (
        <PhotoCount activeIndex={activeIndex} />
      ) : null}

      <ShowCase
        currentPhoto={currentPhoto}
        photoData={photoData}
        setCurrentPhoto={setCurrentPhoto}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      {checkForCurrentPhoto(currentPhoto) ? (
        <Pagination activeIndex={activeIndex} photoData={photoData} />
      ) : null}
      {checkForCurrentPhoto(currentPhoto) ? (
        <ViewButtons setView={setView} view={view} />
      ) : null}
      {view === 'grid' ? (
        <Photos
          currentPhoto={currentPhoto}
          setCurrentPhoto={setCurrentPhoto}
          photoData={photoData}
        />
      ) : (
        <RowView
          photoData={photoData}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          currentPhoto={currentPhoto}
          setCurrentPhoto={setCurrentPhoto}
        />
      )}
    </div>
  );
};

export default LightBox;
