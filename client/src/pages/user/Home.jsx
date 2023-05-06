import { ReactComponent as Arrow } from "../../assets/images/arrow-right.svg";
import { ReactComponent as Shop } from "../../assets/images/shopping-cart.svg";

const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>Title</h1>
          <p>Subtitle</p>
          <a href="" className="btn btn-primary">
            Tombol
          </a>
        </div>
        <img src="http://via.placeholder.com/1920x1080" alt="Hero 1" />
      </section>
      <section className="container categories">
        <h2 className="section-header">Category Section</h2>
        <div className="category-wrapper">
          <a href="#" className="category-card">
            <img src="https://picsum.photos/1000" alt="Category Image" />
            <div className="category-content">
              <div className="category-content-heading">
                <h3>Nama Kategori</h3>
                <p>24 Produk</p>
              </div>
              <div className="category-content-button">
                <a href="#">
                  <Arrow className="arrow-button" />
                </a>
              </div>
            </div>
          </a>
          <div className="category-card">
            <img src="https://picsum.photos/1000" alt="Category Image" />
            <div className="category-content">
              <div className="category-content-heading">
                <h3>Nama Kategori</h3>
                <p>24 Produk</p>
              </div>
              <div className="category-content-button">
                <a href="#">
                  <Arrow className="arrow-button" />
                </a>
              </div>
            </div>
          </div>
          <div className="promo-card">
            <div className="promo-content">
              <div className="promo-icon">
                <span>
                  <Shop />
                </span>
              </div>
              <h3>Temukan produk berkualitas dengan harga terbaik!</h3>
              <p>
                Dapatkan pengalaman berbelanja yang mudah dan menyenangkan hanya
                di sini.
              </p>
              <a href="#" className="btn btn-secondary">
                Lihat Produk
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="container featured">
        <h2 className="section-header">Featured Section</h2>
      </section>
    </main>
  );
};

export default Home;
