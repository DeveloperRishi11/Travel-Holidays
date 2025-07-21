// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Adding scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Animate destination cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const cards = document.querySelectorAll('.destination-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });
});

// Explore destinations button function
function exploreDestinations() {
    const destinationsSection = document.getElementById('destinations');
    destinationsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    
    //  adding subtle animation to the button
    const btn = document.querySelector('.cta-btn');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = 'scale(1)';
    }, 150);
}

// Shows destination details function
function showDetails(destination) {
    const destinations = {
        paris: {
            name: 'Paris',
            description: 'Experience the romance of Paris with its iconic Eiffel Tower, charming cafes, and world-class museums.',
            highlights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral', 'Seine River Cruise']
        },
        tokyo: {
            name: 'Tokyo',
            description: 'Discover the perfect blend of traditional culture and cutting-edge technology in Japan\'s vibrant capital.',
            highlights: ['Tokyo Tower', 'Sensoji Temple', 'Shibuya Crossing', 'Mount Fuji Day Trip']
        },
        bali: {
            name: 'Bali',
            description: 'Relax in this tropical paradise with stunning beaches, ancient temples, and lush rice terraces.',
            highlights: ['Ubud Rice Terraces', 'Tanah Lot Temple', 'Beautiful Beaches', 'Traditional Spa Treatments']
        }
    };
    
    const dest = destinations[destination];
    if (dest) {
        alert(`🌟 ${dest.name}\n\n${dest.description}\n\n✨ Highlights:\n${dest.highlights.map(h => `• ${h}`).join('\n')}\n\nContact Meenal Bansod for booking!`);
    }
}

//floating animation to hero section
document.addEventListener('DOMContentLoaded', function() {
    const heroContent = document.querySelector('.hero-content');
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateHero() {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const moveX = (mouseX - centerX) * 0.01;
        const moveY = (mouseY - centerY) * 0.01;
        
        if (heroContent) {
            heroContent.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
        
        requestAnimationFrame(animateHero);
    }
    
    animateHero();
});

// click effect to destination cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.destination-card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(41, 128, 185, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '100px';
            ripple.style.height = '100px';
            ripple.style.marginLeft = '-50px';
            ripple.style.marginTop = '-50px';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS animation for ripple effect
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);