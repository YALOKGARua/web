import { translations } from './translations.js';
import { ParticleSystem } from './canvas.js';
import { debounce, validateName, validatePhone, createProgressBar, updateProgressBar, handleScrollTopButton, updateVisitCounter } from './utils.js';
class BNBSolution {
    constructor() {
        this.elements = {
            menuButton: document.querySelector('._p0o9i8__t3r2e1'),
            menuList: document.querySelector('._p0o9i8__m2n1b0'),
            reviewsContainer: document.querySelector('._x3c4v5__cycle'),
            reviewsPath: document.querySelector('._x3c4v5__path'),
            reviewNodes: document.querySelectorAll('._x3c4v5__node'),
            canvas: document.getElementById('_z9q8w7'),
            progressBar: createProgressBar()
        };
        this.currentLang = localStorage.getItem('_l9k0') || 'uk';
        this.currentReviewIndex = 0;
        this.sliderInterval = 0;
        this.init();
    }
    init() {
        this.initLanguage();
        this.initTheme();
        this.initNavigation();
        this.initReviewSlider();
        this.initModals();
        this.initForms();
        this.initCanvas();
        this.initScrollHandling();
        this.initCounters();
        this.updateVisitCounter();
    }
    initLanguage() {
        const langButton = document.getElementById('_m4n3b2');
        if (langButton) {
            langButton.textContent = this.currentLang === 'en' ? 'EN' : 'UA';
            langButton.addEventListener('click', () => this.toggleLanguage());
        }
        this.updateLanguage();
    }
    toggleLanguage() {
        this.currentLang = this.currentLang === 'en' ? 'uk' : 'en';
        const langButton = document.getElementById('_m4n3b2');
        if (langButton) {
            langButton.textContent = this.currentLang === 'en' ? 'EN' : 'UA';
        }
        this.updateLanguage();
        localStorage.setItem('_l9k0', this.currentLang);
        this.updateVisitCounter();
    }
    updateLanguage() {
        document.querySelectorAll('[data-_v1]').forEach(element => {
            const key = element.getAttribute('data-_v1') || '';
            if (translations[this.currentLang][key]) {
                element.innerHTML = translations[this.currentLang][key];
            }
        });
        document.documentElement.lang = this.currentLang;
    }
    initTheme() {
        const savedTheme = localStorage.getItem('_t7') || '_d9';
        document.documentElement.setAttribute('data-_t7', savedTheme);
        const themeToggle = document.getElementById('_theme-toggle');
        themeToggle?.addEventListener('click', () => {
            const newTheme = document.documentElement.getAttribute('data-_t7') === '_l8' ? '_d9' : '_l8';
            document.documentElement.setAttribute('data-_t7', newTheme);
            localStorage.setItem('_t7', newTheme);
        });
    }
    initNavigation() {
        this.elements.menuButton?.addEventListener('click', () => {
            this.elements.menuList?.classList.toggle('_act9');
        });
        window.addEventListener('resize', debounce(() => {
            if (window.innerWidth > 768) {
                this.elements.menuList?.classList.remove('_act9');
            }
        }, 100));
        document.querySelectorAll('._p0o9i8__link, ._b8n7m6[href^="#"]').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const targetId = link.getAttribute('href')?.substring(1);
                const target = targetId ? document.getElementById(targetId) : null;
                if (target)
                    target.scrollIntoView({ behavior: 'smooth' });
            });
        });
    }
    initReviewSlider() {
        if (!this.elements.reviewsContainer || !this.elements.reviewsPath || !this.elements.reviewNodes.length)
            return;
        const updateSliderPosition = debounce(() => {
            if (this.elements.reviewsPath && this.elements.reviewsContainer) {
                this.elements.reviewsPath.style.transform =
                    `translateX(${this.currentReviewIndex * -this.elements.reviewsContainer.clientWidth}px)`;
            }
        }, 100);
        const advanceSlider = () => {
            this.currentReviewIndex = (this.currentReviewIndex + 1) % this.elements.reviewNodes.length;
            updateSliderPosition();
        };
        this.elements.reviewsContainer.addEventListener('click', () => {
            advanceSlider();
            clearInterval(this.sliderInterval);
            this.sliderInterval = window.setInterval(advanceSlider, 5000);
        });
        this.sliderInterval = window.setInterval(advanceSlider, 3000);
        window.addEventListener('resize', updateSliderPosition);
        updateSliderPosition();
    }
    initModals() {
        const modals = {
            '_c8v7b6': '._a9s0d1-open',
            '_q3w2e1': '._q6w7e8-open'
        };
        Object.entries(modals).forEach(([modalId, triggerClass]) => {
            const modalElement = document.getElementById(modalId);
            const triggerElement = document.querySelector(triggerClass);
            const closeButtonElement = modalElement?.querySelector('._m0n9b8__shut');
            if (!(modalElement instanceof HTMLElement) ||
                !(triggerElement instanceof HTMLElement) ||
                !(closeButtonElement instanceof HTMLElement)) {
                return;
            }
            const setModalDisplay = (display) => {
                modalElement.style.display = display;
            };
            triggerElement.addEventListener('click', () => setModalDisplay('block'));
            closeButtonElement.addEventListener('click', () => setModalDisplay('none'));
            window.addEventListener('click', (event) => {
                if (event.target instanceof HTMLElement && event.target === modalElement) {
                    setModalDisplay('none');
                }
            });
        });
    }
    initForms() {
        const forms = {
            '_t5r4e3': this.handleContactForm.bind(this),
            '_y6u5t4': this.handleJobForm.bind(this)
        };
        Object.entries(forms).forEach(([formId, handler]) => {
            const form = document.getElementById(formId);
            form?.addEventListener('submit', handler);
        });
    }
    handleContactForm(event) {
        event.preventDefault();
        const form = event.target;
        const nameInput = form.querySelector(`#${form.id}-name`);
        const phoneInput = form.querySelector(`#${form.id}-phone`);
        const msgElement = form.querySelector(`#${form.id}-msg`);
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        if (!validateName(name)) {
            msgElement.textContent = translations[this.currentLang]['name-err'];
            msgElement.style.color = 'red';
            return;
        }
        if (!validatePhone(phone)) {
            msgElement.textContent = translations[this.currentLang]['phone-err'];
            msgElement.style.color = 'red';
            return;
        }
        msgElement.textContent = translations[this.currentLang]['thanks'];
        msgElement.style.color = '#F5F6F5';
        form.reset();
        setTimeout(() => {
            const modal = form.closest('._m0n9b8');
            if (modal)
                modal.style.display = 'none';
        }, 1500);
    }
    handleJobForm(event) {
        event.preventDefault();
        const form = event.target;
        const nameInput = form.querySelector(`#${form.id}-name`);
        const phoneInput = form.querySelector(`#${form.id}-phone`);
        const roleSelect = form.querySelector('#_j4k3l2');
        const msgElement = form.querySelector(`#${form.id}-msg`);
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        const role = roleSelect.value;
        if (!validateName(name)) {
            msgElement.textContent = translations[this.currentLang]['name-err'];
            msgElement.style.color = 'red';
            return;
        }
        if (!validatePhone(phone)) {
            msgElement.textContent = translations[this.currentLang]['phone-err'];
            msgElement.style.color = 'red';
            return;
        }
        const message = `${translations[this.currentLang]['thanks-job']}, ${name}! ` +
            `${translations[this.currentLang]['app-sent']} ` +
            `${translations[this.currentLang][role]} ` +
            `${translations[this.currentLang]['app-done']}`;
        msgElement.textContent = message;
        msgElement.style.color = '#F5F6F5';
        form.reset();
        setTimeout(() => {
            const modal = form.closest('._m0n9b8');
            if (modal)
                modal.style.display = 'none';
        }, 1500);
    }
    initCanvas() {
        if (this.elements.canvas) {
            new ParticleSystem(this.elements.canvas);
        }
    }
    initScrollHandling() {
        const handleScroll = () => {
            updateProgressBar(this.elements.progressBar);
            handleScrollTopButton(window.scrollY);
            this.handleSectionVisibility();
        };
        window.addEventListener('scroll', handleScroll);
        const scrollTopButton = document.getElementById('_scroll-top');
        scrollTopButton?.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        document.querySelectorAll('._b8n7m6').forEach(button => {
            button.addEventListener('mouseover', () => button.classList.add('_pulse'));
            button.addEventListener('mouseout', () => button.classList.remove('_pulse'));
        });
    }
    handleSectionVisibility() {
        document.querySelectorAll('section').forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                section.classList.add('_v9');
                if (section.id === 'r4t5y6') {
                    const text = section.querySelector('p');
                    if (text && !text.classList.contains('_fade-in')) {
                        text.classList.add('_fade-in');
                    }
                }
            }
        });
    }
    initCounters() {
        const counters = document.querySelectorAll('._i7u6y5__num');
        counters.forEach(counter => {
            const target = Number(counter.getAttribute('data-_t9')) || 0;
            const updateCounter = () => {
                const current = Number(counter.textContent) || 0;
                const increment = target / 100;
                if (current < target) {
                    counter.textContent = Math.ceil(current + increment).toString();
                    setTimeout(updateCounter, 20);
                }
                else {
                    counter.textContent = target.toString();
                }
            };
            const section = document.getElementById('i7u6y5');
            if (section) {
                const observer = new IntersectionObserver(entries => {
                    if (entries[0].isIntersecting) {
                        updateCounter();
                        observer.disconnect();
                    }
                }, { threshold: 0.8 });
                observer.observe(section);
            }
        });
    }
    updateVisitCounter() {
        updateVisitCounter(translations, this.currentLang);
    }
}
// Initialize the application when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new BNBSolution();
});
