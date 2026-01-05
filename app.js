// ============================================
// Main Application Logic
// ============================================

const LANG_NAMES = { en: 'EN', sv: 'SV', de: 'DE', es: 'ES', pl: 'PL' };

function setLanguage(lang) {
    const t = TRANSLATIONS[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    document.getElementById('current-lang').textContent = LANG_NAMES[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll('.lang-option').forEach(btn => {
        const isActive = btn.textContent.toLowerCase().includes(
            lang === 'en' ? 'english' :
            lang === 'sv' ? 'svenska' :
            lang === 'de' ? 'deutsch' :
            lang === 'es' ? 'español' : 'polski'
        );
        btn.classList.toggle('active', isActive);
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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.lang-selector')) closeLangDropdown();
    });

    // Set initial language
    const savedLang = localStorage.getItem('lang');
    const browserLang = navigator.language.slice(0, 2);
    const supportedLangs = ['en', 'sv', 'de', 'es', 'pl'];
    const initialLang = savedLang || (supportedLangs.includes(browserLang) ? browserLang : 'en');
    setLanguage(initialLang);

    // Apply CONFIG links
    document.querySelectorAll('[data-link]').forEach(el => {
        const key = el.getAttribute('data-link');
        if (CONFIG[key]) el.href = CONFIG[key];
    });

    // Apply email
    document.querySelectorAll('[data-email]').forEach(el => {
        el.href = 'mailto:' + CONFIG.email;
        const span = el.querySelector('span');
        if (span) span.textContent = CONFIG.email;
    });
});
