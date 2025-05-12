export function debounce(func, delay) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => func(...args), delay);
    };
}
export function validateName(name) {
    return name.length >= 1 && name.length <= 32;
}
export function validatePhone(phone) {
    return /^\+380\d{9}$/.test(phone);
}
export function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
export function createProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = '_z0x1';
    document.body.appendChild(progressBar);
    return progressBar;
}
export function updateProgressBar(progressBar) {
    const scrollPosition = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (scrollPosition / totalHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
}
export function handleScrollTopButton(scrollPosition) {
    const scrollTopButton = document.getElementById('_scroll-top');
    if (scrollTopButton) {
        scrollTopButton.style.display = scrollPosition > 300 ? 'block' : 'none';
    }
}
export function updateVisitCounter(translations, currentLang) {
    const visits = parseInt(localStorage.getItem('_visits') || '0', 10) + 1;
    localStorage.setItem('_visits', visits.toString());
    const counter = document.getElementById('_visit-counter');
    if (counter) {
        counter.textContent = `${translations[currentLang]['visits']}: ${visits}`;
    }
}
