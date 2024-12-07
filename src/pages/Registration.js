import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Registration.css"; // Import CSS
import logo from "./grow.jpg"; // Import logo

function Registration() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi password dan konfirmasi password
    if (formData.password !== formData.confirmPassword) {
      alert("Konfirmasi password tidak sesuai!");
      return;
    }

    // Simpan data pengguna ke localStorage
    const { email, password } = formData;
    localStorage.setItem("userData", JSON.stringify({ email, password }));

    alert("Registrasi berhasil! Silakan login.");
    navigate("/login");
  };

  return (
    <div className="registration-container">
      {/* Bagian Kiri */}
      <div className="registration-left">
        <h1>Gabung dengan Komunitas Ekonomi</h1>
        <p>
          Pahami konsep ekonomi kelas 11 dengan lebih mendalam. Temukan materi,
          soal, dan komunitas belajar yang mendukung kesuksesan Anda.
        </p>
        <img src={logo} alt="Logo Komunitas" />
      </div>

      {/* Bagian Kanan */}
      <div className="registration-right">
        <h3>Form Registrasi</h3>
        <form onSubmit={handleSubmit} className="registration-form">
          {/* Input Email */}
          <div className="mb-3">
            <label htmlFor="email" className="registration-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="registration-input"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Masukkan email Anda"
            />
          </div>

          {/* Input Password */}
          <div className="mb-3">
            <label htmlFor="password" className="registration-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="registration-input"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Masukkan password Anda"
            />
          </div>

          {/* Input Konfirmasi Password */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="registration-label">
              Konfirmasi Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="registration-input"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Konfirmasi password Anda"
            />
          </div>

          <button type="submit" className="registration-btn">
            Daftar
          </button>
        </form>

        {/* Tautan ke Login */}
        <p className="text-center">
          Sudah punya akun?{" "}
          <Link to="/login" className="registration-link">
            Klik di sini
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Registration;
