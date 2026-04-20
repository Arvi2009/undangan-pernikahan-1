/*
   ============================================
   UNDANGAN PERNIKAHAN - CUSTOMIZATION EXAMPLES
   Contoh-contoh customization untuk berbagai kebutuhan
   ============================================
*/

// ============================================
// CONTOH 1: Update Konfigurasi Pernikahan
// ============================================

// FILE: js/config.js (Bagian weddingConfig)

const weddingConfigExample = {
    brideGroom: {
        groom: 'Rizki Pratama Wijaya',
        bride: 'Nurhani Mustika Sari',
        shortNames: 'Rizki & Nurhani'
    },
    
    eventDate: {
        date: '2024-06-15',           // Format penting: YYYY-MM-DD
        year: 2024,
        month: 6,                     // 1-12
        day: 15
    },
    
    events: {
        akad: {
            time: '08:30',
            endTime: '09:30',
            location: 'Masjid Raya, Jl. Sudirman No. 1, Jakarta'
        },
        resepsi: {
            time: '10:00',
            endTime: '17:00',
            location: 'Ballroom Mewah, Jl. Gatot Subroto No. 123, Jakarta'
        }
    },
    
    contacts: {
        whatsapp: '6281234567890',    // Format: 62 + nomor tanpa 0
        instagram: 'rizki.nurhani.wedding',
        email: 'rizki.nurhani@wedding.com'
    },
    
    guestList: [
        'Keluarga Besar Rizki',
        'Keluarga Besar Nurhani',
        'Sahabat Dekat',
        'Kolega Kerja'
    ]
};

// ============================================
// CONTOH 2: Update Teks Multi-Bahasa Tambahan
// ============================================

// FILE: js/config.js (Tambahkan ke languages object)

const customLanguages = {
    id: {
        // Teks custom tambahan
        'custom-welcome': 'Selamat datang di acara istimewa kami',
        'custom-quote': 'Cinta sejati adalah perjalanan, bukan destinasi',
        'custom-thank-you': 'Terima kasih telah menjadi bagian dari cerita kami',
        'story-5-title': 'Perjalanan Baru', // Tambah milestone 5
        'story-5-text': 'Sekarang dimulai petualangan baru sebagai pasangan suami istri...',
    },
    en: {
        'custom-welcome': 'Welcome to our special event',
        'custom-quote': 'True love is a journey, not a destination',
        'custom-thank-you': 'Thank you for being part of our story',
        'story-5-title': 'New Beginning',
        'story-5-text': 'Now begins our adventure as husband and wife...',
    }
};

// ============================================
// CONTOH 3: Animasi GSAP Custom
// ============================================

// FILE: js/main.js (Tambahkan function ini)

function customAnimations() {
    // Animasi text bounce
    gsap.from('.cover-title', {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: 'elastic.out(1, 0.5)'
    });
    
    // Animasi staggered gallery items dengan delay
    gsap.to('.gallery-item', {
        scrollTrigger: {
            trigger: '.gallery-grid',
            start: 'top center'
        },
        opacity: 1,
        duration: 0.8,
        stagger: {
            amount: 1,
            from: 'random'
        }
    });
    
    // Animasi rotate untuk event cards
    gsap.to('.event-card', {
        scrollTrigger: {
            trigger: '.event-grid',
            start: 'top 70%'
        },
        rotation: 0,
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2
    });
    
    // Timeline animation untuk multiple elements
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.welcome-card',
            start: 'top 70%'
        }
    });
    
    tl.from('.welcome-text', { opacity: 0, y: 20, duration: 0.5 })
      .from('.welcome-quote', { opacity: 0, scale: 0.8, duration: 0.5 }, 0.2);
}

// Panggil di initializeAnimations()
// customAnimations();

// ============================================
// CONTOH 4: Theme Warna Pra-definisi
// ============================================

// FILE: css/style.css atau inline style

const colorThemes = {
    classicGold: {
        primary: '#D4A574',
        secondary: '#C19A6B',
        dark: '#3D2817',
        light: '#FFF8F3',
        accent: '#C08081'
    },
    
    roseGold: {
        primary: '#E8A5C1',
        secondary: '#D88FB9',
        dark: '#6B3E42',
        light: '#FFF5F7',
        accent: '#B4668F'
    },
    
    silverElegance: {
        primary: '#C0C0C0',
        secondary: '#A8A8A8',
        dark: '#2C2C2C',
        light: '#F5F5F5',
        accent: '#808080'
    },
    
    tropicalSunset: {
        primary: '#FF6B6B',
        secondary: '#FFA500',
        dark: '#8B4513',
        light: '#FFF8DC',
        accent: '#FF8C00'
    },
    
    sophisticatedBlue: {
        primary: '#4A90E2',
        secondary: '#2E5C8A',
        dark: '#1B3A5C',
        light: '#F0F4F8',
        accent: '#17A2B8'
    }
};

// Untuk menggunakan: copy-paste warna dari theme ke :root

// ============================================
// CONTOH 5: Form Validation Function
// ============================================

// FILE: js/main.js (Tambahan untuk validation)

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePhone(phone) {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length >= 10 && cleaned.length <= 15;
}

function validateForm(formData) {
    const errors = [];
    
    if (!formData.name || formData.name.trim().length < 3) {
        errors.push('Nama minimal 3 karakter');
    }
    
    if (!validateEmail(formData.email)) {
        errors.push('Email tidak valid');
    }
    
    if (!validatePhone(formData.phone)) {
        errors.push('Nomor telepon tidak valid');
    }
    
    if (!formData.attendance) {
        errors.push('Pilih status kehadiran');
    }
    
    return errors;
}

// ============================================
// CONTOH 6: Social Media Share Functions
// ============================================

// FILE: js/main.js (Tambahkan functions ini)

function shareToFacebook() {
    const url = window.location.href;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, 'facebook-share', 'width=600,height=400');
}

function shareToTwitter() {
    const message = 'Lihat undangan pernikahan digital Ayu & Reza! 💕 Indah dan interaktif!';
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(twitterUrl, 'twitter-share', 'width=600,height=400');
}

function shareToLinkedIn() {
    const url = window.location.href;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, 'linkedin-share', 'width=600,height=400');
}

function generateQRCode() {
    // Gunakan QR Code API gratis
    const text = window.location.href;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;
    return qrUrl;
}

// ============================================
// CONTOH 7: Advanced Guestbook Features
// ============================================

// FILE: js/main.js (Tambahan untuk guestbook)

function filterGuestMessages(searchTerm) {
    return guestMessages.filter(msg => 
        msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.message.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

function exportGuestbookToCSV() {
    let csv = 'Nama,Pesan\n';
    guestMessages.forEach(msg => {
        csv += `"${msg.name}","${msg.message}"\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'guestbook.csv';
    a.click();
}

function exportGuestbookToJSON() {
    const json = JSON.stringify(guestMessages, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'guestbook.json';
    a.click();
}

function sortGuestbookByDate() {
    // Jika ingin menambah timestamp
    return guestMessages.sort((a, b) => 
        new Date(b.timestamp) - new Date(a.timestamp)
    );
}

// ============================================
// CONTOH 8: Analytics Tracking
// ============================================

// FILE: js/main.js (Tambahan untuk tracking)

function trackEvent(eventName, eventData = {}) {
    const logEntry = {
        event: eventName,
        timestamp: new Date().toISOString(),
        data: eventData,
        userAgent: navigator.userAgent
    };
    
    console.log('📊 Event Tracked:', logEntry);
    
    // Simpan ke localStorage atau kirim ke backend
    let events = JSON.parse(localStorage.getItem('eventLog') || '[]');
    events.push(logEntry);
    localStorage.setItem('eventLog', JSON.stringify(events));
}

// Gunakan di berbagai event:
// trackEvent('form_submitted', { name, email, attendance });
// trackEvent('page_viewed', { section: 'cerita' });
// trackEvent('music_toggled', { enabled: musicEnabled });

// ============================================
// CONTOH 9: SEO Meta Tags
// ============================================

// FILE: index.html (tambahkan di <head> atau generate dengan JS)

const seoMetaTags = `
<meta name="description" content="Undangan Pernikahan Digital Ayu & Reza - 25 Mei 2024">
<meta name="keywords" content="undangan pernikahan, digital invitation, wedding, pernikahan, undangan">
<meta name="author" content="Ayu & Reza">

<!-- Open Graph untuk Social Media -->
<meta property="og:title" content="Undangan Pernikahan Ayu & Reza">
<meta property="og:description" content="Kami dengan senang hati mengundang Anda untuk merayakan pernikahan kami.">
<meta property="og:image" content="https://link-ke-foto-preview.jpg">
<meta property="og:url" content="https://ayureza.wedding">

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Undangan Pernikahan Ayu & Reza">
<meta name="twitter:description" content="Undangan pernikahan digital yang indah dan interaktif">
<meta name="twitter:image" content="https://link-ke-foto-preview.jpg">

<!-- Structured Data (Schema.org) -->
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Pernikahan Ayu & Reza",
    "startDate": "2024-05-25T09:00",
    "endDate": "2024-05-25T17:00",
    "location": {
        "@type": "Place",
        "name": "Gedung Teratai",
        "address": "Jl. Gatot Subroto No. 123"
    },
    "organizer": {
        "@type": "Person",
        "name": "Ayu",
        "email": "ayu@wedding.com"
    }
}
</script>
`;

// ============================================
// CONTOH 10: Performance Optimization
// ============================================

// FILE: index.html atau js/main.js

const performanceOptimizations = {
    // Lazy load images
    lazyLoadImages: function() {
        if ('IntersectionObserver' in window) {
            const images = document.querySelectorAll('img[data-src]');
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });
            images.forEach(img => imageObserver.observe(img));
        }
    },
    
    // Minify inline CSS
    minifyCSS: function(css) {
        return css
            .replace(/\/\*[\s\S]*?\*\//g, '')
            .replace(/\s{2,}/g, ' ')
            .trim();
    },
    
    // Compress text
    compressText: function(text) {
        return text
            .replace(/\s+/g, ' ')
            .trim();
    },
    
    // Prefetch resources
    prefetchResources: function() {
        const links = [
            'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
            'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700'
        ];
        
        links.forEach(link => {
            const prefetchLink = document.createElement('link');
            prefetchLink.rel = 'prefetch';
            prefetchLink.href = link;
            document.head.appendChild(prefetchLink);
        });
    }
};

// ============================================
// CONTOH 11: Timeline Events Tambahan
// ============================================

// FILE: index.html (Section #acara, timeline-item)

const customTimeline = [
    { time: '08:00', event: 'Pembukaan Lokasi & Registrasi Tamu' },
    { time: '08:30', event: 'Ambil Tempat & Pemberian Minuman' },
    { time: '09:00', event: 'Pembukaan & Doa Pembukaan' },
    { time: '09:15', event: 'Acara Akad Nikah' },
    { time: '10:00', event: 'Foto Bersama Keluarga Besar' },
    { time: '11:00', event: 'Pembukaan Resepsi' },
    { time: '11:30', event: 'Makan Minum & Sosialisasi' },
    { time: '13:00', event: 'Ucapan dari Keluarga & Sahabat' },
    { time: '13:30', event: 'Games & Hiburan' },
    { time: '14:00', event: 'Potong Kue' },
    { time: '14:30', event: 'Photo Booth & Games Lanjutan' },
    { time: '15:30', event: 'Doa Penutup & Ucapan Terima Kasih' },
    { time: '16:00', event: 'Penutupan Resepsi' }
];

// ============================================
// CONTOH 12: Mobile-Specific Functions
// ============================================

// FILE: js/main.js

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function isTabletDevice() {
    return /iPad|Android/i.test(navigator.userAgent);
}

function detectDeviceType() {
    if (isMobileDevice()) return 'mobile';
    if (isTabletDevice()) return 'tablet';
    return 'desktop';
}

function adjustForMobile() {
    if (isMobileDevice()) {
        // Reduce animation duration on mobile for better performance
        gsap.config({ autoSleep: 60 });
        
        // Adjust font sizes
        document.documentElement.style.fontSize = '14px';
    }
}

// ============================================
// CONTOH 13: Countdown Timezone Support
// ============================================

// FILE: js/main.js (update updateCountdown function)

function updateCountdownWithTimezone(eventDate, timezone = 'Asia/Jakarta') {
    const event = new Date(new Date(eventDate).toLocaleString('en-US', { timeZone: timezone }));
    const now = new Date();
    const distance = event - now;
    
    if (distance < 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
    };
}

// ============================================
// CONTOH 14: Backup & Restore Function
// ============================================

// FILE: js/main.js

function backupData() {
    const backup = {
        guestMessages: guestMessages,
        language: currentLanguage,
        musicEnabled: musicEnabled,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('backup_' + Date.now(), JSON.stringify(backup));
    console.log('✓ Backup created');
}

function restoreData(timestamp) {
    const backup = JSON.parse(localStorage.getItem('backup_' + timestamp));
    
    if (backup) {
        guestMessages = backup.guestMessages;
        currentLanguage = backup.language;
        musicEnabled = backup.musicEnabled;
        
        localStorage.setItem('guestMessages', JSON.stringify(guestMessages));
        localStorage.setItem('language', currentLanguage);
        localStorage.setItem('musicEnabled', musicEnabled);
        
        console.log('✓ Data restored');
        location.reload();
    }
}

function listBackups() {
    const backups = [];
    for (let key in localStorage) {
        if (key.startsWith('backup_')) {
            backups.push(key);
        }
    }
    return backups;
}

// ============================================
// END OF CUSTOMIZATION EXAMPLES
// ============================================

console.log('✓ Customization examples loaded');
console.log('Gunakan contoh-contoh di atas untuk customize website Anda');
