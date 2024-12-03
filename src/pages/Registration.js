
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate dan Link
import "./Registration.css"; // Assuming your CSS styles are here
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
    <div className="form-container">
      <h2>Registrasi</h2>
      <img src={logo} alt="Logo" className="logo" /> {/* Logo Image */}

      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className="input-container floating-label">
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
        </div>

        {/* Password Input */}
        <div className="input-container floating-label">
          <input
            type="password"
            name="password"
            id="password"
            placeholder=" "
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
        </div>

        {/* Confirm Password Input */}
        <div className="input-container floating-label">
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder=" "
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <label htmlFor="confirmPassword">Konfirmasi Password</label>
        </div>

        <button type="submit">Register</button>
      </form>

      {/* Tambahkan link ke halaman login */}
      <p className="login-link">
        Sudah punya akun? <Link to="/login">Klik Login</Link>
      </p>
    </div>
  );
}

export default Registration;