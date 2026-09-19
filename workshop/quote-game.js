// === Quote Guessing Game Logic ===

let currentQuote = 0;

function startGame() {
    document.getElementById('intro').classList.remove('active');
    document.getElementById('quote1').classList.add('active');
    currentQuote = 1;
}

function revealQuote(quoteNumber) {
    const screen = document.getElementById(`quote${quoteNumber}`);
    const questionPhase = screen.querySelector('.phase-question');
    const revealPhase = screen.querySelector('.phase-reveal');
    
    // Hide question, show reveal
    questionPhase.classList.remove('active');
    revealPhase.classList.add('active');
    
    // Scroll to top of screen
    screen.scrollTo({ top: 0, behavior: 'smooth' });
}

function nextQuote(nextNumber) {
    const currentScreen = document.getElementById(`quote${nextNumber - 1}`);
    const nextScreen = document.getElementById(`quote${nextNumber}`);
    
    currentScreen.classList.remove('active');
    nextScreen.classList.add('active');
    
    // Reset the question phase for if they replay
    const questionPhase = nextScreen.querySelector('.phase-question');
    const revealPhase = nextScreen.querySelector('.phase-reveal');
    
    if (questionPhase && revealPhase) {
        questionPhase.classList.add('active');
        revealPhase.classList.remove('active');
    }
    
    currentQuote = nextNumber;
}

function showConclusion() {
    document.getElementById('quote3').classList.remove('active');
    document.getElementById('conclusion').classList.add('active');
}

function restartGame() {
    // Hide conclusion
    document.getElementById('conclusion').classList.remove('active');
    
    // Reset all quotes to question phase
    document.querySelectorAll('.quote-screen').forEach(screen => {
        screen.classList.remove('active');
        const questionPhase = screen.querySelector('.phase-question');
        const revealPhase = screen.querySelector('.phase-reveal');
        if (questionPhase) questionPhase.classList.add('active');
        if (revealPhase) revealPhase.classList.remove('active');
    });
    
    // Show intro
    document.getElementById('intro').classList.add('active');
    currentQuote = 0;
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        if (currentQuote === 0) {
            startGame();
        }
    }
    
    if (e.key === 'Escape') {
        restartGame();
    }
});

// Add some visual flair on load
document.addEventListener('DOMContentLoaded', () => {
    // Animate intro elements
    const introElements = document.querySelectorAll('.intro-content > *');
    introElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.transitionDelay = `${index * 0.1}s`;
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });
});

// Console Easter Egg
console.log('%c◆ The 10-Year Illusion', 'font-size: 20px; color: #d4a853; font-family: Georgia, serif;');
console.log('%cTech moves fast. Society moves slow.', 'font-size: 12px; color: #a8a8a0; font-style: italic;');

