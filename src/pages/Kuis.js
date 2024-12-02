import React, { useState, useEffect, useCallback } from "react";

const Kuis = () => {
  const [soalSaatIni, setSoalSaatIni] = useState(0);
  const [jawaban, setJawaban] = useState("");
  const [skor, setSkor] = useState(0);
  const [kuisSelesai, setKuisSelesai] = useState(false);

  const pertanyaan = [
    { soal: "Apa ibukota Indonesia?", jawabanBenar: "Jakarta" },
    { soal: "Berapa hasil 2 + 2?", jawabanBenar: "4" },
  ];

  // Fungsi untuk lanjut ke soal berikutnya
  const lanjutKeSoalBerikutnya = useCallback(() => {
    if (soalSaatIni + 1 < pertanyaan.length) {
      setSoalSaatIni(soalSaatIni + 1);
      setJawaban("");
    } else {
      setKuisSelesai(true);
    }
  }, [soalSaatIni, pertanyaan.length]);

  // Efek samping ketika kuis selesai
  useEffect(() => {
    if (kuisSelesai) {
      alert(`Kuis selesai! Skor Anda adalah ${skor}`);
    }
  }, [kuisSelesai, skor]);

  // Fungsi untuk mengecek jawaban
  const cekJawaban = () => {
    if (jawaban.trim().toLowerCase() === pertanyaan[soalSaatIni].jawabanBenar.toLowerCase()) {
      setSkor(skor + 1);
    }
    lanjutKeSoalBerikutnya();
  };

  return (
    <div>
      {!kuisSelesai ? (
        <div>
          <h2>Soal {soalSaatIni + 1}</h2>
          <p>{pertanyaan[soalSaatIni].soal}</p>
          <input
            type="text"
            value={jawaban}
            onChange={(e) => setJawaban(e.target.value)}
            placeholder="Jawaban Anda"
          />
          <button onClick={cekJawaban}>Submit</button>
        </div>
      ) : (
        <h2>Kuis selesai! Skor akhir Anda: {skor}</h2>
      )}
    </div>
  );
};

export default Kuis;
