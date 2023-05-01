import { Link } from "react-router-dom";
import { ReactComponent as Illustration } from "../assets/images/register-page-transaction-img.svg";

const Login = () => {
  return (
    <main className="register-wrapper">
      <div className="register-left">
        <Illustration />
        <p>
          Membuat akun hanya membutuhkan beberapa langkah mudah,
          <br />
          dan Anda akan mendapatkan akses ke semua fitur
          <br />
          yang kami tawarkan.
        </p>
      </div>
      <div className="register-right">
        <h2>Registrasi</h2>
        <p>
          Silahkan registrasi terlebih dahulu
          <br />
          untuk berbelanja.
        </p>
        <form action="" className="form-container">
          <div className="input-group">
            <label className="label">Nama Lengkap</label>
            <input
              autoComplete="off"
              name="Email"
              id="Email"
              className="input"
              type="email"
            />
          </div>
          <div className="input-group">
            <label className="label">Email</label>
            <input
              autoComplete="off"
              name="Password"
              id="Password"
              className="input"
              type="password"
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
          <div className="input-group">
            <label className="label">Ulangi Password</label>
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
              Saya menyetujui <a href="#">syarat & ketentuan</a>
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Registrasi
          </button>
        </form>
        <p className="login-link-wrapper">
          Sudah mempunyai akun?{" "}
          <Link to="/login" className="register-link">
            Masuk disini
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
