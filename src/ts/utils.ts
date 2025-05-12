import { LanguagePack } from './types.js';

export function debounce<T extends (...args: any[]) => void>(
    func: T,
    delay: number
): (...args: Parameters<T>) => void {
    let timeoutId: number | undefined;
    
    return (...args: Parameters<T>) => {
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => func(...args), delay);
    };
}

export function validateName(name: string): boolean {
    return name.length >= 1 && name.length <= 32;
}

export function validatePhone(phone: string): boolean {
    return /^\+380\d{9}$/.test(phone);
}

export function getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

export function createProgressBar(): HTMLDivElement {
    const progressBar = document.createElement('div');
    progressBar.className = '_z0x1';
    document.body.appendChild(progressBar);
    return progressBar;
}

export function updateProgressBar(progressBar: HTMLDivElement): void {
    const scrollPosition = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (scrollPosition / totalHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
}

export function handleScrollTopButton(scrollPosition: number): void {
    const scrollTopButton = document.getElementById('_scroll-top');
    if (scrollTopButton) {
        scrollTopButton.style.display = scrollPosition > 300 ? 'block' : 'none';
    }
}

export function updateVisitCounter(translations: LanguagePack, currentLang: string): void {
    const visits = parseInt(localStorage.getItem('_visits') || '0', 10) + 1;
    localStorage.setItem('_visits', visits.toString());
    
    const counter = document.getElementById('_visit-counter');
    if (counter) {
        counter.textContent = `${translations[currentLang]['visits']}: ${visits}`;
    }
} 