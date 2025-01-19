import React from "react";
import { Link } from "react-router-dom";

import Confetti from 'react-confetti';
import Header from './Header';
import Footer from './Footer';

export default function Congratulations() {
  return (
    <>
    <Header />
    <Confetti />
    <div className="back">
     
      <h1 className="congratulation">
        Congratulation!
      </h1>
      <Link to ="/Sneakers">
        <button className="send">
          Send a check to email and 
            <br/> 
          Back to Sneakers!
        </button>
      </Link>
    </div>
    <Footer />
    </>
  );
};