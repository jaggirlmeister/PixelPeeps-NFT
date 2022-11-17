import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles['container-hero']}>
      <div className={styles.txt_wrapper}>
      <img src="/pixelpeeps.svg" height="" witdh="" alt="PixelPeeps Logo" />
        <p>Get into the metaverse</p>
      </div>

      <div className={styles['overlay']}></div>
    </div>
  );
};

export default Hero;