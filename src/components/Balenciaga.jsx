import { Link } from "react-router-dom";
import Footer from "./Footer";
import Balenciaga from '../img/Balenciaga.jpg';
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
    imageUrl={Balenciaga}/>

<div className='description'>
  <h2>
    Balenciaga
  </h2>
    <p>
      Balenciaga is a Spanish luxury fashion house headquartered in Paris. It designs, 
      manufactures and markets ready-to-wear footwear,
      handbags, and accessories, and licenses its name and branding to Coty for fragrances. 
      Balenciaga is one of the luxury brands owned by Kering.
      Originally a Spanish brand, it was founded in 1919 by Spanish couturier Cristóbal Balenciaga in San Sebastián.
      Gianfranco Gianangeli
      has been CEO of Balenciaga since November 2024 and Demna Gvasalia its creative director since 2015.
    </p>

<div className="cardbottons">
  <Link 
    className="headerlink"
    to="/Newbalance">
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
  to="/Louisvuitton">
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