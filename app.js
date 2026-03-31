// ============================================
// Lone Lodge Studios — App
// Portfolio-style interactions
// ============================================

// ── Content ──────────────────────────────────────────────────────────────
const CONTENT = {
  hero: {
    headline: "We build what we believe in.",
    subline: "An independent craft studio creating narrative games, systems and tools. Passionate, open, and here for the long run."
  },

  work: [
    {
      title: "Storyteller",
      role: "Main Product",
      description: "A narrative roguelike where story and system are one. Every choice leaves a mark.",
      year: "In development",
      tags: ["Unity", "Narrative", "Roguelike", "Card System"],
      details: "Storyteller is our flagship — a narrative roguelike built around an interactive book structure. Players navigate branching stories, using a limited hand of character-class cards at critical moments to shape direction and consequence. Blood Mage, Rogue, Necromancer, Oracle — each class plays differently, each run tells a different story. The platform vision extends beyond the game itself: UGC tools, community-created stories, creator economics and an open ecosystem for builders."
    },
    {
      title: "Nova UI Ecosystem",
      role: "Developer Tools",
      description: "Production-ready UI plugins for Unreal Engine. Zero dependencies, fully modular.",
      year: "2024",
      tags: ["C++", "Unreal Engine", "UE5", "UI Systems"],
      details: "A suite of professional UI components for Unreal Engine developers. Nova Radial Menu, Toast notifications, Damage Numbers, Health Bars — each built to production standards with zero external dependencies. Available on the Fab marketplace."
    },
    {
      title: "Creator Platform",
      role: "Coming next",
      description: "Tools for community creators to build and publish their own Storyteller narratives.",
      year: "Upcoming",
      tags: ["UGC", "Modding", "Plugin System", "Community"],
      details: "The next phase of Storyteller's growth — an open platform for creators to write, build and publish their own stories within our ecosystem. Low barrier to entry, real influence, fair economics. Built with the community, not for it."
    }
  ],

  about: {
    paragraphs: [
      "Lone Lodge Studios is a small, remote-first indie studio rooted in Sweden. We build narrative games, interactive systems and developer tools — with Storyteller as our flagship. We're not chasing scale; we're chasing the right thing.",
      "We believe craft beats speed. That health comes before deadlines. That AI should amplify human creativity, not replace it. That community members are co-builders, not consumers. That independence isn't a limitation — it's a superpower.",
      "No stock listing. No complex hierarchies. No crunch culture. Just a flat, passionate team working toward the same goal, at a pace that holds."
    ],
    personal: "Outside the studio we're deep in story games, films, books and world-building. We lead communities, obsess over narrative systems, and believe that the best experiences — in games and in studios — come from genuine care for the humans involved.",
    interests: ["STORY GAMES", "NARRATIVE DESIGN", "FILMS", "BOOKS", "WORLD-BUILDING", "COMMUNITY", "OPEN SOURCE", "AI AS A TOOL"]
  },

  open: [
    {
      category: "What we share",
      tags: ["Process & dev logs", "Mistakes & learnings", "Tools we build", "Design decisions", "Open source utilities"]
    },
    {
      category: "How to contribute",
      tags: ["Community stories (UGC)", "Modding & plugins", "Creator tools", "Feedback & playtesting", "Ideas & proposals"]
    },
    {
      category: "How we work",
      tags: ["Remote-first", "Async by default", "Flat structure", "Similar pay", "Health first", "No crunch", "Passion-driven"]
    }
  ],

  contact: [
    { label: "Email", value: "support@lonelodgestudios.com", icon: "mail", href: "mailto:support@lonelodgestudios.com" },
    { label: "Discord", value: "discord.gg/lonelodge", icon: "discord", href: "" },
    { label: "GitHub", value: "github.com/Lone-Lodge", icon: "github", href: "https://github.com/Lone-Lodge" },
    { label: "Twitter / X", value: "@lonelodge", icon: "x", href: "" }
  ]
};

const ICONS = {
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  discord: `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
};

// ── Render ────────────────────────────────────────────────────────────────

function buildHero() {
  const el = document.getElementById('hero-headline');
  const words = CONTENT.hero.headline.replace(/\.$/, '').split(' ');
  el.innerHTML = words.map((w,i) =>
    `<span class="word" data-i="${i}" style="transition-delay:${0.3+i*0.06}s">${w}</span>`
  ).join('') + `<span class="dot" style="transition-delay:${0.3+words.length*0.06}s">.</span>`;
}

function buildWork() {
  const el = document.getElementById('work-cards');
  el.innerHTML = CONTENT.work.map((p, i) => `
    <div class="exp-card" data-i="${i}" style="transition-delay:${i*0.06}s">
      <div class="exp-preview" onclick="toggleCard(this.parentElement)">
        <div class="exp-top">
          <div class="exp-main">
            <div class="exp-title-row">
              <span class="exp-title">${p.title}</span>
              <span class="exp-role">${p.role}</span>
            </div>
            <p class="exp-desc">${p.description}</p>
            <div class="exp-tags">
              ${p.tags.map(t=>`<span class="exp-tag">${t}</span>`).join('')}
              <span class="exp-year">${p.year}</span>
            </div>
          </div>
          <svg class="exp-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </div>
      <div class="exp-details">
        <div class="exp-details-inner"><p>${p.details}</p></div>
      </div>
    </div>
  `).join('');
}

function buildAbout() {
  document.getElementById('about-paragraphs').innerHTML =
    CONTENT.about.paragraphs.map((p,i)=>
      `<p style="transition-delay:${i*0.15}s">${p}</p>`
    ).join('');
  document.getElementById('about-personal').textContent = CONTENT.about.personal;
  document.getElementById('interests').innerHTML =
    CONTENT.about.interests.map(t=>`<span class="interest-tag">${t}</span>`).join('');
}

function buildOpen() {
  document.getElementById('open-grid').innerHTML =
    CONTENT.open.map((cat,i)=>`
      <div class="open-category" style="transition-delay:${i*0.06}s">
        <h3 class="open-cat-label">${cat.category}</h3>
        <div class="open-tags">${cat.tags.map(t=>`<span class="open-tag">${t}</span>`).join('')}</div>
      </div>
    `).join('');
}

function buildContact() {
  const config = typeof CONFIG !== 'undefined' ? CONFIG : {};
  document.getElementById('contact-links').innerHTML =
    CONTENT.contact.map((c,i)=>{
      let href = c.href;
      if (c.icon === 'discord' && config.discord) href = config.discord;
      if (c.icon === 'x' && config.twitter) href = config.twitter;
      return `
        <a class="contact-link" href="${href}" target="${href.startsWith('http')?'_blank':'_self'}" rel="noopener" style="transition-delay:${i*0.1}s">
          <span class="contact-link-icon">${ICONS[c.icon]}</span>
          <div>
            <div class="contact-link-label">${c.label}</div>
            <div class="contact-link-value">${c.value}</div>
          </div>
        </a>`;
    }).join('');

  // Mobile links
  const nav = ['home','work','about','open','contact'];
  const labels = ['Home','Storyteller','About','Open','Contact'];
  document.getElementById('mobile-links').innerHTML =
    nav.map((s,i)=>`<button class="mobile-btn" data-section="${s}" onclick="scrollToSection('${s}');closeMobile()">${labels[i]}</button>`).join('');
}

// ── Expandable cards ──────────────────────────────────────────────────────

function toggleCard(card) {
  const details = card.querySelector('.exp-details');
  const isOpen = card.classList.contains('open');
  // Close all
  document.querySelectorAll('.exp-card.open').forEach(c => {
    c.classList.remove('open');
    c.querySelector('.exp-details').style.maxHeight = '0';
  });
  if (!isOpen) {
    card.classList.add('open');
    const inner = details.querySelector('.exp-details-inner');
    details.style.maxHeight = inner.scrollHeight + 'px';
    setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 350);
  }
}

// ── Navigation ────────────────────────────────────────────────────────────

const NAV_SECTIONS = ['home','work','about','open','contact'];
let activeSection = 'home';

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const nav = document.getElementById('nav');
  window.scrollTo({ top: el.offsetTop - nav.offsetHeight, behavior: 'smooth' });
}

function updateActiveNav(id) {
  if (activeSection === id) return;
  activeSection = id;
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === id);
  });
  updateUnderline(id);
}

function updateUnderline(id) {
  const btn = document.querySelector(`.nav-btn[data-section="${id}"]`);
  const ul = document.getElementById('nav-underline');
  if (!btn || !ul) return;
  const navPad = 32; // 2rem
  ul.style.left = (btn.offsetLeft + navPad) + 'px';
  ul.style.width = btn.offsetWidth + 'px';
}

function syncActiveSection() {
  const offset = 120;
  const y = window.scrollY + offset;
  let current = 'home';
  NAV_SECTIONS.forEach(id => {
    const el = document.getElementById(id);
    if (el && y >= el.offsetTop) current = id;
  });
  updateActiveNav(current);
}

// Nav buttons
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => scrollToSection(btn.dataset.section));
});

// ── Theme ────────────────────────────────────────────────────────────────

let darkMode = true;

function setTheme(dark) {
  darkMode = dark;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  document.getElementById('icon-sun').style.display = dark ? 'block' : 'none';
  document.getElementById('icon-moon').style.display = dark ? 'none' : 'block';
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}

document.getElementById('theme-toggle').addEventListener('click', () => setTheme(!darkMode));

const savedTheme = localStorage.getItem('theme');
if (savedTheme) setTheme(savedTheme === 'dark');

// ── Mobile menu ───────────────────────────────────────────────────────────

function openMobile() { document.getElementById('mobile-menu').classList.add('open'); }
function closeMobile() { document.getElementById('mobile-menu').classList.remove('open'); }
document.getElementById('mobile-menu-btn').addEventListener('click', openMobile);
document.getElementById('mobile-close').addEventListener('click', closeMobile);

// ── Hero glow ─────────────────────────────────────────────────────────────

const heroSection = document.getElementById('home');
const glow = document.getElementById('hero-glow');
let glowRaf = 0;

window.addEventListener('mousemove', e => {
  cancelAnimationFrame(glowRaf);
  glowRaf = requestAnimationFrame(() => {
    const rect = heroSection.getBoundingClientRect();
    const inside = e.clientX >= rect.left && e.clientX <= rect.right &&
                   e.clientY >= rect.top && e.clientY <= rect.bottom;
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
    glow.style.opacity = inside ? '1' : '0';
  });
}, { passive: true });

// ── Scroll progress ───────────────────────────────────────────────────────

const progressBar = document.getElementById('scroll-progress');
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  const max = document.body.scrollHeight - window.innerHeight;
  const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
  progressBar.style.width = pct + '%';

  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 20);
  backToTop.classList.toggle('visible', window.scrollY > 400);

  syncActiveSection();
}, { passive: true });

backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── Magnetic contact links ────────────────────────────────────────────────

function initMagnetic() {
  document.querySelectorAll('.contact-link').forEach(link => {
    let tx = 0, ty = 0, raf = 0;
    link.addEventListener('mousemove', e => {
      const rect = link.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width/2)) * 0.15;
      const dy = (e.clientY - (rect.top + rect.height/2)) * 0.3;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        tx += (dx - tx) * 0.2;
        ty += (dy - ty) * 0.2;
        link.style.transform = `translate(${tx}px, ${ty}px)`;
      });
    });
    link.addEventListener('mouseleave', () => {
      cancelAnimationFrame(raf);
      let vx = tx, vy = ty;
      function spring() {
        vx += (0 - vx) * 0.15;
        vy += (0 - vy) * 0.15;
        link.style.transform = `translate(${vx}px, ${vy}px)`;
        if (Math.abs(vx) > 0.1 || Math.abs(vy) > 0.1) raf = requestAnimationFrame(spring);
        else link.style.transform = '';
      }
      raf = requestAnimationFrame(spring);
    });
  });
}

// ── Intersection observer ─────────────────────────────────────────────────

function initObserver() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('in');
      obs.unobserve(el);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.section-label, .exp-card, .about-paragraphs p, .about-footer, .open-category, .contact-headline, .contact-link, .contact-footer, .anim-x, .anim-up, .anim-fade').forEach(el => obs.observe(el));
}

// ── Hero reveal ───────────────────────────────────────────────────────────

function revealHero() {
  const words = document.querySelectorAll('#hero-headline .word');
  const dot = document.querySelector('#hero-headline .dot');
  const subline = document.getElementById('hero-subline');
  const scroll = document.getElementById('hero-scroll');
  const subText = CONTENT.hero.subline;

  words.forEach((w, i) => {
    setTimeout(() => w.classList.add('visible'), (300 + i * 60));
  });

  const dotDelay = 300 + words.length * 60;
  setTimeout(() => dot.classList.add('visible'), dotDelay);

  // Typewriter
  let charIdx = 0;
  const twDelay = dotDelay + 200;
  setTimeout(() => {
    const interval = setInterval(() => {
      charIdx++;
      subline.textContent = subText.slice(0, charIdx);
      if (charIdx >= subText.length) clearInterval(interval);
    }, 35);
  }, twDelay);

  const scrollDelay = twDelay + subText.length * 35 + 1500;
  setTimeout(() => scroll.classList.add('visible'), scrollDelay);
}

// ── Init ──────────────────────────────────────────────────────────────────

buildHero();
buildWork();
buildAbout();
buildOpen();
buildContact();

window.addEventListener('load', () => {
  revealHero();
  setTimeout(() => {
    initObserver();
    initMagnetic();
    updateUnderline('home');
  }, 200);
});
