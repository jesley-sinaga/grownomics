import React, { useState, useEffect } from "react";
import "./Kuis.css";
import backgroundImage from "./walk.png"; // Impor gambar latar

const Kuis = () => {
  const pertanyaanPerKuis = [
    {
      kuis: "Kuis 1",
      soal: [
        { id: 1, soal: "BUMN yang semua modalnya dimiliki oleh negara dan tidak terbagi atas saham disebut...", pilihan: ["a. strategis", "b. persero", "c. perum", "d. privatisasi", "e. terbuka"], jawabanBenar: "b. persero" },
        { id: 2, soal: "Koperasi berasal dari kata co dan operation. Adapun co artinya ...", pilihan: ["a. Usaha", "b. Bersama", "c. Bekerja", "d. Untung" , "e. Berusaha"], jawabanBenar: "b. Bersama" },
        { id: 3, soal: "Tokoh yang dikenal sebagai Bapak Koperasi Indonesia adalah...", pilihan: ["a. Mohammad Hatta", "b. Soekarno", "c. Sutan Syahrir", "d. Soeharto", "e. Soepomo"], jawabanBenar: "a. Mohammad Hatta" },
        { id: 4, soal: "Berdasarkan UU koperasi No. 25 Tahun 1992, landasan idiil koperasi adalah...", pilihan: ["a. UUD 1945", "b. Kapitalisme", "c. Sosialisme", "d. Pancasila", "e. UU Koperasi"], jawabanBenar: "d. Pancasila" },
        { id: 5, soal: "Landasan operasional merupakan aturan kerja koperasi yang harus diikuti dan ditaati oleh...", pilihan: ["a. Pemilik usaha koperasi", "b. Konsumen koperasi", "c. Pekerja usaha koperasi", "d. Direktur koperasi", "e. Anggota, pengurus, dan pengawasi"], jawabanBenar: "e. Anggota, pengurus, dan pengawas" },
        { id: 6, soal: "Di bawah ini adalah sejumlah fungsi manajemen, kecuali...", pilihan: ["a. Perencanaan", "b. Pengorganisasian", "c. Pelaksanaan/Penggerakan", "d. Pengawasan", "e. Pendisiplinan"], jawabanBenar: "e. Pendisiplinan" },
        { id: 7, soal: "Berikut ini jenis badan usaha berdasarkan lapangan usahanya, kecuali...", pilihan: ["a. Ekstraktif", "b. Agraris", "c. Industri/Manufaktur", "d. Perdagangan", "e. Elektronik"], jawabanBenar: "e. Elektronik" },
        { id: 8, soal: "Berikut ini yang termasuk contoh kegiatan badan usaha manufaktur adalah...", pilihan: ["a. penyulingan minyak bumi", "b. industri pengolahan baja", "c. toko online", "d. perkebunan sawit", "e. sewa bus pariwisata"], jawabanBenar: "b. industri pengolahan baja" },
        { id: 9, soal: "Penyertaan modal daerah untuk BUMD berasal dari..", pilihan: ["a. bank", "b. APBN", "c.  sumbangan PNS", "d. APBD", "e. negara"], jawabanBenar: "d. APBD" },
        { id: 10, soal: "Berikut ini yang merupakan jenis koperasi berdasarkan lapangan usaha adalah...", pilihan: ["a. koperasi primer", "b. koperasi sekunder", "c. koperasi karyawan", "d. koperasi pertanian", "e. koperasi konsumsi"], jawabanBenar: "e. koperasi konsumsi" },
      ],
    },
    {
      kuis: "Kuis 2",
      soal: [
        { id: 1, soal: "Penghitungan upah yang didasarkan pada jumlah barang yang dihasilkan disebut?", pilihan: ["a. upah menurut waktu", "b. upah borongan", "c. upah bonus", "d. upah mitra usaha", "e. upah menurut satuan hasil"], jawabanBenar: "b. upah borongann" },
        { id: 2, soal: "Di bawah ini yang bukan termasuk angkatan kerja adalah ...", pilihan: ["a. pekerja penuh", "b. setengah menganggur", "c. pengangguran", "d. pekerja yang bekerja paruh waktu", "e. pelajar"], jawabanBenar: "e. pelajar" },
        { id: 3, soal: "Pencetus teori upah besi adalah...", pilihan: ["a. Adam Smith", "b.  Ferdinand Lassale", "c. David Ricardo", "d. J. S. Mill", "e.  Malthus"], jawabanBenar: "b. Ferdinand Lassale" },
        { id: 4, soal: "Salah satu pendekatan dalam penghitungan pendapatan nasional adalah....", pilihan: ["a. pendekatan penerimaan", "b. pendekatan ekonomi", "c. pendekatan industri", "d. pendekatan kualitatif", "e. pendekatan kuantitatif"], jawabanBenar: "a. pendekatan penerimaann" },
        { id: 5, soal: "Pendapatan perkapita suatu negara dihitung dengan membagi pendapatan nasional negara tersebut dengan....", pilihan: ["a. Produk Domestik Bruto", "b. Produk Nasional Bruto", "c. Jumlah penduduk", "d. Luas wilayah", "e. Jumlah pengeluaran"], jawabanBenar: "c. Jumlah penduduk" },
        { id: 6, soal: "Di bawah ini yang termasuk tokoh ekonomi klasik adalah ...", pilihan: ["a.  Robert Solow", "b. Adam Smith", "c. Karl Bucher", "d.  W. W. Rostow", "e. Samuelson"], jawabanBenar: "b. Adam Smith" },
        { id: 7, soal: "Salah satu masalah pembangunan di negara sedang berkembang adalah ...", pilihan: ["a. lapangan kerja berlimpah", "b. kekurangan angkatan kerja", "c. banyaknya pengangguran", "d. banyaknya sarjana", "e. tidak berhasilnya program KB"], jawabanBenar: "c. banyaknya pengangguran" },
        { id: 8, soal: "Contoh dampak negatif pembangunan ekonomi adalah ...", pilihan: ["a. makin banyaknya fasilitas umum", "b. terbukanya kesempatan kerja", "c. terjadi perubahan struktur ekonomi dari agraris ke industri", "d. kesejahteraan meningkat", "e. meningkatnya urbanisasi"], jawabanBenar: "e. meningkatnya urbanisasi" },
        { id: 9, soal: "Salah satu tokoh perintis koperasi di Indonesia bernama Raden Aria Wiria Atmaja yang berasal dari...", pilihan: ["a. Semarang", "b. Jakarta", "c. Bandung", "d.  Purwokerto", "e. Yogyakarta"], jawabanBenar: "d. Purwokerton" },
        { id: 10, soal: " Di Indonesia, koperasi merupakan organisasi ekonomi yang berwatak...", pilihan: ["a. Kapitalis", "b. Sosial", "c. Agresif", "d. Produktif", "e. Ekonomis"], jawabanBenar: "b. Sosial" },
      ],
    },
    {
      kuis: "Kuis 3",
      soal: [
        { id: 1, soal: "Penghitungan upah yang didasarkan pada jumlah barang yang dihasilkan disebut?", pilihan: ["a. upah menurut waktu", "b. upah borongan", "c. upah bonus", "d. upah mitra usaha", "e. upah menurut satuan hasil"], jawabanBenar: "b. upah borongann" },
        { id: 2, soal: "Di bawah ini yang bukan termasuk angkatan kerja adalah ...", pilihan: ["a. pekerja penuh", "b. setengah menganggur", "c. pengangguran", "d. pekerja yang bekerja paruh waktu", "e. pelajar"], jawabanBenar: "e. pelajar" },
        { id: 3, soal: "Pencetus teori upah besi adalah...", pilihan: ["a. Adam Smith", "b.  Ferdinand Lassale", "c. David Ricardo", "d. J. S. Mill", "e.  Malthus"], jawabanBenar: "b. Ferdinand Lassale" },
        { id: 4, soal: "Salah satu pendekatan dalam penghitungan pendapatan nasional adalah....", pilihan: ["a. pendekatan penerimaan", "b. pendekatan ekonomi", "c. pendekatan industri", "d. pendekatan kualitatif", "e. pendekatan kuantitatif"], jawabanBenar: "a. pendekatan penerimaann" },
        { id: 5, soal: "Pendapatan perkapita suatu negara dihitung dengan membagi pendapatan nasional negara tersebut dengan....", pilihan: ["a. Produk Domestik Bruto", "b. Produk Nasional Bruto", "c. Jumlah penduduk", "d. Luas wilayah", "e. Jumlah pengeluaran"], jawabanBenar: "c. Jumlah penduduk" },
        { id: 6, soal: "Di bawah ini yang termasuk tokoh ekonomi klasik adalah ...", pilihan: ["a.  Robert Solow", "b. Adam Smith", "c. Karl Bucher", "d.  W. W. Rostow", "e. Samuelson"], jawabanBenar: "b. Adam Smith" },
        { id: 7, soal: "Salah satu masalah pembangunan di negara sedang berkembang adalah ...", pilihan: ["a. lapangan kerja berlimpah", "b. kekurangan angkatan kerja", "c. banyaknya pengangguran", "d. banyaknya sarjana", "e. tidak berhasilnya program KB"], jawabanBenar: "c. banyaknya pengangguran" },
        { id: 8, soal: "Contoh dampak negatif pembangunan ekonomi adalah ...", pilihan: ["a. makin banyaknya fasilitas umum", "b. terbukanya kesempatan kerja", "c. terjadi perubahan struktur ekonomi dari agraris ke industri", "d. kesejahteraan meningkat", "e. meningkatnya urbanisasi"], jawabanBenar: "e. meningkatnya urbanisasi" },
        { id: 9, soal: "Salah satu tokoh perintis koperasi di Indonesia bernama Raden Aria Wiria Atmaja yang berasal dari...", pilihan: ["a. Semarang", "b. Jakarta", "c. Bandung", "d.  Purwokerto", "e. Yogyakarta"], jawabanBenar: "d. Purwokerton" },
        { id: 10, soal: " Di Indonesia, koperasi merupakan organisasi ekonomi yang berwatak...", pilihan: ["a. Kapitalis", "b. Sosial", "c. Agresif", "d. Produktif", "e. Ekonomis"], jawabanBenar: "b. Sosial" },
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
