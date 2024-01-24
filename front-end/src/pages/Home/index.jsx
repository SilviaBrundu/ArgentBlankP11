import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FeaturesHome from '../../components/FeaturesHome';
import Hero from '../../components/Hero';
import './index.css';


function Home () {
    return (
        <>
            <Header />
        <main>
            <Hero />
            <FeaturesHome />
        </main>
            <Footer />
        </>
    )
}

export default Home;