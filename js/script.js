const _q1w2 = {
    _e3r4: document.querySelector('._p0o9i8__t3r2e1'),
    _t5y6: document.querySelector('._p0o9i8__m2n1b0'),
    _u7i8: document.querySelector('._x3c4v5__cycle'),
    _o9p0: document.querySelector('._x3c4v5__path'),
    _a1s2: document.querySelectorAll('._x3c4v5__node'),
    _d3f4: document.getElementById('_z9q8w7'),
    _g5h6: document.createElement('div')
};

document.querySelectorAll('._p0o9i8__link, ._b8n7m6[href^="#"]').forEach(_z8 => {
    _z8.addEventListener('click', _x7 => {
        _x7.preventDefault();
        const _target = document.querySelector(_z8.getAttribute('href'));
        if (_target) {
            _target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

_q1w2._e3r4?.addEventListener('click', () => _q1w2._t5y6.classList.toggle('_act9'));
window.addEventListener('resize', _k8j9(() => {
    if (window.innerWidth > 768) _q1w2._t5y6.classList.remove('_act9');
}, 100));

const _m0n1 = {
    en: {
        r4t5y6: "About Us", f7g8h9: "Client Acquisition", j0k1l2: "Services", x3c4v5: "Reviews",
        q6w7e8: "Vacancies", a9s0d1: "Contact", "r2e3w4-title": "Welcome to BNB Solution",
        "r2e3w4-subtitle": "Your partner in business growth", "start-now": "Get Started",
        "why-us": "Why Us?", "why-us-text": "We are a team of experts offering the best solutions for your business, relying on experience and innovation.",
        "more-info": "Learn More", "r4t5y6-text": "We are a dynamic team creating innovative solutions for your business success using modern technology and creativity.",
        "f7g8h9-text": "We focus on personalized client acquisition strategies, using advanced tools and analytics.",
        ads: "Targeted Advertising", analytics: "Data Analysis", engage: "Audience Engagement",
        optimize: "Campaign Optimization", "web-dev": "Website Development", "app-dev": "App Development",
        social: "Social Media Management", "rev-1": "\"Increased our sales by 30% in 3 months!\"",
        "rev-2": "\"Excellent service and support!\"", "rev-3": "\"Professionalism and attention to detail.\"",
        "q6w7e8-text": "Join us! Open positions:", "chat-help": "Chat Support Specialist",
        "chat-mod": "Chat Moderator", "bot-dev": "Chatbot Developer", apply: "Apply",
        addr: "Address: Odesa, Imaginary St., 42",
        mail: "Email: <a href=\"mailto:bnbsolution1@gmail.com\">bnbsolution1@gmail.com</a>",
        tel: "Phone: <a href=\"tel:+380506379849\">+380 (50) 637-98-49</a>",
        "reach-us": "Contact Us", rights: "© 2025 BNB Solution. All rights reserved.",
        "dev-by": "Developed by <a href=\"https://github.com/YALOKGARua\" target=\"_blank\" rel=\"noopener noreferrer\">YALOKGAR</a>",
        name: "Your Name", phone: "Phone Number", send: "Send", "apply-job": "Apply for a Position",
        role: "Position", "name-err": "Name must be 1-32 characters",
        "phone-err": "Phone must be in the format +380XXXXXXXXX", thanks: "Thank you! We will contact you soon.",
        "thanks-job": "Thank you", "app-sent": "Your application for", "app-done": "has been submitted.",
        i7u6y5: "Our Achievements", clients: "Satisfied Clients", potentials: "Client Growth (%)", experience: "Years of Experience"
    },
    uk: {
        r4t5y6: "Про нас", f7g8h9: "Залучення клієнтів", j0k1l2: "Послуги", x3c4v5: "Відгуки",
        q6w7e8: "Вакансії", a9s0d1: "Контакти", "r2e3w4-title": "Ласкаво просимо до BNB Solution",
        "r2e3w4-subtitle": "Ваш партнер у розвитку бізнесу", "start-now": "Почати",
        "why-us": "Чому ми?", "why-us-text": "Ми – команда експертів, яка пропонує найкращі рішення для вашого бізнесу, спираючись на досвід та інновації.",
        "more-info": "Дізнатися більше", "r4t5y6-text": "Ми – динамічна команда, яка створює інноваційні рішення для успіху вашого бізнесу за допомогою сучасних технологій і креативності.",
        "f7g8h9-text": "Ми зосереджуємося на персоналізованих стратегіях залучення клієнтів, використовуючи передові інструменти та аналітику.",
        ads: "Цільова реклама", analytics: "Аналіз даних", engage: "Взаємодія з аудиторією",
        optimize: "Оптимізація кампаній", "web-dev": "Розробка вебсайтів", "app-dev": "Розробка додатків",
        social: "Управління соцмережами", "rev-1": "\"Підняли продажі на 30% за 3 місяці!\"",
        "rev-2": "\"Чудовий сервіс та підтримка!\"", "rev-3": "\"Професіоналізм та увага до деталей.\"",
        "q6w7e8-text": "Приєднуйся до нас! Відкриті вакансії:", "chat-help": "Спеціаліст підтримки",
        "chat-mod": "Модератор чату", "bot-dev": "Розробник ботів", apply: "Подати заявку",
        addr: "Адреса: Одеса, вул. Уявна, 42",
        mail: "Електронна пошта: <a href=\"mailto:bnbsolution1@gmail.com\">bnbsolution1@gmail.com</a>",
        tel: "Телефон: <a href=\"tel:+380506379849\">+380 (50) 637-98-49</a>",
        "reach-us": "Зв'язатися", rights: "© 2025 BNB Solution. Усі права захищені.",
        "dev-by": "Розроблено <a href=\"https://github.com/YALOKGARua\" target=\"_blank\" rel=\"noopener noreferrer\">YALOKGAR</a>",
        name: "Ваше ім'я", phone: "Контактний телефон", send: "Відправити", "apply-job": "Заявка на вакансію",
        role: "Вакансія", "name-err": "Ім'я має бути від 1 до 32 символів",
        "phone-err": "Телефон має бути у форматі +380XXXXXXXXX", thanks: "Дякуємо! Ми зв'яжемося з вами.",
        "thanks-job": "Дякуємо", "app-sent": "Ваша заявка на", "app-done": "подана.",
        i7u6y5: "Наші досягнення", clients: "Задоволених клієнтів", potentials: "Зростання клієнтів (%)", experience: "Років досвіду"
    }
};

function _b2v3(_c4) {
    document.querySelectorAll('[data-_v1]').forEach(_d5 => {
        const _e6 = _d5.getAttribute('data-_v1');
        if (_m0n1[_c4][_e6]) _d5.innerHTML = _m0n1[_c4][_e6];
    });
    document.documentElement.lang = _c4;
}

let _f7g8 = localStorage.getItem('_l9k0') || 'uk';
const _h1j2 = document.getElementById('_m4n3b2');

function _i3k4() {
    _f7g8 = _f7g8 === 'en' ? 'uk' : 'en';
    _h1j2.textContent = _f7g8 === 'en' ? 'EN' : 'UA';
    _b2v3(_f7g8);
    localStorage.setItem('_l9k0', _f7g8);
}

_h1j2.addEventListener('click', _i3k4);
_h1j2.textContent = _f7g8 === 'en' ? 'EN' : 'UA';
_b2v3(_f7g8);

function _z8x7c6() {
    const _m5n6 = document.documentElement.getAttribute('data-_t7') === '_l8' ? '_d9' : '_l8';
    document.documentElement.setAttribute('data-_t7', _m5n6);
    localStorage.setItem('_t7', _m5n6);
}

const _o7p8 = localStorage.getItem('_t7') || '_d9';
document.documentElement.setAttribute('data-_t7', _o7p8);

let _q9r0 = 0;
if (_q1w2._u7i8 && _q1w2._o9p0 && _q1w2._a1s2.length) {
    const _s1t2 = _k8j9(() => {
        _q1w2._o9p0.style.transform = `translateX(${_q9r0 * -_q1w2._u7i8.clientWidth}px)`;
    }, 100);

    const _u3v4 = () => {
        _q9r0 = (_q9r0 + 1) % _q1w2._a1s2.length;
        _s1t2();
    };

    _q1w2._o9p0.addEventListener('click', () => {
        _u3v4();
        clearInterval(_w5x6);
        _w5x6 = setInterval(_u3v4, 5000);
    });

    let _w5x6 = setInterval(_u3v4, 3000);
    window.addEventListener('resize', _s1t2);
    _s1t2();
}

const _y7z8 = {
    '_c8v7b6': '._a9s0d1-open',
    '_q3w2e1': '._q6w7e8-open'
};

Object.entries(_y7z8).forEach(([_a9, _b0]) => {
    const _c1 = document.getElementById(_a9);
    const _d2 = document.querySelector(_b0);
    const _e3 = _c1.querySelector('._m0n9b8__shut');
    
    _d2?.addEventListener('click', () => _c1.style.display = 'block');
    _e3?.addEventListener('click', () => _c1.style.display = 'none');
    window.addEventListener('click', _f4 => _f4.target === _c1 && (_c1.style.display = 'none'));
});

const _g5h6 = {
    '_t5r4e3': (_i7, _j8, _k9, _l0) => {
        if (_j8.length < 1 || _j8.length > 32) return { txt: _m0n1[_f7g8]['name-err'], clr: 'red' };
        if (!/^\+380\d{9}$/.test(_k9)) return { txt: _m0n1[_f7g8]['phone-err'], clr: 'red' };
        return { txt: _m0n1[_f7g8]['thanks'], clr: '#F5F6F5' };
    },
    '_y6u5t4': (_m1, _n2, _o3, _p4) => {
        if (_n2.length < 1 || _n2.length > 32) return { txt: _m0n1[_f7g8]['name-err'], clr: 'red' };
        if (!/^\+380\d{9}$/.test(_o3)) return { txt: _m0n1[_f7g8]['phone-err'], clr: 'red' };
        const _q5 = _m1.querySelector('#_j4k3l2').value;
        return { txt: `${_m0n1[_f7g8]['thanks-job']}, ${_n2}! ${_m0n1[_f7g8]['app-sent']} ${_q5} ${_m0n1[_f7g8]['app-done']}`, clr: '#F5F6F5' };
    }
};

Object.keys(_g5h6).forEach(_r6 => {
    const _s7 = document.getElementById(_r6);
    _s7?.addEventListener('submit', function(_t8) {
        _t8.preventDefault();
        const _u9 = this.querySelector(`#${_r6.split('-')[0]}-name`).value.trim();
        const _v0 = this.querySelector(`#${_r6.split('-')[0]}-phone`).value.trim();
        const _w1 = this.querySelector(`#${_r6}-msg`) || this.querySelector('p:last-child');
        const _x2 = _g5h6[_r6](this, _u9, _v0, _w1);

        _w1.textContent = _x2.txt;
        _w1.style.color = _x2.clr;
        if (_x2.clr !== 'red') {
            this.reset();
            setTimeout(() => this.closest('._m0n9b8').style.display = 'none', 1500);
        }
    });
});

function _y3z4() {
    const _a5 = document.querySelectorAll('._i7u6y5__num');
    _a5.forEach(_b6 => {
        const _c7 = +_b6.getAttribute('data-_t9');
        const _d8 = () => {
            const _e9 = +_b6.innerText;
            const _f0 = _c7 / 100;
            if (_e9 < _c7) {
                _b6.innerText = Math.ceil(_e9 + _f0);
                setTimeout(_d8, 20);
            } else {
                _b6.innerText = _c7;
            }
        };
        const _g1 = document.getElementById('i7u6y5');
        const _h2 = new IntersectionObserver(_i3 => {
            if (_i3[0].isIntersecting) {
                _d8();
                _h2.disconnect();
            }
        }, { threshold: 0.8 });
        _h2.observe(_g1);
    });
}

if (_q1w2._d3f4) {
    const _j4 = _q1w2._d3f4.getContext('2d');
    _q1w2._d3f4.width = window.innerWidth;
    _q1w2._d3f4.height = window.innerHeight;

    const _k5 = Array.from({ length: 100 }, () => ({
        _x: Math.random() * _q1w2._d3f4.width,
        _y: Math.random() * _q1w2._d3f4.height,
        _sz: Math.random() * 5 + 2,
        _sx: Math.random() * 0.5 - 0.25,
        _sy: Math.random() * 0.5 - 0.25,
        _op: Math.random() * 0.5 + 0.3
    }));

    function _l6() {
        _j4.fillStyle = 'rgba(26, 42, 58, 0.1)';
        _j4.fillRect(0, 0, _q1w2._d3f4.width, _q1w2._d3f4.height);

        _k5.forEach(_m7 => {
            _m7._x += _m7._sx;
            _m7._y += _m7._sy;
            if (_m7._x > _q1w2._d3f4.width || _m7._x < 0) _m7._sx *= -1;
            if (_m7._y > _q1w2._d3f4.height || _m7._y < 0) _m7._sy *= -1;

            _j4.fillStyle = `rgba(74, 106, 136, ${_m7._op})`;
            _j4.beginPath();
            _j4.arc(_m7._x, _m7._y, _m7._sz, 0, Math.PI * 2);
            _j4.fill();
        });

        for (let _n8 = 0; _n8 < _k5.length; _n8++) {
            for (let _o9 = _n8 + 1; _o9 < _k5.length; _o9++) {
                const _p0 = _k5[_n8]._x - _k5[_o9]._x;
                const _q1 = _k5[_n8]._y - _k5[_o9]._y;
                const _r2 = Math.sqrt(_p0 * _p0 + _q1 * _q1);
                if (_r2 < 150) {
                    _j4.strokeStyle = `rgba(74, 106, 136, ${1 - _r2 / 150})`;
                    _j4.beginPath();
                    _j4.moveTo(_k5[_n8]._x, _k5[_n8]._y);
                    _j4.lineTo(_k5[_o9]._x, _k5[_o9]._y);
                    _j4.stroke();
                }
            }
        }

        requestAnimationFrame(_l6);
    }

    _l6();
    window.addEventListener('resize', _k8j9(() => {
        _q1w2._d3f4.width = window.innerWidth;
        _q1w2._d3f4.height = window.innerHeight;
    }, 100));
}

_q1w2._g5h6.className = '_z0x1';
document.body.appendChild(_q1w2._g5h6);

function _s2t3() {
    const _u4 = window.scrollY;
    const _v5 = document.documentElement.scrollHeight - window.innerHeight;
    _q1w2._g5h6.style.width = `${(_u4 / _v5) * 100}%`;
}

function _w6x7() {
    document.querySelectorAll('section').forEach(_y8 => {
        if (_y8.getBoundingClientRect().top < window.innerHeight * 0.8) {
            _y8.classList.add('_v9');
        }
    });
}

function _k8j9(_z0, _a1) {
    let _b2;
    return (..._c3) => {
        clearTimeout(_b2);
        _b2 = setTimeout(() => _z0(..._c3), _a1);
    };
}

document.addEventListener('DOMContentLoaded', () => {
    _w6x7();
    _y3z4();
});

window.addEventListener('scroll', () => {
    _s2t3();
    _w6x7();
});

window.addEventListener('load', () => {
    _w6x7();
    _y3z4();
});