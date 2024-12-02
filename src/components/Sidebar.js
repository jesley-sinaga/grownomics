import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logose from "./grow.jpg"; // Pastikan path ini benar

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // State untuk mengontrol sidebar

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Membalik nilai state isOpen
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
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
          <Link to="/home">
            <span className="menu-icon">🏠</span>
            {isOpen && "Home"}
          </Link>
        </li>
        <li>
          <Link to="/materi">
            <span className="menu-icon">📚</span>
            {isOpen && "Materi"}
          </Link>
        </li>
        <li>
          <Link to="/latihan-soal">
            <span className="menu-icon">📝</span>
            {isOpen && "Latihan Soal"}
          </Link>
        </li>
        <li>
          <Link to="/grafik">
            <span className="menu-icon">📊</span>
            {isOpen && "Grafik"}
          </Link>
        </li>
        <li>
          <Link to="/kuis">
            <span className="menu-icon">❓</span>
            {isOpen && "Kuis"}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
