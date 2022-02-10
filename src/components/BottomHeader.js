import React from 'react';
import s from '../assets/styles/components/BottomHeader/BottomHeader.module.scss'
import {Container} from "react-bootstrap";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";

const BottomHeader = () => {
    return (
        <Container className={s.bottomHeader}>
            <LeftMenu/>
            <RightMenu/>
        </Container>
    );
};

export default BottomHeader;