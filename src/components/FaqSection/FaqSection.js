import styles from './FaqSection.module.css';
import FAQ from '../FAQ/FAQ';
import Image from '../../../src/assets/column_image.png';

const FaqSection = () => {
  return (
      <div className="grid inner">
          <div className="col_3">
            <img src={Image} height="" witdh="" alt="PixelPeeps Logo" />
          </div>
          <div className="col_7">
            <FAQ />
          </div>
        
      </div>
  );
};

export default FaqSection;