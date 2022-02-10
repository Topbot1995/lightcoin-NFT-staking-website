import {  
  NFT_CONNECT,
  NFT_UPDATEREWARD,  
  NFT_DISCONNECT,  
} from "./actionType";

import marsABI from "../../ABIs/marsNFT.json";
import stakeNFTABI from "../../ABIs/stakeNFT.json";


import {
  MAIN_MARS_ADDRESS,
  TEST_MARS_ADDRESS,
  MAIN_NFTSTAKE_ADDRESS,
  TEST_NFTSTAKE_ADDRESS,
  BINANCE_TEST,
  BINANCE_MAIN,
  SPINNERSHOW,
  MAIN_CHAINID,
  TEST_CHAINID,
  toWEI,
  fromWEI,   
} from "../constants";

import {ethers} from "ethers";


import { PRODUCT_MODE } from "../../config";

let BINANCE_NET = PRODUCT_MODE ? BINANCE_MAIN : BINANCE_TEST;
let CHAINID = PRODUCT_MODE ? MAIN_CHAINID : TEST_CHAINID;
let MARS_ADDRESS = PRODUCT_MODE ? MAIN_MARS_ADDRESS : TEST_MARS_ADDRESS;
let NFTSTAKE_ADDRESS = PRODUCT_MODE ? MAIN_NFTSTAKE_ADDRESS : TEST_NFTSTAKE_ADDRESS;

export function mars_connect() {
  // is metamask connected and get the wallet address

  return async (dispatch) => {

    if(window.ethereum == undefined || !window.ethereum.isMetaMask) {
      dispatch(mars_disconnect());
      dispatch(spinner_show(true, "Please install metamask..."));
      return false;
    }
    let ethersProvider;
    if (window.ethereum) {
      ethersProvider = window.ethereum;
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
      } catch (error) {
        console.log("User denied account access");
        return false;
      }
    } else if (window.ethers) {
      ethersProvider = window.ethers.currentProvider;
    } else {
      
      ethersProvider = new ethers.providers.Web3Provider(BINANCE_NET, CHAINID);      
    }       
    

    try {      
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: CHAINID }],
      });
    } catch (switchError) {
        dispatch(mars_disconnect());
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [{ chainId: CHAINID, rpcUrl: BINANCE_NET /* ... */ }],
          });
        } catch (addError) {
          dispatch(mars_disconnect());
          // handle "add" error
        }
      }
      return false;
      // handle other "switch" errors
    }

    ethersProvider = new ethers.providers.Web3Provider(window.ethereum);
    

    //web3.setProvider(BINANCE_MAIN); // main_net:56
    //let netId = await web3.eth.net.getId();
    let account;
    let is_admin = false;
    let is_connected = false;    

    await ethersProvider.send("eth_requestAccounts", []);    

    const signer = ethersProvider.getSigner(0);

    account = await signer.getAddress();
    
    const marsToken = new ethers.Contract(MARS_ADDRESS, marsABI, signer)    
    
    let balance = await marsToken.
    balanceOf(account);
    
    balance  = balance.toString();

    let nft_balanceIds = [];
    let nft_balanceUris = [];

    if (balance > 0) {
      for(let i=0; i<balance; i++) {
        let info = await get_nftId(account, i);
        nft_balanceIds.push(info.id);
        nft_balanceUris.push(info.uri);
      }
    }    
    
    dispatch({
      type: NFT_CONNECT,
      payload: {
        address: account,        
        balance: balance,
        nft_balanceUris: nft_balanceUris,
        nft_balanceIds: nft_balanceIds,
      },
    });

    // Initial action dispatched
  };
}

export function mars_disconnect() {
  return (dispatch) => {
    dispatch({
      type: NFT_DISCONNECT,
    });
    //dispatch(spinner_show());
  };
}

export function spinner_show(show = false, spinnertext = "") {
  return (dispatch) => {
    dispatch({
      type: SPINNERSHOW,
      payload: {
        show: show,
        spinnertext: spinnertext,
      },
    });
  };
}

async function get_nftId(account, index) {
  let ethersProvider;
  ethersProvider = new ethers.providers.Web3Provider(window.ethereum);
  
  const signer = ethersProvider.getSigner(0);

  const nftToken = new ethers.Contract(MARS_ADDRESS,marsABI,signer);

  let id = await nftToken
      .tokenOfOwnerByIndex(account, index);

  let URI = await nftToken
  .tokenURI(id);  
  return {uri: URI, id: id.toString()};
}