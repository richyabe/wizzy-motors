// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Close mobile menu if open
            navMenu.classList.remove('show');

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Sticky header on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) { // Check if form exists on the page
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            // Get form values
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let phone = document.getElementById("phone").value.trim();
            let interest = document.getElementById("interest").value.trim();
            let message = document.getElementById("message").value.trim();

            // Your WhatsApp number (replace with your actual number)
            // Use international format without '+' or '00' prefix (e.g., 2349079108647 for Nigeria)
            let phoneNumber = "2347018586234";

            // Validate required fields
            if (!name || !email || !interest) {
                alert("Please fill in all required fields (Name, Email, Interest).");
                return;
            }

            // Build WhatsApp message
            let whatsappMessage = `*New Contact Form Submission*
👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone || 'Not provided'}
📌 Interest: ${interest}
📝 Message: ${message || 'No message provided'}`;

            // Create URL (IMPORTANT: No spaces in the URL)
            let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

            // Open WhatsApp in a new tab
            window.open(url, '_blank');
        });
    }

    // Add animation to elements when they come into view (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observe elements (Only run if the sections exist)
    const featureCards = document.querySelectorAll('.feature-card');
    const carCards = document.querySelectorAll('.car-card');
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    featureCards.forEach(el => observer.observe(el));
    carCards.forEach(el => observer.observe(el));
    testimonialCards.forEach(el => observer.observe(el));
});





