/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Link } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import AirMax from '../../img/AirMax.jpg';
import Huarache from '../../img/Huarache.jpg';
import Chat from '../../chatbot';
import AirForce from '../../img/AirForce.png';
import AirMid from '../../img/AirMid.jpg';
import BOG from '../../img/BOG.jpg';
import Joy from '../../img/Joy.png';

export default function SneakerMain() {
return (
<>   
<Header /> 
<Chat />

<h1 id="home">
    Puma
  </h1> 
  <div className="Sneaker_Container">
    <div className='Sneaker_Box'>
      <div>
        <h2>
          Nike  "AirMax"
        </h2>
      </div>
        <div>
          <Link to='/AirMax'>
            <img
              className='Fix_img'
              src={BOG} />
          </Link>
        </div>
      </div>

      <div className='Sneaker_Box'>
      <div>
        <h2>
        Nike "Huarache"
        </h2>
      </div>
        <div>
          <Link to='/Jordan'>
            <img
              className='Fix_img'
              src={Joy} />
          </Link>
        </div>
      </div>

    
    

  </div>
<Footer /> 
    </>
  );
}