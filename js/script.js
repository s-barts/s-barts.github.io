// Hide intro and show main content after 3 seconds
setTimeout(() => {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('main-content').classList.remove('hidden');
}, 3000);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});