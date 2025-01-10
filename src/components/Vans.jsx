import { Link } from "react-router-dom";
import Footer from "./Footer";
import Vans from '../img/Vans.jpg';
import ImageMagnifier from "./ImageMagnifier";
import Header from "./Header";

export default function Max() {
  return (
    <>
  <div className="App">
<Header /> 

  <section
    className='container'>
    <ImageMagnifier 
    imageUrl={Vans}/>

<div className='description'>
  <h2>
    Vans
  </h2>
      <p>
        Vans (originally called the Van Doren Rubber Company) is an American apparel,
        accessories, and skateboarding shoes brand, established in Anaheim, 
        California, and owned by VF Corporation. The company also sponsors surf, snowboarding, BMX,
        and motocross teams. From 1996 to 2019, the brand was the primary sponsor of the annual Warped Tour music festival.
      </p>

<div className="cardbottons">
  <Link 
    className="headerlink"
    to="/convers">
      <button 
        className="buttoncard" 
        Link to="/Max">
          prev
      </button>
  </Link>

<Link 
  className="headerlink"
  to="/Sneakers">
    <button 
      className="buttoncard" 
      Link to="/Max">
        buy
    </button>
</Link>

<Link 
  className="headerlink"
  to="/Newbalance">
    <button 
      className="buttoncard" 
      Link to="/Max">
        next
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