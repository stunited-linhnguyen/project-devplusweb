import classNames from 'classnames/bind';
// import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Styles from './StickyNav.module.scss';
import images from '~/assets/images'

const cx = classNames.bind(Styles)

function StickyNav() {
    return (
            <div className={cx('container')}>
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
                                                trigger="click"
                                                offset={[60, 52, 50, 50]}
                                                interactive
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
                    <div className={cx('col-2', 'menu-icon')}>
                        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
    );
}

export default StickyNav;