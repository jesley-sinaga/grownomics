import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar"; // Sidebar tetap berada di folder 'components'
import Home from "./pages/Home"; // Home berada di folder 'pages'
import Materi from "./pages/Materi"; // Materi berada di folder 'pages'
import MateriDetail from "./pages/MateriDetail"; // File MateriDetail.js di folder 'pages'
import LatihanSoal from "./pages/LatihanSoal"; // LatihanSoal berada di folder 'pages'
import Grafik from "./pages/Grafik"; // Grafik berada di folder 'pages'
import Kuis from "./pages/Kuis"; // Kuis berada di folder 'pages'
import Login from "./pages/Login"; // Login berada di folder 'pages'
import Registration from "./pages/Registration"; // Registration page for users to sign up
import "./App.css"; // Styling global untuk keseluruhan aplikasi


function App() {
  // State untuk mengecek status login
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Rute Login, halaman login muncul pertama kali */}
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate to="/home" replace /> : <Login setIsLoggedIn={setIsLoggedIn} />
          }
        />

        {/* Rute Registrasi untuk mendaftar akun baru */}
        <Route path="/register" element={<Registration />} />

        {/* Rute halaman setelah login */}
        <Route
          path="/home"
          element={
            isLoggedIn ? (
              <div className="app">
                <Sidebar />
                <div className="content">
                  <Home />
                </div>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Rute halaman Materi */}
        <Route
          path="/materi"
          element={
            isLoggedIn ? (
              <div className="app">
                <Sidebar />
                <div className="content">
                  <Materi />
                </div>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Rute halaman Detail Materi */}
        <Route
          path="/materi/:id"
          element={
            isLoggedIn ? (
              <div className="app">
                <Sidebar />
                <div className="content">
                  <MateriDetail />
                </div>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Rute halaman Latihan Soal */}
        <Route
          path="/latihan-soal"
          element={
            isLoggedIn ? (
              <div className="app">
                <Sidebar />
                <div className="content">
                  <LatihanSoal />
                </div>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Rute halaman Grafik */}
        <Route
          path="/grafik"
          element={
            isLoggedIn ? (
              <div className="app">
                <Sidebar />
                <div className="content">
                  <Grafik />
                </div>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Rute halaman Kuis */}
        <Route
          path="/kuis"
          element={
            isLoggedIn ? (
              <div className="app">
                <Sidebar />
                <div className="content">
                  <Kuis />
                </div>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Rute Fallback (404) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
