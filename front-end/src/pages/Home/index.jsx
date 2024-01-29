import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Features from '../../components/Features';
import Hero from '../../components/Hero';
import IconChat from '../../designs/img/icon-chat.webp';
import IconMoney from '../../designs/img/icon-money.webp';
import IconSecurity from '../../designs/img/icon-security.webp';
import './index.css';


function Home () {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <section className='features'>
			        <Features 
				        image={IconChat}
				        alt='Icon Chat'
				        title='You are our #1 priority'
				        text='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'/>
			        <Features 
				        image={IconMoney}
				        alt='Icon Money'
				        title='More savings means higher rates'
				        text='The more you save with us, the higher your interest rate will be!'/>
			        <Features 
				        image={IconSecurity}
				        alt='Icon Security'
				        title='Security you can trust'
				        text='We use top of the line encryption to make sure your data and money is always safe.'/>
                </section>        
            </main>
            <Footer />
        </>
    )
}

export default Home;