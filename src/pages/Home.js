import React from "react";
import './Home.css';
import img from "./wal.png";
import imga from "./buku.jpg";
import imge from "./latsol.jpg";
import imgs from "./grafik.png";
import imgd from "./kuiss.jpeg";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="img-container">
        <img src={img} alt="Background" className="backgroundImage" />

        {/* Komponen Selamat Datang dan Kolom Pencarian */}
        <div className="welcomeSection">
          <h1 className="welcomeTitle">Selamat Datang</h1>
          <h3 className="welcomeSubtitle">di Website Pembelajaran Ekonomi</h3>
          <div className="searchBar">
            <input
              type="text"
              placeholder="Cari materi..."
              className="searchInput"
            />
            <button className="searchButton">Cari</button>
          </div>
        </div>
      </div>

      <div className="content">
  <h2 className="contentTitle">Pilih Fitur</h2>
  <div className="featureGrid">
    <div className="featureBox">
    <img src={imga} alt="Materi" className="materi" />
      <h3>Materi</h3>
    </div>
    <div className="featureBox">
    <img src={imge} alt="Latsol" className="latsol" />
      <h3>Latihan Soal</h3>
    </div>
    <div className="featureBox">
    <img src={imgs} alt="Latsol" className="latsol" />
      <h3>Grafik Peningkatan</h3>
    </div>
    <div className="featureBox">
    <img src={imgd} alt="Latsol" className="latsol" />
      <h3>Kuis</h3>
    </div>
  </div>
</div>
</div>
  );
};

export default Home;