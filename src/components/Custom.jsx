import { Link } from "react-router-dom";
import Footer from "./Footer";
import Cust from '../img/cust.jpg';
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
    imageUrl={Cust}/>

<div className='description'>
  <h2>Custom Sneakers
  </h2>
    <p>
      Sneaker customization has become a significant part of modern fashion. It transforms regular shoes into unique, 
      personalized pieces. This change started with simple DIY projects and has grown into a professional art form.
      Sneakers are now symbols of personal expression and cultural identity.
      At first, sneaker customization was just a hobby for some people.
      It was especially popular among hip-hop and skateboarding 
      communities. These enthusiasts used markers and fabric paints to make their shoes unique.
      Over time, this hobby turned into a 
      sophisticated art form, attracting professional artists and commercial interest.
      Today, custom sneakers are not only stylish but also highly sought-after collectibles. They bridge the gap between streetwear
      and high fashion. This blog post will explore the journey of sneaker customization, highlighting key milestones and its impact
      on fashion and culture.
    </p>

<div
  className="cardbottons">
    <Link 
      className="headerlink"
      to="/Louisvuitton">
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
  to="/Sneakers">
    <button 
      className="buttoncard" 
      Link to="/Max">
        come back
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