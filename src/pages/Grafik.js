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
  LineController, // Tambahkan ini
} from "chart.js";
import "./Grafik.css";

// Daftarkan LineController
ChartJS.register(LineController, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Grafik = () => {
  const [dataKuis, setDataKuis] = useState([50]); // Nilai awal
  const [labels, setLabels] = useState(["Kuis 1"]); // Label awal
  const [nilaiBaru, setNilaiBaru] = useState(""); // Menyimpan input nilai baru
  const [namaKuisBaru, setNamaKuisBaru] = useState(""); // Menyimpan input nama kuis baru
  const chartRef = useRef(null); // Referensi untuk elemen canvas

  // Fungsi untuk menambahkan nilai baru ke grafik
  const tambahNilai = () => {
    if (!nilaiBaru || isNaN(nilaiBaru) || parseInt(nilaiBaru) < 0 || parseInt(nilaiBaru) > 100) {
      alert("Masukkan nilai antara 0–100.");
      return;
    }
    setDataKuis([...dataKuis, parseInt(nilaiBaru)]);
    setNilaiBaru("");
  };

  // Fungsi untuk menambahkan nama kuis baru
  const tambahKuis = () => {
    if (!namaKuisBaru || labels.includes(namaKuisBaru)) {
      alert("Nama kuis sudah ada atau kosong.");
      return;
    }
    setLabels([...labels, namaKuisBaru]);
    setDataKuis([...dataKuis, 0]); // Nilai default untuk kuis baru
    setNamaKuisBaru("");
  };

  // Fungsi untuk menghapus data
  const hapusData = (index) => {
    const updatedLabels = labels.filter((_, i) => i !== index);
    const updatedDataKuis = dataKuis.filter((_, i) => i !== index);
    setLabels(updatedLabels);
    setDataKuis(updatedDataKuis);
  };

  // Simpan dan ambil data dari local storage
  useEffect(() => {
    try {
      const savedLabels = localStorage.getItem("labels");
      const savedDataKuis = localStorage.getItem("dataKuis");

      if (savedLabels && savedDataKuis) {
        setLabels(JSON.parse(savedLabels));
        setDataKuis(JSON.parse(savedDataKuis));
      }
    } catch (error) {
      console.error("Gagal mengambil data dari localStorage:", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("labels", JSON.stringify(labels));
    localStorage.setItem("dataKuis", JSON.stringify(dataKuis));
  }, [labels, dataKuis]);

  // Konfigurasi dan rendering grafik menggunakan Chart.js
  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");

    const chart = new ChartJS(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Nilai Kuis",
            data: dataKuis,
            borderColor: dataKuis.map((nilai) =>
              nilai > 70
                ? "rgba(75, 192, 192, 1)" // Hijau
                : nilai >= 50
                ? "rgba(255, 206, 86, 1)" // Kuning
                : "rgba(255, 99, 132, 1)" // Merah
            ),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            tension: 0.4,
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
          },
        },
      },
    });

    return () => chart.destroy();
  }, [labels, dataKuis]);

  return (
    <div className="grafik-container">
      <h2>Grafik Peningkatan Nilai</h2>
      <canvas ref={chartRef}></canvas>

      <div className="input-container">
        <input
          type="number"
          value={nilaiBaru}
          placeholder="Masukkan nilai baru"
          onChange={(e) => setNilaiBaru(e.target.value)}
        />
        <button onClick={tambahNilai}>Tambah Nilai</button>
      </div>

      <div className="input-container">
        <input
          type="text"
          value={namaKuisBaru}
          placeholder="Masukkan nama kuis baru"
          onChange={(e) => setNamaKuisBaru(e.target.value)}
        />
        <button onClick={tambahKuis}>Tambah Kuis</button>
      </div>

      <div className="data-table">
        <h3>Data Kuis</h3>
        <table>
          <thead>
            <tr>
              <th>Nama Kuis</th>
              <th>Nilai</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {labels.map((label, index) => (
              <tr key={index}>
                <td>{label}</td>
                <td>{dataKuis[index]}</td>
                <td>
                  <button onClick={() => hapusData(index)}>Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Grafik;
