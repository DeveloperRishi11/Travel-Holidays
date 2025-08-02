// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
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
    
    // Initialize statistics counter
    animateStats();
            
    // Initializing testimonial slider
    initTestimonialSlider();
            
    // Setting minimum date for booking form
    const today = new Date().toISOString().split('T')[0];
    const checkInInput = document.getElementById('checkIn');
    const checkOutInput = document.getElementById('checkOut');
    
    if (checkInInput) checkInInput.setAttribute('min', today);
    if (checkOutInput) checkOutInput.setAttribute('min', today);
});

// Explore destinations button function
function exploreDestinations() {
    const destinationsSection = document.getElementById('destinations');
    if (destinationsSection) {
        destinationsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Adding subtle animation to the button
        const btn = document.querySelector('.cta-btn');
        if (btn) {
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 150);
        }
    }
}

function openBookingForm() {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
        bookingSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Shows destination details function
function showDetails(destination) {
    const destinations = {
        bhopal: {
            name: 'Bhopal',
            description: 'Experience the charm of Madhya Pradesh\'s capital with its beautiful lakes, historic monuments, and rich cultural heritage.',
            highlights: ['Upper Lake & Lower Lake', 'Bhojpur Temple', 'Sanchi Stupa', 'Van Vihar National Park'],
            price: '₹15,000',
            duration: '3 Days / 2 Nights'
        },
        tokyo: {
            name: 'Tokyo',
            description: 'Discover the perfect blend of traditional culture and cutting-edge technology in Japan\'s vibrant capital.',
            highlights: ['Tokyo Tower', 'Sensoji Temple', 'Shibuya Crossing', 'Mount Fuji Day Trip'],
            price: '₹85,000',
            duration: '7 Days / 6 Nights'
        },
        bali: {
            name: 'Bali',
            description: 'Relax in this tropical paradise with stunning beaches, ancient temples, and lush rice terraces.',
            highlights: ['Ubud Rice Terraces', 'Tanah Lot Temple', 'Beautiful Beaches', 'Traditional Spa Treatments'],
            price: '₹45,000',
            duration: '5 Days / 4 Nights'
        },
        paris: {
            name: 'Paris',
            description: 'Experience the romance of Paris with its iconic landmarks, world-class museums, and charming cafes.',
            highlights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral', 'Seine River Cruise'],
            price: '₹95,000',
            duration: '6 Days / 5 Nights'
        },
        maldives: {
            name: 'Maldives',
            description: 'Escape to paradise with crystal-clear waters, overwater bungalows, and pristine coral reefs.',
            highlights: ['Water Villas', 'Snorkeling & Diving', 'Sunset Cruises', 'Spa Treatments'],
            price: '₹75,000',
            duration: '4 Days / 3 Nights'
        },
        dubai: {
            name: 'Dubai',
            description: 'Experience luxury and adventure in this modern metropolis with its iconic skyline and desert landscapes.',
            highlights: ['Burj Khalifa', 'Desert Safari', 'Dubai Mall', 'Palm Jumeirah'],
            price: '₹55,000',
            duration: '5 Days / 4 Nights'
        }
    };
    
    const dest = destinations[destination];
    if (dest) {
        alert(`🌟 ${dest.name} - ${dest.price}\n📅 ${dest.duration}\n\n${dest.description}\n\n✨ Highlights:\n${dest.highlights.map(h => `• ${h}`).join('\n')}\n\n📞 Contact Meenal Bansod for booking!\n📧 info@travelholidays.com\n📱 +91 7860096674`);
    }
}

// Floating animation to hero section
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

// Click effect to destination cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.destination-card');
    
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('div');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
                    
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(41, 128, 185, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.width = size + 'px';
            ripple.style.height = size + 'px';
                    
            this.style.position = 'relative';
            this.appendChild(ripple);
                    
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Gallery modal functions
function openGalleryModal(imageSrc) {
    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');
    if (modal && modalImage) {
        modalImage.src = imageSrc;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    const galleryModal = document.getElementById('galleryModal');
    const bookingModal = document.getElementById('bookingModal');
    const loginModal = document.getElementById('loginModal');
    
    if (e.target === galleryModal) {
        closeModal('galleryModal');
    }
    if (e.target === bookingModal) {
        closeModal('bookingModal');
    }
    if (e.target === loginModal) {
        closeModal('loginModal');
    }
});

// Testimonial slider functionality
let currentTestimonial = 0;

function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    
    if (testimonials.length > 0 && testimonialDots.length > 0) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonialDots.forEach(dot => dot.classList.remove('active'));
        
        if (testimonials[index]) testimonials[index].classList.add('active');
        if (testimonialDots[index]) testimonialDots[index].classList.add('active');
        currentTestimonial = index;
    }
}

function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    if (testimonials.length > 0) {
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }
}

// Statistics animation
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5
    };

    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateNumber(entry.target, target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
}

function animateNumber(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (target === 98 ? '%' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (target === 98 ? '%' : '');
        }
    }, 30);
}

// Enhanced booking form submission
function submitBooking(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const loading = submitBtn.querySelector('.loading');
    
    // Show loading state
    if (btnText && loading) {
        btnText.style.display = 'none';
        loading.style.display = 'inline-block';
        submitBtn.disabled = true;
    }
    
    // Get form data
    const formData = new FormData(form);
    const bookingData = {
        name: `${formData.get('firstName')} ${formData.get('lastName')}`,
        email: formData.get('email'),
        phone: formData.get('phone'),
        destination: formData.get('destination'),
        travelers: formData.get('travelers'),
        checkIn: formData.get('checkIn'),
        checkOut: formData.get('checkOut'),
        message: formData.get('message')
    };
    
    // Simulate booking process
    setTimeout(() => {
        // Reset button state
        if (btnText && loading) {
            btnText.style.display = 'inline';
            loading.style.display = 'none';
            submitBtn.disabled = false;
        }
        
        // Show confirmation
        const confirmationText = `
Thank you, ${bookingData.name}!

Your booking request has been submitted successfully. Our Guide will Call You Shortly

📍 Destination: ${bookingData.destination.charAt(0).toUpperCase() + bookingData.destination.slice(1)}
👥 Travelers: ${bookingData.travelers}
📅 Check-in: ${bookingData.checkIn}
📅 Check-out: ${bookingData.checkOut}

We will contact you at ${bookingData.email} or ${bookingData.phone} within 24 hours to confirm your booking.

Booking ID: TH${Date.now().toString().slice(-6)}
        `;
        
        const confirmationElement = document.getElementById('bookingConfirmation');
        if (confirmationElement) {
            confirmationElement.innerText = confirmationText;
            const bookingModal = document.getElementById('bookingModal');
            if (bookingModal) {
                bookingModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }
        
        // Reset form
        form.reset();
        
        // Send email notification (in real implementation)
        console.log('Booking submitted:', bookingData);
    }, 2000);
}

// Login Modal Functions
function openLoginModal() {
    const loginModal = document.getElementById('loginModal');
    if (loginModal) {
        loginModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function submitLogin(event) {
    event.preventDefault();
    
    const form = event.target;
    const loginBtn = form.querySelector('.login-btn');
    const btnText = loginBtn.querySelector('.login-btn-text');
    const loading = loginBtn.querySelector('.loading');
    
    // Show loading state
    if (btnText && loading) {
        btnText.style.display = 'none';
        loading.style.display = 'inline-block';
        loginBtn.disabled = true;
    }
    
    const formData = new FormData(form);
    const loginData = {
        email: formData.get('loginEmail'),
        password: formData.get('loginPassword')
    };
    
    // Simulate login process
    setTimeout(() => {
        // Reset button state
        if (btnText && loading) {
            btnText.style.display = 'inline';
            loading.style.display = 'none';
            loginBtn.disabled = false;
        }
        
        // For demo purposes, accept any email/password
        if (loginData.email && loginData.password) {
            alert(`Welcome back! You have successfully logged in as ${loginData.email}`);
            closeModal('loginModal');
            form.reset();
        } else {
            alert('Please enter both email and password.');
        }
        
        console.log('Login attempt:', loginData);
    }, 1500);
}

function showForgotPassword() {
    alert('Please contact us at info@travelholidays.com or +91 7860096674 to reset your password.');
}

function showSignup() {
    alert('Sign up functionality coming soon! Please contact us directly for new account creation.');
}

// Date validation for booking form
document.addEventListener('DOMContentLoaded', function() {
    const checkInDate = document.getElementById('checkIn');
    const checkOutDate = document.getElementById('checkOut');
    
    if (checkInDate && checkOutDate) {
        checkInDate.addEventListener('change', function() {
            const checkIn = new Date(this.value);
            const nextDay = new Date(checkIn);
            nextDay.setDate(nextDay.getDate() + 1);
            checkOutDate.setAttribute('min', nextDay.toISOString().split('T')[0]);
            
            if (checkOutDate.value && new Date(checkOutDate.value) <= checkIn) {
                checkOutDate.value = '';
            }
        });
    }
});

// Enhanced scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.gallery-item, .testimonial, .stat-item');
    
    const animationObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `all 0.6s ease ${index * 0.1}s`;
        animationObserver.observe(element);
    });
});

// Keyboard navigation for modals
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal('galleryModal');
        closeModal('bookingModal');
        closeModal('loginModal');
    }
});

// Mobile menu toggle (for future enhancement)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('mobile-active');
    }
}

// Smooth scrolling polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const links = document.querySelectorAll('.nav-menu a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Performance optimization: Lazy load images
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                }
            });
        });

        const lazyImages = document.querySelectorAll('img.lazy');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
});

// Additional utility functions for enhanced user experience
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show scroll to top button when user scrolls down
document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #2980b9;
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    scrollTopBtn.addEventListener('click', scrollToTop);
    document.body.appendChild(scrollTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });
});

// Form validation enhancement
function validateBookingForm(formData) {
    const errors = [];
    
    if (!formData.get('firstName')) errors.push('First name is required');
    if (!formData.get('lastName')) errors.push('Last name is required');
    if (!formData.get('email')) errors.push('Email is required');
    if (!formData.get('phone')) errors.push('Phone number is required');
    if (!formData.get('destination')) errors.push('Destination is required');
    if (!formData.get('travelers')) errors.push('Number of travelers is required');
    if (!formData.get('checkIn')) errors.push('Check-in date is required');
    if (!formData.get('checkOut')) errors.push('Check-out date is required');
    
    const checkIn = new Date(formData.get('checkIn'));
    const checkOut = new Date(formData.get('checkOut'));
    
    if (checkIn >= checkOut) {
        errors.push('Check-out date must be after check-in date');
    }
    
    return errors;
}

// Console welcome message
console.log(`
🌍 Welcome to Travel Holidays Website!
✈️ Developed for Meenal Bansod
🚀 All systems ready for amazing travel experiences!
📧 Contact: info@travelholidays.com
📱 Phone: +91 7860096674
`);