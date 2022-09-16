import classNames from 'classnames/bind';
// import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from 'react';

import Styles from './Header.module.scss';
import images from '~/assets/images'

const cx = classNames.bind(Styles)

function Header() {
    const [navbar, setNavbar] = useState(false);
    const [show, toggleShow] = useState(false);
    const [hide, toggleHide] = useState(false);



    const changeNavbar = () => {
        if (window.scrollY >= 150) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavbar)
    // const handleMenuToggle = () => {
    //     const element = document.getElementsByClassName('nav-right-menu-toggle');
    //     if(element.style.display === 'none'){
    //         element.style.display = 'block';
    //     }else{
    //         element.style.display = 'none';
    //     }
    // }
    return (
        <>
            <header className={navbar ? cx('wrapper', 'container') : cx('wrapper')}>
                <div className={cx('row')}>
                    <div className={cx('col-2')}>
                        <div className={cx('logo-part')}>
                            <img className={cx('image')} src={images.logo} atl="DevPlusLogo"></img>
                        </div>
                    </div>
                    <div className={cx('col-8')}>
                        <div className={cx('menu-area')}>
                            <div className={cx('main-menu')}>
                                <nav className={cx('nav-menu')}>
                                    <ul className={cx('menu-items')}>
                                        <li className={cx('menu-item', 'active')}>
                                            Home
                                        </li>
                                        <li className={cx('menu-item')}>
                                            <a>About devplus</a>
                                        </li>
                                        <li className={cx('menu-item', 'has-children')}>
                                            <Tippy
                                                interactive
                                                offset={navbar ? [60, 35, 30, 40] : [60, 52, 50, 50]}
                                                render={attrs => (
                                                    <div className={cx('menu-hmm')} tabIndex="-1" {...attrs}>
                                                        <ul className={cx('sub-menu')}>
                                                            <li>
                                                                <a>
                                                                    One Plus Campus
                                                                </a>

                                                            </li>
                                                            <li>
                                                                <a>
                                                                    Two Plus Campus
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a>
                                                                    Three Plus Campus
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                            >
                                                <span>Our programme</span>
                                            </Tippy>

                                        </li>
                                        <li className={cx('menu-item')}>
                                            <a>Devplus activities</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-2', 'right-menu-toggle')} onClick={() => toggleShow(!show)}>
                        <FontAwesomeIcon icon={faBars} className={cx('icon-bar')} ></FontAwesomeIcon>
                    </div>
                </div>

            </header>
            {show && 
            
            
            <div className={cx('nav-right-menu-toggle')}>
                <div className={cx('close-btn')}>
                    <div className={cx('background-icon')} onClick={() => toggleShow(!show)}>
                        <FontAwesomeIcon icon={faXmark} className={cx('icon-menu')} />
                    </div>
                </div>
                <div className={cx('canvas-logo')}>
                    <img src={images.logo}></img>
                </div>
                <div className={cx('offcanvas-text')}>
                    <p>Devplus's mission is filling the gap between school and corporate,
                        reduce in-house training cost and effort for IT companies.</p>
                </div>
                <div className={cx('offcanvas-gallery')}>

                </div>
                <div className={cx('map-img')}></div>
            </div>
            }
        </>
    );
}

export default Header;