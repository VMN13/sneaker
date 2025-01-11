import { Link } from "react-router-dom";
import Footer from "./Footer";
import Reb from '../img/reb.jpg';
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
    imageUrl={Reb}/>
    <div className='description'>
      <h2>
        Reebok
      </h2>
        <p>
        Reebok International Limited  is an American footwear and clothing brand that
        is a part of Authentic Brands Group. It was established in England in 1958 
        as a companion company to J.W. Foster and Sons, a sporting goods
        company which had been founded in 1895 in Bolton, Lancashire.
        From 1958 until 1986, the brand featured the flag of the United Kingdom 
        in its logo to signify the origins of the company. It was bought by German 
        sporting goods company Adidas in 2005, then sold to the United States–based
        Authentic Brands Group in 2021. The company's global headquarters are 
        located in Boston, Massachusetts, in the Seaport District.
        </p>

<div className="cardbottons">
  <Link 
    className="headerlink"
    to="/jordan">
      <button className="buttoncard" 
        Link to="/Max">
          prev
      </button>
  </Link>
  <Link className="headerlink"
        to="/Sneakers">
      <button className="buttoncard" 
        Link to="/Max">
          buy
        </button>
  </Link>
  <Link className="headerlink" to="/Adidas">
    <button className="buttoncard" 
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