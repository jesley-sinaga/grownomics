import React from "react";
import "./Home.css"; // Pastikan file CSS diimpor
import img from "./home.png"; // Gambar latar belakang
import fitur1 from "./1.png"; // Gambar fitur 1
import fitur2 from "./2.png"; // Gambar fitur 2
import fitur3 from "./3.png"; // Gambar fitur 3

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <img src={img} alt="Background" className="background-img" />
        </div>
        <div className="hero-text">
          <h1 className="hero-title">Selamat datang di Website Kami</h1>
          <p className="hero-description">
            Kami menyediakan berbagai materi belajar yang mudah diakses dan interaktif untuk membantu proses belajar Anda.
          </p>
          <div className="search-container">
            <input
              type="text"
              placeholder="Cari materi..."
              className="search-input"
            />
            <button className="search-button">Cari</button>
          </div>
        </div>
      </section>

      {/* Fitur Unggulan */}
      <section className="features-section">
        <h2 className="features-title">Fitur Unggulan Kami</h2>
        <div className="features-grid">
          {/* Fitur 1 */}
          <div className="feature-card">
            <img src={fitur1} alt="Pelajaran Interaktif" className="feature-image" />
            <h3>Pelajaran Interaktif</h3>
            <p>Meningkatkan pemahaman melalui kuis dan simulasi.</p>
          </div>

          {/* Fitur 2 */}
          <div className="feature-card">
            <img src={fitur2} alt="Materi Mudah Diakses" className="feature-image" />
            <h3>Materi Mudah Diakses</h3>
            <p>Dapatkan materi kapan saja dan di mana saja.</p>
          </div>

          {/* Fitur 3 */}
          <div className="feature-card">
            <img src={fitur3} alt="Pemantauan Kemajuan" className="feature-image" className="feature-image" />
            <h3>Pemantauan Kemajuan</h3>
            <p>Lihat progres belajar Anda secara langsung.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;