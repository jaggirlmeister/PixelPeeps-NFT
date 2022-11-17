import styles from './ConnectWallet.module.css';
import WalletClient from '../WalletClient/WalletClient';
import Mint from '../Mint/Mint';

const ConnectWallet = () => {
  return (
    <div className={styles['container-hero']}>
        <div className='modulesContainer'>
          <WalletClient />
          <Mint />
        </div>
    </div>
  );
};

export default ConnectWallet;