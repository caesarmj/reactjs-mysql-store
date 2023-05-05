import { ReactComponent as Arrow } from "../../assets/images/arrow-right.svg";

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
          <div className="category-card">
            <img src="http://via.placeholder.com/1000" alt="Category Image" />
            <div className="category-content">
              <div className="category-content-heading">
                <h4>Nama Kategori</h4>
                <p>24 Produk</p>
              </div>
              <div className="category-content-button">
                <a href="#">
                  <Arrow className="arrow-button" />
                </a>
              </div>
            </div>
          </div>
          <div className="category-card">
            <img src="http://via.placeholder.com/1000" alt="Category Image" />
            <div className="category-content">
              <div className="category-content-heading">
                <h4>Nama Kategori</h4>
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
              <h4>Promo</h4>
              <p>Paragraf</p>
              <button>Tombol</button>
            </div>
          </div>
        </div>
      </section>
      <section className="container featured">Featured</section>
    </main>
  );
};

export default Home;
