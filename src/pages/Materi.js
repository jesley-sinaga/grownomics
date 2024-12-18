import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Materi.css";

const Materi = () => {
  const navigate = useNavigate();
  
  // State untuk mengatur tampilan dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  // Fungsi untuk menampilkan/menyembunyikan dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="materi-wrapper">
      {/* Sidebar dengan Dropdown */}
      <div className="sidebar">
        <h2 className="sidebar-title">Materi Ekonomi</h2>
        <div className="dropdown">
          <button className="dropdown-btn" onClick={toggleDropdown}>
            {isDropdownOpen ? "Sembunyikan Materi" : "Tampilkan Materi"}
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-list">
              {materiList.map((materi) => (
                <li
                  key={materi.id}
                  className="dropdown-item"
                  onClick={() => navigate(`/materi/${materi.id}`)}
                >
                  {materi.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Kontainer Grid untuk Tampilan Utama */}
      <div className="materi-container">
        <h1>Materi Ekonomi</h1>
        <p>Pilih bab untuk mempelajari lebih lanjut:</p>
        <div className="grid-container">
          {materiList.map((materi) => (
            <Link key={materi.id} to={`/materi/${materi.id}`} className="card">
              <h2>{materi.title}</h2>
              <p>{materi.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Materi;
