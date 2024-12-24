import React, { useState, useEffect } from 'react';
import './CollectionsList.scss';

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

const imageData = {
  acrylic: [
    { id: 1, src: "/images/9_Art_Realm_More-Collection_Img4.png", alt: 'Acrylic Painting 1' },
    { id: 2, src: "/images/9_Art_Realm_More-Collection_Img3.png", alt: 'Acrylic Painting 2' },
    { id: 3, src: "/images/9_Art_Realm_More-Collection_Img2.png", alt: 'Acrylic Painting 3' },
    { id: 4, src: "/images/9_Art_Realm_More-Collection_Img1.png", alt: 'Acrylic Painting 4' },
    { id: 5, src: "/images/9_Art_Realm_More-Collection_Img2.png", alt: 'Oil Paint 1' },
    { id: 6, src: "/images/9_Art_Realm_More-Collection_Img1.png", alt: 'Oil Paint 2' },
    { id: 7, src: "/images/9_Art_Realm_More-Collection_Img4.png", alt: 'Oil Paint 3' },
    { id: 8, src: "/images/9_Art_Realm_More-Collection_Img3.png", alt: 'Oil Paint 4' },
    // Add more images
  ],
  oilPaint: [
    { id: 1, src: "/images/9_Art_Realm_More-Collection_Img2.png", alt: 'Oil Paint 1' },
    { id: 2, src: "/images/9_Art_Realm_More-Collection_Img1.png", alt: 'Oil Paint 2' },
    { id: 3, src: "/images/9_Art_Realm_More-Collection_Img4.png", alt: 'Oil Paint 3' },
    { id: 4, src: "/images/9_Art_Realm_More-Collection_Img3.png", alt: 'Oil Paint 4' },
    { id: 5, src: "/images/9_Art_Realm_More-Collection_Img4.png", alt: 'Gouache 1' },
    { id: 6, src: "/images/11_Art_Realm_More-Collection_Set3.png", alt: 'Gouache 2' },
    { id: 7, src: "/images/9_Art_Realm_More-Collection_Img2.png", alt: 'Gouache 3' },
    { id: 8, src: "/images/9_Art_Realm_More-Collection_Img1.png", alt: 'Gouache 4' },
    // Add more images
  ],
  watercolor: [
    { id: 1, src: "/images/13_Art_Realm_Projects_P1.png", alt: 'Watercolor 1' },
    { id: 2, src: "/images/12_Art_Realm_Projects_Brush.png", alt: 'Watercolor 2' },
    { id: 3, src: "/images/9_Art_Realm_More-Collection_Img4.png", alt: 'Watercolor 3' },
    { id: 4, src: "/images/9_Art_Realm_More-Collection_Img3.png", alt: 'Watercolor 4' },
    { id: 5, src: "/images/9_Art_Realm_More-Collection_Img4.png", alt: 'Gouache 1' },
    { id: 6, src: "/images/11_Art_Realm_More-Collection_Set3.png", alt: 'Gouache 2' },
    { id: 7, src: "/images/9_Art_Realm_More-Collection_Img2.png", alt: 'Gouache 3' },
    { id: 8, src: "/images/9_Art_Realm_More-Collection_Img1.png", alt: 'Gouache 4' },
    // Add more images
  ],
  gouache: [
    { id: 1, src: "/images/9_Art_Realm_More-Collection_Img4.png", alt: 'Gouache 1' },
    { id: 2, src: "/images/11_Art_Realm_More-Collection_Set3.png", alt: 'Gouache 2' },
    { id: 3, src: "/images/9_Art_Realm_More-Collection_Img2.png", alt: 'Gouache 3' },
    { id: 4, src: "/images/9_Art_Realm_More-Collection_Img1.png", alt: 'Gouache 4' },
    { id: 5, src: "/images/13_Art_Realm_Projects_P1.png", alt: 'Watercolor 1' },
    { id: 6, src: "/images/12_Art_Realm_Projects_Brush.png", alt: 'Watercolor 2' },
    { id: 7, src: "/images/9_Art_Realm_More-Collection_Img4.png", alt: 'Watercolor 3' },
    { id: 8, src: "/images/9_Art_Realm_More-Collection_Img3.png", alt: 'Watercolor 4' },
    // Add more images
  ],
};

const CollectionsList = () => {
  const [activeTab, setActiveTab] = useState('acrylic');
  const [shuffledImages, setShuffledImages] = useState([]);
  const [animationClass, setAnimationClass] = useState(''); // For animation
  const [popupImage, setPopupImage] = useState(null);

  useEffect(() => {
    setAnimationClass(''); // Reset animation
    const timeout = setTimeout(() => {
      setShuffledImages(shuffleArray(imageData[activeTab]));
      setAnimationClass('active'); // Trigger fade-in animation
    }, 300); // Delay for fade-out animation
    return () => clearTimeout(timeout);
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleImageClick = (image) => {
    setPopupImage(image);
  };

  const handleClosePopup = () => {
    setPopupImage(null);
  };

  return (
    <div className="gallery-container">
      <div className="tabs">
        {Object.keys(imageData).map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => handleTabClick(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className={`grid-view ${animationClass}`}>
        {shuffledImages.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="grid-item"
            data-size={image.size}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      {popupImage && (
        <div className="popup" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={popupImage.src} alt={popupImage.alt} />
            <button className="close-btn" onClick={handleClosePopup}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionsList;
