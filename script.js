// Enhanced script.js

// Smooth scroll behavior
const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
};

// Scroll animations
const elements = document.querySelectorAll('.animate');
elements.forEach((el) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });
    observer.observe(el);
});

// Dark mode toggle
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

// Form validation
const validateForm = () => {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your validation logic here
        alert('Form validated!');
    });
};

validateForm();

// Improved mobile menu functionality
const mobileMenuToggle = () => {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
};

document.getElementById('mobileMenuButton').addEventListener('click', mobileMenuToggle);