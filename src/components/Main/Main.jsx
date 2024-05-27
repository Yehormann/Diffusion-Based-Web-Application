import React, { useState } from 'react';
import './main.css';

// Import images for Unet
import unetImg1 from '../../Assets/uNet_plane_images/plane_image_1.png';
import unetImg2 from '../../Assets/uNet_plane_images/plane_image_2.png';
import unetImg3 from '../../Assets/uNet_plane_images/plane_image_3.png';
import unetImg4 from '../../Assets/uNet_plane_images/plane_image_4.png';
import unetImg5 from '../../Assets/uNet_plane_images/plane_image_5.png';
import unetImg6 from '../../Assets/uNet_plane_images/plane_image_7.png';
import unetImg7 from '../../Assets/uNet_plane_images/plane_image_8.png';
import unetImg8 from '../../Assets/uNet_plane_images/plane_image_9.png';
import unetImg9 from '../../Assets/uNet_plane_images/plane_image_10.png';

// Import images for Pytorch

import pytorchImg5 from '../../Assets/YourNet/plane_5.png';
import pytorchImg6 from '../../Assets/YourNet/plane_6.png';
import pytorchImg7 from '../../Assets/YourNet/plane_7.png';
import pytorchImg8 from '../../Assets/YourNet/plane_8.png';
import pytorchImg9 from '../../Assets/YourNet/plane_9.png';
import pytorchImg1 from '../../Assets/YourNet/plane_10.png';
import pytorchImg2 from '../../Assets/YourNet/plane_11.png';
import pytorchImg3 from '../../Assets/YourNet/plane_14.png';
import pytorchImg4 from '../../Assets/YourNet/plane_15.png';

const unetData = [
  { id: 1, imgSrc: unetImg1, condition: false },
  { id: 2, imgSrc: unetImg2, condition: true },
  { id: 3, imgSrc: unetImg3, condition: true },
  { id: 4, imgSrc: unetImg4, condition: false },
  { id: 5, imgSrc: unetImg5, condition: true },
  { id: 6, imgSrc: unetImg6, condition: true },
  { id: 7, imgSrc: unetImg7, condition: false },
  { id: 8, imgSrc: unetImg8, condition: true },
  { id: 9, imgSrc: unetImg9, condition: false }
];

const pytorchData = [
  { id: 1, imgSrc: pytorchImg1, condition: false },
  { id: 2, imgSrc: pytorchImg2, condition: true },
  { id: 3, imgSrc: pytorchImg3, condition: true },
  { id: 4, imgSrc: pytorchImg4, condition: false },
  { id: 5, imgSrc: pytorchImg5, condition: true },
  { id: 6, imgSrc: pytorchImg6, condition: true },
  { id: 7, imgSrc: pytorchImg7, condition: false },
  { id: 8, imgSrc: pytorchImg8, condition: true },
  { id: 9, imgSrc: pytorchImg9, condition: false }
];

const Main = () => {
  const [highlightedItems, setHighlightedItems] = useState({});
  const [activeData, setActiveData] = useState(unetData);

  const handleClick = (id) => {
    const item = activeData.find(data => data.id === id);
    if (item) {
      setHighlightedItems(prevState => ({
        ...prevState,
        [id]: item.condition
      }));
    }
  };

  const handleButtonClick = (data) => {
    setHighlightedItems({});
    setActiveData(data);
  };

  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h1 className='title'>GAME</h1>
        
        <div className="secDeffusionModels">
          <button className='unet' onClick={() => handleButtonClick(unetData)}>Unet</button>
          <div className="bar"></div>
          <button className='pyTorch' onClick={() => handleButtonClick(pytorchData)}>Pytorch</button>
        </div>
      </div>

      <div className='secContent grid'>
        {activeData.map(({ id, imgSrc }) => (
          <div key={id} className="img-container" onClick={() => handleClick(id)}>
            <img src={imgSrc} alt={`Plane ${id}`} />
            {highlightedItems[id] !== undefined && (
              <div className={`overlay ${highlightedItems[id] ? 'green' : 'red'}`}></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;
