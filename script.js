/**
 * NEXUS PLATFORM - INTERACTIVE JAVASCRIPT
 * Includes Navigation, Scrollspy, 3D Tilt, Spotlight, Counters, Tabs, Form Validation,
 * Video Modal, and Instant Bilingual Support (ქართული / English).
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Language Switcher (Georgian <-> English)
  initLanguageSwitcher();

  // 2. Mobile Menu Toggle
  initMobileMenu();

  // 3. Header Scroll Effect & Scrollspy
  initHeaderAndScrollspy();

  // 4. 3D Tilt Effect on Hero Dashboard
  initTiltEffect();

  // 5. Bento Card Mouse Spotlight
  initSpotlightEffect();

  // 6. Animated Number Counters
  initNumberCounters();

  // 7. Feature Category Filtering
  initFeatureTabs();

  // 8. FAQ Accordion Toggle
  initFaqAccordion();

  // 9. Contact Form Validation & Toast Notification
  initContactForm();

  // 10. Video Demo Modal
  initDemoModal();

  // 11. Back to Top Button
  initBackToTop();

  // 12. Scroll Reveal Animations
  initScrollReveal();
});

/* ==========================================================================
   1. BILINGUAL LANGUAGE SWITCHER (GEORGIAN <-> ENGLISH)
   ========================================================================== */
const translations = {
  ka: {
    nav_home: 'მთავარი',
    nav_about: 'ჩვენ შესახებ',
    nav_features: 'ფუნქციები',
    nav_contact: 'კონტაქტი',
    btn_get_started: 'დაწყება',
    hero_badge: 'Nexus 2.0 ძრავი უკვე აქტიურია',
    hero_badge_link: 'გაიგე მეტი',
    hero_title_1: 'ინოვაციური პლატფორმა',
    hero_title_2: 'მომავლის გუნდებისთვის',
    hero_desc: 'გააერთიანეთ მონაცემები, გაამარტივეთ ოპერაციები და გაზარდეთ პროდუქტიულობა AI-ზე დაფუძნებული ინტელექტუალური და რეალურ დროში მომუშავე ანალიტიკური ხელსაწყოებით.',
    hero_btn_trial: 'უფასო 14-დღიანი ცდა',
    hero_btn_demo: 'დემოს ნახვა',
    perk_1: 'საკრედიტო ბარათი არ არის საჭირო',
    perk_2: 'მარტივი 5-წუთიანი დაყენება',
    perk_3: 'გაუქმება ნებისმიერ დროს',
    badge_traffic: 'მონაცემთა დამუშავება',
    badge_latency: 'დაყოვნება (Latency)',
    trusted_by: 'ენდობა 10,000+ წამყვანი ტექნოლოგიური კომპანია მსოფლიოში',
    badge_about: 'ჩვენ შესახებ',
    about_title: 'შექმნილია ექსტრემალური სისწრაფისთვის, დახვეწილია მაქსიმალური სიცხადისთვის.',
    about_desc: 'თანამედროვე ციფრულ ეპოქაში სიჩქარე გადამწყვეტია. Nexus აერთიანებს მოწინავე მონაცემთა ინფრასტრუქტურას და ხელოვნურ ინტელექტს, რათა თქვენმა გუნდმა მილიწამებში შეძლოს სწორი გადაწყვეტილებების მიღება.',
    pillar_1_title: 'ულტრა-სწრაფი ძრავი',
    pillar_1_desc: 'მონაცემთა დამუშავება ერთნიშნა მილიწამებში, მილიარდობით ჩანაწერზე მყისიერი წვდომით.',
    pillar_2_title: 'Zero-Trust უსაფრთხოება',
    pillar_2_desc: 'აპარატურული დონის დაშიფვრა, ავტომატური SOC-2 და ISO სტანდარტების სრული შესაბამისობა.',
    pillar_3_title: 'ავტონომიური AI თვითგანკურნება',
    pillar_3_desc: 'AI ალგორითმები ავტომატურად აფიქსირებენ ანომალიებს, აბალანსებენ დატვირთვას და ოპტიმიზაციას უკეთებენ სისტემას.',
    stats_header: 'რეალურ დროში სისტემის მეტრიკა',
    stats_sync: 'ავტო-სინქრონიზაცია',
    stat_uptime: 'გარანტირებული Uptime SLA',
    stat_latency: 'გლობალური დაყოვნება',
    stat_events: 'მოვლენა / წამში',
    stat_pops: 'Edge სერვერები',
    quote_text: 'Nexus-ის დანერგვამ ჩვენი ინციდენტების მოგვარების დრო 45 წუთიდან 90 წამამდე შეამცირა. ეს არის უმაღლესი დონის ინსტრუმენტი, რაც კი ოდესმე გამოგვიყენებია.',
    quote_author: 'დავით კვარაცხელია',
    quote_role: 'ინფრასტრუქტურის ხელმძღვანელი, CloudScale',
    badge_features: 'ძირითადი ფუნქციები',
    features_title_1: 'შექმნილია თანამედროვე ტემპისთვის.',
    features_title_2: 'შეუზღუდავი მასშტაბირება.',
    features_desc: 'ავტომატური მილსადენებიდან რეალურ დროში ინციდენტების მართვამდე — ყველა მოდული შექმნილია პრემიუმ საიმედოობით.',
    tab_all: 'ყველა მოდული',
    tab_analytics: 'ანალიტიკა',
    tab_automation: 'AI & ავტომატიზაცია',
    tab_security: 'უსაფრთხოება',
    bento_badge_ai: 'AI COPILOT',
    bento_1_title: 'ავტონომიური კოდის და მოთხოვნების სინთეზატორი',
    bento_1_desc: 'ბუნებრივი ენიდან რთულ ოპტიმიზებულ მოთხოვნებამდე. დაუსვით შეკითხვა Nexus-ს მარტივ ენაზე და AI გენერირებს ოპტიმალურ SQL/GraphQL სტრუქტურას.',
    bento_2_title: 'მიკროწამიანი ტელემეტრია',
    bento_2_desc: 'პროცესორის, მეხსიერების, ქსელური ტრაფიკის და სოკეტების ვიზუალიზაცია 1-წამიანი სიზუსტით.',
    bento_3_title: 'ენკლავური კრიპტოგრაფია',
    bento_3_desc: 'მთლიანი მონაცემების კლიენტის მხარეს დაშიფვრა. თქვენი მონაცემების შინაარსი ხელმისაწვდომია მხოლოდ თქვენთვის.',
    bento_4_title: 'ეკოსისტემის კონექტორები',
    bento_4_desc: 'ერთი დაწკაპუნებით მიერთება თქვენს ბაზებთან, Kafka-სთან, Redis-თან და ღრუბლოვან სერვისებთან.',
    bento_badge_multiplayer: 'MULTIPLAYER COLLABORATION',
    bento_5_title: 'გუნდური სამუშაო სივრცე ინციდენტების სამართავად',
    bento_5_desc: 'არასოდეს მოაგვაროთ სერვერის პრობლემები მარტომ. Nexus გთავაზობთ საერთო ინტერაქტიულ სამუშაო დაფას, სადაც ინჟინრები რეალურ დროში თანამშრომლობენ.',
    badge_contact: 'დაგვიკავშირდით',
    contact_title_1: 'ავაშენოთ თქვენი ინფრასტრუქტურის',
    contact_title_2: 'მომავალი ერთად.',
    contact_desc: 'გაქვთ შეკითხვები დემო ვერსიის, საწარმოო ინტეგრაციების ან პერსონალიზებული პაკეტების შესახებ? ჩვენი ინჟინრები გიპასუხებენ 15 წუთში.',
    contact_desk_status: 'მხარდაჭერის გუნდი ონლაინშია • საშუალო პასუხი: 4 წუთი',
    contact_email_title: 'პირდაპირი ელ-ფოსტა',
    contact_address_title: 'ოფისის მისამართი',
    contact_address: 'ჭავჭავაძის გამზ. 37, თბილისი',
    contact_phone_title: 'ცხელი ხაზი',
    faq_title: 'ხშირად დასმული კითხვები',
    faq_q1: 'როგორ მუშაობს 14-დღიანი საცდელი პერიოდი?',
    faq_a1: 'თქვენ იღებთ სრულ წვდომას Enterprise ფუნქციებზე: შეუზღუდავი წევრები, მილიწამიანი ანალიტიკა და რეალური API გასაღებები. საბანკო ბარათი არ მოითხოვება.',
    faq_q2: 'შესაძლებელია თუ არა Nexus-ის შიდა სერვერზე (On-Premise) გაშვება?',
    faq_a2: 'დიახ, ჩვენი საწარმოო პაკეტი მხარს უჭერს VPC და On-Premise განთავსებას Kubernetes (K8s), AWS EKS, GCP GKE ან დახურულ შიდა ქსელებში.',
    faq_q3: 'რამდენი დრო სჭირდება მონაცემთა მიგრაციას?',
    faq_a3: 'კომპანიების უმრავლესობა ინტეგრაციას ასრულებს 48 საათში ჩვენი ავტომატური სქემის რეპლიკაციის აგენტების დახმარებით.',
    form_title: 'გამოგვიგზავნეთ შეტყობინება',
    form_subtitle: 'შეავსეთ ქვემოთ მოცემული ველები და ჩვენი გუნდი დაუყოვნებლივ დაგიკავშირდებათ.',
    label_name: 'სახელი და გვარი',
    label_email: 'სამუშაო ელ-ფოსტა',
    label_team_size: 'გუნდის ზომა',
    label_interest: 'ინტერესის სფერო',
    label_message: 'პროექტის დეტალები',
    label_newsletter: 'გამომიგზავნეთ ტექნოლოგიური სიახლეები და არქიტექტურული სტატიები.',
    btn_submit: 'მოთხოვნის გაგზავნა',
    form_security_note: '🔒 დაცულია TLS 1.3 უსაფრთხოების პროტოკოლით. მონაცემები არ გადაეცემა მესამე პირებს.',
    footer_desc: 'ახალი თაობის ღრუბლოვანი ანალიტიკა, ავტონომიური მონიტორინგი და რეალურ დროში მონაცემთა აჩქარება.',
    footer_col_product: 'პროდუქტი',
    footer_col_arch: 'არქიტექტურა',
    footer_col_company: 'კომპანია',
    system_status: 'ყველა გლობალური სისტემა ფუნქციონირებს'
  },
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_features: 'Features',
    nav_contact: 'Contact',
    btn_get_started: 'Get Started',
    hero_badge: 'Nexus 2.0 Engine is Live',
    hero_badge_link: 'Explore Features',
    hero_title_1: 'Intelligent Platform for',
    hero_title_2: 'Next-Generation Teams',
    hero_desc: 'Unify data pipelines, automate high-frequency workflows, and supercharge engineering velocity with our distributed, AI-orchestrated analytics engine.',
    hero_btn_trial: 'Start Free 14-Day Trial',
    hero_btn_demo: 'Watch Demo',
    perk_1: 'No credit card required',
    perk_2: 'Instant 5-minute setup',
    perk_3: 'Cancel anytime',
    badge_traffic: 'Real-Time Ingestion',
    badge_latency: 'Mean Latency',
    trusted_by: 'TRUSTED BY 10,000+ HIGH-VELOCITY ENGINEERING TEAMS',
    badge_about: 'ABOUT NEXUS',
    about_title: 'Engineered for extreme speed, designed for absolute clarity.',
    about_desc: 'Modern engineering demands immediate insights. Nexus merges cutting-edge data architecture with autonomous AI, enabling teams to diagnose complex anomalies in single-digit milliseconds.',
    pillar_1_title: 'Sub-Millisecond Engine',
    pillar_1_desc: 'In-memory columnar indexing allowing instant multi-tenant queries across billions of records.',
    pillar_2_title: 'Zero-Trust Boundary',
    pillar_2_desc: 'Hardware enclave encryption, automated SOC-2 Type II and ISO compliance verifications.',
    pillar_3_title: 'Autonomous Self-Healing',
    pillar_3_desc: 'AI algorithms detect telemetry drift, rebalance shards, and self-heal degraded clusters.',
    stats_header: 'LIVE GLOBAL NETWORK METRICS',
    stats_sync: 'Auto-syncing',
    stat_uptime: 'Guaranteed SLA Uptime',
    stat_latency: 'Global Query Latency',
    stat_events: 'Events Processed / Sec',
    stat_pops: 'Edge PoP Data Centers',
    quote_text: 'Nexus reduced our incident triage time from 45 minutes to 90 seconds. It is the single highest leverage tool our devops group has integrated in a decade.',
    quote_author: 'David Kvaratskhelia',
    quote_role: 'VP of Infrastructure, CloudScale',
    badge_features: 'CORE CAPABILITIES',
    features_title_1: 'Built for modern engineering speed.',
    features_title_2: 'Zero configuration bottlenecks.',
    features_desc: 'From automated event ingestion to real-time incident remediation — every module is engineered for uncompromising resilience.',
    tab_all: 'All Modules',
    tab_analytics: 'Analytics',
    tab_automation: 'AI & Automation',
    tab_security: 'Security',
    bento_badge_ai: 'AI COPILOT',
    bento_1_title: 'Autonomous Code & Query Synthesizer',
    bento_1_desc: 'Natural language to production-grade distributed queries. Instruct Nexus in plain English and receive verified SQL blueprints.',
    bento_2_title: 'Microsecond Telemetry',
    bento_2_desc: 'Instant visualization of CPU, memory, socket streams, and bandwidth with 1-second resolution.',
    bento_3_title: 'Enclave Cryptography',
    bento_3_desc: 'Complete client-side zero-knowledge encryption. Your data payloads remain fully private to your organization.',
    bento_4_title: 'Ecosystem Connectors',
    bento_4_desc: 'One-click native ingestion for Postgres, Kafka, Snowflake, Redis, and multi-cloud architectures.',
    bento_badge_multiplayer: 'MULTIPLAYER COLLABORATION',
    bento_5_title: 'Collaborative Workspace for Incident Warfare',
    bento_5_desc: 'Never triage outages in isolation. Shared multiplayer canvas where teams diagnose anomalies concurrently.',
    badge_contact: 'GET IN TOUCH',
    contact_title_1: "Let's build the future of",
    contact_title_2: 'your infrastructure.',
    contact_desc: 'Have questions regarding custom high-volume deployments or enterprise SLAs? Our specialist engineers respond in under 15 minutes.',
    contact_desk_status: 'Engineering Desk Online • Average response: 4 mins',
    contact_email_title: 'Direct Enterprise Inquiries',
    contact_address_title: 'Global Headquarters',
    contact_address: '37 Chavchavadze Ave, Tbilisi',
    contact_phone_title: 'Direct Line',
    faq_title: 'Frequently Asked Questions',
    faq_q1: 'How does the 14-day trial work?',
    faq_a1: 'You receive full access to Enterprise features, unlimited seats, and live production API keys. No payment info is required.',
    faq_q2: 'Can we self-host Nexus on our VPC?',
    faq_a2: 'Yes. Our enterprise plan supports air-gapped VPC deployment via Helm charts on Kubernetes, AWS EKS, GCP GKE, and on-premise clusters.',
    faq_q3: 'What is your typical migration timeline?',
    faq_a3: 'Most customers complete full telemetry ingestion and dashboard parity within 48 hours using our automated schema replication agents.',
    form_title: 'Send a direct dispatch',
    form_subtitle: 'Fill out the parameters below and our engineering team will get back to you promptly.',
    label_name: 'Full Name',
    label_email: 'Work Email',
    label_team_size: 'Engineering Size',
    label_interest: 'Primary Interest',
    label_message: 'Project Details & Requirements',
    label_newsletter: 'Send me quarterly architecture whitepapers and performance benchmarks.',
    btn_submit: 'Submit Request',
    form_security_note: '🔒 Strictly protected by TLS 1.3 encryption. We never share customer information.',
    footer_desc: 'Next-generation telemetry, autonomous AI monitoring, and real-time data acceleration for high-scale teams.',
    footer_col_product: 'Product',
    footer_col_arch: 'Architecture',
    footer_col_company: 'Company',
    system_status: 'All Global Systems Operational'
  }
};

let currentLang = 'ka';

function initLanguageSwitcher() {
  const toggleBtn = document.getElementById('lang-toggle-btn');
  const langLabel = document.getElementById('current-lang-text');

  // Check saved language
  const saved = localStorage.getItem('nexus_lang');
  if (saved && (saved === 'ka' || saved === 'en')) {
    currentLang = saved;
    applyLanguage(currentLang);
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'ka' ? 'en' : 'ka';
      localStorage.setItem('nexus_lang', currentLang);
      applyLanguage(currentLang);
    });
  }

  function applyLanguage(lang) {
    if (langLabel) {
      langLabel.textContent = lang === 'ka' ? 'GEO' : 'ENG';
    }
    document.documentElement.lang = lang;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }
}

/* ==========================================================================
   2. MOBILE MENU
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !mobileMenu) return;

  function toggleMenu(isOpen) {
    const active = isOpen !== undefined ? isOpen : !toggleBtn.classList.contains('active');
    toggleBtn.classList.toggle('active', active);
    toggleBtn.setAttribute('aria-expanded', active);
    mobileMenu.classList.toggle('open', active);
    mobileMenu.setAttribute('aria-hidden', !active);
  }

  toggleBtn.addEventListener('click', () => toggleMenu());

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  document.addEventListener('click', (e) => {
    if (!toggleBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      toggleMenu(false);
    }
  });
}

/* ==========================================================================
   3. HEADER & SCROLLSPY
   ========================================================================== */
function initHeaderAndScrollspy() {
  const header = document.getElementById('main-header');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    let currentId = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
      });
    }
  }, { passive: true });
}

/* ==========================================================================
   4. 3D TILT EFFECT ON HERO DASHBOARD
   ========================================================================== */
function initTiltEffect() {
  const card = document.getElementById('tilt-card');
  if (!card || window.innerWidth < 768) return;

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
}

/* ==========================================================================
   5. BENTO CARD MOUSE SPOTLIGHT
   ========================================================================== */
function initSpotlightEffect() {
  const cards = document.querySelectorAll('.spotlight-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ==========================================================================
   6. ANIMATED NUMBER COUNTERS
   ========================================================================== */
function initNumberCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-target'));
          const decimals = parseInt(counter.getAttribute('data-decimals') || '0', 10);
          const duration = 1800;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = target * easeOutProgress;

            counter.textContent = currentVal.toFixed(decimals);

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target.toFixed(decimals);
            }
          }

          requestAnimationFrame(updateCounter);
        });
      }
    });
  }, { threshold: 0.25 });

  const statsSection = document.querySelector('.about-stats-wrapper');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

/* ==========================================================================
   7. FEATURE CATEGORY TABS
   ========================================================================== */
function initFeatureTabs() {
  const tabs = document.querySelectorAll('.feature-tab');
  const cards = document.querySelectorAll('.bento-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filter = tab.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden-card');
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 50);
        } else {
          card.classList.add('hidden-card');
        }
      });
    });
  });
}

/* ==========================================================================
   8. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      accordionItems.forEach(other => {
        other.classList.remove('active');
        other.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   9. CONTACT FORM VALIDATION & SUBMISSION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('nexus-contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  const charCounter = document.getElementById('char-counter');
  const submitBtn = document.getElementById('submit-btn');

  if (!form) return;

  if (messageInput && charCounter) {
    messageInput.addEventListener('input', () => {
      charCounter.textContent = `${messageInput.value.length} / 500`;
    });
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function setError(input, errorId, hasError) {
    const errorEl = document.getElementById(errorId);
    if (hasError) {
      input.classList.add('error');
      if (errorEl) errorEl.classList.add('visible');
    } else {
      input.classList.remove('error');
      if (errorEl) errorEl.classList.remove('visible');
    }
  }

  [nameInput, emailInput, messageInput].forEach(input => {
    if (!input) return;
    input.addEventListener('input', () => {
      input.classList.remove('error');
      const err = document.getElementById(`${input.id.replace('contact-', '')}-error`);
      if (err) err.classList.remove('visible');
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    if (!nameInput.value.trim()) {
      setError(nameInput, 'name-error', true);
      isValid = false;
    } else {
      setError(nameInput, 'name-error', false);
    }

    if (!validateEmail(emailInput.value.trim())) {
      setError(emailInput, 'email-error', true);
      isValid = false;
    } else {
      setError(emailInput, 'email-error', false);
    }

    if (messageInput.value.trim().length < 10) {
      setError(messageInput, 'message-error', true);
      isValid = false;
    } else {
      setError(messageInput, 'message-error', false);
    }

    if (!isValid) return;

    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;

      const toastTitle = currentLang === 'ka' ? 'შეტყობინება გაგზავნილია!' : 'Dispatch Transmitted!';
      const toastMsg = currentLang === 'ka' 
        ? `ჩვენი ინჟინრები დაგიკავშირდებიან მისამართზე: ${emailInput.value} 15 წუთის განმავლობაში.`
        : `Our engineering specialists will contact you at ${emailInput.value} within 15 minutes.`;

      showToast(toastTitle, toastMsg);

      form.reset();
      if (charCounter) charCounter.textContent = '0 / 500';
    }, 1200);
  });
}

function showToast(title, message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg class="toast-icon" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
    </svg>
    <div class="toast-content">
      <h5>${title}</h5>
      <p>${message}</p>
    </div>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 350);
  }, 5000);
}

/* ==========================================================================
   10. SHOWREEL VIDEO MODAL
   ========================================================================== */
function initDemoModal() {
  const openBtn = document.getElementById('open-demo-modal');
  const modal = document.getElementById('video-modal');
  const closeBtn = document.getElementById('close-modal');

  if (!openBtn || !modal || !closeBtn) return;

  function openModal() {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   11. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   12. SCROLL REVEAL ANIMATIONS
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-item');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px 50px 0px'
  });

  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('revealed');
    } else {
      observer.observe(el);
    }
  });
}
