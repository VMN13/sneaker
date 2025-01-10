import { Link } from "react-router-dom";
import Footer from "./Footer";
import yeezy from '../img/yeezy.jpg';
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
    imageUrl={yeezy}/>

<div className='description'>
  <h2>
  Yeezy Boost 350 V2
  </h2>
      <p>
        But before we begin, here’s a brief introduction of the 
        Adidas Yeezy Boost 350 V2…
        As part of a collaboration between Adidas and celebrity 
        rapper Kanye West, the first yeezy was born in 2009.
        At that time, there wasn’t much attention for it until 2015 when 
        the first 350 series were released.
        And the hype exploded.
        Sneaker enthusiasts and resellers camp overnight outside stores 
        with the slim hope that they could get a pair of yeezys. Needless
        to say, resale prices soared with prices going well above a 
        thousand.
        This year, Kanye also released the reflective series which got 
        sneaker enthusiasts all hyped up once again.
        With all the hype behind yeezys, it can be hard to really tell 
        if they’re good or bad and most importantly if they’re worth the
        buy.
      </p>

<div className="cardbottons">
  <Link 
    className="headerlink"
    to="/Puma">
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
  to="/convers">
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