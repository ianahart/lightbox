import React, { useState, useRef, useEffect } from 'react';

const ShowCaseText = ({ currentPhoto, imageRef }) => {
  const textRef = useRef('');
  const [textCenter, setTextCenter] = useState(null);

  useEffect(() => {
    let timerID;

    if (imageRef.current.src) {
      timerID = setTimeout(() => {
        setTextCenter(true);
      }, 60);
    }
    return () => {
      setTextCenter(false);
      clearTimeout(timerID);
    };
  }, [currentPhoto, imageRef]);

  return (
    <div className="flex flex-col justify-center text-center items-center min-h-full">
      <div
        ref={textRef}
        className={`transition ease-in-out transform ${
          textCenter ? 'block animate-slidein' : 'hidden'
        } duration-1000`}
      >
        <h1 className="text-white md:text-2xl text-xs px-4">
          <em>&quot;{currentPhoto.quote}&quot;</em>
        </h1>
        <h3 className="text-white md:text-lg text-xs">
          &mdash; {currentPhoto.author}
        </h3>
      </div>
    </div>
  );
};

export default ShowCaseText;
