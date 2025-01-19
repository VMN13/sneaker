import { Link } from "react-router-dom";
import Footer from "./Footer";
import Jumpman from '../img/JumpmanTwo.png';
import Westbrook from '../img/WestbrookTwo.jpg';
import ImageMagnifier from "./ImageMagnifier";
import Header from "./Header";
import svg from "../img/right.svg";
import LeftSvg from "../img/left.svg";
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
    <div className="sneakerDescription">
    <h1 id="Phantom">
    Air Jordan 12 Retro "Phantom"
  </h1> 
  </div>
<section
  className='containerSneaker'>
    <div className="con">
    <ImageMagnifier 
      imageUrl={Westbrook}/>
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
    className="sizecard">8
  </button>
  <button className="sizecard ">
    8.5
  </button>
  <button className="sizecard ">
    9
  </button>
  <button className="sizecard ">
    10
  </button>
  <button className="sizecard ">
    10
  </button>
</div>

<div>
  <button className="sizecard ">
    11
  </button>
  <button className="sizecard ">
    10
  </button>
  <button className="sizecard ">
    10.5
  </button>
  <button className="sizecard ">
    11
  </button>
  </div>
  <div className="buyTwoContainer">
<div className="buyTwoContainer">

</div>
      <Link Link to="/Credit">
      <button
      className="buyTwo" > B 
      U 
      Y 
       
    </button>
    </Link>
    
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
    Air Jordan "Westbrook One Take -39"
    </h2>
  <Stars />
    <p className="des">
    Nike Air Jordan Jumpman 2021 PF sneakers are a hit this season. The presented model is made in white. The sneakers are decorated with many stitched lines, as well as black inserts on the front and back. On the tongue is the brand's signature logo, which is made in red. The thickened sole with an Air insert allows you to get instant cushioning of the foot, and the rubberized sole gives good traction on the surface.
    </p>

<div className="cardbottons">
  <Link 
    className="headerlink"
    to="/Jumpman">
      <button 
        className="buttoncardLeft"
        Link to="/Max">prev
          <img 
            className="svg"
            src={LeftSvg}
            alt="" />
      </button>
  </Link>

<Link 
  className="headerlink"
  to="/jordan">
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