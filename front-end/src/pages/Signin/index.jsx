import './index.css'
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Form from '../../components/Form';

function SignIn() {
  return (
    <div className='signin-container'>
      <Header />
      <main className='main bg-dark'>
        <section className='signin'>
          <i className='fa-solid fa-circle-user iconSignin'></i>
          <h1>Sign In</h1>
          <Form />    
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default SignIn