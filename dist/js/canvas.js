import { getRandomNumber } from './utils.js';
export class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        const context = canvas.getContext('2d');
        if (!context)
            throw new Error('Could not get canvas context');
        this.ctx = context;
        this.particles = [];
        this.animationFrame = 0;
        this.init();
    }
    init() {
        this.resizeCanvas();
        this.createParticles();
        window.addEventListener('resize', () => this.handleResize());
        this.animate();
    }
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    createParticles() {
        this.particles = Array.from({ length: 100 }, () => ({
            x: getRandomNumber(0, this.canvas.width),
            y: getRandomNumber(0, this.canvas.height),
            size: getRandomNumber(2, 7),
            speedX: getRandomNumber(-0.25, 0.25),
            speedY: getRandomNumber(-0.25, 0.25),
            opacity: getRandomNumber(0.3, 0.8)
        }));
    }
    handleResize() {
        this.resizeCanvas();
        this.particles.forEach(particle => {
            particle.x = getRandomNumber(0, this.canvas.width);
            particle.y = getRandomNumber(0, this.canvas.height);
        });
    }
    drawParticle(particle) {
        this.ctx.fillStyle = `rgba(74, 106, 136, ${particle.opacity})`;
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        this.ctx.fill();
    }
    drawConnections() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 150) {
                    this.ctx.strokeStyle = `rgba(74, 106, 136, ${1 - distance / 150})`;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }
    updateParticles() {
        this.particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            if (particle.x > this.canvas.width || particle.x < 0)
                particle.speedX *= -1;
            if (particle.y > this.canvas.height || particle.y < 0)
                particle.speedY *= -1;
        });
    }
    animate() {
        this.ctx.fillStyle = 'rgba(26, 42, 58, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.updateParticles();
        this.particles.forEach(particle => this.drawParticle(particle));
        this.drawConnections();
        this.animationFrame = requestAnimationFrame(() => this.animate());
    }
    destroy() {
        cancelAnimationFrame(this.animationFrame);
        window.removeEventListener('resize', () => this.handleResize());
    }
}
