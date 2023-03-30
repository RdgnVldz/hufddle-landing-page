import React from 'react';
import './containers.css';

import { Header, Contents, Footer } from '../../components';

function Containers() {
  return (
    <div className='huddle__landing-container section__margin'>
        <Header />
        <Contents />
        <Footer />
    </div>
  )
}

export default Containers;