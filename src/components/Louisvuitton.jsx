import { Link } from "react-router-dom";
import Footer from "./Footer";
import Louisvuitton from '../img/Louisvuitton.jpg';
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
  imageUrl={Louisvuitton}/>

    <div className='description'>
      <h2>Louis Vuitton
      </h2>
        <p>
        Louis Vuitton Malletier SAS, commonly known as Louis Vuitton,
        is a French luxury fashion house and company founded 
        in 1854 by Louis Vuitton. The label's LV monogram appears on most
        of its products, ranging from luxury bags and leather goods to 
        ready-to-wear, shoes, perfumes, watches, jewellery, accessories,
        sunglasses and books. Louis Vuitton is one of the world's 
        leading international fashion houses. It sells its products 
        through standalone boutiques, lease departments in high-end 
        departmental stores, and through the e-commerce section of its website. 
        Louis Vuitton merged with Moët Hennessy in 1987 to create LVMH, 
        of which it is a subsidiary.
      </p>

<div className="cardbottons">
  <Link 
    className="headerlink"
    to="/Balenciaga">
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
  to="/Custom">
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