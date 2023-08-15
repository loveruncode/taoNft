import React, { useState } from 'react';
import Web3 from 'web3';

export default function Header() {

 // disconnet 


  const [connectedAddress, setConnectedAddress] = useState(null);

  const connectToWallet = async () => {
  
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);

      try {
        await window.ethereum.enable();

        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          const address = accounts[0];
          setConnectedAddress(address); // Save the wallet address in the state
    
        }
      } catch (error) {
        console.error('Error connecting to wallet:', error);
      }
    } else {
      console.error('Ethereum Provider not detected. Please install Phantom or another compatible wallet.');
    }
  };

  const disconnetWallet = () => {
    setConnectedAddress (null);
  };

  return (
    <div>
      <button onClick={connectToWallet}>
        {connectedAddress ? `Vi Cua ban: ${connectedAddress}` : 'Connect Wallet'}
      </button>

     <button onClick={disconnetWallet}>
        disconnetWallet
     </button>
    </div>
  );
}
