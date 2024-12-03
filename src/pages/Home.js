import React from "react";
import Sidebar from "../components/Sidebar"; // Sidebar tetap
import HeroSection from "./HeroSection"; // HeroSection tetap
import "./Home.css"; // CSS yang telah Anda berikan

const Home = () => {
  const learningTopics = [
    { 
      id: 1, 
      title: "Apa itu Ekonomi?", 
      description: "Pengenalan konsep dasar ekonomi dan bagaimana ia memengaruhi kehidupan sehari-hari." 
    },
    { 
      id: 2, 
      title: "Kebutuhan dan Kelangkaan", 
      description: "Memahami perbedaan kebutuhan dan keinginan, serta pentingnya pengelolaan sumber daya." 
    },
    { 
      id: 3, 
      title: "Pasar dan Harga", 
      description: "Penjelasan sederhana tentang bagaimana harga terbentuk di pasar." 
    },
    { 
      id: 4, 
      title: "Uang dan Fungsi Utamanya", 
      description: "Mengenal uang sebagai alat tukar dan alat penyimpan nilai." 
    },
    { 
      id: 5, 
      title: "Konsumen dan Produsen", 
      description: "Peran konsumen dan produsen dalam kegiatan ekonomi sehari-hari." 
    },
    { 
      id: 6, 
      title: "Tabungan dan Investasi Dasar", 
      description: "Mengapa menabung penting dan langkah pertama dalam memahami investasi." 
    },
  ];

  return (
    <div>
      {/* Sidebar tetap */}
      <Sidebar />
      {/* Konten utama */}
      <div className="main-content">
        {/* Hero Section */}
        <HeroSection />
        <div className="container text-center my-5">
          {/* Heading */}
          <h2 className="mb-4">Selamat Datang di Pembelajaran Ekonomi</h2>
          <blockquote className="blockquote mb-5">
            <p className="mb-0">
              "Ekonomi adalah seni memenuhi kebutuhan manusia yang tidak terbatas dengan sumber daya yang terbatas."
            </p>
          </blockquote>
          {/* Grup Input */}
          <div className="input-group my-4">
            <input
              type="text"
              className="form-control"
              placeholder="Cari materi ekonomi..."
            />
            <button className="btn btn-primary">Cari</button>
          </div>
          {/* Topik Pembelajaran */}
          <h3 className="mt-5">Topik Ekonomi untuk Pemula</h3>
          <div className="row my-4">
            {learningTopics.map((topic) => (
              <div key={topic.id} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{topic.title}</h5>
                    <p className="card-text">{topic.description}</p>
                    <button className="btn btn-outline-primary">
                      Pelajari
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Footer */}
        <footer className="text-center py-3">
          <p>&copy; 2024 Belajar Ekonomi | Semua Hak Dilindungi</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
