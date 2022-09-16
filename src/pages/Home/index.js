import classNames from "classnames/bind";
import Styles from './Home.module.scss';

const cx = classNames.bind(Styles)

function Home() {
    return (
        <>
            <div className={cx('main-content')}>
                <div className={cx('banner')}>
                    <div className={cx('banner-container')}>
                        <div className={cx('banner-content', 'text-center')}>
                            <h1 className={cx('banner-title')}>
                                Devplus Will Support The Early Stage Developers Go The Right Career Path
                            </h1>
                            <div className={cx('banner-desc')}>
                                Devplus is not a training center, it’s battle campus for you to level up your skillsets and ready to onboard any projects in our “kindest” companies listing
                            </div>
                            <div className={cx('banner-btn')}>
                                <a>Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;