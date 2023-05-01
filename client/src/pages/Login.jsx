import { Link } from "react-router-dom";
import { ReactComponent as Illustration } from "../assets/images/login-page-shopping-img.svg";
import Logo from "../assets/images/logo-50.webp";

const Login = () => {
  return (
    <main className="login-wrapper">
      <div className="login-left">
        <Illustration />
        <p>
          Belanja jadi lebih mudah !<br />
          Temukan produk yang kamu butuhkan dan beli kapan saja
          <br />
          di mana saja.
        </p>
      </div>
      <div className="login-right">
        <div className="logo-background">
          <img src={Logo} className="logo" alt="" />
        </div>
        <h2>Selamat Datang 👋</h2>
        <p>
          Silahkan login terlebih dahulu
          <br />
          untuk melanjutkan.
        </p>
        <form action="" className="form-container">
          <div className="input-group">
            <label className="label">Email address</label>
            <input
              autoComplete="off"
              name="Email"
              id="Email"
              className="input"
              type="email"
            />
          </div>
          <div className="input-group">
            <label className="label">Password</label>
            <input
              autoComplete="off"
              name="Password"
              id="Password"
              className="input"
              type="password"
            />
          </div>

          <div className="input-group-small">
            <label htmlFor="remember-password">
              <input type="checkbox" name="remember-password" id="" />
              Simpan Password
            </label>
            <a href="">Lupa Password?</a>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        <p className="register">
          Tidak mempunyai akun?{" "}
          <Link to="/registration" className="register-link">
            Daftar sekarang!
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
