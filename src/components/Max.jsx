import { Link } from "react-router-dom";
import Footer from "./Footer";
import airmax from '../img/airmax.png';
import ImageMagnifier from "../components/ImageMagnifier";
import Header from "./Header";
import svg from "../img/right.svg";
import Chat from "../chatbot";
import Stars from "./Stars";
import Credit from "./credit";
import size from '../img/size.svg';
import Curved from './Curved';
import Size from "./size";



export default function Max() {
return (
<>
<div className="App">

    <Header />

    <Chat />

     
<section
  className='container'>
    <div className="con">
    <ImageMagnifier 
      imageUrl={airmax}/>
      <div>
        <div id="size">
          <div className="checkSize">
        <h3 id="Choice">Check <br /> your <br /> size:
        </h3>
       
        <Link
         className="SizeRelative"
         to="/Size">
         <img src={size} />  
          </Link>
        </div>
        
        <hr class="custom-hr"/>
        <div className="size-btn">
        Сhoose your shoe size
          <div>
          
          <button
           className="sizecard">8</button>
          <button className="sizecard ">8.5</button>
          <button className="sizecard ">9</button>
          <button className="sizecard ">10</button>
          <button className="sizecard ">10</button>
          </div>
          <div>
          <button className="sizecard ">11</button>
          <button className="sizecard ">10</button>
          <button className="sizecard ">10.5</button>
          <button className="sizecard ">11</button>
          </div>
          </div>
          <hr class="custom-hr"/>
          <div className="checkSize">
       
        <Link 
  className="headerlink"
  to="/Credit">
    <button 
      className="buy" 
      Link to="/Credit">
        B <br />
        U <br />
        Y 
    </button>
</Link>
        </div>
        </div>
        
      </div>
      
      </div>
      
    <div className='description'>
      
      <h2 className="Iname">
      Nike Air Max
      </h2>
      
      <Stars />
      
      <div className=""></div>
        <p className="des">
        Nike Air Max is a line of shoes produced by Nike,
          Inc., with the first model released in 1987. 
          Air Max shoes are identified by their midsoles 
          incorporating flexible urethane pouches filled
          with pressurized gas, visible from the exterior
          of the shoe and intended to provide cushioning 
          to the underfoot. Air Max was conceptualized by
          Tinker Hatfield, who initially worked for Nike
          designing stores
        </p>

<div className="cardbottons">
  <Link 
    className="headerlink"
    to="/Airmax">
      <button 
        className="buttoncard"
        Link to="/Max">prev
          <img 
            className="svg"
            src={svg}
            alt="" />
      </button>
  </Link>

<Link 
  className="headerlink"
  to="/Reebook">
    <button
      className="buttoncard" 
      Link to="/Max">
        next
          <img 
            className="svg" 
            src={svg}
            alt="" />
    </button>
  </Link>
  </div>
</div>

</section>

<Footer/>
</div>
</>
  );
};