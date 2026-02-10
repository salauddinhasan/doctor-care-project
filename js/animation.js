const animation = ScrollReveal({
    distance: '30px',
    duration: 1500,
    delay: 400,
    reset: true
})

animation.reveal('.hero-content, .hero-image, service-content, .service-content, .about-section, .contact-image, .contact-section, .footer-container', {
    delay: 200,
    origin: 'bottom',
})

animation.reveal('.stats-section', {
    delay: 300,
    origin: 'right',
})