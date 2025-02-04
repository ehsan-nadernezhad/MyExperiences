document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuClose = document.getElementById('menu-close');

    // Open menu
    menuToggle.addEventListener('click', () => {
        menu.classList.remove('hidden');
    });

    // Close menu
    menuClose.addEventListener('click', () => {
        menu.classList.add('hidden');
    });

    // Close menu when clicking outside of it
    window.addEventListener('click', (e) => {
        if (e.target.id !== 'menu-toggle' && !menu.contains(e.target) && !menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
        }
    });

    // Form validation
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            feedback.textContent = "All fields are required.";
            feedback.classList.remove('hidden');
            feedback.classList.add('text-red');
        } else {
            feedback.textContent = "Your message has been sent!";
            feedback.classList.remove('hidden');
            feedback.classList.remove('text-red');
            feedback.classList.add('text-green');
        }
    });
});
