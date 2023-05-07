import { ReactComponent as Arrow } from "../../assets/images/arrow-right.svg";
import { ReactComponent as Shop } from "../../assets/images/shopping-cart.svg";
import { ReactComponent as Heart } from "../../assets/images/heart.svg";
import { ReactComponent as Cart } from "../../assets/images/shopping-bag.svg";
import { ReactComponent as Star } from "../../assets/images/star.svg";

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
        <h2 className="section-header">Kategori</h2>
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
          <a href="#" className="promo-card">
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
          </a>
        </div>
      </section>
      <section className="container featured">
        <h2 className="section-header">Produk Terbaru</h2>
        <div className="featured-wrapper">
          <a href="#" class="featured-card">
            <img src="https://picsum.photos/1000" alt="Category Image" />
            <div className="card-discount">Diskon 10%</div>
            <span className="cart-button">
              <Cart />
            </span>
            <div className="card-content">
              <span className="favourite-button">
                <Heart />
              </span>
              <h4>Nama Produk Yang Panjang Sekaliiii</h4>
              <span className="rating">
                <Star className="star active" />
                <Star className="star active" />
                <Star className="star active" />
                <Star className="star" />
                <Star className="star" />
              </span>
              <del>Rp 2.000.000</del>
              <p>Rp 1.250.000</p>
            </div>
          </a>
          <a href="#" class="featured-card">
            <img src="https://picsum.photos/1000" alt="Category Image" />
            <span className="cart-button">
              <Cart />
            </span>
            <div className="card-content">
              <span className="favourite-button">
                <Heart />
              </span>
              <h4>Nama Produk Yang Panjang Sekaliiii</h4>
              <span className="rating">
                <Star className="star active" />
                <Star className="star active" />
                <Star className="star active" />
                <Star className="star" />
                <Star className="star" />
              </span>
              <del>Rp 2.000.000</del>
              <p>Rp 1.250.000</p>
            </div>
          </a>
          <a href="#" class="featured-card">
            <img src="https://picsum.photos/1000" alt="Category Image" />
            <span className="cart-button">
              <Cart />
            </span>
            <div className="card-content">
              <span className="favourite-button">
                <Heart />
              </span>
              <h4>Nama Produk Yang Panjang Sekaliiii</h4>
              <span className="rating">
                <Star className="star active" />
                <Star className="star active" />
                <Star className="star active" />
                <Star className="star" />
                <Star className="star" />
              </span>
              <del>Rp 2.000.000</del>
              <p>Rp 1.250.000</p>
            </div>
          </a>
          <a href="#" class="featured-card">
            <img src="https://picsum.photos/1000" alt="Category Image" />
            <span className="cart-button">
              <Cart />
            </span>
            <div className="card-content">
              <span className="favourite-button">
                <Heart />
              </span>
              <h4>Nama Produk Yang Panjang Sekaliiii</h4>
              <span className="rating">
                <Star className="star active" />
                <Star className="star active" />
                <Star className="star active" />
                <Star className="star" />
                <Star className="star" />
              </span>
              <del>Rp 2.000.000</del>
              <p>Rp 1.250.000</p>
            </div>
          </a>
          <a href="#" class="featured-card">
            <img src="https://picsum.photos/1000" alt="Category Image" />
            <span className="cart-button">
              <Cart />
            </span>
            <div className="card-content">
              <span className="favourite-button">
                <Heart />
              </span>
              <h4>Nama Produk Yang Panjang Sekaliiii</h4>
              <span className="rating">
                <Star className="star active" />
                <Star className="star active" />
                <Star className="star active" />
                <Star className="star" />
                <Star className="star" />
              </span>
              <del>Rp 2.000.000</del>
              <p>Rp 1.250.000</p>
            </div>
          </a>
          <a href="#" class="featured-card">
            <img src="https://picsum.photos/1000" alt="Category Image" />
            <div className="card-discount">Diskon 10%</div>
            <span className="cart-button">
              <Cart />
            </span>
            <div className="card-content">
              <span className="favourite-button">
                <Heart />
              </span>
              <h4>Nama Produk Yang Panjang Sekaliiii</h4>
              <span className="rating">
                <Star className="star active" />
                <Star className="star active" />
                <Star className="star active" />
                <Star className="star" />
                <Star className="star" />
              </span>
              <del>Rp 2.000.000</del>
              <p>Rp 1.250.000</p>
            </div>
          </a>
          <a href="#" class="featured-card">
            <img src="https://picsum.photos/1000" alt="Category Image" />
            <span className="cart-button">
              <Cart />
            </span>
            <div className="card-content">
              <span className="favourite-button">
                <Heart />
              </span>
              <h4>Nama Produk Yang Panjang Sekaliiii</h4>
              <span className="rating">
                <Star className="star active" />
                <Star className="star active" />
                <Star className="star active" />
                <Star className="star" />
                <Star className="star" />
              </span>
              <del>Rp 2.000.000</del>
              <p>Rp 1.250.000</p>
            </div>
          </a>
          <a href="#" class="featured-card">
            <img src="https://picsum.photos/1000" alt="Category Image" />
            <div className="card-discount">Diskon 90%</div>
            <span className="cart-button">
              <Cart />
            </span>
            <div className="card-content">
              <span className="favourite-button">
                <Heart />
              </span>
              <h4>Nama Produk Yang Panjang Sekaliiii</h4>
              <span className="rating">
                <Star className="star active" />
                <Star className="star active" />
                <Star className="star active" />
                <Star className="star" />
                <Star className="star" />
              </span>
              <del>Rp 2.000.000</del>
              <p>Rp 1.250.000</p>
            </div>
          </a>
        </div>
      </section>
      {/* <section className="container promotion">
        <div className="promotion-wrapper">
          <div className="promotion-text">
            <h4>Title</h4>
            <p>Paragraf</p>
            <a href="#">Button</a>
          </div>
          <img src="https://picsum.photos/200" alt="Images" />
        </div>
      </section> */}
      <section className="container showcase">
        <div className="popular-terlaris">
          <h2 className="showcase-header">Terlaris</h2>
          <div className="showcase-content">
            <div className="showcase-card">
              <img src="https://picsum.photos/200" alt="" />
              <h5>Produk</h5>
            </div>
          </div>
        </div>
        <div className="popular-product">
          <h2 className="showcase-header">Populer</h2>
          <div className="showcase-content"></div>
        </div>
        <div className="recomended-product">
          <h2 className="showcase-header">Rekomendasi</h2>
          <div className="showcase-content"></div>
        </div>
      </section>
    </main>
  );
};

export default Home;
