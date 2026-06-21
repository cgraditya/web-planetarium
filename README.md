# Cosmos 3D - Simulasi Tata Surya Interaktif 🌌

**Cosmos 3D** adalah sebuah aplikasi simulasi astronomi interaktif berbasis web yang menampilkan visualisasi 3D dari Sistem Tata Surya kita. Proyek ini menggunakan **Three.js** untuk rendering 3D, **Web Audio API** untuk menghasilkan musik latar belakang (ambient drone) secara sintesis, serta generator tekstur prosedural menggunakan HTML Canvas untuk meminimalisasi ukuran aset eksternal.

---

## 🚀 Fitur Utama

- **Visualisasi Tata Surya 3D**: Representasi realistis Matahari, 8 Planet utama (Merkurius - Neptunus), Planet Kerdil (Pluto), serta Bulan sebagai satelit alami Bumi.
- **Tekstur Prosedural Dinamis**: Seluruh tekstur permukaan planet (seperti atmosfer Bumi, bintik merah Yupiter, cincin Saturnus, dan kawah Merkurius) digenerasikan secara dinamis menggunakan HTML Canvas saat runtime. Tidak membutuhkan aset gambar eksternal besar.
- **Synthesizer Audio Web (Ambient)**: Audio kosmik dihasilkan secara real-time melalui Web Audio Synthesizer, lengkap dengan drone frekuensi rendah dan instrumen lonceng pentatonik acak dengan efek delay.
- **Dua Skala Simulasi**:
  - **Skala Visual**: Memudahkan observasi planet dengan ukuran dan jarak yang disesuaikan secara artistik agar nyaman dipandang.
  - **Skala Realistis**: Menyajikan perbandingan skala ukuran planet dan jarak orbit yang lebih mendekati aslinya dalam ruang 3D.
- **Navigasi & Informasi Detail**: Panel informasi komprehensif di sebelah kanan menyajikan ensiklopedia singkat, fakta menarik, dimensi massa, suhu, waktu rotasi, dan orbit untuk objek astronomi yang dipilih.
- **Kontrol Simulasi**:
  - Mainkan (Play) atau Jeda (Pause) orbit planet.
  - Slider pengatur kecepatan revolusi orbit planet.
  - Aktifkan/nonaktifkan rendering jalur orbit planet.
  - Reset kamera ke pandangan default secara instan.

---

## 🛠️ Teknologi yang Digunakan

1. **Three.js** (WebGL 3D Library)
2. **OrbitControls.js** (Navigasi kamera 3D)
3. **Web Audio API** (Sintesis audio ambient & efek delay)
4. **Vite** (Build tool super cepat)
5. **Vanilla CSS** (Modern Glassmorphism Design & CSS Custom Properties)
6. **FontAwesome** (Ikon antarmuka)

---

## 📂 Struktur Proyek

```text
web-planetarium/
├── dist/                # Output build untuk produksi (HTML, JS, CSS terkompresi)
├── node_modules/        # Dependensi proyek
├── app.js               # Logika utama (Engine Three.js, generator tekstur, synthesizer audio)
├── index.html           # Struktur antarmuka dan HUD dashboard
├── package.json         # Konfigurasi dependensi dan script npm
├── package-lock.json    # Lockfile package npm
├── style.css            # Styling modern glassmorphism & responsive layout
└── README.md            # Dokumentasi proyek
```

---

## 💻 Cara Menjalankan Secara Lokal

### Prasyarat
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) di komputer Anda.

### Langkah-langkah
1. Clone atau buka folder proyek ini:
   ```bash
   cd web-planetarium
   ```
2. Instal semua dependensi (Vite):
   ```bash
   npm install
   ```
3. Jalankan server pengembangan lokal:
   ```bash
   npm run dev
   ```
4. Buka tautan lokal yang muncul (biasanya `http://localhost:5173`) di browser Anda.

---

## 📦 Build untuk Produksi

Untuk menghasilkan bundle yang teroptimasi dan siap di-deploy ke server hosting:
```bash
npm run build
```
Hasil build akan tersimpan di dalam direktori `/dist`. Anda dapat menguji hasil build secara lokal dengan perintah:
```bash
npm run preview
```

---

## 🔮 Kontrol Navigasi
- **Klik Kiri + Geser**: Memutar sudut pandang kamera orbit.
- **Scroll Mouse**: Memperbesar (Zoom In) atau memperkecil (Zoom Out).
- **Klik Kanan + Geser**: Menggeser posisi fokus kamera.
- **Klik Planet**: Membuka ensiklopedia planet dan memfokuskan kamera secara otomatis.
