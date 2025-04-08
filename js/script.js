document.querySelectorAll('.nav__link, .btn[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');
navToggle.addEventListener('click', () => navList.classList.toggle('active'));
window.addEventListener('resize', () => window.innerWidth > 768 && navList.classList.remove('active'));

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
        "phone": "Phone: <a href=\"tel:+380123456789\">+380 (12) 345-67-89</a>",
        "email": "Email: <a href=\"mailto:info@bnbsolution.com\">info@bnbsolution.com</a>",
        "address": "Address: Odesa, Imaginary St., 42",
        "contact-us": "Contact Us",
        "footer-rights": "© 2025 BNB Solution. All rights reserved.",
        "footer-dev": "Developed by <a href=\"https://www.example.com\" target=\"_blank\" rel=\"noopener noreferrer\">YALOKGAR</a>",
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
        "phone": "Телефон: <a href=\"tel:+380123456789\">+380 (12) 345-67-89</a>",
        "email": "Електронна пошта: <a href=\"mailto:info@bnbsolution.com\">info@bnbsolution.com</a>",
        "address": "Адреса: Одеса, вул. Уявна, 42",
        "contact-us": "Зв’язатися з нами",
        "footer-rights": "© 2025 BNB Solution. Усі права захищено.",
        "footer-dev": "Розроблено <a href=\"https://www.example.com\" target=\"_blank\" rel=\"noopener noreferrer\">YALOKGAR</a>",
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
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            const isParent = element.querySelector('p');
            if (isParent) {
                element.querySelector('p').innerHTML = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    document.documentElement.lang = lang;
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        updateLanguage(lang);
        localStorage.setItem('language', lang);
    });
});

const savedLang = localStorage.getItem('language') || 'en';
updateLanguage(savedLang);

const reviewsCarousel = document.querySelector('.reviews__carousel');
const reviewsTrack = document.querySelector('.reviews__track');
const reviewItems = document.querySelectorAll('.reviews__item');
let currentReview = 0;

if (reviewsCarousel && reviewsTrack && reviewItems.length) {
    const updateCarousel = () => {
        const width = reviewsCarousel.clientWidth;
        reviewsTrack.style.transform = `translateX(${-currentReview * width}px)`;
    };

    const nextReview = () => {
        currentReview = (currentReview + 1) % reviewItems.length;
        updateCarousel();
    };

    reviewsTrack.addEventListener('click', () => {
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

Object.keys(modals).forEach(id => {
    const modal = document.getElementById(id);
    const openBtn = document.querySelector(modals[id]);
    const closeBtn = modal.querySelector('.modal__close');

    openBtn.addEventListener('click', () => modal.style.display = 'block');
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', e => e.target === modal && (modal.style.display = 'none'));
});

const forms = {
    'contact-form': (form, name, phone, message) => {
        if (name.length < 1 || name.length > 32) return { text: translations[savedLang]['name-error'], color: 'red' };
        if (!/^\+380\d{9}$/.test(phone)) return { text: translations[savedLang]['phone-error'], color: 'red' };
        return { text: translations[savedLang]['thank-you'], color: '#FFFFFF' };
    },
    'vacancy-form': (form, name, phone, message) => {
        if (name.length < 1 || name.length > 32) return { text: translations[savedLang]['name-error'], color: 'red' };
        if (!/^\+380\d{9}$/.test(phone)) return { text: translations[savedLang]['phone-error'], color: 'red' };
        const position = form.querySelector('#vacancy-position').value;
        return { text: `${translations[savedLang]['thank-you-vacancy']}, ${name}! ${translations[savedLang]['application-submitted']} ${position} ${translations[savedLang]['has-been-submitted']}`, color: '#FFFFFF' };
    }
};

Object.keys(forms).forEach(id => {
    document.getElementById(id).addEventListener('submit', function(e) {
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

const canvas = document.getElementById('geometric-bg');
const ctx = canvas.getContext('2d');

if (ctx) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles = Array.from({ length: 300 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 2,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.3
    }));

    const animate = () => {
        ctx.fillStyle = 'rgba(10, 26, 47, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            if (p.x > canvas.width || p.x < 0) p.speedX *= -1;
            if (p.y > canvas.height || p.y < 0) p.speedY *= -1;

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
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}