import React, { useState, useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController, // Pastikan LineController diimport
} from "chart.js";
import "./Grafik.css"; // Import file CSS

// Daftarkan semua komponen yang diperlukan untuk Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController, // Pastikan LineController terdaftar
  Title,
  Tooltip,
  Legend
);

const Grafik = () => {
  const [dataKuis, setDataKuis] = useState([50]); // Nilai awal
  const [labels, setLabels] = useState(["Kuis 1"]); // Label awal
  const [nilaiBaru, setNilaiBaru] = useState(""); // Menyimpan input nilai baru
  const [namaKuisBaru, setNamaKuisBaru] = useState(""); // Menyimpan input nama kuis baru
  const chartRef = useRef(null); // Referensi untuk elemen canvas

  // Fungsi untuk menambahkan nilai baru ke grafik
  const tambahNilai = () => {
    if (!nilaiBaru) return; // Cegah jika input kosong
    setDataKuis([...dataKuis, parseInt(nilaiBaru)]); // Tambahkan nilai baru
    setNilaiBaru(""); // Reset input
  };

  // Fungsi untuk menambahkan nama kuis baru
  const tambahKuis = () => {
    if (!namaKuisBaru) return; // Cegah jika input kosong
    setLabels([...labels, namaKuisBaru]); // Tambahkan nama kuis baru ke label
    setDataKuis([...dataKuis, 0]); // Tambahkan nilai default (0) untuk kuis baru
    setNamaKuisBaru(""); // Reset input
  };

  useEffect(() => {
    // Konfigurasi grafik
    const ctx = chartRef.current.getContext("2d");
    const chart = new ChartJS(ctx, {
      type: "line", // Pastikan tipe chart sesuai dengan controller yang didaftarkan
      data: {
        labels: labels, // Label pada sumbu x
        datasets: [
          {
            label: "Nilai Kuis",
            data: dataKuis, // Data nilai kuis
            borderColor: "rgba(75, 192, 192, 1)", // Warna garis
            backgroundColor: "rgba(75, 192, 192, 0.2)", // Warna area di bawah garis
            tension: 0.4, // Membuat garis melengkung
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false, // Sembunyikan label legend (opsional)
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100, // Asumsikan nilai maksimal 100
          },
        },
      },
    });

    // Bersihkan grafik saat komponen dihapus
    return () => chart.destroy();
  }, [labels, dataKuis]);

  return (
    <div className="grafik-container">
      <h2>Grafik Peningkatan Nilai</h2>
      {/* Elemen canvas untuk menggambar grafik */}
      <canvas ref={chartRef}></canvas>

      {/* Input untuk menambah nilai */}
      <div className="input-container">
        <input
          type="number"
          value={nilaiBaru}
          placeholder="Masukkan nilai baru"
          onChange={(e) => setNilaiBaru(e.target.value)}
        />
        <button onClick={tambahNilai}>Tambah Nilai</button>
      </div>

      {/* Input untuk menambah kuis baru */}
      <div className="input-container">
        <input
          type="text"
          value={namaKuisBaru}
          placeholder="Masukkan nama kuis baru"
          onChange={(e) => setNamaKuisBaru(e.target.value)}
        />
        <button onClick={tambahKuis}>Tambah Kuis</button>
      </div>
    </div>
  );
};

export default Grafik;
