/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Chat from '../chatbot';
import Jordan from './Jordan';
import Aura from '../img/Aura.jpg';
import jordan from '../img/jordan.jpg';
import Jumpman from '../img/jumpman.png';
import Westbrok from '../img/Westbrook.jpg';
import J23 from '../img/J23.jpg';
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
      
          Air Jordan "Jumpman"
        </h2>
      </div>
        <div>
          <Link to='/jumpman'>
            <img
              className='Fix_img'
              src={Jumpman} />
          </Link>
        </div>
      </div>

      <div className='Sneaker_Box'>
      <div>
        <h2>
        Jordan Westbrook One Take -39
       
        </h2>
      </div>
        <div>
          <Link to='/westbrook'>
            <img
              className='Fix_img'
              src={Westbrok} />
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
        Air jordan J23 low black
        </h2>
      </div>
        <div>
          <Link to='/sneakerj23'>
            <img
              className='Fix_img'
              src={J23} />
          </Link>
        </div>
      </div>

      
     
    

  </div>
<Footer /> 
    </>
  );
}