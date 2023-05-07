import { Link } from "react-router-dom";
import { ReactComponent as Menu } from "../assets/images/menu.svg";
import Logo from "../assets/images/logo-50.webp";
import { ReactComponent as User } from "../assets/images/user.svg";
import { ReactComponent as Heart } from "../assets/images/heart.svg";
import { ReactComponent as Search } from "../assets/images/search.svg";
import { ReactComponent as Cart } from "../assets/images/shopping-bag.svg";

const Navbar = () => {
  return (
    <header>
      <nav className="container">
        <a href="/" className="logo">
          <img src={Logo} alt="Logo Jogja Electrik" />
          <h4>JOGJA ELECTRIK</h4>
        </a>
        <ul className="links">
          <li>
            <a href="/">Beranda</a>
          </li>
          <li>
            <a href="/products">Produk</a>
          </li>
          <li>
            <a href="/categories">Kategori</a>
          </li>
          <li>
            <a href="#">Bantuan</a>
          </li>
        </ul>
        <ul className="user-menu">
          <li>
            <Search />
          </li>
          <li>
            <Heart />
          </li>
          <li className="authentication">
            <a href="/login">Masuk</a>
          </li>
          <li className="authentication">
            <a href="/registration" className="btn btn-outline">
              Daftar
            </a>
          </li>
          <li className="menu-toggle">
            <button>
              <Menu />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
