import React from "react";
import Sidebar from "../components/Sidebar"; // Sidebar tetap
import HeroSection from "./HeroSection"; // HeroSection tetap
import "./Home.css"; // CSS yang telah Anda berikan
import img from "./home.png"; // Gambar latar belakang
import fitur1 from "./1.png"; // Gambar fitur 1
import fitur2 from "./2.png"; // Gambar fitur 2
import fitur3 from "./3.png"; // Gambar fitur 3

const Home = () => {
  const learningTopics = [
    {
      id: 1,
      title: "Apa itu Ekonomi?",
      description:
        "Pengenalan konsep dasar ekonomi dan bagaimana ia memengaruhi kehidupan sehari-hari.",
    },
    {
      id: 2,
      title: "Kebutuhan dan Kelangkaan",
      description:
        "Memahami perbedaan kebutuhan dan keinginan, serta pentingnya pengelolaan sumber daya.",
    },
    {
      id: 3,
      title: "Pasar dan Harga",
      description: "Penjelasan sederhana tentang bagaimana harga terbentuk di pasar.",
    },
    {
      id: 4,
      title: "Uang dan Fungsi Utamanya",
      description: "Mengenal uang sebagai alat tukar dan alat penyimpan nilai.",
    },
    {
      id: 5,
      title: "Konsumen dan Produsen",
      description:
        "Peran konsumen dan produsen dalam kegiatan ekonomi sehari-hari.",
    },
    {
      id: 6,
      title: "Tabungan dan Investasi Dasar",
      description:
        "Mengapa menabung penting dan langkah pertama dalam memahami investasi.",
    },
  ];

  return (
    <div>
      {/* Sidebar */}
      <Sidebar />
      
      {/* Konten Utama */}
      <div className="main-content">
        {/* Hero Section */}
        <HeroSection />

        {/* Welcome Section */}
        <div className="img-container">
          <img src={img} alt="Background" className="img" />
          <div className="welcomeText">
            <h1 className="welcomeTitle">Selamat Datang</h1>
            <h2 className="welcomeSubtitle">di Website</h2>
            <div className="searchContainer">
              <input
                type="text"
                placeholder="Cari materi..."
                className="searchInput"
              />
              <button className="searchButton">Cari</button>
            </div>
          </div>
        </div>

        {/* Topik Pembelajaran */}
        <div className="container text-center my-5">
          <h2 className="mb-4">Selamat Datang di Pembelajaran Ekonomi</h2>
          <blockquote className="blockquote mb-5">
            <p className="mb-0">
              "Ekonomi adalah seni memenuhi kebutuhan manusia yang tidak terbatas dengan sumber daya yang terbatas."
            </p>
          </blockquote>
          <h3 className="mt-5">Topik Ekonomi untuk Pemula</h3>
          <div className="row my-4">
            {learningTopics.map((topic) => (
              <div key={topic.id} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{topic.title}</h5>
                    <p className="card-text">{topic.description}</p>
                    <button className="btn btn-outline-primary">
                      Pelajari
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fitur Unggulan */}
        <section className="featuresSection">
          <h2 className="featuresTitle">Fitur Unggulan Kami</h2>
          <div className="featuresGrid">
            <div className="featureCard">
              <img
                src={fitur1}
                alt="Pelajaran Interaktif"
                className="featureImage"
              />
              <h3>Pelajaran Interaktif</h3>
              <p>Meningkatkan pemahaman melalui kuis dan simulasi.</p>
            </div>
            <div className="featureCard">
              <img
                src={fitur2}
                alt="Materi Mudah Diakses"
                className="featureImage"
              />
              <h3>Materi Mudah Diakses</h3>
              <p>Dapatkan materi kapan saja dan di mana saja.</p>
            </div>
            <div className="featureCard">
              <img
                src={fitur3}
                alt="Pemantauan Kemajuan"
                className="featureImage"
              />
              <h3>Pemantauan Kemajuan</h3>
              <p>Lihat progres belajar Anda secara langsung.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-3">
          <p>&copy; 2024 Belajar Ekonomi | Semua Hak Dilindungi</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
