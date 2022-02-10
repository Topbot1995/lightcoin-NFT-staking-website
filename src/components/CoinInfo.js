import React from 'react';
import s from '../assets/styles/components/CoinInfo/CoinInfo.module.scss'
import {Container, Tab, Tabs} from "react-bootstrap";
import CoinInfoItem from "./CoinInfoItem";

const CoinInfo = () => {
    return (
        <Container className={s.coinInfo}>
            <CoinInfoItem/>
        </Container>
    );
};

export default CoinInfo;