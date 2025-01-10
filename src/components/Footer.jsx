import { Link } from "react-router-dom";
import X from '../img/x.png';
import facebok from '../img/Facebook.jpg';
import instagram from '../img/instagram.jpg';
import Instagram from '../img/instagram.png';
import Facebook from '../img/facebook.png';

export default function Footer() {
  return (
<section className='Footer'>
  <p 
    className="links">
    <Link
        className="link"
        to="#">
          Privacy Policy
    </Link> | 
    <Link 
      className="link"
      to="#">
        Terms of Service
    </Link>
  </p>

<div 
  className="social-media">
    <Link to="#">
      <img 
        className="logo"
        src={Facebook}
        alt="Facebook" />
    </Link>

<Link to="#">
  <img 
    className="logo"
    src={Instagram}
    alt="Instagram" />
</Link>

<Link to="#">
  <img className="logo"
    src={X}
    alt="X" />
</Link>
</div>

<div className="copyright">
  <p className="copy">
    © 2025 Card. All rights reserved.
  </p>
  </div>
</section>
);
};


