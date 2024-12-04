import React, { useState } from "react";
import "./LatihanSoal.css";

const dataBab = [
  {
    bab: "Bab 1: Pengantar Ekonomi",
    soal: [
      {
        pertanyaan: "Apa yang dimaksud dengan ekonomi mikro?",
        jawaban: ["a. Studi tentang ekonomi global", "b. Studi tentang perilaku konsumen dan produsen", "c. Studi tentang perekonomian negara", "d. Studi tentang kebijakan moneter", "e. Studi tentang hubungan internasional"],
        benar: 1, // Jawaban benar adalah "Library"
      },
      {
        pertanyaan: "Dalam teori permintaan, jika harga barang naik, maka:",
        jawaban: ["a. Kuantitas yang diminta meningkat", "b. Kuantitas yang diminta menurun", "c. Permintaan meningkat", "d. Permintaan tidak berubah", "e. Penawaran menurun"],
        benar: 1, // Jawaban benar adalah "Facebook"
      },
      {
        pertanyaan: "Apa yang dimaksud dengan inflasi?",
        jawaban: ["a. Penurunan harga barang dan jasa secara umum", "b. Kenaikan harga barang dan jasa secara umum", "c. Peningkatan jumlah uang yang beredar", "d. Penurunan nilai tukar mata uang", "e. Kenaikan suku bunga"],
        benar: 1, // Jawaban benar adalah "Membuat UI"
      },
      {
        pertanyaan: "Apa yang menjadi tujuan utama dari kebijakan fiskal?",
        jawaban: [
          "a. Mengatur jumlah uang yang beredar",
          "b. Mengatur pengeluaran dan pendapatan pemerintah",
          "c. Mengatur suku bunga",
          "d. Mengatur nilai tukar mata uang",
          "e. e. Mengatur perdagangan internasional"
        ],
        benar: 2, // Jawaban benar adalah "Replika DOM asli"
      },
      {
        pertanyaan: "Apa yang dimaksud dengan pasar persaingan sempurna?",
        jawaban: [
          "a. Pasar dengan banyak penjual dan pembeli, dan produk yang seragam",
          "b. Pasar dengan satu penjual dan banyak pembeli",
          "c. Pasar dengan beberapa penjual dan beberapa pembeli",
          "d. Pasar dengan sedikit penjual dan banyak pembeli",
          "e. Pasar dengan sedikit pembeli dan banyak penjual"
        ],
        benar: 0, // Jawaban benar adalah "Semua benar"
      },
    ],
  },
  {
    bab: "Bab 2: Kebutuhan dan Kelangkaan",
    soal: [
      {
        pertanyaan: "Berdasarkan skala prioritas kebutuhan seseorang harus mendasarkan pada....",
        jawaban: [
          "a. jenis barang",
          "b. kwalitas barang",
          "c. harga barang",
          "d. tingkat kepentingan",
        ],
        benar: 0,
      },
      {
        pertanyaan: " Untuk mendapatkan barang yang jumlahnya terbatas maka diperlukan pengorbanan. Hal tersebut merupakan pengertian dari ...",
        jawaban: [
          "a. barang Produksi",
          "b. barang bebas",
          "c. barang ekonomi",
          "d. barang konsumsi",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Kebutuhan dasar yang paling penting disebut....",
        jawaban: [
          "a. Kebutuhan Primer",
          "b. Kebutuhan sekunder",
          "c. Kebutuhan individu",
          "d. Kebutuhan masa depan",
        ],
        benar: 0,
      },
      {
        pertanyaan: " Jumlah barang tidak mampu mencukupi kebutuhan manusia disebut ...",
        jawaban: ["a. Keterbatasan", "b. Kelebihan", "c. Kelangkaan", "d. Kekurangan"],
        benar: 0,
      },
      {
        pertanyaan: "Yang termasuk kebutuhan jasmani adalah sebagai berikut, kecuali....",
        jawaban: ["a. Makanan", "b. Pakaian", "c. Alat-alat olahraga", "d. Rekreasi"],
        benar: 3,
      },
    ],
  },
  {
    bab: "Bab 3: Sistem Ekonomi",
    soal: [
      {
        pertanyaan: "Berikut ini ciri-ciri badan usaha, kecuali....",
        jawaban: [
          "a. mencari keuntungan",
          "b. membutuhkan modal",
          "c. memerlukan tenaga kerja",
          "d. bersifat resmi",
        ],
        benar: 3,
      },
      {
        pertanyaan: "Berikut ini yang termasuk contoh kegiatan badan usaha manufaktur adalah....",
        jawaban: [
          "a. penyulingan minyak bumi",
          "b. industri pengolahan baja",
          "c. toko online",
          "e. sewa bus pariwisata",
        ],
        benar: 1,
      },
      {
        pertanyaan: "Perusahaan tambang batu bara merupakan contoh badan usaha....",
        jawaban: [
          "a. agraris",
          "b. ekonomi",
          "c. ekstarktif",
          "d. pertambangan",
        ],
        benar: 2,
      },
      {
        pertanyaan: "Persekutuan dalam CV dibagi menjadi....",
        jawaban: ["a. pemilik modal dan pekerja", "b. sekutu aktif dan pasif", "c. sekutu komplementer dan aktif", "d. produsen dan konsumen"],
        benar: 1,
      },
      {
        pertanyaan: "Berikut ini yang merupakan jenis koperasi berdasarkan lapangan usaha adalah....",
        jawaban: ["a. koperasi primer", "b. koperasi sekunder", "c. koperasi karyawan", "d. koperasi  konsumsi"],
        benar: 3,
      },
    ],
  },
  {
    bab: "Bab 4: Permintaan dan Penawaran",
    soal: [
      {
        pertanyaan: "Apa itu JSX?",
        jawaban: [
          "Ekstensi JavaScript",
          "Bahasa baru",
          "Library CSS",
          "Plugin IDE",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Apa tujuan utama JSX?",
        jawaban: [
          "Menulis elemen HTML di JavaScript",
          "Mengelola State",
          "Membuat API",
          "Membaca database",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Apa sintaks yang benar untuk menulis atribut JSX?",
        jawaban: [
          "<div className='container'>",
          "<div class='container'>",
          "<div classname='container'>",
          "<div class-container>",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Bagaimana cara menyisipkan variabel ke dalam JSX?",
        jawaban: ["Menggunakan {}", "Menggunakan ()", "Menggunakan <!-- -->", "Menggunakan $$"],
        benar: 0,
      },
      {
        pertanyaan: "Apakah JSX wajib digunakan di React?",
        jawaban: ["Tidak wajib", "Selalu wajib", "Hanya untuk class", "Hanya untuk fungsi"],
        benar: 0,
      },
    ],
  },
  {
    bab: "Bab 5: Pasar Persaingan",
    soal: [
      {
        pertanyaan: "Apa itu JSX?",
        jawaban: [
          "Ekstensi JavaScript",
          "Bahasa baru",
          "Library CSS",
          "Plugin IDE",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Apa tujuan utama JSX?",
        jawaban: [
          "Menulis elemen HTML di JavaScript",
          "Mengelola State",
          "Membuat API",
          "Membaca database",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Apa sintaks yang benar untuk menulis atribut JSX?",
        jawaban: [
          "<div className='container'>",
          "<div class='container'>",
          "<div classname='container'>",
          "<div class-container>",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Bagaimana cara menyisipkan variabel ke dalam JSX?",
        jawaban: ["Menggunakan {}", "Menggunakan ()", "Menggunakan <!-- -->", "Menggunakan $$"],
        benar: 0,
      },
      {
        pertanyaan: "Apakah JSX wajib digunakan di React?",
        jawaban: ["Tidak wajib", "Selalu wajib", "Hanya untuk class", "Hanya untuk fungsi"],
        benar: 0,
      },
    ],
  },
  {
    bab: "Bab 6: Uang dan Perbankan",
    soal: [
      {
        pertanyaan: "Apa itu JSX?",
        jawaban: [
          "Ekstensi JavaScript",
          "Bahasa baru",
          "Library CSS",
          "Plugin IDE",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Apa tujuan utama JSX?",
        jawaban: [
          "Menulis elemen HTML di JavaScript",
          "Mengelola State",
          "Membuat API",
          "Membaca database",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Apa sintaks yang benar untuk menulis atribut JSX?",
        jawaban: [
          "<div className='container'>",
          "<div class='container'>",
          "<div classname='container'>",
          "<div class-container>",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Bagaimana cara menyisipkan variabel ke dalam JSX?",
        jawaban: ["Menggunakan {}", "Menggunakan ()", "Menggunakan <!-- -->", "Menggunakan $$"],
        benar: 0,
      },
      {
        pertanyaan: "Apakah JSX wajib digunakan di React?",
        jawaban: ["Tidak wajib", "Selalu wajib", "Hanya untuk class", "Hanya untuk fungsi"],
        benar: 0,
      },
    ],
  },
  {
    bab: "Bab 7: Inflasi",
    soal: [
      {
        pertanyaan: "Apa itu JSX?",
        jawaban: [
          "Ekstensi JavaScript",
          "Bahasa baru",
          "Library CSS",
          "Plugin IDE",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Apa tujuan utama JSX?",
        jawaban: [
          "Menulis elemen HTML di JavaScript",
          "Mengelola State",
          "Membuat API",
          "Membaca database",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Apa sintaks yang benar untuk menulis atribut JSX?",
        jawaban: [
          "<div className='container'>",
          "<div class='container'>",
          "<div classname='container'>",
          "<div class-container>",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Bagaimana cara menyisipkan variabel ke dalam JSX?",
        jawaban: ["Menggunakan {}", "Menggunakan ()", "Menggunakan <!-- -->", "Menggunakan $$"],
        benar: 0,
      },
      {
        pertanyaan: "Apakah JSX wajib digunakan di React?",
        jawaban: ["Tidak wajib", "Selalu wajib", "Hanya untuk class", "Hanya untuk fungsi"],
        benar: 0,
      },
    ],
  },
  {
    bab: "Bab 8: Pertumbuhan Ekonomi",
    soal: [
      {
        pertanyaan: "Apa itu JSX?",
        jawaban: [
          "Ekstensi JavaScript",
          "Bahasa baru",
          "Library CSS",
          "Plugin IDE",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Apa tujuan utama JSX?",
        jawaban: [
          "Menulis elemen HTML di JavaScript",
          "Mengelola State",
          "Membuat API",
          "Membaca database",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Apa sintaks yang benar untuk menulis atribut JSX?",
        jawaban: [
          "<div className='container'>",
          "<div class='container'>",
          "<div classname='container'>",
          "<div class-container>",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Bagaimana cara menyisipkan variabel ke dalam JSX?",
        jawaban: ["Menggunakan {}", "Menggunakan ()", "Menggunakan <!-- -->", "Menggunakan $$"],
        benar: 0,
      },
      {
        pertanyaan: "Apakah JSX wajib digunakan di React?",
        jawaban: ["Tidak wajib", "Selalu wajib", "Hanya untuk class", "Hanya untuk fungsi"],
        benar: 0,
      },
    ],
  },
  {
    bab: "Bab 9: Pembangunan Ekonomi",
    soal: [
      {
        pertanyaan: "Apa itu JSX?",
        jawaban: [
          "Ekstensi JavaScript",
          "Bahasa baru",
          "Library CSS",
          "Plugin IDE",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Apa tujuan utama JSX?",
        jawaban: [
          "Menulis elemen HTML di JavaScript",
          "Mengelola State",
          "Membuat API",
          "Membaca database",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Apa sintaks yang benar untuk menulis atribut JSX?",
        jawaban: [
          "<div className='container'>",
          "<div class='container'>",
          "<div classname='container'>",
          "<div class-container>",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Bagaimana cara menyisipkan variabel ke dalam JSX?",
        jawaban: ["Menggunakan {}", "Menggunakan ()", "Menggunakan <!-- -->", "Menggunakan $$"],
        benar: 0,
      },
      {
        pertanyaan: "Apakah JSX wajib digunakan di React?",
        jawaban: ["Tidak wajib", "Selalu wajib", "Hanya untuk class", "Hanya untuk fungsi"],
        benar: 0,
      },
    ],
  },
  {
    bab: "Bab 10: Ekonomi Digital",
    soal: [
      {
        pertanyaan: "Apa itu JSX?",
        jawaban: [
          "Ekstensi JavaScript",
          "Bahasa baru",
          "Library CSS",
          "Plugin IDE",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Apa tujuan utama JSX?",
        jawaban: [
          "Menulis elemen HTML di JavaScript",
          "Mengelola State",
          "Membuat API",
          "Membaca database",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Apa sintaks yang benar untuk menulis atribut JSX?",
        jawaban: [
          "<div className='container'>",
          "<div class='container'>",
          "<div classname='container'>",
          "<div class-container>",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Bagaimana cara menyisipkan variabel ke dalam JSX?",
        jawaban: ["Menggunakan {}", "Menggunakan ()", "Menggunakan <!-- -->", "Menggunakan $$"],
        benar: 0,
      },
      {
        pertanyaan: "Apakah JSX wajib digunakan di React?",
        jawaban: ["Tidak wajib", "Selalu wajib", "Hanya untuk class", "Hanya untuk fungsi"],
        benar: 0,
      },
    ],
  },
  {
    bab: "Bab 11: Perdagangan Internasional",
    soal: [
      {
        pertanyaan: "Apa itu JSX?",
        jawaban: [
          "Ekstensi JavaScript",
          "Bahasa baru",
          "Library CSS",
          "Plugin IDE",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Apa tujuan utama JSX?",
        jawaban: [
          "Menulis elemen HTML di JavaScript",
          "Mengelola State",
          "Membuat API",
          "Membaca database",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Apa sintaks yang benar untuk menulis atribut JSX?",
        jawaban: [
          "<div className='container'>",
          "<div class='container'>",
          "<div classname='container'>",
          "<div class-container>",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Bagaimana cara menyisipkan variabel ke dalam JSX?",
        jawaban: ["Menggunakan {}", "Menggunakan ()", "Menggunakan <!-- -->", "Menggunakan $$"],
        benar: 0,
      },
      {
        pertanyaan: "Apakah JSX wajib digunakan di React?",
        jawaban: ["Tidak wajib", "Selalu wajib", "Hanya untuk class", "Hanya untuk fungsi"],
        benar: 0,
      },
    ],
  },
  {
    bab: "Bab 12: Kebijakan Ekonomi",
    soal: [
      {
        pertanyaan: "Apa itu JSX?",
        jawaban: [
          "Ekstensi JavaScript",
          "Bahasa baru",
          "Library CSS",
          "Plugin IDE",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Apa tujuan utama JSX?",
        jawaban: [
          "Menulis elemen HTML di JavaScript",
          "Mengelola State",
          "Membuat API",
          "Membaca database",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Apa sintaks yang benar untuk menulis atribut JSX?",
        jawaban: [
          "<div className='container'>",
          "<div class='container'>",
          "<div classname='container'>",
          "<div class-container>",
        ],
        benar: 0,
      },
      {
        pertanyaan: "Bagaimana cara menyisipkan variabel ke dalam JSX?",
        jawaban: ["Menggunakan {}", "Menggunakan ()", "Menggunakan <!-- -->", "Menggunakan $$"],
        benar: 0,
      },
      {
        pertanyaan: "Apakah JSX wajib digunakan di React?",
        jawaban: ["Tidak wajib", "Selalu wajib", "Hanya untuk class", "Hanya untuk fungsi"],
        benar: 0,
      },
    ],
  },
];

const LatihanSoal = () => {
  const [selectedBab, setSelectedBab] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(null);

  const handleAnswerClick = (soalIndex, jawabanIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[soalIndex] = jawabanIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = () => {
    let totalScore = 0;
    dataBab[selectedBab].soal.forEach((soal, index) => {
      if (selectedAnswers[index] === soal.benar) {
        totalScore++;
      }
    });
    setScore(totalScore);
  };

  const resetQuiz = () => {
    setSelectedBab(null);
    setSelectedAnswers([]);
    setScore(null);
  };

  return (
    <div className="latihan-container">
      <h1 className="title">Latihan Soal React.js</h1>

      {/* Navigasi Bab */}
      <div className="bab-navigation">
        {dataBab.map((bab, index) => (
          <button
            key={index}
            className={`bab-button ${selectedBab === index ? "active" : ""}`}
            onClick={() => {
              setSelectedBab(index);
              setSelectedAnswers([]);
              setScore(null);
            }}
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
          <>
            {dataBab[selectedBab].soal.map((soal, idx) => (
              <div key={idx} className="soal-item">
                <h3>
                  {idx + 1}. {soal.pertanyaan}
                </h3>
                <ul>
                  {soal.jawaban.map((jawaban, jIdx) => (
                    <li
                      key={jIdx}
                      className={`jawaban-item ${
                        selectedAnswers[idx] === jIdx ? "selected" : ""
                      }`}
                      onClick={() => handleAnswerClick(idx, jIdx)}
                    >
                      {jawaban}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {score === null ? (
              <button className="submit-button" onClick={handleSubmit}>
                Submit
              </button>
            ) : (
              <div className="score-container">
                <p>Skor Anda: {score} / {dataBab[selectedBab].soal.length}</p>
                <button className="reset-button" onClick={resetQuiz}>
                  Mulai Ulang
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LatihanSoal;
