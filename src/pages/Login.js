import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"; // Import CSS

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Email dan password tidak boleh kosong.");
      return;
    }

    // Ambil data user dari localStorage
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (
      storedUserData &&
      storedUserData.email === email &&
      storedUserData.password === password
    ) {
      setIsLoggedIn(true);
      alert("Login berhasil! Mengarahkan ke halaman Home.");
      navigate("/home");
    } else {
      alert("Email atau password salah. Silakan coba lagi.");
    }
  };

  return (
    <div className="login-container">
      {/* Bagian Kiri */}
      <div className="login-left">
        <h1>Grownomics</h1>
        <p>Platform Belajar Ekonomi untuk Kelas 11</p>
      </div>

      {/* Bagian Kanan */}
      <div className="login-right">
        <h3 className="login-title">Log In</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Masukkan email Anda"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Masukkan password Anda"
            />
          </div>
          <button type="submit" className="btn-login">
            Log In
          </button>
        </form>
        <p className="text-center mt-3">
          Belum punya akun?{" "}
          <Link to="/register" className="link-text">
            Daftar di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
