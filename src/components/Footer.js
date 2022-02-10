import React from 'react';
import s from '../assets/styles/components/Footer/Footer.module.scss'
import {Container} from "react-bootstrap";
import logo from '../assets/img/logo-footer.svg'
import icTwitter from '../assets/img/ic-twitter.svg'
import icFb from '../assets/img/ic-fb.svg'
import icInsta from '../assets/img/ic-insta.svg'
import icTg from '../assets/img/ic-tg.svg'
import icYoutube from '../assets/img/ic-youtube.svg'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <Container>
                <div className={s.topFooter}>
                    <div className={s.menuLeft}>
                        <a href="#">Home</a>
                        <a href="#">Bridge</a>
                        <a href="#">Swap</a>
                        <a href="#">NFT Market</a>
                        <a href="#">Staking Dapp</a>
                    </div>
                    <div className={s.menuRight}>
                        <a href="#">About</a>
                        <a href="#">Exchanges</a>
                        <a href="#">Whitepaper</a>
                        <a href="#">Team</a>
                        <a href="#">Roadmap</a>
                        <a href="#">How to buy</a>
                        <a href="#">Support</a>
                    </div>
                </div>
                <hr/>
                <div className={s.bottomFooter}>
                    <img className={s.logo} src={logo} alt="logo"/>

                    <div className={s.social}>
                        <a href="#"><img src={icTwitter} alt="social"/></a>
                        <a href="#"><img src={icFb} alt="social"/></a>
                        <a href="#"><img src={icTg} alt="social"/></a>
                        <a href="#"><img src={icInsta} alt="social"/></a>
                        <a href="#"><img src={icYoutube} alt="social"/></a>
                    </div>

                    <span className={s.copyright}>© 2021 Lightcoin. All Right Reseved</span>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;