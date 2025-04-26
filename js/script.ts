interface Particle {
    _x: number;
    _y: number;
    _sz: number;
    _sx: number;
    _sy: number;
    _op: number;
}

interface Elements {
    _e3r4: HTMLButtonElement | null;
    _t5y6: HTMLUListElement | null;
    _u7i8: HTMLDivElement | null;
    _o9p0: HTMLDivElement | null;
    _a1s2: NodeListOf<HTMLDivElement>;
    _d3f4: HTMLCanvasElement | null;
    _g5h6: HTMLDivElement;
}

interface Translations {
    [key: string]: string;
}

interface LanguagePack {
    en: Translations;
    uk: Translations;
}

const _q1w2: Elements = {
    _e3r4: document.querySelector('._p0o9i8__t3r2e1') as HTMLButtonElement | null,
    _t5y6: document.querySelector('._p0o9i8__m2n1b0') as HTMLUListElement | null,
    _u7i8: document.querySelector('._x3c4v5__cycle') as HTMLDivElement | null,
    _o9p0: document.querySelector('._x3c4v5__path') as HTMLDivElement | null,
    _a1s2: document.querySelectorAll('._x3c4v5__node'),
    _d3f4: document.getElementById('_z9q8w7') as HTMLCanvasElement | null,
    _g5h6: document.createElement('div')
};

document.querySelectorAll('._p0o9i8__link, ._b8n7m6[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        const target = targetId ? document.getElementById(targetId) : null;
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

_q1w2._e3r4?.addEventListener('click', () => _q1w2._t5y6?.classList.toggle('_act9'));

window.addEventListener('resize', debounce(() => {
    if (window.innerWidth > 768) _q1w2._t5y6?.classList.remove('_act9');
}, 100));

const _m0n1: LanguagePack = {
    en: {
        r4t5y6: "About Us",
        f7g8h9: "Client Acquisition",
        j0k1l2: "Services",
        x3c4v5: "Reviews",
        q6w7e8: "Vacancies",
        a9s0d1: "Contact",
        "r2e3w4-title": "Welcome to BNB Solution",
        "r2e3w4-subtitle": "Your partner in business growth",
        "start-now": "Get Started",
        "why-us": "Why Us?",
        "why-us-text": "We are a team of experts offering the best solutions for your business, relying on experience and innovation.",
        "more-info": "Learn More",
        "r4t5y6-text": "We are a dynamic team creating innovative solutions for your business success using modern technology and creativity.",
        "f7g8h9-text": "We focus on personalized client acquisition strategies, using advanced tools and analytics.",
        ads: "Targeted Advertising",
        analytics: "Data Analysis",
        engage: "Audience Engagement",
        optimize: "Campaign Optimization",
        "web-dev": "Website Development",
        "app-dev": "App Development",
        social: "Social Media Management",
        "rev-1": "\"Increased our sales by 30% in 3 months!\"",
        "rev-2": "\"Excellent service and support!\"",
        "rev-3": "\"Professionalism and attention to detail.\"",
        "q6w7e8-text": "Join us! Open positions:",
        "chat-help": "Chat Support Specialist",
        "chat-mod": "Chat Moderator",
        "bot-dev": "Chatbot Developer",
        apply: "Apply",
        addr: "Address: Odesa, Imaginary St., 42",
        mail: "Email: <a href=\"mailto:bnbsolution1@gmail.com\">bnbsolution1@gmail.com</a>",
        tel: "Phone: <a href=\"tel:+380932469904\">+380 (93) 246-99-04</a>",
        "reach-us": "Contact Us",
        rights: "© 2025 BNB Solution. All rights reserved.",
        "dev-by": "Developed by <a href=\"https://github.com/YALOKGARua\" target=\"_blank\" rel=\"noopener noreferrer\">YALOKGAR</a>",
        name: "Your Name",
        phone: "Phone Number",
        send: "Send",
        "apply-job": "Apply for a Position",
        role: "Position",
        "name-err": "Name must be 1-32 characters",
        "phone-err": "Phone must be in the format +380XXXXXXXXX",
        thanks: "Thank you! We will contact you soon.",
        "thanks-job": "Thank you",
        "app-sent": "Your application for",
        "app-done": "has been submitted.",
        i7u6y5: "Our Achievements",
        clients: "Satisfied Clients",
        potentials: "Client Growth (%)",
        experience: "Years of Experience",
        visits: "Page Visits",
        scrollTop: "Back to Top"
    },
    uk: {
        r4t5y6: "Про нас",
        f7g8h9: "Залучення клієнтів",
        j0k1l2: "Послуги",
        x3c4v5: "Відгуки",
        q6w7e8: "Вакансії",
        a9s0d1: "Контакти",
        "r2e3w4-title": "Ласкаво просимо до BNB Solution",
        "r2e3w4-subtitle": "Ваш партнер у розвитку бізнесу",
        "start-now": "Почати",
        "why-us": "Чому ми?",
        "why-us-text": "Ми – команда експертів, яка пропонує найкращі рішення для вашого бізнесу, спираючись на досвід та інновації.",
        "more-info": "Дізнатися більше",
        "r4t5y6-text": "Ми – динамічна команда, яка створює інноваційні рішення для успіху вашого бізнесу за допомогою сучасних технологій і креативності.",
        "f7g8h9-text": "Ми зосереджуємося на персоналізованих стратегіях залучення клієнтів, використовуючи передові інструменти та аналітику.",
        ads: "Цільова реклама",
        analytics: "Аналіз даних",
        engage: "Взаємодія з аудиторією",
        optimize: "Оптимізація кампаній",
        "web-dev": "Розробка вебсайтів",
        "app-dev": "Розробка додатків",
        social: "Управління соцмережами",
        "rev-1": "\"Підняли продажі на 30% за 3 місяці!\"",
        "rev-2": "\"Чудовий сервіс та підтримка!\"",
        "rev-3": "\"Професіоналізм та увага до деталей.\"",
        "q6w7e8-text": "Приєднуйся до нас! Відкриті вакансії:",
        "chat-help": "Специалист чат-підтримки",
        "chat-mod": "Модератор чату",
        "bot-dev": "Розробник чат-ботів",
        apply: "Подати заявку",
        addr: "Адреса: Одеса, вул. Уявна, 42",
        mail: "Електронна пошта: <a href=\"mailto:bnbsolution1@gmail.com\">bnbsolution1@gmail.com</a>",
        tel: "Телефон: <a href=\"tel:+380932469904\">+380 (93) 246-99-04</a>",
        "reach-us": "Зв'язатися",
        rights: "© 2025 BNB Solution. Усі права захищені.",
        "dev-by": "Розроблено <a href=\"https://github.com/YALOKGARua\" target=\"_blank\" rel=\"noopener noreferrer\">YALOKGAR</a>",
        name: "Ваше ім'я",
        phone: "Контактний телефон",
        send: "Відправити",
        "apply-job": "Заявка на вакансію",
        role: "Вакансія",
        "name-err": "Ім'я має бути від 1 до 32 символів",
        "phone-err": "Телефон має бути у форматі +380XXXXXXXXX",
        thanks: "Дякуємо! Ми зв'яжемося з вами.",
        "thanks-job": "Дякуємо",
        "app-sent": "Ваша заявка на",
        "app-done": "подана.",
        i7u6y5: "Наші досягнення",
        clients: "Задоволених клієнтів",
        potentials: "Зростання клієнтів (%)",
        experience: "Років досвіду",
        visits: "Відвідувань сторінки",
        scrollTop: "Догори"
    }
};

function updateLanguage(lang: "en" | "uk"): void {
    document.querySelectorAll('[data-_v1]').forEach(element => {
        const key = element.getAttribute('data-_v1') || '';
        if (_m0n1[lang][key]) element.innerHTML = _m0n1[lang][key];
    });
    document.documentElement.lang = lang;
}

let currentLang: "en" | "uk" = (localStorage.getItem('_l9k0') as "en" | "uk") || 'uk';
const languageButton = document.getElementById('_m4n3b2') as HTMLButtonElement | null;

function toggleLanguage(): void {
    currentLang = currentLang === 'en' ? 'uk' : 'en';
    if (languageButton) languageButton.textContent = currentLang === 'en' ? 'EN' : 'UA';
    updateLanguage(currentLang);
    localStorage.setItem('_l9k0', currentLang);
    updateVisitCounter();
}

languageButton?.addEventListener('click', toggleLanguage);
if (languageButton) languageButton.textContent = currentLang === 'en' ? 'EN' : 'UA';
updateLanguage(currentLang);

function toggleTheme(): void {
    const newTheme = document.documentElement.getAttribute('data-_t7') === '_l8' ? '_d9' : '_l8';
    document.documentElement.setAttribute('data-_t7', newTheme);
    localStorage.setItem('_t7', newTheme);
}

document.getElementById('_theme-toggle')?.addEventListener('click', toggleTheme);

const savedTheme = localStorage.getItem('_t7') || '_d9';
document.documentElement.setAttribute('data-_t7', savedTheme);

let currentReviewIndex = 0;
if (_q1w2._u7i8 && _q1w2._o9p0 && _q1w2._a1s2.length) {
    const updateSliderPosition = debounce(() => {
        if (_q1w2._o9p0 && _q1w2._u7i8) {
            _q1w2._o9p0.style.transform = `translateX(${currentReviewIndex * -_q1w2._u7i8.clientWidth}px)`;
        }
    }, 100);

    const advanceSlider = () => {
        currentReviewIndex = (currentReviewIndex + 1) % _q1w2._a1s2.length;
        updateSliderPosition();
    };

    _q1w2._u7i8.addEventListener('click', () => {
        advanceSlider();
        clearInterval(sliderInterval);
        sliderInterval = setInterval(advanceSlider, 5000);
    });

    let sliderInterval = setInterval(advanceSlider, 3000);
    window.addEventListener('resize', updateSliderPosition);
    updateSliderPosition();
}

interface ModalConfig {
    [key: string]: string;
}

const modals: ModalConfig = {
    '_c8v7b6': '._a9s0d1-open',
    '_q3w2e1': '._q6w7e8-open'
};

Object.entries(modals).forEach(([modalId, triggerClass]) => {
    const modal = document.getElementById(modalId) as HTMLElement | null;
    const trigger = document.querySelector(triggerClass) as HTMLElement | null;
    const closeButton = modal?.querySelector('._m0n9b8__shut') as HTMLElement | null;

    if (trigger && modal) {
        trigger.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    }

    if (closeButton && modal) {
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    if (modal) {
        window.addEventListener('click', event => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});

interface FormValidationResult {
    txt: string;
    clr: string;
}

interface FormValidation {
    [key: string]: (form: HTMLFormElement, name: string, phone: string, msgElement: HTMLElement) => FormValidationResult;
}

const formValidations: FormValidation = {
    '_t5r4e3': (form, name, phone, msgElement) => {
        if (name.length < 1 || name.length > 32) {
            return { txt: _m0n1[currentLang]['name-err'], clr: 'red' };
        }
        if (!/^\+380\d{9}$/.test(phone)) {
            return { txt: _m0n1[currentLang]['phone-err'], clr: 'red' };
        }
        return { txt: _m0n1[currentLang]['thanks'], clr: '#F5F6F5' };
    },
    '_y6u5t4': (form, name, phone, msgElement) => {
        if (name.length < 1 || name.length > 32) {
            return { txt: _m0n1[currentLang]['name-err'], clr: 'red' };
        }
        if (!/^\+380\d{9}$/.test(phone)) {
            return { txt: _m0n1[currentLang]['phone-err'], clr: 'red' };
        }
        const roleElement = form.querySelector('#_j4k3l2') as HTMLSelectElement;
        const role = roleElement?.value || '';
        return { txt: `${_m0n1[currentLang]['thanks-job']}, ${name}! ${_m0n1[currentLang]['app-sent']} ${_m0n1[currentLang][role]} ${_m0n1[currentLang]['app-done']}`, clr: '#F5F6F5' };
    }
};

Object.keys(formValidations).forEach(formId => {
    const form = document.getElementById(formId) as HTMLFormElement | null;
    form?.addEventListener('submit', function(event) {
        event.preventDefault();
        const nameInput = this.querySelector(`#${formId}-name`) as HTMLInputElement;
        const phoneInput = this.querySelector(`#${formId}-phone`) as HTMLInputElement;
        const msgElement = this.querySelector(`#${formId}-msg`) as HTMLElement;

        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        const result = formValidations[formId](this, name, phone, msgElement);

        msgElement.textContent = result.txt;
        msgElement.style.color = result.clr;
        if (result.clr !== 'red') {
            this.reset();
            setTimeout(() => {
                const modal = this.closest('._m0n9b8');
                if (modal) {
                    modal.style.display = 'none';
                }
            }, 1500);
        }
    });
});

function animateCounters(): void {
    const counters = document.querySelectorAll('._i7u6y5__num');
    counters.forEach(counter => {
        const target = Number(counter.getAttribute('data-_t9')) || 0;
        const updateCounter = () => {
            const current = Number(counter.textContent) || 0;
            const increment = target / 100;
            if (current < target) {
                counter.textContent = Math.ceil(current + increment).toString();
                setTimeout(updateCounter, 20);
            } else {
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

if (_q1w2._d3f4) {
    const ctx = _q1w2._d3f4.getContext('2d');
    if (ctx && _q1w2._d3f4) {
        _q1w2._d3f4.width = window.innerWidth;
        _q1w2._d3f4.height = window.innerHeight;

        const particles: Particle[] = Array.from({ length: 100 }, () => ({
            _x: Math.random() * _q1w2._d3f4!.width,
            _y: Math.random() * _q1w2._d3f4!.height,
            _sz: Math.random() * 5 + 2,
            _sx: Math.random() * 0.5 - 0.25,
            _sy: Math.random() * 0.5 - 0.25,
            _op: Math.random() * 0.5 + 0.3
        }));

        function animateParticles(): void {
            if (!ctx || !_q1w2._d3f4) return;
            ctx.fillStyle = 'rgba(26, 42, 58, 0.1)';
            ctx.fillRect(0, 0, _q1w2._d3f4.width, _q1w2._d3f4.height);

            particles.forEach(particle => {
                particle._x += particle._sx;
                particle._y += particle._sy;
                if (particle._x > _q1w2._d3f4!.width || particle._x < 0) particle._sx *= -1;
                if (particle._y > _q1w2._d3f4!.height || particle._y < 0) particle._sy *= -1;

                ctx.fillStyle = `rgba(74, 106, 136, ${particle._op})`;
                ctx.beginPath();
                ctx.arc(particle._x, particle._y, particle._sz, 0, Math.PI * 2);
                ctx.fill();
            });

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i]._x - particles[j]._x;
                    const dy = particles[i]._y - particles[j]._y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 150) {
                        ctx.strokeStyle = `rgba(74, 106, 136, ${1 - distance / 150})`;
                        ctx.beginPath();
                        ctx.moveTo(particles[i]._x, particles[i]._y);
                        ctx.lineTo(particles[j]._x, particles[j]._y);
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(animateParticles);
        }

        animateParticles();
        window.addEventListener('resize', debounce(() => {
            if (_q1w2._d3f4) {
                _q1w2._d3f4.width = window.innerWidth;
                _q1w2._d3f4.height = window.innerHeight;
                particles.forEach(particle => {
                    particle._x = Math.random() * _q1w2._d3f4!.width;
                    particle._y = Math.random() * _q1w2._d3f4!.height;
                });
            }
        }, 100));
    }
}

_q1w2._g5h6.className = '_z0x1';
document.body.appendChild(_q1w2._g5h6);

function updateScrollProgress(): void {
    const scrollPosition = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    _q1w2._g5h6.style.width = `${totalHeight > 0 ? (scrollPosition / totalHeight) * 100 : 0}%`;
    const scrollTopButton = document.getElementById('_scroll-top');
    if (scrollTopButton) scrollTopButton.style.display = scrollPosition > 300 ? 'block' : 'none';
}

function handleSectionVisibility(): void {
    document.querySelectorAll('section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            section.classList.add('_v9');
            if (section.id === 'r4t5y6') {
                const text = section.querySelector('p');
                if (text && !text.classList.contains('_fade-in')) text.classList.add('_fade-in');
            }
        }
        if (['r2e3w4', 'f7g8h9'].includes(section.id)) {
            const offset = (window.scrollY - section.offsetTop) * 0.2;
            section.style.backgroundPositionY = `${offset}px`;
        }
    });
}

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
    let timeout: number | undefined;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay) as unknown as number;
    };
}

document.querySelectorAll('._b8n7m6').forEach(button => {
    button.addEventListener('mouseover', () => button.classList.add('_pulse'));
    button.addEventListener('mouseout', () => button.classList.remove('_pulse'));
});

function updateVisitCounter(): void {
    let visits = parseInt(localStorage.getItem('_visits') || '0', 10);
    visits++;
    localStorage.setItem('_visits', visits.toString());
    const counter = document.getElementById('_visit-counter');
    if (counter) counter.textContent = `${_m0n1[currentLang]['visits']}: ${visits}`;
}

document.getElementById('_scroll-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', () => {
    handleSectionVisibility();
    animateCounters();
    updateVisitCounter();
});

window.addEventListener('scroll', () => {
    updateScrollProgress();
    handleSectionVisibility();
});

window.addEventListener('load', () => {
    handleSectionVisibility();
    animateCounters();
    updateVisitCounter();
});