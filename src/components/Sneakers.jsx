import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import air from '../img/air.jpg';
import jordan from '../img/jord.png';
import reb from '../img/reb.jpg';
import adidas from '../img/adidas.jpg';
import puma from '../img/puma.jpg';
import yezzy from '../img/yezzy.jpg';
import conv from '../img/conv.jpg';
import vans from '../img/vans.png';
import NewBalance from '../img/NewBalance.jpg';
import Bel from '../img/Bel.jpg';
import Vutton from '../img/Vutton.jpg';
import Custom from '../img/custom.jpg';
import Chat from "../chatbot";

export default function Sneakers() {
  return (
    <>
    <Header/>
    <Chat />
    <h1 id="home">Sneakers</h1>
    <section className='sneakerContainer'>
    <Link to="/SneakerNike">
      <h3 className="write">
        Nike
      </h3>
        <img 
          id='sneakerimg' 
          src={air} 
          alt="airmax"/>
  </Link>
  <Link to="/sneakermain">
    <h3 className="write">
      Jordan
    </h3>
      <img 
        id='sneakerimg' 
        src={jordan} 
        alt="airmax"/>
  </Link>

  <Link to="/sneakerreebok">
    <h3 className="write">
      Reebook
    </h3>
      <img 
        id='sneakerimg' 
        src={reb} 
        alt="reebok"/>
  </Link>
  <Link to="/Adidas">
  <h3 className="write">
    Adidas
  </h3>
    <img 
      id='sneakerimg' 
      src={adidas} 
      alt="adidas"/>
  </Link>

  <Link to="/Puma">
    <h3 className="write">
      Puma
    </h3>
      <img 
        id='sneakerimg' 
        src={puma} 
        alt="airmax"/>
  </Link>

  <Link to="/Yeezy">
    <h3 className="write">
      Yeezy
    </h3>
      <img 
        id='sneakerimg' 
        src={yezzy} 
        alt="airmax"/>
  </Link>

  <Link to="/convers">
    <h3 className="write">
      Converse
    </h3>
      <img 
        id='sneakerimg' 
        src={conv} 
        alt="airmax"/>
  </Link> 

  <Link to="/Vans">
    <h3 className="write">
      Vans
    </h3>
      <img 
        id='sneakerimg' 
        src={vans} 
        alt="airmax"/>
  </Link>

  <Link to="/Newbalance">
    <h3 className="write">
      New Balance
    </h3>
      <img 
        id='sneakerimg' 
        src={NewBalance} 
        alt="airmax"/>
  </Link>

  <Link to="/Balenciaga">
    <h3 className="write">
      Balenciaga
    </h3>
      <img 
        id='sneakerimg' 
        src={Bel} 
        alt="airmax"/>
  </Link>

  <Link to="/Louisvuitton">
    <h3 className="write">
      Vutton
    </h3>
      <img 
        id='sneakerimg' 
        src={Vutton} 
        alt="airmax"/>
  </Link>

  <Link to="/Custom">
    <h3 className="write">
      Custom
    </h3>
      <img 
        id='sneakerimg' 
        src={Custom} 
        alt="airmax"/>
  </Link>
  
    </section>
<Footer/>
    </>
);
};

