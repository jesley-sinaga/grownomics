import React, { useState } from "react";
import "./LatihanSoal.css";

const LatihanSoal = () => {
  const [selectedBab, setSelectedBab] = useState(null);

  const dataBab = [
    {
      bab: "Bab 1: Pengantar ",
      soal: [
        {
          pertanyaan: "Apa itu React?",
          jawaban: ["Library", "Framework", "Bahasa Pemrograman", "Database"],
        },
        {
          pertanyaan: "React dikembangkan oleh siapa?",
          jawaban: ["Google", "Facebook", "Microsoft", "Apple"],
        },
        {
          pertanyaan: "Apa kelebihan utama React?",
          jawaban: ["Komponen modular", "Performa tinggi", "Mudah dipelajari", "Semua benar"],
        },
        {
          pertanyaan: "React digunakan untuk?",
          jawaban: ["Membuat UI", "Mengelola API", "Database", "Debugging"],
        },
        {
          pertanyaan: "Apa yang dimaksud dengan komponen di React?",
          jawaban: ["Bagian modular dari UI", "Fungsi", "State", "Library tambahan"],
        },
        {
          pertanyaan: "Apa itu Virtual DOM?",
          jawaban: ["Replika DOM asli", "Server untuk React", "API database", "Library tambahan"],
        },
        {
          pertanyaan: "Apa sintaks JSX yang benar?",
          jawaban: ["<div>Hello</div>", "{div}Hello{/div}", "<div>Hello>", "{div>Hello}"],
        },
        {
          pertanyaan: "React mendukung pengembangan berbasis?",
          jawaban: ["Komponen", "MVC", "REST API", "CLI"],
        },
      ],
    },
    {
      bab: "Bab 2: JSX",
      soal: [
        {
          pertanyaan: "Apa itu JSX?",
          jawaban: ["Ekstensi JavaScript", "Library CSS", "Plugin IDE", "Bahasa baru"],
        },
        {
          pertanyaan: "Apa tujuan utama JSX?",
          jawaban: [
            "Menulis elemen HTML di JavaScript",
            "Mengelola state",
            "Membuat API",
            "Mengatur database",
          ],
        },
        {
          pertanyaan: "Apa yang harus diakhiri setiap elemen JSX?",
          jawaban: ["/", ";", "}", "EOF"],
        },
        {
          pertanyaan: "Apa sintaks yang benar untuk menulis atribut JSX?",
          jawaban: [
            "<div className='container'>",
            "<div class='container'>",
            "<div classname='container'>",
            "<div class-container>",
          ],
        },
        {
          pertanyaan: "Apa itu elemen JSX?",
          jawaban: [
            "Elemen UI yang ditulis dengan sintaks seperti HTML",
            "Fungsi React",
            "Variabel dalam React",
            "Hook bawaan React",
          ],
        },
        {
          pertanyaan: "Bagaimana cara menyisipkan variabel ke dalam JSX?",
          jawaban: ["Menggunakan {}", "Menggunakan ()", "Menggunakan $$", "Menggunakan <!-- -->"],
        },
        {
          pertanyaan: "Apa tujuan utama JSX?",
          jawaban: ["Meningkatkan keterbacaan kode", "Mengatur state", "Membuat REST API", "Mengelola CSS"],
        },
        {
          pertanyaan: "Apakah JSX wajib digunakan di React?",
          jawaban: ["Tidak wajib", "Selalu wajib", "Hanya untuk fungsi", "Hanya untuk class"],
        },
      ],
    },
    // Tambahkan bab lainnya di sini (Bab 3 hingga Bab 12)
  ];

  return (
    <div className="latihan-container">
      <h1 className="title">Latihan Soal React.js</h1>

      {/* Navigasi Bab */}
      <div className="bab-navigation">
        {dataBab.map((bab, index) => (
          <button
            key={index}
            className={`bab-button ${selectedBab === index ? "active" : ""}`}
            onClick={() => setSelectedBab(index)}
          >
            {bab.bab}
          </button>
        ))}
      </div>

      {/* Soal */}
      <div className="soal-container">
        {selectedBab === null ? (
          <p className="select-prompt">Pilih Bab untuk mulai latihan soal!</p>
        ) : (
          dataBab[selectedBab].soal.map((soal, idx) => (
            <div key={idx} className="soal-item">
              <h3>{idx + 1}. {soal.pertanyaan}</h3>
              <ul>
                {soal.jawaban.map((jawaban, jIdx) => (
                  <li key={jIdx} className="jawaban-item">{jawaban}</li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LatihanSoal;
