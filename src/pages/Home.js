
import React from "react";
import "./Home.css";// Pastikan file CSS diimpor
import img from "./wal.png"; // Gambar latar belakang
import fitur1 from "./3.jpg"; // Gambar fitur 1
import fitur2 from "./1.png"; // Gambar fitur 2
import fitur3 from "./2.png";
import fitur4 from "./4.png"; // Gambar fitur 3

const Home = () => {
  return (
    <div className="img-container">
      {/* Gambar Latar Belakang */}
      <img src={img} alt="Background" className="img" />

      {/* Elemen Selamat Datang */}
      <div className="welcomeText">
        <h1 className="welcomeTitle">Selamat Datang</h1>
        <h2 className="welcomeSubtitle">di Website Pembelajaran Ekonomi</h2>
        <div className="searchContainer">
          <input
            type="text"
            placeholder="Cari materi..."
            className="searchInput"
          />
          <button className="searchButton">Cari</button>
        </div>
      </div>

      {/* Bagian Fitur */}
      <section className="featuresSection">
        <h2 className="featuresTitle">Fitur Unggulan </h2>
        <div className="featuresGrid">
          {/* Fitur 1 */}
          <div className="featureCard">
            <img src={fitur1} alt="Pelajaran Interaktif" className="featureImage" />
            <h3>Kuis</h3>
            <p>Meningkatkan pemahaman dengan cepat dan tepat melalui kuis.</p>
          </div>

          {/* Fitur 2 */}
          <div className="featureCard">
            <img src={fitur2} alt="Materi Mudah Diakses" className="featureImage" />
            <h3>Materi Mudah Diakseesss</h3>
            <p>Dapatkan materi kapan saja dan di mana saja.</p>
          </div>

          {/* Fitur 3 */}
          <div className="featureCard">
            <img src={fitur3} alt="Pemantauan Kemajuan" className="featureImage" />
            <h3>Latihan Soal</h3>
            <p>Latih pemahaman materi dengan pengerjaan soal.</p>
          </div>

          <div className="featureCard">
            <img src={fitur4} alt="" className="featureImage" />
            <h3>Grafik Kemajuan</h3>
            <p>Lihat progres belajar secara langsung.</p>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Home;
