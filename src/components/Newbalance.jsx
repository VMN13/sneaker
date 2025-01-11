import { Link } from "react-router-dom";
import Footer from "./Footer";
import Newbalance from '../img/New.jpg';
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
      imageUrl={Newbalance}/>
    <div className='description'>
      <h2>
        NewBalance
      </h2>
        <p>
          New Balance Athletics, Inc. (NB), best known as simply New Balance, 
          is one of the world's major sports footwear
          and apparel manufacturers.
          Based in Boston, Massachusetts, the multinational corporation was founded in 1906
          as the New Balance Arch Support Company.
          New Balance maintains a manufacturing presence in the United States, as well as in the United Kingdom for
          the European market,
          where it produces some of its popular models. New Balance claims to differentiate its products with technical features,
          such as blended gel inserts, heel counters and a greater selection of sizes, particularly for 
          very narrow or very wide widths. The company is privately held and totaled $6.5 billion in revenue in 2023.
        </p>
<div className="cardbottons">
  <Link 
    className="headerlink"
    to="/Vans">
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
      <Link className="headerlink"
        to="/Balenciaga">
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