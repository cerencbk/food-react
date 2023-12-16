import React from 'react';
import Home from '../pages/home';
import Header from '../components/layout/Header';
import Input from '../components/form/Input';

function index() {
  return (
    <div>
      <Header />
      <Home />
      <div className='p-20 container mx-auto'>
        <Input/>
      </div>
    </div>
  )
}

export default index
