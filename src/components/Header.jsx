import { Link } from "react-router-dom";
import svg from "../img/registration.svg";
import home from "../img/home.svg";
import step from "../img/step.svg";

export default function Header() {
  
  return (
<>
<section
  className='Header'>
    <article 
      className="title"> 
      <Link 
      style={{"textDecoration":"none"}}
      to='/home'>
        <h1 id="SneakerShop">
          SneakerShop
        </h1>
        </Link>
    </article>
    
<article 
  className="head">
    <Link 
      className="headerlink"
      to="/Sneakers">
        Sneakers
    <img 
      className="step"
      src={step} 
      alt="Sneakers"/>
    </Link>

<Link 
  className="headerlink"
  to="/Home">
    Home
  <img 
  className="step"
    src={home}
    alt="Home"/>
</Link>
    
<Link 
  className="headerlink"
  to="/About">
    Registration
      <img 
      className="step"
        src={svg} 
        alt="Registration"/>
</Link>
  </article>
</section>
</>
  );
};