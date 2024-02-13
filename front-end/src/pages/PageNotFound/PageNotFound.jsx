import React from 'react';
import Error from '../../components/Error/Error';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function PageNotFound() {
    return (
        <>
            <Header />
            <main className='main bg-dark'>
                <Error />
            </main>
            <Footer />
        </>
    )
}

export default PageNotFound;