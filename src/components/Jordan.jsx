
import { Link } from "react-router-dom";
import Footer from "./Footer";
import jordan from '../img/jordan.jpg';
import ImageMagnifier from "./ImageMagnifier";
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
      imageUrl={jordan}/>
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
        Air Jordan 12 Retro "Phantom"
      </h2>
      
      <Stars />
      
      <div className=""></div>
        <p className="des">
          Jordan Brings the Heat
          Michael Jordan brought the literal heat in his 1996-1997 season, setting the stage for one of basketball’s 
          most transformative moments. In game five of The Finals—Jordan’s famous “flu game”—he scored 38 points to go 
          with seven rebounds and five assists against the Utah Jazz, all with a temperature of 103 degrees. His enduring drive 
          ultimately helped lead his team to another title, serving as inspiration for the technology and construction of 
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