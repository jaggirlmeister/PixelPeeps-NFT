import styles from './HowItWorks.module.css';

const HowItWorks = () => {
  return (
    <div className={styles['container-hero']}>
      <div className="grid inner">
        <div class="col_12">
            <h2 class="pixeled_txt">How It Works</h2>
            <p class="col_12">If you're unaware of how some parts of web3 works, this is the place to get acquainted. Learn what crypto-wallets are, how the blockchain works, and what payment methods are there available to fund your own wallet.</p>
        </div>
        <div class="col_4 item_container container_wapper">
            <p>WALLETS</p>
            <p> A crypto exchange is a platform on which you can buy and sell crypto. You can use exchangers to fund your wallet </p>
        </div>
        <div class="col_4 item_container container_wapper">
            <p>BLOCKCHAIN</p>
            <p> A blockchain is a distributed, decentralized, public ledger that exists across a network. They keep a record of transactions </p>
        </div>
        <div class="col_4 item_container container_wapper">
            <p>PAYMENT</p>
            <p>A crypto-wallet is a device, application or service that stores your crypto assets, whether that is funds or NFTs </p>
        </div>
      </div>

      <div className={styles['overlay']}></div>
    </div>
  );
};

export default HowItWorks;