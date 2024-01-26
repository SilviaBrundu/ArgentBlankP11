import React from 'react';
import Error from '../../components/Error';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function PageNotFound () {
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