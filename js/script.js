// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    darkModeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Hide intro and show main content after 3 seconds
    setTimeout(() => {
        const intro = document.getElementById('intro');
        const mainContent = document.getElementById('main-content');

        if (intro && mainContent) {
            intro.style.display = 'none';
            mainContent.classList.remove('hidden');
        } else {
            console.error('Elements not found!');
        }
    }, 3000);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Portfolio Loading
const portfolioItems = [
    { src: 'images/portfolio-1.jpg', alt: 'Editorial Styling' },
    { src: 'images/portfolio-2.jpg', alt: 'Red Carpet Look' },
    { src: 'images/portfolio-3.jpg', alt: 'Brand Campaign' }
];

const gallery = document.getElementById('gallery');
portfolioItems.forEach(item => {
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;
    gallery.appendChild(img);
});

// Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
    contactForm.reset();
});