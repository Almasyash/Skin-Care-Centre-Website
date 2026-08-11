// ============ MOBILE MENU TOGGLE ============
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ============ NAVBAR SCROLL EFFECT ============
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// ============ BOOKING FORM HANDLING ============
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Show success message
    alert(`✅ Thank you, ${data['Your Name'] || 'Patient'}! 
    
Your appointment request has been received. 
We'll contact you shortly at ${data['Phone Number'] || 'your number'}.

📋 Service: ${data['Select Service'] || 'Not specified'}
📅 Date: ${data['Date'] || 'Not specified'}
🕐 Time: ${data['Time'] || 'Not specified'}

📍 Dr. Mugdha Mohan Skin Care Centre
West of Kotwali, Chowk, Hospital Rd, Bettiah, Bihar`);
    
    // Reset form
    this.reset();
});

// ============ SMOOTH SCROLL FOR ANCHOR LINKS ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============ REVEAL ANIMATION ON SCROLL ============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section, .service-card, .review-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============ CONSOLE WELCOME ============
console.log('%c💎 Dr. Mugdha Mohan Skin Care Centre', 'font-size: 24px; font-weight: bold; color: #2C7A7B;');
console.log('%c📍 West of Kotwali, Chowk, Hospital Rd, Bettiah, Bihar', 'font-size: 14px; color: #4A5568;');
console.log('%c📞 Call: +91 99999 99999', 'font-size: 14px; color: #4A5568;');
console.log('%c🌟 Made with ❤️ by Vibe Coder', 'font-size: 12px; color: #A0AEC0;');

console.log('✨ Website loaded successfully!');
// ============ MOBILE MENU TOGGLE ============
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ============ NAVBAR SCROLL EFFECT ============
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
    
    // Scroll to top button
    const scrollTopBtn = document.getElementById('scrollTop');
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

// ============ SCROLL TO TOP ============
document.getElementById('scrollTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============ ANIMATED COUNTER ============
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const isDecimal = target % 1 !== 0;
        const duration = 2000; // 2 seconds
        const stepTime = 16; // 60fps
        const totalSteps = duration / stepTime;
        let currentStep = 0;
        
        // Set initial value
        counter.textContent = '0';
        
        const updateCounter = () => {
            currentStep++;
            const progress = Math.min(currentStep / totalSteps, 1);
            // Ease out cubic
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentValue = easedProgress * target;
            
            if (isDecimal) {
                counter.textContent = currentValue.toFixed(1);
            } else {
                counter.textContent = Math.floor(currentValue);
            }
            
            if (currentStep < totalSteps) {
                requestAnimationFrame(updateCounter);
            } else {
                // Final value
                if (isDecimal) {
                    counter.textContent = target.toFixed(1);
                } else {
                    counter.textContent = target;
                }
            }
        };
        
        // Start animation
        requestAnimationFrame(updateCounter);
    });
}

// ============ INTERSECTION OBSERVER FOR COUNTERS ============
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            counterObserver.disconnect(); // Only run once
        }
    });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero');
if (heroSection) {
    counterObserver.observe(heroSection);
}

// ============ FAQ ACCORDION ============
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all other FAQs
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });
        
        // Toggle this FAQ
        if (isActive) {
            faqItem.classList.remove('active');
        } else {
            faqItem.classList.add('active');
        }
    });
});

// ============ BOOKING FORM ============
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    alert(`✅ Thank you, ${data['Your Name'] || 'Patient'}! 
    
Your appointment request has been received. 
We'll contact you shortly at ${data['Phone Number'] || 'your number'}.

📋 Service: ${data['Select Service'] || 'Not specified'}
📅 Date: ${data['Date'] || 'Not specified'}
🕐 Time: ${data['Time'] || 'Not specified'}

📍 Dr. Mugdha Mohan Skin Care Centre
West of Kotwali, Chowk, Hospital Rd, Bettiah, Bihar`);
    
    this.reset();
});

// ============ SMOOTH SCROLL ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============ SCROLL REVEAL ANIMATION ============
const revealObserver = new IntersectionObserver((entries) => {
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

document.querySelectorAll('section, .service-card, .review-card, .gallery-card, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
});

// ============ CONSOLE WELCOME ============
console.log('%c💎 Dr. Mugdha Mohan Skin Care Centre', 'font-size: 24px; font-weight: bold; color: #2C7A7B;');
console.log('%c📍 West of Kotwali, Chowk, Hospital Rd, Bettiah, Bihar', 'font-size: 14px; color: #4A5568;');
console.log('%c📞 Call: +91 99999 99999', 'font-size: 14px; color: #4A5568;');
console.log('%c🌟 Premium Website | 4.8⭐ | 172 Reviews', 'font-size: 14px; color: #38B2AC;');
console.log('%c🚀 Made with ❤️ by Vibe Coder', 'font-size: 12px; color: #A0AEC0;');
console.log('✨ Premium website loaded successfully!');
