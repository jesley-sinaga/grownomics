import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import logo from "./grow.jpg"; // Pastikan path file logo benar

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
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 rounded-3" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="text-center">
          <img src={logo} alt="Logo" className="mb-3" style={{ width: "50px", height: "50px" }} />
          <h3 className="mb-4">Login</h3>
        </div>
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
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <div className="text-center mt-3">
          <p className="mb-0">
            Don't have an account? <Link to="/register" className="text-decoration-none">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
