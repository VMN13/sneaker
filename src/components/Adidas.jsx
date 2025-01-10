import { Link } from "react-router-dom";
import ImageMagnifier from "./ImageMagnifier";
import Header from "./Header";
import Footer from "./Footer";
import adid from '../img/Adid.jpg';

export default function Adidas() {
  return (
<>
  <div className="App">
  <Header />
  <section
    className='container'>
    <ImageMagnifier 
      imageUrl={adid}/>
  <div className='description'>
    <h2>
      Adidas Originals
    </h2>
      <p>
        The famous Trefoil logo, formerly used on all Adidas products, has since 1997 been applied only to heritage products; 
        the Performance logo, which had from 1991 been seen on the "Equipment" range of products, replaced the Trefoil 
        in 1997 across the rest of the Adidas line. Adidas Originals covers sports fashion styles with references to the decades 
        between the 1940s and the 1990s. 
        The brand has a distinctively retro old school feel.
        An extensive campaign was launched in 2008 to promote the label. In October 2017, Adidas Originals opened a new flagship 
        and its largest store worldwide in Wicker Park, Chicago.
      </p>

<div className="cardbottons">
  <Link
    className="headerlink"
    to="/jordan">
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
  to="/Puma">
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