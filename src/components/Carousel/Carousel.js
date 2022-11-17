import React from "react";
import Marquee from "react-easy-marquee";
import Image1 from '../../../src/assets/1.png'
import Image2 from '../../../src/assets/2.png'
import Image3 from '../../../src/assets/3.png'
import Image4 from '../../../src/assets/4.png'
import Image5 from '../../../src/assets/5.png'
import Image6 from '../../../src/assets/6.png'
import Image7 from '../../../src/assets/7.png'
import Image8 from '../../../src/assets/8.png'

const Carousel = () => {
    const images = [Image1, Image2, Image3, Image4];
    const imagesDown = [Image5, Image6, Image7, Image8];
  /*const images = ["https://picsum.photos/200", "https://picsum.photos/100"];*/

  return (
    <div>
      <Marquee duration={10000} background="#fafafa" height="500px">
        {images.map((image) => (
          <img src={image} alt="picsum" />
        ))}
      </Marquee>
      <Marquee duration={10000} reverse={true} background="#fafafa" height="500px">
        {imagesDown.map((image) => (
          <img src={image} alt="picsum" />
        ))}
      </Marquee>
    </div>
  );
};

export default Carousel;