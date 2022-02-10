import React from 'react';
import s from '../../src/assets/styles/components/TopHeader/TopHeader.module.scss'
import {Container} from "react-bootstrap";

const TopHeader = () => {
    return (
        <div className={s.topHeader}>
            <Container className={s.wrapper}>
                <div className={s.headerCard}>
                    <span className={s.title}>
                        Total supply:
                    </span>
                    <span className={s.content}>
                        9,766,213,274
                    </span>
                </div>
                <div className={s.divider}/>

                <div className={s.headerCard}>
                    <span className={s.title}>
                        Coin name:
                    </span>
                    <span className={s.content}>
                        Lightcoin
                    </span>
                </div>
                <div className={s.divider}/>

                <div className={s.headerCard}>
                    <span className={s.title}>
                        Circulating supply:
                    </span>
                    <span className={s.content}>
                        4,695,127,669
                    </span>
                </div>
                <div className={s.divider}/>

                <div className={s.headerCard}>
                    <span className={s.title}>
                        Burned:
                    </span>
                    <span className={s.content}>
                        233,786,726
                    </span>
                </div>
            </Container>
        </div>
    );
};

export default TopHeader;