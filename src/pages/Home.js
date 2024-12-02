import React from "react";
import Sidebar from "../components/Sidebar"; // Mengimpor Sidebar
import HeroSection from "./HeroSection"; // Mengimpor HeroSection
import "./Home.css"; // Mengimpor CSS untuk halaman Home

const Home = () => {
  return (
    <div>
      <Sidebar />
      <div className="main-content">
        <HeroSection />
        <div className="container text-center my-5">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Cari materi..."
            />
            <button className="btn">Cari</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
