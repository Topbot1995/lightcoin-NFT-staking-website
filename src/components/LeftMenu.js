import React from 'react';
import s from '../assets/styles/components/BottomHeader/BottomHeader.module.scss'

const LeftMenu = () => {
    return (
        <div className={s.leftMenu}>
            <a className={s.leftMenuItem} href="#">Home</a>
            <a className={s.leftMenuItem} href="#">Bridge</a>
            <a className={s.leftMenuItem} href="#">Swap</a>
            <a className={s.leftMenuItem} href="#">NFT Market</a>
            <a className={s.leftMenuItem} href="#">Staking Dapp</a>
            <a className={s.leftMenuItem} href="#">NFT</a>
        </div>
    );
};

export default LeftMenu;