import React, { useState } from "react";
import "./Kuis.css"; // Mengimpor file CSS

const Kuis = () => {
  // Pertanyaan dan pilihan jawaban untuk 3 bab
  const pertanyaanPerBab = [
    {
      bab: "Bab 1: Sejarah Dunia",
      soal: [
        {
          id: 1,
          soal: "Siapa penemu listrik?",
          pilihan: ["Nikola Tesla", "Thomas Edison", "Albert Einstein", "Alexander Graham Bell"],
          jawabanBenar: "Nikola Tesla",
        },
        {
          id: 2,
          soal: "Apa tahun Proklamasi Kemerdekaan Indonesia?",
          pilihan: ["1945", "1939", "1950", "1920"],
          jawabanBenar: "1945",
        },
        {
          id: 3,
          soal: "Dimana terjadinya Perang Dunia II?",
          pilihan: ["Eropa", "Asia", "Afrika", "Australia"],
          jawabanBenar: "Eropa",
        },
        // Tambahkan 5 soal lagi
      ],
    },
    {
      bab: "Bab 2: Geografi",
      soal: [
        {
          id: 1,
          soal: "Dimana lokasi Gunung Everest?",
          pilihan: ["Nepal", "India", "China", "Indonesia"],
          jawabanBenar: "Nepal",
        },
        {
          id: 2,
          soal: "Apa ibu kota Jepang?",
          pilihan: ["Seoul", "Bangkok", "Tokyo", "Beijing"],
          jawabanBenar: "Tokyo",
        },
        {
          id: 3,
          soal: "Sungai terpanjang di dunia adalah?",
          pilihan: ["Amazon", "Nil", "Mississippi", "Yangtze"],
          jawabanBenar: "Nil",
        },
        // Tambahkan 5 soal lagi
      ],
    },
    {
      bab: "Bab 3: Teknologi",
      soal: [
        {
          id: 1,
          soal: "Siapa penemu komputer pertama?",
          pilihan: ["Charles Babbage", "Alan Turing", "Steve Jobs", "Bill Gates"],
          jawabanBenar: "Charles Babbage",
        },
        {
          id: 2,
          soal: "Apa itu AI?",
          pilihan: ["Artificial Intelligence", "Automatic Input", "Advanced Interface", "Artificial Internet"],
          jawabanBenar: "Artificial Intelligence",
        },
        {
          id: 3,
          soal: "Apa nama sistem operasi yang dibuat oleh Microsoft?",
          pilihan: ["Windows", "Linux", "Mac OS", "Android"],
          jawabanBenar: "Windows",
        },
        // Tambahkan 5 soal lagi
      ],
    },
  ];

  // State untuk menyimpan jawaban yang dipilih, skor, dan bab yang aktif
  const [jawabanTerpilih, setJawabanTerpilih] = useState({});
  const [skor, setSkor] = useState(0);
  const [babAktif, setBabAktif] = useState(0); // Mengatur bab yang aktif (0 = Bab 1)

  // Fungsi untuk memilih jawaban
  const pilihJawaban = (babIndex, id, pilihan) => {
    setJawabanTerpilih({
      ...jawabanTerpilih,
      [bab${babIndex}_soal${id}]: pilihan,
    });
  };

  // Fungsi untuk menghitung skor setelah bab selesai
  const hitungSkor = () => {
    let skorBaru = 0;
    pertanyaanPerBab.forEach((bab, babIndex) => {
      bab.soal.forEach((q) => {
        const jawab = jawabanTerpilih[bab${babIndex}_soal${q.id}];
        if (jawab === q.jawabanBenar) {
          skorBaru += 1;
        }
      });
    });
    setSkor(skorBaru);
  };

  // Fungsi untuk melanjutkan ke bab berikutnya
  const lanjutKeBabBerikutnya = () => {
    if (babAktif < pertanyaanPerBab.length - 1) {
      setBabAktif(babAktif + 1);
    } else {
      hitungSkor(); // Hitung skor jika sudah di bab terakhir
    }
  };

  return (
    <div className="kuis-container">
      <h2>{pertanyaanPerBab[babAktif].bab}</h2>
      <div className="pertanyaan-container">
        {pertanyaanPerBab[babAktif].soal.map((q) => (
          <div key={q.id} className="pertanyaan">
            <h3>{q.soal}</h3>
            <div className="pilihan">
              {q.pilihan.map((pilihan, index) => (
                <button
                  key={index}
                  className={`pilihan-button ${
                    jawabanTerpilih[bab${babAktif}_soal${q.id}] === pilihan ? "selected" : ""
                  }`}
                  onClick={() => pilihJawaban(babAktif, q.id, pilihan)}
                >
                  {pilihan}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="submit-button" onClick={lanjutKeBabBerikutnya}>
        {babAktif < pertanyaanPerBab.length - 1 ? "Lanjutkan ke Bab Berikutnya" : "Selesai"}
      </button>
      {babAktif === pertanyaanPerBab.length - 1 && (
        <div className="hasil">
          <h3>Skor Anda: {skor} / {pertanyaanPerBab.reduce((acc, bab) => acc + bab.soal.length, 0)}</h3>
        </div>
      )}
    </div>
  );
};

export default Kuis;