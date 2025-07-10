# OutFaz - Adventure Gear Hub

**Nama Lengkap:** [Khansa Fawwazy Adna]
**Kategori Proyek yang Dipilih:** E-Commerce  

## Deskripsi Singkat Proyek

**OutFaz** adalah platform e-commerce yang mengkhususkan diri dalam menyediakan layanan jual beli dan sewa peralatan outdoor, camping, mendaki, dan adventure. Aplikasi ini dirancang untuk memenuhi kebutuhan para pecinta alam dan petualang yang membutuhkan akses mudah terhadap peralatan berkualitas tinggi untuk berbagai aktivitas outdoor mereka.

Melalui OutFaz, pengguna dapat dengan mudah menemukan, membeli, atau menyewa berbagai peralatan mulai dari tenda, sleeping bag, carrier, sepatu hiking, hingga peralatan climbing dan adventure lainnya. Platform ini menawarkan fleksibilitas bagi pengguna yang mungkin hanya membutuhkan peralatan untuk sekali pakai atau yang ingin mencoba sebelum membeli, sehingga membuat petualangan outdoor menjadi lebih accessible dan ekonomis.

## Fitur Utama

- **Jual Beli Peralatan:** Pengguna dapat membeli berbagai peralatan outdoor berkualitas tinggi
- **Layanan Sewa:** Fleksibilitas menyewa peralatan untuk kebutuhan jangka pendek
- **Kategori Lengkap:** Camping, Hiking, Climbing, Adventure, Navigation, dan Lighting
- **Sistem Rating:** Review dan rating untuk setiap produk
- **Responsif:** Desain yang mobile-friendly untuk akses di berbagai perangkat

## Struktur Komponen

```
src/
├── components/
│   ├── Navbar.jsx          # Navigasi utama aplikasi
│   ├── Hero.jsx            # Section hero dengan CTA utama
│   ├── CategoryCard.jsx    # Kartu kategori produk
│   ├── CategoryGrid.jsx    # Grid kategori produk
│   ├── ProductCard.jsx     # Kartu produk individual
│   ├── ProductGrid.jsx     # Grid produk featured
│   ├── Features.jsx        # Section fitur unggulan
│   └── Footer.jsx          # Footer aplikasi
├── App.jsx                 # Komponen utama aplikasi
├── App.css                 # Styling utama
└── main.jsx               # Entry point aplikasi
```

## Komponen yang Dibuat

### 1. Navbar.jsx
- Navigasi utama dengan branding OutFaz
- Menu navigasi (Home, Products, Rental, About, Contact)
- Actions (Search, Cart, Login)

### 2. Hero.jsx
- Section hero dengan judul dan deskripsi
- Call-to-action buttons (Shop Now, Rent Equipment)
- Menggunakan props untuk konten dinamis

### 3. CategoryCard.jsx & CategoryGrid.jsx
- Menampilkan kategori produk dengan icon dan deskripsi
- Menampilkan jumlah item per kategori
- Grid layout yang responsif

### 4. ProductCard.jsx & ProductGrid.jsx
- Kartu produk dengan gambar, harga, dan rating
- Dukungan untuk harga beli dan sewa
- Badge untuk status ketersediaan
- Grid layout untuk menampilkan produk

### 5. Features.jsx
- Menampilkan keunggulan OutFaz
- 4 fitur utama dengan icon dan deskripsi

### 6. Footer.jsx
- Informasi kontak dan sosial media
- Quick links dan kategori
- Copyright dan legal links

## Teknologi yang Digunakan

- **React JS** - Framework JavaScript untuk membangun UI
- **Vite** - Build tool untuk development yang cepat
- **CSS3** - Styling dengan Flexbox dan Grid
- **JSX** - Sintaks untuk komponen React

## Cara Menjalankan Proyek

1. Clone repository ini
2. Install dependencies:
   ```bash
   npm install
   ```
3. Jalankan development server:
   ```bash
   npm run dev
   ```
4. Buka browser dan akses `http://localhost:5173`

## Implementasi Props

Proyek ini menggunakan props untuk mengirim data dari komponen parent ke child:

- **Navbar**: Menerima props `title` untuk judul aplikasi
- **Hero**: Menerima props `title`, `subtitle`, dan `description`
- **CategoryCard**: Menerima props `icon`, `title`, `description`, dan `itemCount`
- **ProductCard**: Menerima props untuk data produk seperti `image`, `title`, `price`, dll.
- **ProductGrid**: Menerima props `title` dan `products` array

## Status Pengembangan

✅ Setup environment dengan Vite  
✅ Struktur folder dan komponen dasar  
✅ Tampilan UI statis dengan JSX  
✅ Implementasi props untuk data sederhana  
✅ Responsive design  
✅ Styling lengkap dengan CSS  

## Rencana Pengembangan Selanjutnya

- Implementasi state management dengan useState
- Menambahkan interaksi dan event handling
- Integrasi dengan API untuk data produk
- Implementasi sistem cart dan checkout
- Menambahkan fitur search dan filter
- Implementasi sistem authentication

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
