import React, { useState, useEffect } from 'react';

import RowViewImage from './RowViewImage';

const RowView = ({ photoData, setCurrentPhoto, currentPhoto }) => {
  // const indexes = [
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  // ];

  const getIndexes = (data) => {
    const mainArr = [];
    let singleArr = [];
    data.forEach((photo, index) => {
      if (singleArr.length < 3) {
        singleArr.push(index);
      } else {
        mainArr.push(singleArr);
        singleArr = [];
        singleArr.push(index);
      }
    });
    if (singleArr.length) {
      mainArr.push(singleArr);
    }

    return mainArr;
  };

  const indexes = getIndexes(photoData);

  const [loadPhotos, setLoadPhotos] = useState(false);
  const [counter, setCounter] = useState(0);

  const [images, setImages] = useState({
    imageOne: photoData[indexes[counter][0]],
    imageTwo: photoData[indexes[counter][1]],
    imageThree: photoData[indexes[counter][2]],
  });

  useEffect(() => {
    let timerID = setTimeout(() => {
      setLoadPhotos(true);
    }, 60);

    return () => {
      setLoadPhotos(false);
      clearTimeout(timerID);
    };
  }, [counter]);

  useEffect(() => {
    const indexes = getIndexes(photoData);

    setImages({
      imageOne: photoData[indexes[counter][0]],
      imageTwo: photoData[indexes[counter][1]],
      imageThree: photoData[indexes[counter][2]],
    });
  }, [counter, photoData]);

  const rightArrowClick = () => {
    if (counter >= indexes.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const leftArrowClick = () => {
    if (counter <= 0) {
      setCounter(indexes.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="grid md:grid-cols-3 relative pb-32">
      <RowViewImage
        imageData={images.imageOne}
        leftArrow={true}
        setCurrentPhoto={setCurrentPhoto}
        photoData={photoData}
        currentPhoto={currentPhoto}
        leftArrowClick={leftArrowClick}
        loadPhotos={loadPhotos}
      />
      <RowViewImage
        photoData={photoData}
        setCurrentPhoto={setCurrentPhoto}
        imageData={images.imageTwo}
        currentPhoto={currentPhoto}
        loadPhotos={loadPhotos}
      />
      <RowViewImage
        imageData={images.imageThree}
        rightArrow={true}
        setCurrentPhoto={setCurrentPhoto}
        photoData={photoData}
        currentPhoto={currentPhoto}
        rightArrowClick={rightArrowClick}
        loadPhotos={loadPhotos}
      />
    </div>
  );
};

export default RowView;
