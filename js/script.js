const DOM = {
    navToggle: document.querySelector('.nav__toggle'),
    navList: document.querySelector('.nav__list'),
    reviewsCarousel: document.querySelector('.reviews__carousel'),
    reviewsTrack: document.querySelector('.reviews__track'),
    reviewItems: document.querySelectorAll('.reviews__item'),
    canvas: document.getElementById('geometric-bg'),
    progressBar: document.createElement('div')
};

document.querySelectorAll('.nav__link, .btn[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

DOM.navToggle?.addEventListener('click', () => DOM.navList.classList.toggle('active'));
window.addEventListener('resize', debounce(() => {
    if (window.innerWidth > 768) DOM.navList.classList.remove('active');
}, 100));

const translations = {
    en: {
        "about": "About Us",
        "leadgen": "Lead Generation",
        "services": "Services",
        "reviews": "Reviews",
        "vacancies": "Vacancies",
        "contacts": "Contacts",
        "hero-title": "Welcome to BNB Solution",
        "hero-subtitle": "Your partner in business growth",
        "get-started": "Get Started",
        "why-choose": "Why Choose Us?",
        "why-choose-text": "We are a team of professionals dedicated to providing top-tier business solutions through experience and innovation.",
        "learn-more": "Learn More",
        "about-text": "We are a dynamic company focused on delivering innovative solutions to help businesses succeed using modern technology and creativity.",
        "leadgen-text": "We specialize in tailored lead generation strategies, utilizing advanced tools and analytics to attract and convert potential customers.",
        "targeted-advertising": "Targeted Advertising",
        "data-analysis": "Data Analysis",
        "audience-engagement": "Audience Engagement",
        "campaign-optimization": "Campaign Optimization",
        "website-development": "Website Development",
        "mobile-app-development": "Mobile App Development",
        "social-media-management": "Social Media Management",
        "review-1": "\"Increased our sales by 30% in 3 months!\"",
        "review-2": "\"Great service and support!\"",
        "review-3": "\"Professional and detail-oriented.\"",
        "vacancies-text": "Join our team! Current openings:",
        "chat-support": "Chat Support Specialist",
        "chat-moderator": "Chat Moderator",
        "chatbot-developer": "Chatbot Developer",
        "apply-now": "Apply Now",
        "phone": "Phone: <a href=\"tel:+380506379849\">+380 (50) 637-98-49</a>",
        "email": "Email: <a href=\"mailto:bnbsolution1@gmail.com\">bnbsolution1@gmail.com</a>",
        "address": "Address: Odesa, Imaginary St., 42",
        "contact-us": "Contact Us",
        "footer-rights": "© 2025 BNB Solution. All rights reserved.",
        "footer-dev": "Developed by <a href=\"https://github.com/YALOKGARua\" target=\"_blank\" rel=\"noopener noreferrer\">YALOKGAR</a>",
        "your-name": "Your Name",
        "contact-phone": "Contact Phone",
        "submit": "Submit",
        "apply-vacancy": "Apply for a Vacancy",
        "position": "Position",
        "name-error": "Name must be between 1 and 32 characters",
        "phone-error": "Phone must be in the format +380XXXXXXXXX",
        "thank-you": "Thank you! We will contact you soon.",
        "thank-you-vacancy": "Thank you",
        "application-submitted": "Your application for",
        "has-been-submitted": "has been submitted."
    },
    uk: {
        "about": "Про нас",
        "leadgen": "Генерація лідів",
        "services": "Послуги",
        "reviews": "Відгуки",
        "vacancies": "Вакансії",
        "contacts": "Контакти",
        "hero-title": "Ласкаво просимо до BNB Solution",
        "hero-subtitle": "Ваш партнер у розвитку бізнесу",
        "get-started": "Розпочати",
        "why-choose": "Чому обирають нас?",
        "why-choose-text": "Ми — команда професіоналів, яка прагне надавати найкращі рішення для бізнесу завдяки досвіду та інноваціям.",
        "learn-more": "Дізнатися більше",
        "about-text": "Ми — динамічна компанія, орієнтована на створення інноваційних рішень для успіху бізнесу з використанням сучасних технологій та креативності.",
        "leadgen-text": "Ми спеціалізуємося на індивідуальних стратегіях генерації лідів, використовуючи передові інструменти та аналітику для залучення та конверсії потенційних клієнтів.",
        "targeted-advertising": "Цільова реклама",
        "data-analysis": "Аналіз даних",
        "audience-engagement": "Взаємодія з аудиторією",
        "campaign-optimization": "Оптимізація кампаній",
        "website-development": "Розробка вебсайтів",
        "mobile-app-development": "Розробка мобільних додатків",
        "social-media-management": "Управління соціальними мережами",
        "review-1": "\"Збільшили наші продажі на 30% за 3 місяці!\"",
        "review-2": "\"Чудовий сервіс та підтримка!\"",
        "review-3": "\"Професійний підхід та увага до деталей.\"",
        "vacancies-text": "Приєднуйтесь до нашої команди! Актуальні вакансії:",
        "chat-support": "Спеціаліст із підтримки в чаті",
        "chat-moderator": "Модератор чату",
        "chatbot-developer": "Розробник чат-ботів",
        "apply-now": "Подати заявку",
        "phone": "Телефон: <a href=\"tel:+380506379849\">+380 (50) 637-98-49</a>",
        "email": "Електронна пошта: <a href=\"mailto:bnbsolution1@gmail.com\">bnbsolution1@gmail.com</a>",
        "address": "Адреса: Одеса, вул. Уявна, 42",
        "contact-us": "Зв’язатися з нами",
        "footer-rights": "© 2025 BNB Solution. Усі права захищено.",
        "footer-dev": "Розроблено <a href=\"https://github.com/YALOKGARua\" target=\"_blank\" rel=\"noopener noreferrer\">YALOKGAR</a>",
        "your-name": "Ваше ім’я",
        "contact-phone": "Контактний телефон",
        "submit": "Надіслати",
        "apply-vacancy": "Подати заявку на вакансію",
        "position": "Посада",
        "name-error": "Ім’я має бути від 1 до 32 символів",
        "phone-error": "Телефон має бути у форматі +380XXXXXXXXX",
        "thank-you": "Дякуємо! Ми зв’яжемося з вами незабаром.",
        "thank-you-vacancy": "Дякуємо",
        "application-submitted": "Ваша заявка на",
        "has-been-submitted": "успішно подана."
    }
};

function updateLanguage(lang) {
    try {
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
    } catch (error) {
        console.error('Language update failed:', error);
    }
}

let currentLang = localStorage.getItem('language') || 'en';
const langToggleBtn = document.getElementById('lang-toggle');

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'uk' : 'en';
    langToggleBtn.textContent = currentLang === 'en' ? 'EN' : 'UA';
    updateLanguage(currentLang);
    localStorage.setItem('language', currentLang);
}

langToggleBtn.addEventListener('click', toggleLanguage);
langToggleBtn.textContent = currentLang === 'en' ? 'EN' : 'UA';
updateLanguage(currentLang);

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
}

const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

let currentReview = 0;
if (DOM.reviewsCarousel && DOM.reviewsTrack && DOM.reviewItems.length) {
    const updateCarousel = debounce(() => {
        const width = DOM.reviewsCarousel.clientWidth;
        DOM.reviewsTrack.style.transform = `translateX(${-currentReview * width}px)`;
    }, 100);

    const nextReview = () => {
        currentReview = (currentReview + 1) % DOM.reviewItems.length;
        updateCarousel();
    };

    DOM.reviewsTrack.addEventListener('click', () => {
        nextReview();
        clearInterval(autoSlide);
        autoSlide = setInterval(nextReview, 5000);
    });

    let autoSlide = setInterval(nextReview, 3000);
    window.addEventListener('resize', updateCarousel);
    updateCarousel();
}

const modals = {
    'contact-modal': '.open-modal',
    'vacancy-modal': '.open-vacancy-modal'
};

Object.entries(modals).forEach(([id, selector]) => {
    const modal = document.getElementById(id);
    const openBtn = document.querySelector(selector);
    const closeBtn = modal.querySelector('.modal__close');
    openBtn?.addEventListener('click', () => modal.style.display = 'block');
    closeBtn?.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', e => e.target === modal && (modal.style.display = 'none'));
});

const forms = {
    'contact-form': (form, name, phone, message) => {
        if (name.length < 1 || name.length > 32) return { text: translations[currentLang]['name-error'], color: 'red' };
        if (!/^\+380\d{9}$/.test(phone)) return { text: translations[currentLang]['phone-error'], color: 'red' };
        return { text: translations[currentLang]['thank-you'], color: '#FFFFFF' };
    },
    'vacancy-form': (form, name, phone, message) => {
        if (name.length < 1 || name.length > 32) return { text: translations[currentLang]['name-error'], color: 'red' };
        if (!/^\+380\d{9}$/.test(phone)) return { text: translations[currentLang]['phone-error'], color: 'red' };
        const position = form.querySelector('#vacancy-position').value;
        return { text: `${translations[currentLang]['thank-you-vacancy']}, ${name}! ${translations[currentLang]['application-submitted']} ${position} ${translations[currentLang]['has-been-submitted']}`, color: '#FFFFFF' };
    }
};

Object.keys(forms).forEach(id => {
    const form = document.getElementById(id);
    form?.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector(`#${id.split('-')[0]}-name`).value.trim();
        const phone = this.querySelector(`#${id.split('-')[0]}-phone`).value.trim();
        const message = this.querySelector(`#${id}-message`);
        const result = forms[id](this, name, phone, message);

        message.textContent = result.text;
        message.style.color = result.color;
        if (result.color === '#FFFFFF') {
            this.reset();
            setTimeout(() => this.closest('.modal').style.display = 'none', 1500);
        }
    });
});

if (DOM.canvas) {
    const ctx = DOM.canvas.getContext('2d');
    DOM.canvas.width = window.innerWidth;
    DOM.canvas.height = window.innerHeight;

    const particles = Array.from({ length: 100 }, () => ({
        x: Math.random() * DOM.canvas.width,
        y: Math.random() * DOM.canvas.height,
        size: Math.random() * 5 + 2,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.3
    }));

    const animate = () => {
        ctx.fillStyle = 'rgba(10, 26, 47, 0.1)';
        ctx.fillRect(0, 0, DOM.canvas.width, DOM.canvas.height);

        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            if (p.x > DOM.canvas.width || p.x < 0) p.speedX *= -1;
            if (p.y > DOM.canvas.height || p.y < 0) p.speedY *= -1;

            ctx.fillStyle = `rgba(47, 72, 88, ${p.opacity})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 150) {
                    ctx.strokeStyle = `rgba(47, 72, 88, ${1 - distance / 150})`;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', debounce(() => {
        DOM.canvas.width = window.innerWidth;
        DOM.canvas.height = window.innerHeight;
    }, 100));
}

DOM.progressBar.className = 'progress-bar';
document.body.appendChild(DOM.progressBar);

function updateProgressBar() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    DOM.progressBar.style.width = `${scrollPercent}%`;
}

function animateSections() {
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.8) {
            section.classList.add('visible');
        }
    });
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

window.addEventListener('scroll', () => {
    updateProgressBar();
    animateSections();
});
window.addEventListener('load', animateSections);