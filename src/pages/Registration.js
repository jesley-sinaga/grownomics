import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate dan Link
import "./Registration.css"; // Importing the CSS
import logo from './grow.jpg'; // Logo image

function Registration() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that the password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      alert("Konfirmasi password tidak sesuai!");
      return;
    }

    // Save user data to localStorage
    const { email, password } = formData;
    localStorage.setItem("userData", JSON.stringify({ email, password }));

    console.log("Registration successful with data:", { email, password });

    // Navigate to the login page
    alert("Registrasi berhasil! Silakan login.");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="registration-container">
      {/* Left Section */}
      <div className="registration-left">
        <h1>Gabung dengan Komunitas Ekonomi</h1>
        <p>
          Pahami konsep ekonomi kelas 11 dengan lebih mendalam. Temukan materi, soal, 
          dan komunitas belajar yang mendukung kesuksesan Anda.
        </p>
        <img src={logo} alt="Logo" />
      </div>

      {/* Right Section */}
      <div className="registration-right">
        <h3>Form Registrasi</h3>
        <form onSubmit={handleSubmit} className="registration-form">
          {/* Email Field */}
          <div className="mb-3">
            <label className="registration-label" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="registration-input"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Masukkan email Anda"
            />
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label className="registration-label" htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="registration-input"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Masukkan password Anda"
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-3">
            <label className="registration-label" htmlFor="confirmPassword">Konfirmasi Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="registration-input"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Konfirmasi password Anda"
            />
          </div>

          <button type="submit" className="registration-btn">Daftar</button>
        </form>

        {/* Login link */}
        <div className="text-center mt-3">
          <p className="mb-0">
            Sudah punya akun? <Link to="/login" className="registration-link">Klik Login</Link>
          </p>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
    </div>
  );
}

export default Registration;
