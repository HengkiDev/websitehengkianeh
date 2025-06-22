// Mobile Navigation Toggle
function toggleMobileNav() {
    const burger = document.querySelector('.burger');
    const mobileNav = document.getElementById('mobileNav');
    
    burger.classList.toggle('active');
    mobileNav.classList.toggle('active');
}

function closeMobileNav() {
    const burger = document.querySelector('.burger');
    const mobileNav = document.getElementById('mobileNav');
    
    burger.classList.remove('active');
    mobileNav.classList.remove('active');
}

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(44, 62, 80, 0.98)';
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.background = 'rgba(44, 62, 80, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add typing effect to the main heading
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect after page load
window.addEventListener('load', () => {
    const heading = document.querySelector('.hero h1');
    const originalText = heading.textContent;
    setTimeout(() => {
        typeWriter(heading, originalText, 50);
    }, 1500);
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Simple form validation
    if (!data.name || !data.email || !data.phone || !data.subject || !data.message) {
        alert('Mohon lengkapi semua field yang diperlukan.');
        return;
    }
    
    // Simulate form submission
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Mengirim...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Terima kasih! Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
        }
    });
}, observerOptions);

// Observe feature cards and gallery items
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .gallery-item, .contact-info, .contact-form');
    animatedElements.forEach(el => observer.observe(el));
});

// Close mobile nav when clicking outside
document.addEventListener('click', function(e) {
    const mobileNav = document.getElementById('mobileNav');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');
    
    if (!nav.contains(e.target) && mobileNav.classList.contains('active')) {
        closeMobileNav();
    }
});

// Optional: Add click tracking or additional functionality
document.querySelector('.whatsapp-float').addEventListener('click', function(e) {
    // Analytics tracking could go here
    console.log('WhatsApp button clicked');
});

// Optional: Hide/show button based on scroll
let lastScrollTop = 0;
const whatsappButton = document.querySelector('.whatsapp-float');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Show button when scrolling up, hide when scrolling down fast
    if (scrollTop > lastScrollTop && scrollTop > 300) {
        // Scrolling down
        whatsappButton.style.opacity = '0.7';
    } else {
        // Scrolling up
        whatsappButton.style.opacity = '1';
    }
    lastScrollTop = scrollTop;
});