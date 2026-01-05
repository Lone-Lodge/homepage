// ============================================
// Main Application Logic
// ============================================

const LANG_NAMES = { en: 'EN', sv: 'SV', de: 'DE', es: 'ES', pl: 'PL' };
let currentLang = 'en';

function setLanguage(lang) {
    const t = TRANSLATIONS[lang];
    if (!t) return;
    currentLang = lang;

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

    // Re-render products with new language
    renderProducts();

    localStorage.setItem('lang', lang);
    closeLangDropdown();
}

function toggleLangDropdown() {
    document.querySelector('.lang-selector').classList.toggle('open');
}

function closeLangDropdown() {
    document.querySelector('.lang-selector').classList.remove('open');
}

// Render products from PRODUCTS array
function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid || !PRODUCTS) return;

    const t = TRANSLATIONS[currentLang];
    grid.innerHTML = PRODUCTS.map(product => `
        <div class="product-card">
            <div class="product-header">
                <span class="product-badge${product.status === 'soon' ? ' soon' : ''}">
                    ${product.status === 'available' ? (t['products.available'] || 'Available') : (t['products.soon'] || 'Soon')}
                </span>
            </div>
            <h3>${product.name}</h3>
            <p>${t[product.descKey] || product.descKey}</p>
            <div class="product-meta">
                <div class="product-tags">
                    ${product.tags.map(tag => `<span class="product-tag">${tag}</span>`).join('')}
                </div>
                <div class="product-price">${product.price}</div>
            </div>
        </div>
    `).join('');
}

// Scroll animations with Intersection Observer
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.lang-selector')) closeLangDropdown();
    });

    // Render products
    renderProducts();

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

    // Init scroll animations
    initScrollAnimations();
});
