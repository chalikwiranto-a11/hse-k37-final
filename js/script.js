/* ═══════════════════════════════════════════════════════════════
   HSE PORTAL — MAIN JAVASCRIPT
   Mobile menu · Smooth scroll · Scroll reveal · Gallery filter
   Active nav · Counter animation · Fake API simulation
   ═══════════════════════════════════════════════════════════════ */

'use strict';

/* ── 1. NAVBAR — Scroll behaviour & transparency ──────────────── */
(function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  function isMobile() { return window.innerWidth <= 768; }

  function updateNavbar() {
    if (isMobile()) {
      // Always solid background on mobile
      navbar.classList.add('scrolled');
      navbar.classList.remove('transparent');
      return;
    }
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('transparent');
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.add('transparent');
    }
  }

  updateNavbar();
  window.addEventListener('scroll', updateNavbar, { passive: true });
  window.addEventListener('resize', updateNavbar, { passive: true });
})();

/* ── 2. HAMBURGER — Mobile menu toggle ───────────────────────── */
(function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;

  function openMenu() {
    hamburger.classList.add('open');
    navLinks.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // prevent background scroll
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    if (navLinks.classList.contains('open')) closeMenu();
    else openMenu();
  });

  // Close on nav link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });
})();

/* ── 3. ACTIVE NAV LINK — Highlight current page ────────────── */
(function initActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* ── 4. SMOOTH SCROLL for anchor links ───────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || '72');
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - navH - 16,
      behavior: 'smooth',
    });
  });
});

/* ── 5. SCROLL REVEAL — Intersection Observer ────────────────── */
(function initScrollReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Don't unobserve — keep visible once revealed
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    observer.observe(el);
  });
})();

/* ── 6. COUNTER ANIMATION ─────────────────────────────────────── */
(function initCounters() {
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count || el.textContent.replace(/\D/g, ''), 10);
      if (isNaN(target)) return;

      const suffix = el.dataset.suffix || '';
      let start = 0;
      const duration = 1800;
      const step = 16;
      const increment = target / (duration / step);

      const timer = setInterval(() => {
        start = Math.min(start + increment, target);
        el.textContent = Math.floor(start).toLocaleString() + suffix;
        if (start >= target) clearInterval(timer);
      }, step);

      counterObserver.unobserve(el);
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));
})();

/* ── 7. GALLERY FILTER ────────────────────────────────────────── */
(function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const cards      = document.querySelectorAll('.gallery-card');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const category = card.dataset.category || 'all';
        const show = filter === 'all' || category === filter;
        card.style.transition = 'opacity 0.3s, transform 0.3s';
        if (show) {
          card.style.opacity    = '1';
          card.style.transform  = 'scale(1)';
          card.style.display    = '';
        } else {
          card.style.opacity    = '0';
          card.style.transform  = 'scale(0.95)';
          setTimeout(() => {
            if (btn.dataset.filter !== filter) return;
            if (card.dataset.category !== filter && filter !== 'all') {
              card.style.display = 'none';
            }
          }, 300);
        }
      });
    });
  });
})();

/* ── 8. BACK TO TOP ───────────────────────────────────────────── */
(function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ══════════════════════════════════════════════════════════════
   GALLERY VERSION — naikkan angka ini setiap kali ada perubahan data
   Saat versi berubah, localStorage lama otomatis dihapus di semua device
   ══════════════════════════════════════════════════════════════ */
const GALLERY_VERSION = 'v3';
const GALLERY_VERSION_KEY = 'hse_gallery_version';

(function checkVersion() {
  // Cek apakah admin melakukan force reset
  const forceVersion = localStorage.getItem('hse_gallery_force_version');
  const storedVersion = localStorage.getItem(GALLERY_VERSION_KEY);

  const needsReset =
    storedVersion !== GALLERY_VERSION ||
    (forceVersion && forceVersion !== storedVersion);

  if (needsReset) {
    localStorage.removeItem('hse_gallery_photos');
    localStorage.setItem(GALLERY_VERSION_KEY, forceVersion || GALLERY_VERSION);
    localStorage.removeItem('hse_gallery_force_version');
    console.log('[HSE Gallery] Cache direset, memuat data terbaru...');
  }
})();

/* ══════════════════════════════════════════════════════════════
   HSE PHOTO GALLERY DATA
   ══════════════════════════════════════════════════════════════
   CARA GANTI FOTO — edit nilai `img:` di setiap objek:

   Foto lokal  →  img: 'images/nama-file.jpg'
                  (taruh file di folder /images/)

   URL online  →  img: 'https://...'
                  (Unsplash / Imgur / Google Drive / server)

   Backend     →  img: 'http://localhost:3000/uploads/file.jpg'
   ══════════════════════════════════════════════════════════════ */
const HSE_PHOTOS_DATA = [

  /* ── SAFETY ──────────────────────────────────────────────────── */
  {
    id: 1,
    title: 'PPE Inspection at Drilling Floor',
    location: 'Drilling Floor A-3',
    category: 'safety',
    date: '2025-05-12',
    tag: 'PPE',
    tagClass: 'tag-blue',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=75&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Emergency Muster Drill — Assembly Point C',
    location: 'Assembly Point C',
    category: 'safety',
    date: '2025-05-04',
    tag: 'Safety Drill',
    tagClass: 'tag-amber',
    img: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?w=600&q=75&auto=format&fit=crop',
  },
  {
    id: 7,
    title: 'Scaffolding Inspection — Block C Level 4',
    location: 'Construction Block C, Level 4',
    category: 'safety',
    date: '2025-04-30',
    tag: 'Inspection',
    tagClass: 'tag-navy',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75&auto=format&fit=crop',
  },
  {
    id: 10,
    title: 'Safety Toolbox Talk — Morning Briefing',
    location: 'Site Office, Block A',
    category: 'safety',
    date: '2025-04-22',
    tag: 'Toolbox Talk',
    tagClass: 'tag-blue',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=75&auto=format&fit=crop',
  },
  {
    id: 11,
    title: 'Working at Height — Permit Active',
    location: 'Scaffolding Zone 2, Level 6',
    category: 'safety',
    date: '2025-04-18',
    tag: 'Height Work',
    tagClass: 'tag-red',
    img: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&q=75&auto=format&fit=crop',
  },
  {
    id: 12,
    title: 'Fire Extinguisher Monthly Check',
    location: 'Warehouse B — Bay 3',
    category: 'safety',
    date: '2025-04-15',
    tag: 'Fire Safety',
    tagClass: 'tag-red',
    img: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=600&q=75&auto=format&fit=crop',
  },

  /* ── HEALTH ──────────────────────────────────────────────────── */
  {
    id: 2,
    title: 'Annual Health Screening — Q2 2025',
    location: 'Medical Clinic, Block B',
    category: 'health',
    date: '2025-05-10',
    tag: 'Health Check',
    tagClass: 'tag-green',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=75&auto=format&fit=crop',
  },
  {
    id: 8,
    title: 'Fitness to Work Assessment',
    location: 'HR Medical Suite, Level 1',
    category: 'health',
    date: '2025-04-28',
    tag: 'FTW',
    tagClass: 'tag-green',
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=75&auto=format&fit=crop',
  },
  {
    id: 13,
    title: 'Vaccination Program — Hepatitis B',
    location: 'Occupational Health Clinic',
    category: 'health',
    date: '2025-04-20',
    tag: 'Vaccination',
    tagClass: 'tag-green',
    img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=75&auto=format&fit=crop',
  },
  {
    id: 14,
    title: 'Mental Health Awareness Campaign',
    location: 'Cafeteria, Block C',
    category: 'health',
    date: '2025-04-10',
    tag: 'Wellness',
    tagClass: 'tag-blue',
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=75&auto=format&fit=crop',
  },

  /* ── ENVIRONMENT ─────────────────────────────────────────────── */
  {
    id: 3,
    title: 'Waste Segregation Area Audit',
    location: 'Waste Management Zone 3',
    category: 'environment',
    date: '2025-05-08',
    tag: 'Waste Mgmt',
    tagClass: 'tag-green',
    img: 'https://images.unsplash.com/photo-1542601906897-edc8359b7b2c?w=600&q=75&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Water Quality Monitoring — Effluent',
    location: 'Effluent Treatment Plant',
    category: 'environment',
    date: '2025-05-02',
    tag: 'Water Quality',
    tagClass: 'tag-blue',
    img: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&q=75&auto=format&fit=crop',
  },
  {
    id: 15,
    title: 'Tree Planting — Reforestation Program',
    location: 'Site Perimeter, North Zone',
    category: 'environment',
    date: '2025-04-24',
    tag: 'Reforestation',
    tagClass: 'tag-green',
    img: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&q=75&auto=format&fit=crop',
  },
  {
    id: 16,
    title: 'Ambient Air Quality Monitoring',
    location: 'Site Boundary — Station 4',
    category: 'environment',
    date: '2025-04-14',
    tag: 'Air Quality',
    tagClass: 'tag-navy',
    img: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&q=75&auto=format&fit=crop',
  },

  /* ── PERMIT ──────────────────────────────────────────────────── */
  {
    id: 4,
    title: 'Hot Work Permit — Welding Operation',
    location: 'Tank Farm Area 7',
    category: 'permit',
    date: '2025-05-06',
    tag: 'Hot Work',
    tagClass: 'tag-red',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75&auto=format&fit=crop',
  },
  {
    id: 9,
    title: 'Confined Space Entry — Tank Cleaning',
    location: 'Storage Tank T-12',
    category: 'permit',
    date: '2025-04-26',
    tag: 'Confined Space',
    tagClass: 'tag-amber',
    img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&q=75&auto=format&fit=crop',
  },
  {
    id: 17,
    title: 'Electrical Isolation — LOTO Procedure',
    location: 'Substation B, Panel Room',
    category: 'permit',
    date: '2025-04-16',
    tag: 'Electrical',
    tagClass: 'tag-blue',
    img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=75&auto=format&fit=crop',
  },
  {
    id: 18,
    title: 'Critical Lift — 50-Ton Crane Operation',
    location: 'Module Yard, Area 5',
    category: 'permit',
    date: '2025-04-08',
    tag: 'Lifting Ops',
    tagClass: 'tag-navy',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75&auto=format&fit=crop',
  },
];

/* ── Fallback gradient backgrounds (shown if image fails to load) */
const FALLBACK_BG = {
  safety:      'linear-gradient(135deg, #1a3a7c, #3e92cc)',
  health:      'linear-gradient(135deg, #155724, #2dc653)',
  environment: 'linear-gradient(135deg, #0a4a30, #1fa36e)',
  permit:      'linear-gradient(135deg, #7a1010, #e63946)',
};

const GAS_URL = 'https://script.google.com/macros/s/AKfycby6YeMcOnDAxLgF_wFsDfjtuc5IyRO1uBFLAhDiRCYTrBcshVPtcqJ4ve684PnTRCJkig/exec';

/**
 * Mengambil data foto.
 * Membaca langsung dari Google Sheets Database.
 */
async function fetchHsePhotos(params = {}) {
  let data = [];

  try {
    const res = await fetch(GAS_URL);
    data = await res.json();
    
    // Jika data kosong atau error dari server, gunakan default
    if (!Array.isArray(data) || data.length === 0) {
      data = [...HSE_PHOTOS_DATA];
    }
  } catch (err) {
    console.error('[HSE Gallery] Error fetching from server. Fallback to default.', err);
    data = [...HSE_PHOTOS_DATA];
  }

  if (params.category && params.category !== 'all') {
    data = data.filter(p => p.category === params.category);
  }

  return { data, total: data.length };
}

/**
 * Render gallery cards with real <img> tags + graceful fallback.
 * @param {HTMLElement} container
 * @param {Array} photos
 */
function renderGalleryCards(container, photos) {
  if (!container) return;

  if (!photos.length) {
    container.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:64px 24px;color:var(--text-muted);">
        <div style="font-size:48px;margin-bottom:16px;">📭</div>
        <div style="font-size:16px;font-weight:600;color:var(--text-secondary);">No photos found for this category</div>
      </div>`;
    return;
  }

  container.innerHTML = photos.map(photo => `
    <div class="gallery-card reveal" data-category="${photo.category}">

      <div class="gallery-card-img">
        <!-- Real photo image -->
        <img
          src="${photo.img}"
          alt="${photo.title}"
          loading="lazy"
          decoding="async"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
        />
        <!-- Fallback shown only if image fails -->
        <div class="gallery-img-fallback" style="display:none;background:${FALLBACK_BG[photo.category] || '#0a2463'};">
          ${photo.category === 'safety'      ? '⛑️' :
            photo.category === 'health'      ? '🏥' :
            photo.category === 'environment' ? '🌿' : '📋'}
        </div>

        <!-- Category badge -->
        <span class="gallery-card-category tag ${photo.tagClass}">${photo.tag}</span>

        <!-- Hover overlay -->
        <div class="gallery-card-overlay">
          <div class="gallery-card-overlay-text">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${photo.location}
          </div>
        </div>
      </div>

      <div class="gallery-card-body">
        <div class="gallery-card-title">${photo.title}</div>
        <div class="gallery-card-meta">
          <span class="gallery-card-meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${photo.location}
          </span>
          <span class="gallery-card-meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            ${formatDate(photo.date)}
          </span>
        </div>
      </div>

    </div>
  `).join('');

  // Trigger scroll-reveal on freshly inserted cards
  setTimeout(() => {
    container.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }, 60);
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

/* ── 10. INITIALISE GALLERY on page load ─────────────────────── */
(async function initGallery() {
  const container = document.querySelector('.gallery-grid');
  if (!container) return;

  // Show skeleton
  container.innerHTML = Array(6).fill(`
    <div style="background:var(--bg-dark);border-radius:20px;overflow:hidden;border:1px solid var(--border);">
      <div style="aspect-ratio:4/3;background:linear-gradient(90deg,#eef1f6 25%,#e4e8f0 50%,#eef1f6 75%);background-size:200% 100%;animation:shimmer 1.4s infinite;"></div>
      <div style="padding:18px 20px;">
        <div style="height:16px;background:#eef1f6;border-radius:6px;margin-bottom:12px;width:70%;"></div>
        <div style="height:12px;background:#eef1f6;border-radius:6px;width:50%;"></div>
      </div>
    </div>
  `).join('');

  // Add shimmer keyframes
  if (!document.getElementById('shimmer-style')) {
    const style = document.createElement('style');
    style.id = 'shimmer-style';
    style.textContent = '@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}';
    document.head.appendChild(style);
  }

  try {
    const { data } = await fetchHsePhotos();
    renderGalleryCards(container, data);

    // Wire up filter buttons to use fake API
    document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        const { data: filtered } = await fetchHsePhotos({ category: filter });
        renderGalleryCards(container, filtered);
      });
    });
  } catch (err) {
    container.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--text-muted);">
        <div style="font-size:40px;margin-bottom:12px;">⚠️</div>
        <div>Failed to load photos. <a href="#" onclick="location.reload()" style="color:var(--secondary)">Retry</a></div>
      </div>`;
  }
})();
