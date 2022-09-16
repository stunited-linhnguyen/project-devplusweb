import Header from '~/component/Layouts/components/Header';

function DefaultLayout({ children }) {
    return (
        <div className='wrapper'>
            <Header />
            
            <div className="container">
                    {children}
            </div>
        </div>
    );
}

export default DefaultLayout;
