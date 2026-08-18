# 🌾 LAPAK TANI - Frontend Prototype Website

## 📌 Tentang Proyek

**Lapak Tani** merupakan proyek tugas akhir mata kuliah **Perancangan Website (PWEB)** yang berfokus pada perancangan antarmuka pengguna (*Frontend Static Prototype*). Website ini dirancang sebagai sarana pembelajaran untuk mendemonstrasikan tata letak web responsif, estetika UI/UX, validasi form di sisi klien, serta interaktivitas antarmuka *e-commerce* produk pertanian.

> ℹ️ **Catatan:** Proyek ini dikembangkan murni sebagai prototipe *frontend* **tanpa menggunakan sistem backend, basis data (database), maupun pemrosesan transaksi**. Seluruh interaksi data (seperti keranjang belanja) menggunakan *mockup data* statis berbasis JSON dan JavaScript di sisi browser.

- **Mata Kuliah:** Perancangan Website (PWEB)
- **Kelas / Kelompok:** Kelas C - Kelompok 14
- **Instansi:** Universitas Jember
- 🌐 **Live Demo Website:** [https://riyansetiyadi.github.io/tugas_akhir_perancangan_website/](https://riyansetiyadi.github.io/tugas_akhir_perancangan_website/)
- 🎨 **Figma UI Mockup:** [Lihat Mockup Figma](https://www.figma.com/file/XMjRjoTZSZgYEXnWLvfbXW/Untitled?node-id=0%3A1)

---

## ✨ Fitur Antarmuka (Frontend Features)

- **Halaman Utama (Landing Page):** Tampilan beranda dengan banner slider, rekomendasi produk, tentang kami, dan footer kontak.
- **Katalog Produk:** Tampilan kisi produk pertanian (sayur, buah, beras) beserta harga dan toko penjual.
- **Detail Produk:** Halaman sampel detail informasi produk.
- **Simulasi Keranjang Belanja:** Pemuatan data produk *mockup* secara statis menggunakan jQuery AJAX dari `assets/data/keranjang.json` serta perhitungan total harga sederhana di browser.
- **Simulasi Autentikasi:** Form Masuk (*Login*), Daftar (*Register*), dan Lupa Password dengan validasi JavaScript di sisi klien.
- **Desain Responsif:** Tampilan yang menyesuaikan ukuran layar desktop dan mobile.


---

## 📁 Struktur Proyek

```text
tugas_akhir_perancangan_website/
├── index.html            # Halaman Utama (Beranda)
├── katalog.html          # Halaman Katalog Produk
├── produk.html           # Halaman Detail Produk
├── keranjang.html        # Halaman Keranjang Belanja
├── daftar.html           # Halaman Registrasi Akun
├── masuk.html            # Halaman Login Pengguna
├── lupa-password.html    # Halaman Lupa Password
├── README.md             # Dokumentasi Proyek
├── .gitignore            # Pengabaian File OS & IDE
└── assets/
    ├── css/              # Stylesheet Website (main, index, katalog, produk, keranjang, auth)
    ├── js/               # Script JavaScript & Logic AJAX (main.js)
    ├── images/           # Aset Gambar Background & Produk
    ├── icons/            # Ikon Navigasi & Media Sosial
    └── data/             # File Data Mockup JSON (keranjang.json)
```

---

## 🛠️ Teknologi yang Digunakan

- **HTML5:** Struktur markup halaman web.
- **CSS3:** Penataan gaya visual dan tata letak responsif.
- **JavaScript (ES6) & jQuery:** Validasi form dan manipulasi DOM di sisi browser.
- **JSON:** *Mock data* statis untuk simulasi keranjang belanja.

---

## 👥 Anggota Kelompok 14

| No | Nama | NIM | Profil GitHub |
|---|---|---|---|
| 1. | **[Andhia Rosa Kartikasari](https://github.com/arkartika)** | `192410101134` | [@arkartika](https://github.com/arkartika) |
| 2. | **[Riyan Setiyadi Hidayatullah](https://github.com/riyansetiyadi)** | `192410101105` | [@riyansetiyadi](https://github.com/riyansetiyadi) |

---

© **Lapak Tani** - Kelompok 14 PWEB C Universitas Jember.
