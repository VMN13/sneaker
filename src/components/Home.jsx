import { Link } from "react-router-dom";
import sneaker from '../img/sneaker.jpg';
import Tooltip from "../Tooltip";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Video from "./video";
import Chat from "../chatbot";
import Linked from "./link";

export default function Home() {
  return (
    <div>
      <Linked />
    <Header />

<div className="chat">
</div>

<Chat />
  <h1 id="home">
    Home Page
  </h1> 

<section
  className='container'>
    <Tooltip
      className="tooltip"
      infotext="Welcome to the Sneaker SneakerShop page!">  
      <Link to="https://www.youtube.com/watch?v=cPAGwnzJpec">
        <Video />
      </Link>
    </Tooltip>
  
<div className='description'>
  <p className="welcome">
    Welcome to the Sneaker Shop sneaker page
    Here you can find a cool pair at a price that is affordable for your wallet.
  </p>

  <Link id="shop"
    to="/Sneakers">
      <button id="ShopNow">
        Shop Now
      </button>
      
  </Link>
</div>
</section>
<Footer />
    </div>    
);
};