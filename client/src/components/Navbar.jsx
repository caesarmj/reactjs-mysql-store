import { Link } from "react-router-dom";
import { ReactComponent as Phone } from "../assets/images/phone.svg";
import { ReactComponent as Menu } from "../assets/images/menu.svg";
import Logo from "../assets/images/logo-50.webp";
import { ReactComponent as User } from "../assets/images/user.svg";
import { ReactComponent as Heart } from "../assets/images/heart.svg";
import { ReactComponent as Search } from "../assets/images/search.svg";
import { ReactComponent as Cart } from "../assets/images/shopping-bag.svg";

const Navbar = () => {
  return (
    <header>
      <nav className="container navbar-small">
        <p>Dapatkan Diskon Menarik dan Promo Spesial Hanya di Sini!</p>
        <ul>
          <li>
            <Link to="/login">Masuk</Link>
          </li>
          <li>
            <Link to="/registration">Registrasi</Link>
          </li>
          <li>
            <Link to="/contact-us">Kontak Kami</Link>
          </li>
          <li className="divider">|</li>
          <li className="social facebook">
            <Link to="">FB</Link>
          </li>
          <li className="social instagram">
            <Link to="">IG</Link>
          </li>
          <li className="social whatsapp">
            <Link to="">WA</Link>
          </li>
        </ul>
      </nav>
      <nav className="container navbar-large">
        <div className="call-wrapper">
          <Phone className="call-logo" />
          <div className="call-info">
            <h6>Call Us</h6>
            <p>+62 123 456 789</p>
          </div>
        </div>
        <button className="container menu-toggle">
          <Menu className="menu-icon" />
        </button>
        <div className="logo-wrapper">
          <img src={Logo} alt="" />
          <h6 className="container menu-heading">JOGJA ELECTRIK</h6>
        </div>
        <ul className="navbar-large-menu">
          <li>
            <User />
          </li>
          <li>
            <Heart />
          </li>
          <li>
            <Search />
          </li>
          <li>
            <Cart />
          </li>
        </ul>
      </nav>
      <nav className="container navbar-menu">
        <ul>
          <li>Menu</li>
          <li>Menu</li>
          <li>Menu</li>
          <li>Menu</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
