import classNames from 'classnames/bind';


import Styles from './Header.module.scss';
import images from '~/assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(Styles)

function Header() {
    return (
        <header className={cx('wrapper')}>
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
                                        <li className={cx('menu-item','active')}>
                                            Home
                                        </li>
                                        <li className={cx('menu-item')}>
                                            <a>About devplus</a>
                                        </li>
                                        <li className={cx('menu-item')}>
                                            <a>Our programme</a>
                                            <span><FontAwesomeIcon icon={faPlus}/></span>
                                        </li>
                                        <li className={cx('menu-item')}>
                                            <a>Devplus activities</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-2','menu-icon')}>
                        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;