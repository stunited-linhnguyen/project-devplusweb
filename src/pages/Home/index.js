import classNames from "classnames/bind";
import Styles from './Home.module.scss';

const cx = classNames.bind(Styles)

function Home() {
    return ( 
        <>
            <div className={cx('main-content')}>

            </div>
            <div className={cx('main-content')}>

            </div>
        </>
     );
}

export default Home;