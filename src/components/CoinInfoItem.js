import React, { Fragment, useEffect, useState } from 'react';
import s from '../assets/styles/components/CoinInfo/CoinInfoItem/CoinInfoItem.module.scss'
import team from '../assets/styles/components/CoinInfo/CoinInfoItem/CoinInfoItem.module.scss'
import logo from '../assets/img/logo.png'
import { Button, Table, ToggleButton, ButtonGroup } from "react-bootstrap";
import icCheckBox from '../assets/img/ic-checkbox.png'
import nftImage from '../assets/img/team-one.png';
import * as actions from "../redux/actions";
import { useActions } from "../redux/useActions";
import { useSelector } from "react-redux";
import { IS_NFT_CONNECTED, WALLET_ADDRESS } from '../redux/constants';

const CoinInfoItem = () => {

    const actioncreator = useActions(actions);

    // store state variable

    const nft_isConnected = useSelector((state) => state.nft[IS_NFT_CONNECTED]);
    const walletAddress = useSelector((state) => state.nft[WALLET_ADDRESS]);
    const nft_balance = useSelector((state) => state.nft['nftBalance']);
    const nft_balanceIds = useSelector((state) => state.nft['nft_balanceIds']);
    const nft_balanceUris = useSelector((state) => state.nft['nft_balanceUris']);

    console.log(nft_isConnected);

    // visible state

    const [rewardShow, setRewardShow] = useState(false);
    const [stakeShow, setStakeShow] = useState(false);
    const [stakeOnlyShow, setStakeOnlyShow] = useState(true);     

    const [balanceImageUrl, setBalanceImageUrl] = useState([]);

  const get_balanceUrls = async () => {    
    //nft_balanceURIs
    let assetURIs = [];    
    await nft_balanceUris.map(async (value, index) => {        
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      let assetURI = "";
      await fetch( `https://${value}`, requestOptions)
      .then(response => response.json())
      .then(result => assetURI = result)
      .catch(error => console.log('error', error));
      console.log(assetURI);

      assetURIs.push({id : nft_balanceIds[index], uri: assetURI.animation_url});
    });

    console.log('assets------', assetURIs, nft_balanceUris.length);

    setBalanceImageUrl(assetURIs);

  }

  useEffect(async () => {   

    if(window.ethereum == undefined) {
      await actioncreator.mars_disconnect();
      return false;
    }

    await actioncreator.mars_connect();  

    await get_balanceUrls();

    return async () => {

      await actioncreator.mars_disconnect();
      window.ethereum.off("chainChanged");
      window.ethereum.off("accountsChanged");
    }
  }, [
  ]);

  useEffect(async () => {      

    await get_balanceUrls();

  }, [nft_balance])


  function ImageUrlFromIPFS(asset) {
    // ipfs://
    return asset.replace('ipfs://', "https://ipfs.io/ipfs/");
  }

    return (
        <Fragment>
        <div style={{display:nft_isConnected ? "Block" : "none"}}>
            <div className={s.coinInfoItem}>
                <div className={s.header}>
                    <h2 className={s.title}>
                        STAKING MARS
                    </h2>
                    stake your MARS to earn 0% APY

                    <div className={s.logoBlock}>
                        <Button
                            variant="primary"
                            className="purple-button"
                        >
                            Buy MARS$
                        </Button>
                        <Button
                            variant="primary"
                            className="purple-button"
                        >
                            Mint now
                        </Button>
                    </div>
                </div>

                <hr />

                <div className={s.body}>
                    <div className={s.rowItem}>
                        <span className={s.label}>
                            Your Account address
                        </span>
                        <div className={s.content}>
                            <p>{walletAddress}</p>
                            <img src={icCheckBox} alt="icon" className="ms-2" />
                        </div>
                    </div>

                    <div className={s.divider} />

                    <div className={s.rowItem}>
                        <span className={s.label}>
                            Your Horses:
                        </span>
                        <div className={s.content}>
                            <p>{nft_balance} $MARS</p>
                        </div>
                    </div>

                    <div className={s.divider} />                   

                    <div className={s.divider} />

                    <div className={s.rowItem}>
                        <span className={s.label}>
                            Holders
                        </span>
                        <div className={s.content}>
                            <p>Minted NFT 6/5000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.StakingContainer}>
                <div className={s.header} onClick={()=>{setRewardShow(!rewardShow)}}>
                    <h4 className={s.title}>
                        Rewards: 0   (+0 LHC/sec)
                    </h4>
                </div>               

                <div className={s.body} style={{display:rewardShow ? "flex" : "none"}}>
                    <div className={s.dBlock}>
                        <div className={s.rowItem}>
                            <span className={s.label}>
                                Amount
                            </span>
                            <div className={s.content}>
                                <input type="number"></input>
                                <button className="ms-2">MAX</button>
                            </div>
                        </div>

                        <div className={s.rowItem}>
                            <Button
                                variant="primary"
                                className="purple-button"
                            >
                                Harvest
                            </Button>
                        </div>
                    </div>
                    <div className={s.rowItem1}>
                        <div className={s.rowItem}>
                            <h2 className={s.title}>
                                Harvest History
                            </h2>                            
                        </div>
                        <table responsive="sm" className={s.historyTable}>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Time</th>
                                        <th>Amount</th>
                                        <th>Fee</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>                                    
                                     <td>1</td>
                                     <td>2022/1/2</td>
                                     <td>#1</td>
                                     <td>10%</td>
                                     <td>Normal</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
            <div className={s.StakingContainer}>
                <div className={s.header} onClick={()=>{setStakeShow(!stakeShow)}}>
                    <h4 className={s.title}>
                        Stakes: 0 tokens (0.00% in the pool)
                    </h4>
                </div>               

                <div className={s.body} style={{display:stakeShow ? "flex" : "none"}}>
                    <div className={s.dBlock}>
                        <div className={s.rowItem}>
                            <span className={s.label}>
                                Stake/Unstake
                            </span>
                            <div className={s.content}>
                            <ButtonGroup>
                                <ToggleButton variant="primary"
                            className="toggle-button">Only Staked</ToggleButton>
                                <ToggleButton variant="primary"
                            className="toggle-button">Only Unstaked</ToggleButton>
                            </ButtonGroup>
                            </div>                            
                        </div>                        
                        <div className={s.rowItem}>
                            <Button
                                variant="primary"
                                className="purple-button"
                            >
                                Stake
                            </Button>
                        </div>
                    </div>
                    <div className={s.rowItem2}>
                        {balanceImageUrl.map((value, index)=> {
                            return <div className={s.teamCard} key={value.id}>
                                        <img src={value.uri} alt="No preview"></img>
                                        <p className={s.name}>#{value.id}</p>                                        
                                    </div>
                        })}
                            {/* <div className={s.teamCard}>
                                <img src={nftImage}></img>
                                <p className={s.name}>#1</p>
                                <p className={s.prof}>Tom</p>
                            </div> */}
                            

                    </div>
                    <div className={s.rowItem1}>
                        <div className={s.rowItem}>
                            <h2 className={s.title}>
                                Stake History
                            </h2>                            
                        </div>
                        <table responsive="sm" className={s.historyTable}>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Time</th>
                                        <th>Amount</th>
                                        <th>Fee</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>                                    
                                     <td>1</td>
                                     <td>2022/1/2</td>
                                     <td>#1</td>
                                     <td>10%</td>
                                     <td>Normal</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
        <div style={{display:!nft_isConnected ? "flex" : "none"}} className={s.connectContainer}>
        <Button
            variant="primary"
            className="purple-button" onClick={()=>{actioncreator.mars_connect()}}
        >
            Connect Wallet
        </Button>
        </div>
        </Fragment>
    );
};

export default CoinInfoItem;