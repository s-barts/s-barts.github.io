class CurtainManager {
    constructor() {
        this.curtain = document.querySelector('.curtain');
        this.mainContent = document.querySelector('.content-wrapper');
        this.gridLines = document.querySelectorAll('.grid-line');
        this.init();
    }

    init() {
        this.animateGridLines();
        this.sequenceTextAnimations();
        this.setExitTriggers();
    }

    animateGridLines() {
        this.gridLines.forEach((line, index) => {
            line.style.animationDelay = `${index * 0.2}s`;
        });
    }

    sequenceTextAnimations() {
        const animationSequence = [
            { element: '.brand-name', delay: 800 },
            { element: '.tagline', delay: 1200 }
        ];

        animationSequence.forEach(({ element, delay }) => {
            setTimeout(() => {
                const el = document.querySelector(element);
                el.style.animationPlayState = 'running';
            }, delay);
        });
    }

    setExitTriggers() {
        // Automatic exit after 3s
        setTimeout(() => this.hideCurtain(), 3000);
        
        // Immediate exit on scroll
        window.addEventListener('wheel', () => this.hideCurtain(), { once: true });
        
        // Mobile touch support
        window.addEventListener('touchstart', () => this.hideCurtain(), { once: true });
    }

    hideCurtain() {
        this.curtain.dataset.state = 'hidden';
        this.curtain.addEventListener('transitionend', () => {
            this.curtain.remove();
            this.mainContent.classList.add('visible');
        }, { once: true });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new CurtainManager();
});