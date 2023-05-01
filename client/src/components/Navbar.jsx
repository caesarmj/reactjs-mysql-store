import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="container navbar-small">
        <p>Dapatkan Diskon Menarik dan Promo Spesial Hanya di Sini!</p>
        <ul>
          <li>
            <Link to="">Masuk</Link>
          </li>
          <li>
            <Link to="">Registrasi</Link>
          </li>
          <li>
            <Link to="">Kontak Kami</Link>
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
      <nav className="container navbar-large"></nav>
      <button className="container menu-toggle">Button</button>
      <nav className="container navbar-menu"></nav>
      <div className="container">
        <div className="logo">Logo</div>
        <div className="links">
          <Link to="/link1">
            <h6>Link</h6>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
