import './index.css'
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FormLogin from '../../components/FormLogin';

function SignIn() {
  return (
    <div className='signin-container'>
      <Header />
      <main className='main bg-dark'>
        <section className='signin'>
          <FormLogin />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default SignIn