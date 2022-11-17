import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles['container-footer']}>
      <div className={styles.txt_wrapper}>
        <div className={styles['logo']}>
          <img src="/pixelpeeps.svg" height="" witdh="" alt="PixelPeeps Logo" />
        </div>
      </div>
      <div className={styles['overlay']}></div>
    </div>
  );
};

export default Footer;