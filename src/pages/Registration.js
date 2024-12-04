import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate dan Link
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
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
    <div className="registration-container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="registration-card card shadow-lg p-4 rounded-3" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="text-center">
          <img src={logo} alt="Logo" className="registration-logo mb-3" style={{ width: "50px", height: "50px" }} />
          <h3 className="registration-title mb-4">Registrasi</h3>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Input Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label registration-label">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control registration-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Input Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label registration-label">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control registration-input"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Input Confirm Password */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label registration-label">Konfirmasi Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="form-control registration-input"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 registration-btn">Register</button>
        </form>

        {/* Link ke halaman login */}
        <div className="text-center mt-3">
          <p className="mb-0">
            Sudah punya akun? <Link to="/login" className="text-decoration-none registration-link">Klik Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
