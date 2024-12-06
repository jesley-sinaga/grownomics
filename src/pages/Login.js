import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";


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
    <div className="login-container">
      <div className="login-left">
        <h1>Grownomics</h1>
        <p>A Platform for Learning Economics (Grade 11)</p>
      </div>
      <div className="login-right">

        <h3 className="login-title">Log In</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-login">Log In</button>
        </form>
        <div className="text-center">
          <p className="mb-0">
            Don't have an account? <Link to="/register" className="link-text">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
