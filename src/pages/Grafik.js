
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import "./Grafik.css"; // Import file CSS

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Grafik = () => {
  // State untuk data dinamis
  const [dataKuis, setDataKuis] = useState([50]); // Nilai awal
  const [labels, setLabels] = useState(["Kuis 1"]); // Label awal
  const [nilaiBaru, setNilaiBaru] = useState(""); // Menyimpan input nilai baru
  const [namaKuisBaru, setNamaKuisBaru] = useState(""); // Menyimpan input nama kuis baru

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

  // Data untuk grafik
  const data = {
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
  };

  // Opsi tampilan grafik
  const options = {
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
  };

  return (
    <div className="grafik-container">
      <h2>Grafik Peningkatannn Nilai</h2>
      <Line data={data} options={options} />

      {/* Input untuk menambah nilai */}
      <div className="input-container">
        <input
          type="number"
          value={nilaiBaru}
          placeholder="Masukkan nilai baru"
          onChange={(e) => setNilaiBaru(e.target.value)}
        />
        <button onClick={tambahNilai}>Tambah Nlai</button>
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

