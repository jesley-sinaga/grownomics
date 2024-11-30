import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
// Import gambar
import logose from "./grow.jpg"; // Sesuaikan dengan path logo Anda

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // State untuk mengatur buka/tutup sidebar

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Mengubah state isOpen
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}> {/* Gunakan backtick dengan benar */}
      {/* Logo */}
      <div className="logo-container">
        <img 
          src={logose} 
          alt="Logo" 
          className={`logo ${isOpen ? "large" : "small"}`} 
        />
      </div>

      {/* Tombol toggle */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? "❮" : "❯"}
      </button>

      {/* Menu */}
      <ul className="sidebar-menu">
        <li>
          <Link to="/home">{isOpen && "Home"}</Link> {/* Tampilkan label hanya jika sidebar terbuka */}
        </li>
        <li>
          <Link to="/materi">{isOpen && "Materi"}</Link>
        </li>
        <li>
          <Link to="/latihan-soal">{isOpen && "Latihan Soal"}</Link>
        </li>
        <li>
          <Link to="/grafik">{isOpen && "Grafik"}</Link>
        </li>
        <li>
          <Link to="/kuis">{isOpen && "Kuis"}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
