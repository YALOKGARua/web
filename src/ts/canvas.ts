import { Particle } from './types.js';
import { getRandomNumber } from './utils.js';

export class ParticleSystem {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private particles: Particle[];
    private animationFrame: number;
    private lastTime: number;
    private fps: number;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        const context = canvas.getContext('2d', { alpha: false });
        if (!context) throw new Error('Could not get canvas context');
        this.ctx = context;
        this.particles = [];
        this.animationFrame = 0;
        this.lastTime = 0;
        this.fps = 30; // Limit to 30 FPS
        this.init();
    }

    private init(): void {
        this.resizeCanvas();
        this.createParticles();
        this.handleResize = this.handleResize.bind(this);
        window.addEventListener('resize', this.handleResize);
        this.animate(0);
    }

    private resizeCanvas(): void {
        const dpr = window.devicePixelRatio || 1;
        const rect = this.canvas.getBoundingClientRect();
        
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        
        this.ctx.scale(dpr, dpr);
        this.canvas.style.width = `${rect.width}px`;
        this.canvas.style.height = `${rect.height}px`;
    }

    private createParticles(): void {
        const particleCount = window.innerWidth < 768 ? 40 : 60; // Reduce particles on mobile
        this.particles = Array.from({ length: particleCount }, () => ({
            x: getRandomNumber(0, this.canvas.width),
            y: getRandomNumber(0, this.canvas.height),
            size: getRandomNumber(2, 5),
            speedX: getRandomNumber(-0.2, 0.2),
            speedY: getRandomNumber(-0.2, 0.2),
            opacity: getRandomNumber(0.3, 0.6)
        }));
    }

    private handleResize(): void {
        this.resizeCanvas();
        const width = this.canvas.width;
        const height = this.canvas.height;
        this.particles.forEach(particle => {
            particle.x = getRandomNumber(0, width);
            particle.y = getRandomNumber(0, height);
        });
    }

    private drawParticle(particle: Particle): void {
        const { x, y, size, opacity } = particle;
        this.ctx.fillStyle = `rgba(74, 106, 136, ${opacity})`;
        this.ctx.beginPath();
        this.ctx.arc(x, y, size, 0, Math.PI * 2);
        this.ctx.fill();
    }

    private drawConnections(): void {
        const maxDistance = 120;
        const maxDistanceSquared = maxDistance * maxDistance;
        
        for (let i = 0; i < this.particles.length; i++) {
            const p1 = this.particles[i];
            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distanceSquared = dx * dx + dy * dy;

                if (distanceSquared < maxDistanceSquared) {
                    const distance = Math.sqrt(distanceSquared);
                    this.ctx.strokeStyle = `rgba(74, 106, 136, ${1 - distance / maxDistance})`;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            }
        }
    }

    private updateParticles(): void {
        const width = this.canvas.width;
        const height = this.canvas.height;
        
        this.particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            if (particle.x > width) particle.x = 0;
            else if (particle.x < 0) particle.x = width;
            
            if (particle.y > height) particle.y = 0;
            else if (particle.y < 0) particle.y = height;
        });
    }

    private animate(timestamp: number): void {
        const elapsed = timestamp - this.lastTime;
        
        if (elapsed > 1000 / this.fps) { // Throttle to target FPS
            this.ctx.fillStyle = 'rgb(26, 42, 58)';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            this.updateParticles();
            this.particles.forEach(particle => this.drawParticle(particle));
            this.drawConnections();
            
            this.lastTime = timestamp;
        }

        this.animationFrame = requestAnimationFrame((t) => this.animate(t));
    }

    public destroy(): void {
        cancelAnimationFrame(this.animationFrame);
        window.removeEventListener('resize', this.handleResize);
    }
} 