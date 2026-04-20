/* ============================================
   UNDANGAN PERNIKAHAN - MAIN JAVASCRIPT
   Core Functionality & Animations
   ============================================ */

// Global Variables
let currentLanguage = localStorage.getItem('language') || 'id';
let isOpeningPage = true;
let musicEnabled = localStorage.getItem('musicEnabled') !== 'false';
let guestMessages = JSON.parse(localStorage.getItem('guestMessages')) || [...sampleMessages];

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// ============================================
// 1. INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 Undangan Pernikahan Digital Loaded');
    
    // Initialize all components
    initializeLanguage();
    initializeMusic();
    initializeOpeningButton();
    initializeHamburger();
    initializeNavigation();
    initializeCountdown();
    initializeGuestbook();
    initializeFormHandling();
    initializeAnimations();
    initializeRecipientName();
    initializeScrollToTop();
    
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
    }, 2000);
});

// ============================================
// 2. LANGUAGE SYSTEM
// ============================================

function initializeLanguage() {
    // Set initial language button
    updateLanguageButton();
    
    // Apply initial language
    applyLanguage(currentLanguage);
    
    // Language toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            toggleLanguage();
        });
    }
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'id' ? 'en' : 'id';
    localStorage.setItem('language', currentLanguage);
    applyLanguage(currentLanguage);
    updateLanguageButton();
}

function updateLanguageButton() {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        const flag = langToggle.querySelector('.lang-flag');
        if (flag) {
            flag.textContent = currentLanguage === 'id' ? '🇮🇩' : '🇬🇧';
        }
    }
}

function applyLanguage(lang) {
    const langData = languages[lang] || languages['id'];
    
    // Update all elements with data-lang attribute
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (langData[key]) {
            element.textContent = langData[key];
        }
    });
    
    // Update form labels
    document.querySelectorAll('[data-label]').forEach(element => {
        const key = element.getAttribute('data-label');
        if (langData[key]) {
            element.textContent = langData[key];
        }
    });
    
    // Update nav links text
    document.querySelectorAll('.nav-link').forEach(link => {
        const id = link.getAttribute('data-id');
        if (langData[id]) {
            link.textContent = langData[id];
        }
    });
}

// ============================================
// 3. MUSIC CONTROL
// ============================================

function initializeMusic() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    
    if (musicToggle && bgMusic) {
        // Update button status
        updateMusicButton();
        
        // Toggle music on click
        musicToggle.addEventListener('click', function() {
            musicEnabled = !musicEnabled;
            localStorage.setItem('musicEnabled', musicEnabled);
            
            if (musicEnabled) {
                bgMusic.play().catch(e => {
                    console.log('Autoplay prevented:', e);
                });
            } else {
                bgMusic.pause();
            }
            
            updateMusicButton();
        });
        
        // Try to autoplay if enabled
        if (musicEnabled) {
            bgMusic.play().catch(e => {
                console.log('Autoplay prevented by browser:', e);
                musicEnabled = false;
                updateMusicButton();
            });
        }
    }
}

function updateMusicButton() {
    const musicToggle = document.getElementById('musicToggle');
    if (musicToggle) {
        if (musicEnabled) {
            musicToggle.classList.remove('muted');
            musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            musicToggle.classList.add('muted');
            musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    }
}

// ============================================
// 4. OPENING BUTTON & COVER SECTION
// ============================================

function initializeOpeningButton() {
    const openButton = document.getElementById('openButton');
    const coverSection = document.getElementById('coverSection');
    const mainContent = document.getElementById('mainContent');
    
    if (openButton) {
        openButton.addEventListener('click', function() {
            // Animate cover section out
            gsap.to(coverSection, {
                opacity: 0,
                duration: 0.8,
                onComplete: function() {
                    coverSection.style.display = 'none';
                    mainContent.classList.add('visible');
                    isOpeningPage = false;
                    
                    // Trigger animations for visible sections
                    triggerSectionAnimations();
                }
            });
            
            // Scroll to home
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 400);
        });
    }
}

// ============================================
// 5. RECIPIENT NAME (from URL parameter)
// ============================================

function initializeRecipientName() {
    const params = new URLSearchParams(window.location.search);
    const guestName = params.get('to');
    
    const recipientName = document.getElementById('recipientName');
    if (recipientName && guestName) {
        recipientName.innerHTML = `<p class="greeting-text">Kepada Yth. Bapak/Ibu <strong>${decodeURIComponent(guestName)}</strong></p>`;
        gsap.from(recipientName, {
            opacity: 0,
            duration: 1,
            delay: 0.5
        });
    }
}

// ============================================
// 6. HAMBURGER MENU
// ============================================

function initializeHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// ============================================
// 7. NAVIGATION & SCROLL EFFECTS
// ============================================

function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// 8. COUNTDOWN TIMER
// ============================================

function initializeCountdown() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    // Wedding date: May 25, 2024, 09:00
    const weddingDate = new Date(2026, 5, 20, 9, 0, 0).getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;
    
    if (distance < 0) {
        // Wedding has passed
        document.getElementById('days').textContent = '31';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
        return;
    }
    
    // Calculate time values
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Update DOM with zero-padding
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// ============================================
// 9. GUESTBOOK SYSTEM
// ============================================

function initializeGuestbook() {
    displayGuestbook();
}

function displayGuestbook() {
    const guestbookList = document.getElementById('guestbookList');
    
    if (!guestbookList) return;
    
    if (guestMessages.length === 0) {
        guestbookList.innerHTML = `
            <div class="guestbook-empty">
                <p>${currentLanguage === 'id' ? 'Belum ada pesan... Jadilah yang pertama!' : 'No messages yet... Be the first!'}</p>
            </div>
        `;
        return;
    }
    
    guestbookList.innerHTML = guestMessages.map(msg => `
        <div class="guestbook-message">
            <div class="guestbook-name">${msg.name}</div>
            <div class="guestbook-text">${msg.message}</div>
        </div>
    `).reverse().join('');
}

function addGuestMessage(name, message) {
    const newMessage = { name, message };
    guestMessages.push(newMessage);
    localStorage.setItem('guestMessages', JSON.stringify(guestMessages));
    displayGuestbook();
}

// ============================================
// 10. FORM HANDLING (RSVP)
// ============================================

function initializeFormHandling() {
    const rsvpForm = document.getElementById('rsvpForm');
    const attendanceRadios = document.querySelectorAll('input[name="attendance"]');
    const guestCountGroup = document.getElementById('guestCountGroup');
    
    if (rsvpForm) {
        // Show/hide guest count based on attendance
        if (attendanceRadios.length > 0) {
            attendanceRadios.forEach(radio => {
                radio.addEventListener('change', function() {
                    if (this.value === 'hadir') {
                        guestCountGroup.style.display = 'flex';
                    } else {
                        guestCountGroup.style.display = 'none';
                    }
                });
            });
        }
        
        // Form submission
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('guestName').value;
            const email = document.getElementById('guestEmail').value;
            const phone = document.getElementById('guestPhone').value;
            const attendance = document.querySelector('input[name="attendance"]:checked').value;
            const guestCount = document.getElementById('guestCount').value || '1';
            const message = document.getElementById('guestMessage').value;
            
            // Validate
            if (!name || !email || !phone) {
                alert(currentLanguage === 'id' ? 'Mohon isi semua field yang diperlukan' : 'Please fill all required fields');
                return;
            }
            
            // Add message to guestbook if provided
            if (message.trim()) {
                addGuestMessage(name, message);
            }
            
            // Show success message
            showSuccessMessage(rsvpForm);
            
            // Log RSVP data
            console.log('RSVP Data:', {
                name, email, phone, attendance, guestCount, message, timestamp: new Date()
            });
            
            // Send to WhatsApp (optional)
            sendWhatsAppMessage(name, attendance, phone);
            
            // Reset form
            setTimeout(() => {
                rsvpForm.reset();
                guestCountGroup.style.display = 'none';
            }, 1500);
        });
    }
}

function showSuccessMessage(form) {
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.textContent = currentLanguage === 'id' 
        ? '✓ RSVP Anda berhasil dikirim! Terima kasih atas konfirmasi Anda.' 
        : '✓ Your RSVP has been sent successfully! Thank you for confirming.';
    
    form.appendChild(successMsg);
    
    setTimeout(() => {
        successMsg.remove();
    }, 3000);
}

function sendWhatsAppMessage(name, attendance, phone) {
    const attendanceText = attendance === 'hadir' 
        ? 'akan hadir' 
        : attendance === 'tidak' 
        ? 'tidak akan hadir' 
        : 'mungkin akan hadir';
    
    const message = `Halo! Saya ${name} ${attendanceText} di acara pernikahan Ayu & Reza pada 25 Mei 2024.`;
    const encodedMessage = encodeURIComponent(message);
    
    // Optional: Uncomment to open WhatsApp
    // window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
}

// ============================================
// 11. GSAP ANIMATIONS
// ============================================

function initializeAnimations() {
    // Section fade-in animations
    document.querySelectorAll('.section').forEach((section, index) => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top 80%',
            onEnter: () => {
                animateSectionContent(section);
            }
        });
    });
    
    // Event cards animation
    document.querySelectorAll('.event-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%'
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: index * 0.1
        });
    });
    
    // Story items animation
    document.querySelectorAll('.story-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%'
            },
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
            duration: 0.8,
            delay: index * 0.15
        });
    });
    
    // Gallery items animation
    document.querySelectorAll('.gallery-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 90%'
            },
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            delay: index * 0.08
        });
    });
    
    // Parallax effect for background elements
    gsap.to('.flowers-left', {
        scrollTrigger: {
            trigger: '.cover-section',
            scrub: 1
        },
        y: 100
    });
    
    gsap.to('.flowers-right', {
        scrollTrigger: {
            trigger: '.cover-section',
            scrub: 1
        },
        y: -100
    });
}

function animateSectionContent(section) {
    const title = section.querySelector('.section-title');
    const cards = section.querySelectorAll('.event-card, .welcome-card, .story-item, .gallery-item');
    
    if (title) {
        gsap.from(title, {
            opacity: 0,
            y: 20,
            duration: 0.8
        });
    }
    
    cards.forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: 0.2 + index * 0.1
        });
    });
}

function triggerSectionAnimations() {
    initializeAnimations();
    ScrollTrigger.refresh();
}

// ============================================
// 12. SCROLL TO TOP BUTTON
// ============================================

function initializeScrollToTop() {
    // Already handled by CSS smooth scrolling
}

// ============================================
// 13. UTILITY FUNCTIONS
// ============================================

// Format phone number for WhatsApp
function formatPhoneNumber(phone) {
    // Remove non-numeric characters
    const cleaned = phone.replace(/\D/g, '');
    
    // Add country code if not present
    if (cleaned.startsWith('0')) {
        return '62' + cleaned.substring(1);
    } else if (cleaned.startsWith('62')) {
        return cleaned;
    }
    
    return '62' + cleaned;
}

// Share to WhatsApp function
function shareToWhatsApp() {
    const params = new URLSearchParams(window.location.search);
    const guestName = params.get('to') || 'Tamu Undangan';
    
    const message = `Halo! Saya telah menerima undangan pernikahan digital Ayu & Reza. Undangan ini sangat indah dan elegan! 🎉👰🤵\n\nLink: ${window.location.href}`;
    const encodedMessage = encodeURIComponent(message);
    
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
}

// Copy link to clipboard
function copyInvitationLink() {
    const link = window.location.href;
    navigator.clipboard.writeText(link).then(() => {
        alert(currentLanguage === 'id' 
            ? 'Link undangan berhasil disalin!' 
            : 'Invitation link copied!');
    });
}

// Local storage helpers
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

// Debug function
function debugInfo() {
    console.log('=== Wedding Invitation Debug Info ===');
    console.log('Current Language:', currentLanguage);
    console.log('Music Enabled:', musicEnabled);
    console.log('Guest Messages:', guestMessages);
    console.log('Wedding Config:', weddingConfig);
}

// ============================================
// 14. KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', function(event) {
    // Alt + L: Toggle Language
    if (event.altKey && event.key === 'l') {
        event.preventDefault();
        toggleLanguage();
    }
    
    // Alt + M: Toggle Music
    if (event.altKey && event.key === 'm') {
        event.preventDefault();
        const musicToggle = document.getElementById('musicToggle');
        if (musicToggle) musicToggle.click();
    }
    
    // Alt + D: Debug
    if (event.altKey && event.key === 'd') {
        event.preventDefault();
        debugInfo();
    }
});

// ============================================
// 15. RESPONSIVE BREAKPOINTS
// ============================================

function handleResponsive() {
    if (window.innerWidth <= 768) {
        // Mobile specific logic
        document.querySelector('body').classList.add('mobile');
    } else {
        document.querySelector('body').classList.remove('mobile');
    }
}

window.addEventListener('resize', handleResponsive);
window.addEventListener('load', handleResponsive);

// ============================================
// END OF MAIN.JS
// ============================================

console.log('✓ All JavaScript modules initialized successfully');
console.log('Keyboard shortcuts: Alt+L (Language), Alt+M (Music), Alt+D (Debug)');
