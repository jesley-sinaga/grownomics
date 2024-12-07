import React, { useState } from "react";
import { Link } from "react-router-dom"; // Untuk navigasi ke halaman materi
import "./Home.css"; // Pastikan file CSS diimpor
import img from "./home.png"; // Gambar latar belakang
import fitur1 from "./1.png"; // Gambar fitur 1
import fitur2 from "./2.png"; // Gambar fitur 2
import fitur3 from "./3.png"; // Gambar fitur 3

const materiList = [
  { id: 1, title: "Bab 1: Pengantar Ekonomi", desc: "Memahami konsep dasar ekonomi." },
  { id: 2, title: "Bab 2: Kebutuhan dan Kelangkaan", desc: "Pelajari bagaimana kelangkaan memengaruhi kebutuhan manusia." },
  { id: 3, title: "Bab 3: Sistem Ekonomi", desc: "Mengenal berbagai jenis sistem ekonomi yang digunakan." },
  { id: 4, title: "Bab 4: Permintaan dan Penawaran", desc: "Analisis faktor yang memengaruhi harga pasar." },
  { id: 5, title: "Bab 5: Pasar Persaingan", desc: "Memahami konsep pasar persaingan sempurna dan tidak sempurna." },
      { id: 6, title: "Bab 6: Uang dan Perbankan", desc: "Pahami fungsi uang dan peran bank dalam ekonomi." },
  { id: 7, title: "Bab 7: Inflasi", desc: "Pelajari penyebab dan dampak inflasi." },
  { id: 8, title: "Bab 8: Pertumbuhan Ekonomi", desc: "Memahami bagaimana ekonomi berkembang dari waktu ke waktu." },
  { id: 9, title: "Bab 9: Pembangunan Ekonomi", desc: "Mengupas pembangunan ekonomi secara mendalam." },
  { id: 10, title: "Bab 10: Ekonomi Digital", desc: "Memahami peran teknologi dalam ekonomi modern." },
  { id: 11, title: "Bab 11: Perdagangan Internasional", desc: "Pelajari dampak perdagangan antarnegara." },
  { id: 12, title: "Bab 12: Kebijakan Ekonomi", desc: "Mengenal kebijakan ekonomi pemerintah." },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMateri, setFilteredMateri] = useState([]);

  const handleSearch = () => {
    // Filter materi berdasarkan judul atau deskripsi
    const results = materiList.filter((materi) =>
      materi.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      materi.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMateri(results);
  };

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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}>
              Cari
            </button>
          </div>
          {/* Hasil Pencarian */}
          <div className="search-results">
            {filteredMateri.length > 0 ? (
              filteredMateri.map((materi) => (
                <div key={materi.id} className="search-item">
                  <Link to={`/materi/${materi.id}`}>
                    <h3>{materi.title}</h3>
                    <p>{materi.desc}</p>
                  </Link>
                </div>
              ))
            ) : searchTerm ? (
              <p className="no-results">Tidak ada materi yang ditemukan.</p>
            ) : null}
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
            <p>Dapatkan materi kapan saja dan di mana saja yang akurat.</p>
          </div>

          {/* Fitur 3 */}
          <div className="feature-card">
            <img src={fitur3} alt="Pemantauan Kemajuan" className="feature-image" />
            <h3>Pemantauan Kemajuan</h3>
            <p>Lihat progres belajar secara langsung.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
