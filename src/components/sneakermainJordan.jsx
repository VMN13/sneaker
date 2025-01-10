/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Chat from '../chatbot';
import Jordan from './Jordan';
import jordan from '../img/jordan.jpg';

export default function SneakerMain() {
return (
<>   
<Header /> 
<Chat />

<h1 id="home">
    Jordan
  </h1> 
  <div className="Sneaker_Container">
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
              src={jordan} />
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
              src={jordan} />
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
              src={jordan} />
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
              src={jordan} />
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
              src={jordan} />
          </Link>
        </div>
      </div>
    

  </div>
<Footer /> 
    </>
  );
}