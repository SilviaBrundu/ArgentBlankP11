import './Signin.css'
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FormLogin from '../../components/FormLogin/FormLogin';

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