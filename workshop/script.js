// === Intersection Observer for Animations ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Stagger children animations
            const children = entry.target.querySelectorAll('.structure-item, .rule-card');
            children.forEach((child, index) => {
                child.style.transitionDelay = `${index * 0.1}s`;
                child.classList.add('visible');
            });
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// === Smooth scroll for anchor links ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// === Navbar background on scroll ===
const navbar = document.querySelector('.navbar');
const scrollHint = document.querySelector('.hero-scroll-hint');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 10, 11, 0.95)';
    } else {
        navbar.style.background = 'linear-gradient(to bottom, rgba(10, 10, 11, 1), transparent)';
    }
    
    // Hide scroll hint after scrolling past hero
    if (scrollHint) {
        if (currentScroll > window.innerHeight * 0.3) {
            scrollHint.style.opacity = '0';
            scrollHint.style.pointerEvents = 'none';
        } else {
            scrollHint.style.opacity = '1';
            scrollHint.style.pointerEvents = 'auto';
        }
    }
    
    lastScroll = currentScroll;
});

// === Demo preview hover effect ===
const demoPreview = document.querySelector('.demo-preview');
if (demoPreview) {
    demoPreview.addEventListener('mousemove', (e) => {
        const rect = demoPreview.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        demoPreview.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    
    demoPreview.addEventListener('mouseleave', () => {
        demoPreview.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
}

// === Floating cards parallax ===
const floatingCards = document.querySelectorAll('.floating-card');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    floatingCards.forEach((card, index) => {
        const speed = (index + 1) * 15;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        card.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// === Add visible class to structure items on load ===
document.addEventListener('DOMContentLoaded', () => {
    // Initial animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// === Console Easter Egg ===
console.log('%c◆ 2035 Press Release Study Programme', 'font-size: 20px; color: #d4a853; font-family: Georgia, serif;');
console.log('%cWrite the future. Then build it.', 'font-size: 12px; color: #a8a8a0; font-style: italic;');

