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

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
});

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

window.addEventListener('load', () => {
    const heading = document.querySelector('.hero h1');
    const originalText = heading.textContent;
    setTimeout(() => {
        typeWriter(heading, originalText, 50);
    }, 1500);
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    if (!data.name || !data.email || !data.phone || !data.subject || !data.message) {
        alert('Mohon lengkapi semua field yang diperlukan.');
        return;
    }
    
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

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.gallery-item, .contact-info, .contact-form');
    animatedElements.forEach(el => observer.observe(el));
});

document.addEventListener('click', function(e) {
    const mobileNav = document.getElementById('mobileNav');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');
    
    if (!nav.contains(e.target) && mobileNav.classList.contains('active')) {
        closeMobileNav();
    }
});

document.querySelector('.whatsapp-float').addEventListener('click', function(e) {
    console.log('WhatsApp button clicked');
});

let lastScrollTop = 0;
const whatsappButton = document.querySelector('.whatsapp-float');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 300) {
        whatsappButton.style.opacity = '0.7';
    } else {
        whatsappButton.style.opacity = '1';
    }
    lastScrollTop = scrollTop;
});