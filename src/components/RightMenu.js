import React from 'react';
import s from '../assets/styles/components/BottomHeader/BottomHeader.module.scss'

const RightMenu = () => {
    return (
        <div className={s.rightMenu}>
            <a href="#" className={s.rightMenuItem}>About</a>
            <a href="#" className={s.rightMenuItem}>Exchanges</a>
            <a href="#" className={s.rightMenuItem}>Whitepaper</a>
            <a href="#" className={s.rightMenuItem}>Team</a>
            <a href="#" className={s.rightMenuItem}>Roadmap</a>
            <a href="#" className={s.rightMenuItem}>How to buy</a>
            <a href="#" className={s.rightMenuItem}>Support</a>
        </div>
    );
};

export default RightMenu;