import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Chatbot from '../chatbot';
import Maestro from "./card_logo/Maestro.png";
import MasterCard from "./card_logo/MasterCard.png";
import VisaElectron from "./card_logo/VisaElectron.png";
import Cirrus from "./card_logo/Cirrus.png";
import Linked from "./LinkPreview";



import './credit.css';
import SneakerMain from './cardSneaker/SneakerNike';



export default function Credit() {
  const [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({...prev, [name]: value}));
  };

  const handleInputFocus = (e) => {
    setState((prev) => ({...prev, focus: e.target.name}));
  };

  return (
    <>
  <Header />
  <Chatbot />
  <h1 id="home">
  Payment
  </h1> 
  
 

  <div className='cardContainer'>
    <div className='dd'>
    <div className='Sorted-card'>
      
      <div className='Card_Details'>
        <div className='cards'>
          <div>
            <img
            className='logo_cards'
            src={Maestro} alt="Maestro" />
            
          </div>
          <div><img
            className='logo_cards'
            src={MasterCard} alt="Maestro" /></div>
          <div><img
            className='logo_cards'
            src={VisaElectron} alt="Maestro" /></div>
          <div><img
            className='logo_cards'
            src={Cirrus} alt="Maestro" /></div>

        </div>
      
      <div className='form-group'>
      <h3>Card Details</h3>
        <Link to ="/congratulations">
    <button id='submit'
      action="/home"
      type="submit">
       Pay
    </button>
    </Link>
        </div>
        <p>
        Please, enter the requested data to pay for the product.
        </p>
     


        </div>
    <div className='rccs__card rccs__card--unknown'>
      <Cards className='card'
        style={{height:'3230px'}}
        number={state.number}
        expiry={state.expiry}
        name={state.name}
        cvc={state.cvc}
        focused={state.focus}
      />
      
      </div>
  </div>
  <div className="form">
    <form>
    <input className='inputField'
    autoComplete="on"
      pattern="[0-9]"
      type="number" 
      name="number" 
      placeholder="Card Number" 
      value={state.number}
      onChange={handleInputChange} 
      onFocus={handleInputFocus} 
      required
      />
    <input className='inputField'
      type="text" 
      name="name"
      autoComplete="on"
      value={state.name}
      placeholder="Name" 
      onChange={handleInputChange} 
      onFocus={handleInputFocus}
      required
      />

      <div className='dobuleInput'>
    <input className='inputDouble'
      type="text" 
      name="expiry" 
      autoComplete="on"
      value={state.expiry}
      pattern='\d\d/\d\d'
      placeholder="MM/YY" 
      onChange={handleInputChange}
      onFocus={handleInputFocus} 
      required
      />
    <input className='inputDouble'
      type="text" 
      name="cvc" 
      autoComplete="on"
      placeholder="CVC" 
      value={state.cvc}
      maxLength='3'
      pattern='\d{3,4}'
      onChange={handleInputChange} 
      onFocus={handleInputFocus} 
      required
      />
      </div>
    </form>
    
  </div>
    </div>
    </div>
    <Footer />
    
    </>
  );
};


