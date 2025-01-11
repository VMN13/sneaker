/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Link } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import AirMax from '../../img/airmax.png';
import Chat from '../../chatbot';


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
          Nike / AirMax
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
          Air Jordan 12 Retro "Phantom"
        </h2>
      </div>
        <div>
          <Link to='/Jordan'>
            <img
              className='Fix_img'
              src={AirMax} />
          </Link>
        </div>
      </div>

      <div className='Sneaker_Box'>
      <div>
        <h2>
          Air Jordan 12 Retro "Phantom"
        </h2>
      </div>
        <div>
          <Link to='/Jordan'>
            <img
              className='Fix_img'
              src={AirMax} />
          </Link>
        </div>
      </div>

      <div className='Sneaker_Box'>
      <div className='Sneaker_Box_h2'>
        <h2 className='Sneaker_Box_h2'>
          Air Jordan 12 Retro "Phantom"
        </h2>
      </div>
        <div>
          <Link to='/Jordan'>
            <img
              className='Fix_img'
              src={AirMax} />
          </Link>
        </div>
      </div>

      <div className='Sneaker_Box'>
      <div>
        <h2>
          Air Jordan 12 Retro "Phantom"
        </h2>
      </div>
        <div>
          <Link to='/Jordan'>
            <img
              className='Fix_img'
              src={AirMax} />
          </Link>
        </div>
      </div>
    

  </div>
<Footer /> 
    </>
  );
}