/* ============================================
   UNDANGAN PERNIKAHAN - CONFIG & LANGUAGE
   Multi-language & Dynamic Content Configuration
   ============================================ */

// Language Configuration
const languages = {
    id: {
        'cover-subtitle': 'Dengan penuh kebahagiaan, kami mengundang Anda',
        'cover-title': 'Ayu & Reza',
        'cover-invitation': 'untuk merayakan momen istimewa pernikahan kami',
        'open-button': 'Buka Undangan',
        
        'welcome-title': 'Selamat Datang',
        'welcome-text': 'Bismillah, dengan ridha dan berkah dari Allah SWT, kami mengundang Anda untuk menghadiri acara pernikahan kami yang akan menjadi momen indah dan berkesan.',
        'welcome-quote': '"Cinta adalah ketika kebahagiaan seseorang adalah prioritas utama Anda"',
        
        'acara-title': 'Informasi Acara',
        'countdown-title': 'Menjelang Hari Istimewa',
        'countdown-days': 'Hari',
        'countdown-hours': 'Jam',
        'countdown-minutes': 'Menit',
        'countdown-seconds': 'Detik',
        
        'akad-title': 'Akad Nikah',
        'akad-date': 'Sabtu, 25 Mei 2024',
        'akad-location': 'Masjid An-Nur, Jl. Sunan Kalijaga No. 42',
        
        'resepsi-title': 'Resepsi Pernikahan',
        'resepsi-date': 'Sabtu, 25 Mei 2024',
        'resepsi-location': 'Gedung Teratai, Jl. Gatot Subroto No. 123',
        
        'timeline-title': 'Susunan Acara',
        'timeline-1': 'Pembukaan & Ucapan Selamat Datang',
        'timeline-2': 'Acara Akad Nikah',
        'timeline-3': 'Sesi Foto Bersama',
        'timeline-4': 'Pembukaan Resepsi & Makan Minum',
        'timeline-5': 'Ucapan & Doa dari Keluarga',
        'timeline-6': 'Potong Kue & Hiburan',
        'timeline-7': 'Penutupan & Terima Kasih',
        
        'maps-title': 'Lokasi Acara',
        
        'cerita-title': 'Cerita Cinta Kami',
        'story-1-title': 'Pertemuan Pertama',
        'story-1-text': 'Kami bertemu untuk pertama kalinya di acara keluarga besar. Sejak awal, ada sesuatu yang istimewa dan terasa berbeda. Saat itu dimulai perjalanan indah yang mengubah hidup kami.',
        'story-2-title': 'Jatuh Cinta',
        'story-2-text': 'Hari demi hari berlalu dan perasaan semakin dalam. Kami menyadari bahwa ini bukan hanya sekedar ketertarikan, tetapi cinta sejati yang menyatukan dua hati.',
        'story-3-title': 'Lamaran',
        'story-3-text': 'Di bawah langit yang penuh bintang, Reza memberanikan diri untuk melamar Ayu dengan penuh cinta dan harapan. Jawaban "ya" yang indah dimulai dari saat itu.',
        'story-4-title': 'Pernikahan',
        'story-4-text': 'Akhirnya tiba hari istimewa ini! Kami akan bersatu di hadapan Allah, keluarga, dan teman-teman terdekat. Ini adalah awal dari selamanya.',
        
        'galeri-title': 'Galeri Foto',
        'video-title': 'Video Prewedding',
        
        'rsvp-title': 'RSVP',
        'rsvp-subtitle': 'Mohon konfirmasi kehadiran Anda sebelum 20 Mei 2024',
        'rsvp-name': 'Nama Lengkap',
        'rsvp-email': 'Email',
        'rsvp-phone': 'Nomor WhatsApp',
        'rsvp-attendance': 'Konfirmasi Kehadiran',
        'rsvp-attend': 'Hadir',
        'rsvp-not-attend': 'Tidak Hadir',
        'rsvp-maybe': 'Mungkin Hadir',
        'rsvp-count': 'Jumlah Tamu yang Menemani',
        'rsvp-message': 'Pesan & Doa',
        'rsvp-submit': 'Kirim RSVP',
        
        'guestbook-title': 'Buku Tamu',
        'guestbook-subtitle': 'Baca ucapan indah dari tamu-tamu kami',
        
        'footer-thanks': 'Terima Kasih',
        'footer-message': 'Atas segala doa dan dukungan Anda untuk kami. Selamanya dengan penuh syukur.',
        'footer-contact': 'Hubungi Kami',
        'footer-copyright': '© 2024 Undangan Pernikahan Digital | Made with ❤️',
        
        'home': 'Beranda',
        'acara': 'Acara',
        'cerita': 'Cerita Kami',
        'galeri': 'Galeri',
        'rsvp': 'RSVP',
        'buku-tamu': 'Buku Tamu',
    },
    
    en: {
        'cover-subtitle': 'With great joy, we invite you',
        'cover-title': 'Ayu & Reza',
        'cover-invitation': 'to celebrate the special moment of our wedding',
        'open-button': 'Open Invitation',
        
        'welcome-title': 'Welcome',
        'welcome-text': 'With gratitude and blessings from Allah SWT, we invite you to attend our wedding ceremony, which will be a beautiful and memorable moment.',
        'welcome-quote': '"Love is when someone else\'s happiness is your priority"',
        
        'acara-title': 'Event Information',
        'countdown-title': 'Countdown to Our Special Day',
        'countdown-days': 'Days',
        'countdown-hours': 'Hours',
        'countdown-minutes': 'Minutes',
        'countdown-seconds': 'Seconds',
        
        'akad-title': 'Akad Nikah',
        'akad-date': 'Saturday, May 25, 2024',
        'akad-location': 'An-Nur Mosque, Jl. Sunan Kalijaga No. 42',
        
        'resepsi-title': 'Wedding Reception',
        'resepsi-date': 'Saturday, May 25, 2024',
        'resepsi-location': 'Teratai Hall, Jl. Gatot Subroto No. 123',
        
        'timeline-title': 'Event Schedule',
        'timeline-1': 'Opening & Welcome Speech',
        'timeline-2': 'Wedding Ceremony (Akad Nikah)',
        'timeline-3': 'Photo Session',
        'timeline-4': 'Reception Opening & Dinner',
        'timeline-5': 'Speeches & Blessings',
        'timeline-6': 'Cake Cutting & Entertainment',
        'timeline-7': 'Closing & Thank You',
        
        'maps-title': 'Event Location',
        
        'cerita-title': 'Our Love Story',
        'story-1-title': 'First Meeting',
        'story-1-text': 'We met for the first time at a family gathering. From the beginning, there was something special and different. That\'s when our beautiful journey began that changed our lives.',
        'story-2-title': 'Falling in Love',
        'story-2-text': 'Days passed and our feelings grew deeper. We realized that this was not just attraction, but true love that united our two hearts.',
        'story-3-title': 'Engagement',
        'story-3-text': 'Under a starry sky, Reza bravely proposed to Ayu with all his love and hope. The beautiful "yes" answer began from that moment.',
        'story-4-title': 'Wedding',
        'story-4-text': 'Finally this special day has arrived! We will unite before Allah, family, and closest friends. This is the beginning of forever.',
        
        'galeri-title': 'Photo Gallery',
        'video-title': 'Prewedding Video',
        
        'rsvp-title': 'RSVP',
        'rsvp-subtitle': 'Please confirm your attendance by May 20, 2024',
        'rsvp-name': 'Full Name',
        'rsvp-email': 'Email',
        'rsvp-phone': 'WhatsApp Number',
        'rsvp-attendance': 'Confirm Attendance',
        'rsvp-attend': 'Attending',
        'rsvp-not-attend': 'Not Attending',
        'rsvp-maybe': 'Maybe Attending',
        'rsvp-count': 'Number of Guests',
        'rsvp-message': 'Message & Wishes',
        'rsvp-submit': 'Send RSVP',
        
        'guestbook-title': 'Guest Book',
        'guestbook-subtitle': 'Read beautiful wishes from our guests',
        
        'footer-thanks': 'Thank You',
        'footer-message': 'For all your prayers and support for us. Forever with gratitude.',
        'footer-contact': 'Contact Us',
        'footer-copyright': '© 2024 Digital Wedding Invitation | Made with ❤️',
        
        'home': 'Home',
        'acara': 'Event',
        'cerita': 'Our Story',
        'galeri': 'Gallery',
        'rsvp': 'RSVP',
        'buku-tamu': 'Guest Book',
    }
};

// Wedding Event Configuration
const weddingConfig = {
    brideGroom: {
        groom: 'Reza Maulana',
        bride: 'Ayu Widiastuti',
        shortNames: 'Ayu & Reza'
    },
    
    eventDate: {
        date: '2024-05-25', // Format: YYYY-MM-DD
        year: 2024,
        month: 5,
        day: 25
    },
    
    events: {
        akad: {
            time: '09:00',
            endTime: '10:00',
            location: 'Masjid An-Nur, Jl. Sunan Kalijaga No. 42'
        },
        resepsi: {
            time: '11:00',
            endTime: '16:00',
            location: 'Gedung Teratai, Jl. Gatot Subroto No. 123'
        }
    },
    
    contacts: {
        whatsapp: '628123456789',
        instagram: 'ayu.reza.wedding',
        email: 'ayureza@wedding.com'
    },
    
    guestList: [
        // Sample guest list - add more as needed
        'Bambang Irawan',
        'Siti Nurhaliza',
        'Ahmad Pratama',
        'Putri Maharani',
        'Eka Suryanto'
    ]
};

// Sample Guestbook Messages (for demo)
const sampleMessages = [
    {
        name: 'Bambang Irawan',
        message: 'Selamat atas pernikahan kalian! Semoga bahagia selalu dan langgeng selamanya. 🎉'
    },
    {
        name: 'Siti Nurhaliza',
        message: 'Alhamdulillah, semoga pernikahan ini menjadi awal yang indah untuk masa depan yang penuh berkah. ❤️'
    },
    {
        name: 'Ahmad Pratama',
        message: 'Wishing you both a lifetime of love and happiness! Congratulations! 💕'
    }
];

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { languages, weddingConfig, sampleMessages };
}
