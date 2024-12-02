import React, { useState, useEffect } from "react";
import "./Kuis.css";
import backgroundImage from "./walk.png"; // Impor gambar latar

const Kuis = () => {
  const pertanyaanPerKuis = [
    {
      kuis: "Kuis 1",
      soal: [
        { id: 1, soal: "Siapa penemu listrik?", pilihan: ["Nikola Tesla", "Thomas Edison", "Albert Einstein", "Alexander Graham Bell"], jawabanBenar: "Nikola Tesla" },
        { id: 2, soal: "Apa tahun Proklamasi Kemerdekaan Indonesia?", pilihan: ["1945", "1939", "1950", "1920"], jawabanBenar: "1945" },
        { id: 3, soal: "Di mana terjadinya Perang Dunia II?", pilihan: ["Eropa", "Asia", "Afrika", "Australia"], jawabanBenar: "Eropa" },
        { id: 4, soal: "Siapa Presiden pertama Indonesia?", pilihan: ["Soekarno", "Soeharto", "Joko Widodo", "B.J. Habibie"], jawabanBenar: "Soekarno" },
      ],
    },
    {
      kuis: "Kuis 2",
      soal: [
        { id: 1, soal: "Apa nama unsur dengan simbol H?", pilihan: ["Hidrogen", "Helium", "Oksigen", "Nitrogen"], jawabanBenar: "Hidrogen" },
        { id: 2, soal: "Apa warna darah manusia?", pilihan: ["Merah", "Biru", "Hijau", "Kuning"], jawabanBenar: "Merah" },
        { id: 3, soal: "Apa nama planet terdekat dengan Matahari?", pilihan: ["Merkurius", "Venus", "Bumi", "Mars"], jawabanBenar: "Merkurius" },
      ],
    },
  ];

  const [jawabanTerpilih, setJawabanTerpilih] = useState({});
  const [skor, setSkor] = useState(0);
  const [kuisAktif, setKuisAktif] = useState(null);
  const [babAktif, setBabAktif] = useState(0);
  const [timer, setTimer] = useState(20);
  const [isKuisSelesai, setIsKuisSelesai] = useState(false);

  const pilihJawaban = (id, pilihan) => {
    setJawabanTerpilih((prev) => ({
      ...prev,
      [id]: pilihan,
    }));
  };

  const hitungSkor = () => {
    let skorBaru = 0;
    pertanyaanPerKuis[kuisAktif].soal.forEach((q) => {
      if (jawabanTerpilih[q.id] === q.jawabanBenar) {
        skorBaru++;
      }
    });
    setSkor(skorBaru);
    setIsKuisSelesai(true);
  };

  const mulaiKuis = (index) => {
    setKuisAktif(index);
    setJawabanTerpilih({});
    setBabAktif(0);
    setTimer(20);
    setIsKuisSelesai(false);
  };

  const lanjutKeSoalBerikutnya = () => {
    if (babAktif < pertanyaanPerKuis[kuisAktif].soal.length - 1) {
      setBabAktif(babAktif + 1);
      setTimer(20);
    } else {
      hitungSkor();
    }
  };

  useEffect(() => {
    if (timer > 0 && !isKuisSelesai) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      lanjutKeSoalBerikutnya();
    }
  }, [timer, isKuisSelesai]);

  return (
    <div
      className="body-container"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Gambar latar diatur melalui JS
      }}
    >
      {kuisAktif === null ? (
        <div className="pilihan-kuis">
          <h2>Pilih Kuis</h2>
          {pertanyaanPerKuis.map((kuis, index) => (
            <button
              key={index}
              onClick={() => mulaiKuis(index)}
              className="pilihan-kuis-button"
            >
              {kuis.kuis}
            </button>
          ))}
        </div>
      ) : isKuisSelesai ? (
        <div className="hasil">
          <h3>Skor Anda: {skor} / {pertanyaanPerKuis[kuisAktif].soal.length}</h3>
          <button onClick={() => setKuisAktif(null)}>Kembali ke Pilihan Kuis</button>
        </div>
      ) : (
        <div className="kuis-container">
          <h2>{pertanyaanPerKuis[kuisAktif].kuis}</h2>
          <div className="soal">
            <h3>{pertanyaanPerKuis[kuisAktif].soal[babAktif]?.soal}</h3>
            <div className="timer">Waktu: {timer}s</div>
            <div className="pilihan">
              {pertanyaanPerKuis[kuisAktif].soal[babAktif]?.pilihan.map((pilihan, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    pilihJawaban(
                      pertanyaanPerKuis[kuisAktif].soal[babAktif].id,
                      pilihan
                    )
                  }
                  className={`pilihan-button ${
                    jawabanTerpilih[
                      pertanyaanPerKuis[kuisAktif].soal[babAktif].id
                    ] === pilihan
                      ? "selected"
                      : ""
                  }`}
                >
                  {pilihan}
                </button>
              ))}
            </div>
          </div>
          <button
            className="submit-button"
            onClick={lanjutKeSoalBerikutnya}
          >
            {babAktif === pertanyaanPerKuis[kuisAktif].soal.length - 1
              ? "Selesai"
              : "Lanjutkan"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Kuis;
