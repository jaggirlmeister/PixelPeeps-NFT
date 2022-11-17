import React from "react";
import {
  useAddress,
  useOnboard,
  useWallet,
  useBalance,
} from "../../contexts/OnboardContext";
import { truncateWeb3Address } from "../../services/onboard/helpers";
import styles from './WalletClient.module.css';

const WalletClient = () => {
  const onboard = useOnboard();
  const wallet = useWallet();
  const address = useAddress();
  const balance = useBalance();

  return onboard ? (
    <div className="wallet-client">
      {!wallet.provider ? (
        <div>
          <h4 className="pixeled-txt">Connect to Wallet!</h4>
          <p>Please connect your preferred wallet to use the app.</p>
        </div>
      ) : (
        <div>
          <div>
            {wallet.icons && (
              <img src={wallet.icons.iconSrc} alt={wallet.name} />
            )}
          </div>
          <div>
            <h4 className="pixeled-txt">Connected with {wallet.name}</h4>
            {address ? (
              <p>{truncateWeb3Address(address)}</p>
            ) : (
              <p>Please connect your {wallet.name} wallet to use the app.</p>
            )}
            <p>{balance}</p>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default WalletClient;
