// ============================================
// Lone Lodge Studios — App Logic
// ============================================

const LANG_NAMES = { en: 'EN', sv: 'SV' };
let currentLang = 'en';

function setLanguage(lang) {
    const t = TRANSLATIONS[lang];
    if (!t) return;
    currentLang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    document.getElementById('current-lang').textContent = LANG_NAMES[lang] || lang.toUpperCase();
    document.documentElement.lang = lang;

    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active',
            (lang === 'en' && btn.textContent.includes('English')) ||
            (lang === 'sv' && btn.textContent.includes('Svenska'))
        );
    });

    localStorage.setItem('lang', lang);
    closeLangDropdown();
}

function toggleLangDropdown() {
    document.querySelector('.lang-selector').classList.toggle('open');
}

function closeLangDropdown() {
    document.querySelector('.lang-selector').classList.remove('open');
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.lang-selector')) closeLangDropdown();
});

// Scroll animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// Nav scroll effect
function initNav() {
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
}

// Inject config links
function initLinks() {
    if (typeof CONFIG === 'undefined') return;

    document.querySelectorAll('[data-link]').forEach(el => {
        const key = el.getAttribute('data-link');
        if (CONFIG[key]) el.href = CONFIG[key];
    });

    document.querySelectorAll('[data-email]').forEach(el => {
        if (CONFIG.email) {
            el.href = `mailto:${CONFIG.email}`;
        }
    });
}

// Init on load
document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initScrollAnimations();
    initLinks();

    const saved = localStorage.getItem('lang');
    if (saved && TRANSLATIONS[saved]) setLanguage(saved);
});
