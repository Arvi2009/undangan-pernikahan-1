# 🎉 Undangan Pernikahan Digital - Dokumentasi Lengkap

Website undangan pernikahan digital modern, responsif, dan interaktif dengan animasi smooth menggunakan GSAP.

## 📋 Daftar Isi

1. [Fitur Utama](#fitur-utama)
2. [Struktur File](#struktur-file)
3. [Cara Menggunakan](#cara-menggunakan)
4. [Kustomisasi](#kustomisasi)
5. [Fitur Teknis](#fitur-teknis)
6. [Keyboard Shortcuts](#keyboard-shortcuts)
7. [Browser Support](#browser-support)

---

## ✨ Fitur Utama

### Desain & UI
- ✅ Desain modern, elegan, dan fully responsive
- ✅ Tema warna soft (cream, gold, pastel)
- ✅ Google Fonts (Playfair Display, Poppins, Great Vibes)
- ✅ Animasi smooth dengan GSAP & ScrollTrigger
- ✅ Opening screen dengan tombol "Buka Undangan"
- ✅ Mobile-first design

### Informasi Acara
- ✅ Nama mempelai pria & wanita
- ✅ Tanggal, waktu, dan lokasi acara
- ✅ Google Maps embed
- ✅ **Countdown timer** menuju pernikahan
- ✅ Susunan acara timeline (akad & resepsi)
- ✅ Event cards yang indah

### Konten Personal
- ✅ Love story timeline dengan 4 milestone
- ✅ Galeri foto dengan lightbox effect
- ✅ Embed video prewedding (YouTube)
- ✅ Quotes romantis bergambar

### Interaksi Tamu
- ✅ Form RSVP lengkap (nama, email, kehadiran, jumlah tamu)
- ✅ Buku tamu (guestbook) real-time
- ✅ Local storage untuk menyimpan pesan
- ✅ Tampilan pesan tamu secara dinamis

### Multi Bahasa
- ✅ Support 2 bahasa: Indonesia & English
- ✅ Toggle button di navbar
- ✅ Simpan preferensi bahasa di localStorage

### Sharing & Personalisasi
- ✅ URL parameter untuk nama tamu: `?to=NamaTamu`
- ✅ Tampilan nama tamu dinamis di halaman
- ✅ Share ke WhatsApp
- ✅ Copy invitation link

### Audio & Musik
- ✅ Background music autoplay
- ✅ Musik romantic instrumental
- ✅ Kontrol play/pause di navbar
- ✅ Simpan preferensi musik

### Teknologi
- ✅ HTML5 semantic
- ✅ CSS modern (Flexbox & Grid)
- ✅ JavaScript vanilla (no framework)
- ✅ GSAP 3.12+ untuk animasi
- ✅ ScrollTrigger untuk scroll animations
- ✅ Lightbox2 untuk galeri
- ✅ Font Awesome icons

---

## 📁 Struktur File

```
UNDANGAN PERNIKAHAN/
├── index.html          # File HTML utama (semantic)
├── css/
│   └── style.css       # Styling lengkap (responsive, animasi)
├── js/
│   ├── config.js       # Konfigurasi bahasa & data
│   └── main.js         # Logika utama & interaktivitas
└── README.md           # File ini
```

**Total Lines of Code:**
- HTML: ~700 lines
- CSS: ~1000 lines
- JavaScript: ~500 lines
- Config: ~200 lines

---

## 🚀 Cara Menggunakan

### 1. Persiapan Awal
- Download/clone semua file ke folder project
- Pastikan struktur folder sesuai dengan diagram di atas
- Buka `index.html` di browser modern (Chrome, Firefox, Safari, Edge)

### 2. Personalisasi Informasi Acara

Edit file `js/config.js`:

```javascript
const weddingConfig = {
    brideGroom: {
        groom: 'GANTI_NAMA_PRIA',           // Nama mempelai pria
        bride: 'GANTI_NAMA_WANITA',         // Nama mempelai wanita
        shortNames: 'GANTI & GANTI'
    },
    
    eventDate: {
        date: '2024-05-25',                 // Format: YYYY-MM-DD
        year: 2024,
        month: 5,                            // 1-12
        day: 25
    },
    
    events: {
        akad: {
            time: '09:00',
            endTime: '10:00',
            location: 'GANTI_LOKASI_AKAD'
        },
        resepsi: {
            time: '11:00',
            endTime: '16:00',
            location: 'GANTI_LOKASI_RESEPSI'
        }
    },
    
    contacts: {
        whatsapp: '62XXXXXXXXXX',            // Nomor WhatsApp (format: 62812345678)
        instagram: 'username',
        email: 'email@example.com'
    }
};
```

### 3. Update Teks HTML

Edit `index.html` untuk:
- Mengubah nama di `<title>`
- Update cerita cinta di section `#cerita`
- Update susunan acara di timeline
- Tambah/ubah galeri foto (ganti URL Unsplash atau upload sendiri)
- Update lokasi Google Maps (embed)
- Update info pengantin

### 4. Ganti Musik Background

Edit `index.html`, cari element `<audio>`:

```html
<audio id="bgMusic" loop>
    <source src="GANTI_URL_MUSIK.mp3" type="audio/mpeg">
</audio>
```

Gunakan situs seperti:
- Pixabay Music (gratis)
- FreePik (gratis)
- YouTube Audio Library (gratis)

### 5. Deploy

**Opsi 1: Hosting Gratis**
- Netlify (drag & drop)
- Vercel
- GitHub Pages
- Firebase Hosting

**Opsi 2: Hosting Berbayar**
- Hostinger
- Bluehost
- DreamHost

**Buat Invitation Link Unik:**
```
https://yoursite.com/?to=NamaUndangan
```

---

## ⚙️ Kustomisasi Detail

### Ganti Warna Tema

Edit `css/style.css` di bagian root variables:

```css
:root {
    --primary-cream: #FFF8F3;      /* Warna latar utama */
    --primary-gold: #D4A574;       /* Warna emas/highlight */
    --secondary-gold: #C19A6B;     /* Warna emas secondary */
    --dark-brown: #3D2817;         /* Warna teks utama */
    --light-pink: #FFF0F5;         /* Warna pink muda */
    --dusty-rose: #C08081;         /* Warna rose */
}
```

**Saran Kombinasi Warna:**
- Classic Gold: `#D4A574` + `#3D2817`
- Romantic Rose: `#E8A5C1` + `#6B3E42`
- Elegant Silver: `#C0C0C0` + `#2C2C2C`
- Tropical Sunset: `#FF6B6B` + `#FFA500`

### Ganti Font

Edit `css/style.css`:

```css
/* Ganti Google Fonts di <head> index.html */
@import url('https://fonts.googleapis.com/css2?family=FONT1:wght@400;700&family=FONT2:wght@300;500&display=swap');

/* Kemudian update di style.css */
--font-display: 'Font1Name', serif;
--font-body: 'Font2Name', sans-serif;
```

**Font Recommendations:**
- Display: Playfair Display, Cormorant Garamond, Cinzel
- Body: Poppins, Inter, Lato
- Script: Great Vibes, Dancing Script, Pacifico

### Tambah Galeri Foto

Edit `index.html` di section `#galeri`:

```html
<a href="https://link-ke-foto-besar.jpg" data-lightbox="gallery">
    <img src="https://link-ke-foto-kecil.jpg" alt="Deskripsi">
    <div class="gallery-overlay">
        <i class="fas fa-search-plus"></i>
    </div>
</a>
```

### Update Timeline Acara

Edit di section `#acara`, cari `.timeline`:

```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <p class="timeline-time">WAKTU</p>
        <p class="timeline-event" data-lang="timeline-X">DESKRIPSI ACARA</p>
    </div>
</div>
```

### Update Love Story

Edit di section `#cerita`:

```html
<div class="story-item">
    <div class="story-marker"></div>
    <div class="story-content">
        <h3 class="story-year">TAHUN</h3>
        <h4 class="story-title" data-lang="story-X-title">JUDUL</h4>
        <p class="story-text" data-lang="story-X-text">CERITA</p>
    </div>
</div>
```

---

## 🎯 Fitur Teknis Detailed

### 1. Countdown Timer
- Update otomatis setiap detik
- Target: 25 Mei 2024, 09:00
- Lokasi: `js/main.js` -> `updateCountdown()`

### 2. Multi Language System
- File config: `js/config.js`
- Implementasi: `initializeLanguage()`
- Storage: localStorage key `language`
- Saat menambah teks baru, gunakan `data-lang` attribute

### 3. GSAP Animations
- ScrollTrigger: Auto-trigger saat elemen masuk viewport
- Timeline: Fade-in, scale, dan slide animations
- Parallax: Bunga di opening screen
- Duration: 0.3s - 0.8s untuk smooth feel

### 4. Local Storage
Data yang disimpan:
- `language`: Bahasa terpilih
- `musicEnabled`: Status musik
- `guestMessages`: Pesan tamu (JSON array)

### 5. Form Validation
- Nama, email, phone: required
- Email: format validation
- Phone: auto-convert ke format WhatsApp
- Guest count: hanya tampil jika hadir

### 6. Guestbook System
- Simpan di localStorage
- Display real-time
- Auto-reverse order (terbaru di atas)
- Support emoji & formatting

### 7. Responsive Breakpoints
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px
- Extra Mobile: < 480px

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Fungsi |
|----------|--------|
| **Alt + L** | Toggle Language (ID ↔ EN) |
| **Alt + M** | Toggle Music (Play ↔ Pause) |
| **Alt + D** | Open Debug Console Info |

---

## 🌐 Browser Support

| Browser | Status |
|---------|--------|
| Chrome | ✅ Full Support |
| Firefox | ✅ Full Support |
| Safari | ✅ Full Support |
| Edge | ✅ Full Support |
| IE 11 | ❌ Not Supported |

**Tested on:**
- Desktop: Chrome, Firefox, Safari, Edge
- Mobile: iPhone (Safari), Android (Chrome)
- Tablet: iPad (Safari), Android tablets (Chrome)

---

## 📝 Customization Checklist

- [ ] Edit nama pengantin di `config.js`
- [ ] Update tanggal pernikahan
- [ ] Ganti lokasi akad & resepsi
- [ ] Update nomor WhatsApp
- [ ] Ubah musik background
- [ ] Ganti tema warna (opsional)
- [ ] Tambah/update galeri foto
- [ ] Update love story
- [ ] Edit susunan acara
- [ ] Update embed Google Maps
- [ ] Ganti video YouTube prewedding
- [ ] Test di mobile & desktop
- [ ] Deploy ke hosting

---

## 🎨 Design Tips

1. **Foto Galeri**: Gunakan foto berkualitas tinggi (minimal 1200x1200px)
2. **Konsistensi Warna**: Max 3 warna utama
3. **Typography**: Maksimal 3 jenis font
4. **Whitespace**: Jangan terlalu banyak elemen, berikan ruang untuk bernafas
5. **Loading**: Jangan lebih dari 3 detik
6. **Mobile First**: Design untuk mobile dulu, baru desktop

---

## 🐛 Troubleshooting

### Musik tidak autoplay?
- Browser blocking autoplay
- Enable audio di browser settings
- Gunakan tombol toggle musik

### Countdown tidak update?
- Clear browser cache
- Pastikan date format benar: `2024-05-25`
- Check console untuk error

### Guestbook tidak menyimpan?
- Check localStorage tidak penuh
- Bersihkan browser data
- Verifikasi localStorage enabled

### Animasi tidak smooth?
- Reduce motion preference
- Check GPU acceleration
- Clear browser cache

### URL parameter tidak bekerja?
- Format benar: `?to=NamaTamu`
- Gunakan enkoding untuk nama dengan spasi: `?to=Nama%20Tamu`
- Check di recipient name element

---

## 📞 Support & Tips

### Untuk Menambah Fitur
1. Edit `js/main.js` untuk logic
2. Edit `css/style.css` untuk styling
3. Tambahkan `data-lang` untuk multi-language
4. Test di mobile & desktop

### Untuk Optimization
1. Compress semua gambar
2. Minify CSS & JavaScript
3. Lazy load gambar
4. Use CDN untuk library

### SEO Tips
1. Update `<meta>` tags di HTML
2. Add structured data (Schema.org)
3. Submit sitemap ke search engines
4. Add Open Graph tags untuk social share

---

## 📄 License & Credits

**Kode ini gratis untuk digunakan pribadi maupun komersial.**

### Libraries Used
- [GSAP 3.12+](https://greensock.com/gsap/)
- [Lightbox2](https://lokeshdhakar.com/projects/lightbox2/)
- [Font Awesome 6](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

### Tools Used
- HTML5
- CSS3
- Vanilla JavaScript
- Local Storage API
- URL API

---

## 🎉 Selesai!

Website undangan pernikahan Anda sudah siap! Semoga pernikahan Anda menjadi momen yang indah dan berkesan.

**Happy Wedding! 💕**

---

**Last Updated:** April 2024
**Version:** 1.0
**Author:** Undangan Digital Team
