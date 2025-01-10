import { Link } from "react-router-dom";
import Footer from "./Footer";
import convers from '../img/convers.jpg';
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
    imageUrl={convers}/>
    <div className='description'>
      <h2>Convers
      </h2>
        <p>
          Converse  is an American lifestyle brand that markets, distributes, and licenses footwear, apparel, and accessories. 
          Founded by Marquis Mills Converse in 1908 as the Converse Rubber Shoe Company in Malden, Massachusetts, it has been 
          acquired by several companies before becoming a subsidiary of Nike, Inc. in 2003.
          Converse initially produced winterized rubber-soled shoes and boots. During World War II, it shifted manufacturing to make
          footwear for the military. Initially, it was one of the few producers of athletic shoes and dominated the U.S. market, 
          but lost its position in the 1970s as competitors introduced their styles.
        </p>

<div className="cardbottons">
  <Link
    className="headerlink"
    to="/Yeezy">
      <button 
        className="buttoncard" 
        Link to="/Max">
          prev
      </button>
  </Link>

<Link className="headerlink"
      to="/Sneakers">
        <button 
          className="buttoncard" 
          Link to="/Max">
            buy
        </button>
</Link>

<Link 
  className="headerlink"
  to="/Vans">
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