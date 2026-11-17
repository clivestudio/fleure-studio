
// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
    '.hero-content, .hero-image, .about-image, .about-content, .section-heading, .product-card, .contact'
);

revealElements.forEach((element) => {
    element.classList.add('reveal');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach((element) => {
    observer.observe(element);
});


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector('.navbar');

if (navbar) {
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                navbar.classList.toggle('scrolled', window.scrollY > 50);
                ticking = false;
            });

            ticking = true;
        }
    }, { passive: true });
}


// =========================
// PRODUCT CARD INTERACTION
// =========================

const productCards = document.querySelectorAll('.product-card');

productCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
});


// =========================
// AUTOMATIC COPYRIGHT YEAR
// =========================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// =========================
// HEADER HEIGHT (untuk scroll offset)
// =========================

const header = document.querySelector('header');

if (header) {
    const setHeaderHeight = () => {
        document.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px');
    };

    setHeaderHeight();
    new ResizeObserver(setHeaderHeight).observe(header);
}