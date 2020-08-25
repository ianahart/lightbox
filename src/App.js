import React, { useState } from 'react';

import Header from './components/Header';
import LBCloseBtn from './components/LBCloseBtn';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './tailwind.output.css';

const App = () => {
  const [lightBox, setLightBox] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState({});
  const [view, setView] = useState('grid');
  return (
    <div
      className={`flex flex-col min-h-screen relative ${
        lightBox ? 'bg-black' : ''
      }`}
    >
      {!lightBox ? (
        <Header />
      ) : (
        <LBCloseBtn
          setLightBox={setLightBox}
          setCurrentPhoto={setCurrentPhoto}
          setView={setView}
        />
      )}
      <div className="flex-grow mb-12">
        <Gallery
          setLightBox={setLightBox}
          setCurrentPhoto={setCurrentPhoto}
          currentPhoto={currentPhoto}
          setView={setView}
          view={view}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
