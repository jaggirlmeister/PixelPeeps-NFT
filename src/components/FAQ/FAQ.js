import React, { Component } from 'react';
import Faq from 'react-faq-component';

const data = {
  title: "FAQ | How it works",
  rows: [
    {
      title: "What is an NFT",
      content: "Non-Fungible Tokens” which are one-of-a-kind tokens that represent a unique good or asset, like digital art. They can be sold in auctions for collectors to bid on or purchase, and the sale of NFTs unlocks new revenue streams for creators."
    },
    {
      title: "How can I get my PixelPeep NFT?",
      content: "You’ll need to have a Web3 wallet such as Fortmatic or Metamask and you’ll need to have some Ethereum (ETH) in it."
    },
    {
      title: "How do I set up my Wallet?",
      content: "We recommend using Fortmatic or Metamask. Here's a video that will walk you through the process of creating a Metamask wallet."
    },
    {
      title: "How do I get Ethereum to purchase my NFT?",
      content: "You can buy ETH on exchanges like CoinBase, Gemini, Binance, KuCoin, and more, and then transfer the ETH to your Coinbase or Metamask wallet. You can also buy ETH directly through your wallet."

    },
    {
        title: "What determines the NFT I get?",
        content: "We specified a rarity to each trait, sent them through the randomizer, and generated 600 unique NFTs. There are 15 character types and 20 legendary 1 of 1’s. Minting is completely random. But you can try to manifest receiving a specific NFT or go shopping on the secondary market (Opensea) to buy an NFT with the certain traits you like."
    },
    {
        title: "What does my NFT get me?",
        content: "A beautiful profile picture and access to Valfrelandia and all of our future endeavors. We’ve made some incredible partnerships that we will be announcing very soon!"
    }

]
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Faq data={data}/>
      </div>
    )
  }
}