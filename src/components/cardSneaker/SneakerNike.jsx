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
export default function SneakerMain() {
return (
<>   
<Header /> 
<Chat />

<h1 id="home">
    Nike 
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
              src={AirMax} />
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
              src={Huarache} />
          </Link>
        </div>
      </div>

      <div className='Sneaker_Box'>
      <div>
        <h2>
         Nike "Air Force" LOW
        </h2>
      </div>
        <div>
          <Link to='/Jordan'>
            <img
              className='Fix_img'
              src={AirForce} />
          </Link>
        </div>
      </div>

      <div className='Sneaker_Box'>
      <div className='Sneaker_Box_h2'>
        <h2 className='Sneaker_Box_h2'>
        Nike "Air Force" MID 
        </h2>
      </div>
        <div>
          <Link to='/Jordan'>
            <img
              className='Fix_img'
              src={AirMid} />
          </Link>
        </div>
      </div>

      
     
    

  </div>
<Footer /> 
    </>
  );
}