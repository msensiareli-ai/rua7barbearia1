/* RUA 7 BARBEARIA - INTERACTIVE APPLICATION ENGINE */

const WHATSAPP_NUMBER = '5547984916562';
const NOME_BARBEARIA = 'Rua 7 Barbearia';

// DATA: SERVICES
const servicos = [
  {
    nome: 'Low Fade',
    desc: 'Degradê baixo clássico com acabamento impecável. Ideal para quem busca um visual limpo e moderno.',
    preco: 40,
    icon: `<svg viewBox="0 0 24 24"><path d="M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12h-4v3h-2v-3H7v-2h4v-3h2v3h4v2z"/></svg>`,
    tag: 'corte'
  },
  {
    nome: 'High Fade',
    desc: 'Degradê alto para um visual mais arrojado. Combinação perfeita de estilo e personalidade.',
    preco: 40,
    icon: `<svg viewBox="0 0 24 24"><path d="M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12h-4v3h-2v-3H7v-2h4v-3h2v3h4v2z"/></svg>`,
    tag: 'corte'
  },
  {
    nome: 'Skin Fade',
    desc: 'O degradê mais radical — pele à mostra nas laterais, zero na raiz. Arrojado e marcante.',
    preco: 40,
    icon: `<svg viewBox="0 0 24 24"><path d="M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12h-4v3h-2v-3H7v-2h4v-3h2v3h4v2z"/></svg>`,
    tag: 'corte'
  },
  {
    nome: 'Corte Clássico',
    desc: 'Tesoura e pente com estilo atemporal. Para quem quer elegância sem abrir mão do charme clássico.',
    preco: 40,
    icon: `<svg viewBox="0 0 24 24"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64C10 3.79 8.21 2 6 2S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4c2.21 0 4-1.79 4-4 0-.59-.13-1.14-.36-1.64L12 14l5.64 5.64c.5.23 1.05.36 1.64.36 2.21 0 4-1.79 4-4s-1.79-4-4-4c-.59 0-1.14.13-1.64.36L12 10l-2.36-2.36zM6 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>`,
    tag: 'corte'
  },
  {
    nome: 'Corte Navalhado',
    desc: 'Acabamento com navalha nas laterais e nuca. Precisão máxima e fios perfeitamente alinhados.',
    preco: 40,
    icon: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`,
    tag: 'corte'
  },
  {
    nome: 'Barba Completa',
    desc: 'Barba modelada com navalha, toalha quente e óleos premium. Um ritual relaxante de cavalheiro.',
    preco: 40,
    icon: `<svg viewBox="0 0 24 24"><path d="M12 3c-1.2 0-2.4 1.1-2.4 2.5 0 .2.1.4.1.6C7 6.7 5 8.7 5 11.2c0 2.2 1.4 4.1 3.3 4.8-.4 1.1-.9 2.1-1.6 3-.7.9-1.2 1.7-1.2 2.5 0 .8.6 1.5 1.5 1.5.7 0 1.2-.4 1.6-1 .9-1.2 1.6-2.6 2.1-4.2.8.2 1.6.3 2.3.3.7 0 1.5-.1 2.3-.3.5 1.6 1.2 3 2.1 4.2.4.6.9 1 1.6 1 .9 0 1.5-.7 1.5-1.5 0-.8-.5-1.6-1.2-2.5-.7-.9-1.2-1.9-1.6-3 1.9-.7 3.3-2.6 3.3-4.8 0-2.5-2-4.5-4.7-5.1.1-.2.1-.4.1-.6C14.4 4.1 13.2 3 12 3zm0 2.2c.4 0 .7.3.7.8s-.3.8-.7.8-.7-.3-.7-.8.3-.8.7-.8z"/></svg>`,
    tag: 'barba'
  },
  {
    nome: 'Cabelo + Barba',
    desc: 'O combo completo: corte moderno na medida certa mais barba desenhada na navalha e toalha quente.',
    preco: 70,
    icon: `<svg viewBox="0 0 24 24"><path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm-2-8h4v-2h-4v2zm4-6h-4V6h4v2z"/></svg>`,
    tag: 'combo'
  },
  {
    nome: 'Degradê + Risca',
    desc: 'Corte fade acompanhado de risca cirúrgica na navalha. Detalhes que fazem toda a diferença.',
    preco: 40,
    icon: `<svg viewBox="0 0 24 24"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64C10 3.79 8.21 2 6 2S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4c2.21 0 4-1.79 4-4 0-.59-.13-1.14-.36-1.64L12 14l5.64 5.64c.5.23 1.05.36 1.64.36 2.21 0 4-1.79 4-4s-1.79-4-4-4c-.59 0-1.14.13-1.64.36L12 10l-2.36-2.36z"/></svg>`,
    tag: 'corte'
  },
  {
    nome: 'Pigmentação Premium',
    desc: 'Alinhamento perfeito e cobertura de falhas com pigmentação de alta durabilidade e naturalidade.',
    preco: 40,
    icon: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/></svg>`,
    tag: 'tratamento'
  }
];

// DATA: BARBERS (EQUIPE)
const barbeiros = [
  {
    id: 'lucas',
    nome: 'Lucas',
    role: 'Especialista em Degradê & Linhas',
    img: './images/barber1.png',
    bio: 'Especialista em cortes modernos, degradês cirúrgicos e riscas personalizadas. Foco em precisão e alinhamento impecável.',
    rating: 5
  },
  {
    id: 'thiago',
    nome: 'Thiago',
    role: 'Mestre Visagista & Navalha',
    img: './images/barber2.png',
    bio: 'Especialista em barbas esculpidas, cortes clássicos na tesoura e técnicas refinadas na navalha com toalha quente.',
    rating: 5
  }
];

// DATA: WORKING HOURS CONFIG
const businessHours = {
  1: { open: 13, close: 19 }, // Segunda-feira
  2: { open: 9, close: 19 },  // Terça-feira
  3: { open: 9, close: 19 },  // Quarta-feira
  4: { open: 9, close: 19 },  // Quinta-feira
  5: { open: 9, close: 19 },  // Sexta-feira
  6: { open: 9, close: 19 },  // Sábado
  0: { open: 0, close: 0 }    // Domingo (Fechado)
};

const dayNamesPt = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

// APPLICATION STATE
let bookingState = {
  service: null,
  step: 1,
  barber: null,
  date: null,
  time: null
};

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  renderServicesGrid();
  renderTeamGrid();
  initCategoryFilters();
  initRealtimeStatus();
  initFaqAccordion();
  initScrollAnimations();
  initMobileNav();
  initBookingWizard();
  init3DCarousel();
});

// HEADER SCROLL EVENT
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// 1. RENDER SERVICES GRID
function renderServicesGrid() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;
  
  grid.innerHTML = servicos.map((s, index) => `
    <div class="service-card show" data-category="${s.tag}" onclick="openBookingWizard(${index})">
      <div class="service-num">${String(index + 1).padStart(2, '0')}</div>
      <div class="service-icon-wrapper">${s.icon}</div>
      <div class="service-name">${s.nome}</div>
      <p class="service-desc">${s.desc}</p>
      <div class="service-footer">
        <div class="service-price">R$ ${s.preco}<span>,00</span></div>
        <button class="btn-agendar" onclick="event.stopPropagation(); openBookingWizard(${index})">
          Agendar →
        </button>
      </div>
    </div>
  `).join('');
}

// 2. RENDER TEAM GRID (EQUIPE)
function renderTeamGrid() {
  const grid = document.getElementById('teamGrid');
  if (!grid) return;

  grid.innerHTML = barbeiros.map(b => `
    <div class="team-card reveal">
      <div class="team-img-wrapper">
        <img src="${b.img}" alt="${b.nome}" class="team-img" loading="lazy">
        <div class="team-img-overlay"></div>
      </div>
      <div class="team-info">
        <h3 class="team-name">${b.nome}</h3>
        <div class="team-role">${b.role}</div>
        <div class="team-rating">
          ${Array(b.rating).fill('<svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>').join('')}
        </div>
        <p class="team-bio">${b.bio}</p>
      </div>
    </div>
  `).join('');
}

// 3. CATEGORY FILTERS LOGIC
function initCategoryFilters() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Toggle Active Tab Class
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;
      const cards = document.querySelectorAll('.service-card');

      cards.forEach(card => {
        const cat = card.dataset.category;
        if (filter === 'all' || cat === filter) {
          card.classList.remove('hide');
          card.classList.add('show');
        } else {
          card.classList.remove('show');
          card.classList.add('hide');
        }
      });
    });
  });
}

// 4. REALTIME OPEN/CLOSED STATUS BANNER
function initRealtimeStatus() {
  const statusDot = document.getElementById('statusDot');
  const statusLabel = document.getElementById('statusLabel');
  
  if (!statusDot || !statusLabel) return;
  
  const now = new Date();
  const day = now.getDay();
  const hours = now.getHours();
  
  // Highlight Today in the Business Hours table
  const rows = document.querySelectorAll('.horario-row');
  // rows in HTML are arranged from Monday (index 0) to Sunday (index 6)
  // map JS getDay() [0: Sun, 1: Mon, ... 6: Sat] to rows:
  const rowMapping = [6, 0, 1, 2, 3, 4, 5]; // maps getDay() directly to 0-indexed HTML rows
  const todayRowIndex = rowMapping[day];
  if (rows[todayRowIndex]) {
    rows[todayRowIndex].classList.add('today');
  }

  const hoursConfig = businessHours[day];
  let isOpen = false;

  if (hoursConfig.open > 0 && hours >= hoursConfig.open && hours < hoursConfig.close) {
    isOpen = true;
  }

  if (isOpen) {
    statusDot.className = 'status-dot aberto';
    statusLabel.innerHTML = `ABERTO AGORA · Fecha às <span>${hoursConfig.close}:00</span>`;
  } else {
    statusDot.className = 'status-dot fechado';
    
    // Check when it opens next
    let nextOpenDay = day;
    let daysToAdd = 1;
    let nextOpenConfig = null;
    
    for (let i = 1; i <= 7; i++) {
      let checkDay = (day + i) % 7;
      if (businessHours[checkDay].open > 0) {
        nextOpenDay = checkDay;
        daysToAdd = i;
        nextOpenConfig = businessHours[checkDay];
        break;
      }
    }
    
    if (nextOpenConfig) {
      const dayText = daysToAdd === 1 ? 'Amanhã' : dayNamesPt[nextOpenDay];
      statusLabel.innerHTML = `FECHADO AGORA · Abre ${dayText} às <span>${nextOpenConfig.open}:00</span>`;
    } else {
      statusLabel.innerHTML = `FECHADO AGORA`;
    }
  }
}

// 5. FAQ ACCORDION LOGIC
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      // Toggle active state for current clicked
      const isActive = item.classList.contains('active');
      
      // Close all other FAQs
      faqItems.forEach(i => i.classList.remove('active'));
      
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// 6. SCROLL ANIMATIONS (Intersection Observer)
function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Trigger once
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    reveals.forEach(el => observer.observe(el));
  } else {
    // Fallback if no observer support
    reveals.forEach(el => el.classList.add('active'));
  }
}

// 7. MOBILE NAVIGATION SYSTEM
function initMobileNav() {
  const burger = document.getElementById('btnMenuMobile');
  const overlay = document.getElementById('mobileNavOverlay');
  const drawerLinks = document.querySelectorAll('.mobile-nav-links a');
  
  if (!burger || !overlay) return;

  function toggleMenu() {
    overlay.classList.toggle('active');
  }

  burger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) toggleMenu();
  });
  
  drawerLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
}

// 8. BOOKING WIZARD SYSTEM (MODAL EN ETAPAS)
function initBookingWizard() {
  const overlay = document.getElementById('modalOverlay');
  const btnNext = document.getElementById('btnModalNext');
  const btnBack = document.getElementById('btnModalBack');
  
  if (!overlay || !btnNext || !btnBack) return;

  // Event: Back Button Click
  btnBack.addEventListener('click', () => {
    if (bookingState.step > 1) {
      goToStep(bookingState.step - 1);
    }
  });

  // Event: Next / Confirm Button Click
  btnNext.addEventListener('click', () => {
    if (bookingState.step === 1) {
      if (!bookingState.barber) {
        alert('Por favor, escolha um barbeiro para continuar.');
        return;
      }
      goToStep(2);
    } else if (bookingState.step === 2) {
      if (!bookingState.date || !bookingState.time) {
        alert('Por favor, selecione a data e o horário desejados.');
        return;
      }
      buildSummary();
      goToStep(3);
    }
  });
}

// OPEN BOOKING WIZARD
function openBookingWizard(serviceIndex) {
  const selectedService = servicos[serviceIndex];
  bookingState = {
    service: selectedService,
    step: 1,
    barber: null,
    date: null,
    time: null
  };

  // Set initial modal details
  document.getElementById('modalTitle').textContent = selectedService.nome;
  document.getElementById('modalPrice').innerHTML = `R$ ${selectedService.preco}<span>,00</span>`;
  
  // Render sub-options
  renderBarberOptions();
  renderDateTimeSelectors();
  
  // Reset buttons
  const btnNext = document.getElementById('btnModalNext');
  btnNext.innerHTML = `Continuar →`;
  btnNext.className = 'btn-modal-next';
  btnNext.href = 'javascript:void(0)';
  btnNext.removeAttribute('target');
  
  document.getElementById('btnModalBack').style.display = 'none';

  // Go to step 1 and display modal
  goToStep(1);
  document.getElementById('modalOverlay').classList.add('active');
}

// CLOSE BOOKING WIZARD
function closeBookingWizard() {
  document.getElementById('modalOverlay').classList.remove('active');
}

// NAVIGATION BETWEEN WIZARD STEPS
function goToStep(stepNum) {
  bookingState.step = stepNum;

  // Toggle step panels
  document.querySelectorAll('.modal-step').forEach(panel => {
    panel.classList.remove('active');
  });
  document.getElementById(`modalStep${stepNum}`).classList.add('active');

  // Update Progress Bar
  const steps = document.querySelectorAll('.progress-step');
  steps.forEach((step, idx) => {
    const stepVal = idx + 1;
    step.className = 'progress-step';
    if (stepVal < stepNum) {
      step.classList.add('completed');
    } else if (stepVal === stepNum) {
      step.classList.add('active');
    }
  });

  const fillPercentage = ((stepNum - 1) / (steps.length - 1)) * 100;
  document.getElementById('progressBarFill').style.width = `${fillPercentage}%`;

  // Update Action Buttons
  const btnBack = document.getElementById('btnModalBack');
  const btnNext = document.getElementById('btnModalNext');

  if (stepNum === 1) {
    btnBack.style.display = 'none';
    btnNext.innerHTML = `Continuar →`;
    btnNext.className = 'btn-modal-next';
  } else if (stepNum === 2) {
    btnBack.style.display = 'block';
    btnNext.innerHTML = `Continuar →`;
    btnNext.className = 'btn-modal-next';
  } else if (stepNum === 3) {
    btnBack.style.display = 'block';
    btnNext.innerHTML = `<svg viewBox="0 0 24 24" style="width:16px;height:16px;fill:currentColor;"><path d="M12.03 21.496c-.015 0-.03-.004-.045-.004C6.98 21.05 3 16.923 3 12c0-4.963 4.037-9 9-9 4.963 0 9 4.037 9 9 0 4.923-3.98 9.05-8.985 9.492-.015 0-.03.004-.045.004-.334.004-.428.256-.47.371-.237.665-.77 2.138-1.503 2.138-.732 0-1.266-1.473-1.503-2.138-.04-.115-.136-.367-.47-.371zM12 4.5c-4.136 0-7.5 3.364-7.5 7.5 0 4.07 3.25 7.42 7.28 7.496.064 0 .114.045.132.106.184.609.52 1.58.98 1.848.334.195.428-.256.47-.371a7.487 7.487 0 0 1 7.28-7.496c.064 0 .114-.045.132-.106.184-.609.52-1.58.98-1.848.334-.195.428.256.47.371A7.48 7.48 0 0 1 12 4.5zM6.5 12h11v1.5H6.5V12z"/></svg> Confirmar no WhatsApp`;
    btnNext.className = 'btn-modal-next whatsapp-btn';
    btnNext.target = '_blank';
    btnNext.href = buildWhatsAppFinalUrl();
  }
}

// STEP 1: RENDER BARBER SELECTION OPTIONS
function renderBarberOptions() {
  const container = document.getElementById('barberOptionsContainer');
  if (!container) return;

  let html = barbeiros.map(b => `
    <div class="barber-opt" onclick="selectBarber('${b.id}')" id="opt-barber-${b.id}">
      <img src="${b.img}" alt="${b.nome}" class="barber-opt-avatar">
      <div class="barber-opt-info">
        <div class="barber-opt-name">${b.nome}</div>
        <div class="barber-opt-role">${b.role}</div>
      </div>
      <div class="barber-opt-check">
        <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
      </div>
    </div>
  `).join('');

  // Add "Qualquer Profissional" option
  html += `
    <div class="barber-opt" onclick="selectBarber('qualquer')" id="opt-barber-qualquer">
      <div class="barber-opt-avatar-any">
        <svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
      </div>
      <div class="barber-opt-info">
        <div class="barber-opt-name">Qualquer Barbeiro</div>
        <div class="barber-opt-role">O primeiro horário disponível</div>
      </div>
      <div class="barber-opt-check">
        <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

// SELECT BARBER
function selectBarber(barberId) {
  bookingState.barber = barberId;
  
  // Highlight selection
  document.querySelectorAll('.barber-opt').forEach(opt => opt.classList.remove('selected'));
  document.getElementById(`opt-barber-${barberId}`).classList.add('selected');
}

// STEP 2: RENDER DYNAMIC DATE & TIME SLOTS
function renderDateTimeSelectors() {
  const dateContainer = document.getElementById('dateOptionsContainer');
  const timeContainer = document.getElementById('timeSlotsContainer');
  
  if (!dateContainer || !timeContainer) return;

  // Generate the next 4 working days (skipping Sundays)
  const workingDays = [];
  let currentDate = new Date();
  
  // Let's check 7 days ahead to find 4 working days
  for (let i = 0; i < 7; i++) {
    if (workingDays.length >= 4) break;
    
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0) { // Skip Sunday (0)
      const dayNum = currentDate.getDate();
      const monthNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
      const monthStr = monthNames[currentDate.getMonth()];
      const wdayNamesShort = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
      const wdayStr = wdayNamesShort[dayOfWeek];
      
      const formattedDate = `${dayNum} ${monthStr}`;
      
      workingDays.push({
        label: formattedDate,
        weekday: wdayStr,
        fullDate: `${dayNamesPt[dayOfWeek]}, ${dayNum} de ${monthStr}`
      });
    }
    
    // Move to next day
    currentDate.setDate(currentDate.getDate() + 1);
  }

  // Render Date Buttons
  dateContainer.innerHTML = workingDays.map((d, index) => `
    <div class="date-opt" onclick="selectDate('${d.fullDate}', ${index})" id="opt-date-${index}">
      <div class="date-opt-wday">${d.weekday}</div>
      <div class="date-opt-day">${d.label.split(' ')[0]}</div>
    </div>
  `).join('');

  // Render Time Slots (Simulated active slots)
  const slots = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
  timeContainer.innerHTML = slots.map((t, index) => `
    <div class="time-slot" onclick="selectTime('${t}', ${index})" id="opt-time-${index}">
      ${t}
    </div>
  `).join('');
}

// SELECT DATE
function selectDate(dateLabel, idx) {
  bookingState.date = dateLabel;
  document.querySelectorAll('.date-opt').forEach(opt => opt.classList.remove('selected'));
  document.getElementById(`opt-date-${idx}`).classList.add('selected');
}

// SELECT TIME
function selectTime(timeStr, idx) {
  bookingState.time = timeStr;
  document.querySelectorAll('.time-slot').forEach(opt => opt.classList.remove('selected'));
  document.getElementById(`opt-time-${idx}`).classList.add('selected');
}

// STEP 3: BUILD SUMMARY
function buildSummary() {
  document.getElementById('sumService').textContent = bookingState.service.nome;
  document.getElementById('sumPrice').textContent = `R$ ${bookingState.service.preco},00`;
  
  let barberText = 'Qualquer Barbeiro (Primeiro disponível)';
  if (bookingState.barber !== 'qualquer') {
    const b = barbeiros.find(x => x.id === bookingState.barber);
    if (b) barberText = b.nome;
  }
  
  document.getElementById('sumBarber').textContent = barberText;
  document.getElementById('sumDate').textContent = bookingState.date;
  document.getElementById('sumTime').textContent = bookingState.time;
  
  // Update WhatsApp Button link dynamically
  const btnNext = document.getElementById('btnModalNext');
  btnNext.href = buildWhatsAppFinalUrl();
}

// BUILD WHATSAPP FINAL MESSAGE URL
function buildWhatsAppFinalUrl() {
  if (!bookingState.service) return '#';
  
  let barberName = 'Qualquer Barbeiro';
  if (bookingState.barber !== 'qualquer') {
    const b = barbeiros.find(x => x.id === bookingState.barber);
    if (b) barberName = b.nome;
  }
  
  const msg = `Olá, *${NOME_BARBEARIA}*! 👋\n\nGostaria de solicitar um agendamento feito pelo site:\n\n💈 *Serviço:* ${bookingState.service.nome}\n💰 *Valor:* R$ ${bookingState.service.preco},00\n✂️ *Barbeiro:* ${barberName}\n📅 *Data:* ${bookingState.date}\n🕐 *Horário:* ${bookingState.time}\n\nPor favor, confirmem se este horário está disponível! 📅`;
  
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// GLOBAL CLOSING ACTION FOR MODAL
function closeModal() {
  closeBookingWizard();
}

// Close on background overlay click
document.getElementById('modalOverlay').addEventListener('click', function(e) {
  if (e.target === this) closeBookingWizard();
});

// Close on ESC key press
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeBookingWizard();
});

// 9. DYNAMIC 3D ROTATING CAROUSEL (Dribbble Showcase Showcase)
function init3DCarousel() {
  const spinner = document.getElementById('carousel3DSpinner');
  const wrapper = document.getElementById('carousel3DWrapper');
  const btnPrev = document.getElementById('btn3DPrev');
  const btnNext = document.getElementById('btn3DNext');
  const heroSection = document.getElementById('hero3DSection');
  
  if (!spinner || !wrapper || !btnPrev || !btnNext || !heroSection) return;
  
  let currentAngle = 0;
  let isDragging = false;
  let startX = 0;
  let dragAngle = 0;
  let autoRotateInterval = null;
  
  // Update rotation helper
  function updateRotation(extraAngle = 0) {
    spinner.style.transform = `rotateY(${currentAngle + extraAngle}deg)`;
  }
  
  // Auto-rotation logic
  function startAutoRotation() {
    stopAutoRotation();
    autoRotateInterval = setInterval(() => {
      currentAngle -= 120;
      updateRotation();
    }, 4000);
  }
  
  function stopAutoRotation() {
    if (autoRotateInterval) {
      clearInterval(autoRotateInterval);
      autoRotateInterval = null;
    }
  }
  
  // Navigation button event listeners
  btnPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    stopAutoRotation();
    currentAngle += 120;
    updateRotation();
    startAutoRotation();
  });
  
  btnNext.addEventListener('click', (e) => {
    e.stopPropagation();
    stopAutoRotation();
    currentAngle -= 120;
    updateRotation();
    startAutoRotation();
  });
  
  // DRAG GESTURE (Mouse)
  wrapper.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return; // drag only with left click
    initDrag(e.clientX);
  });
  
  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    handleDrag(e.clientX);
  });
  
  window.addEventListener('mouseup', () => {
    if (isDragging) endDrag();
  });
  
  // DRAG GESTURE (Touch for Mobile)
  wrapper.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) initDrag(e.touches[0].clientX);
  }, { passive: true });
  
  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    if (e.touches.length > 0) handleDrag(e.touches[0].clientX);
  }, { passive: true });
  
  window.addEventListener('touchend', () => {
    if (isDragging) endDrag();
  });
  
  // DRAG ENGINE INNER METHODS
  function initDrag(clientX) {
    isDragging = true;
    startX = clientX;
    dragAngle = 0;
    stopAutoRotation();
    
    // Make spinner highly responsive by reducing transition during dragging
    spinner.style.transition = 'transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)';
  }
  
  function handleDrag(clientX) {
    const deltaX = clientX - startX;
    // Map pixels to angles (e.g. 1px = 0.45 degrees)
    dragAngle = deltaX * 0.45;
    updateRotation(dragAngle);
  }
  
  function endDrag() {
    isDragging = false;
    
    // Restore smooth transition
    spinner.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    
    // Snap to the nearest card (multiple of 120 deg)
    const finalAngle = currentAngle + dragAngle;
    const snappedAngle = Math.round(finalAngle / 120) * 120;
    
    currentAngle = snappedAngle;
    updateRotation();
    startAutoRotation();
  }
  
  // MOUSE TILT PARALLAX (Dribbble 3D Hologram Effect)
  heroSection.addEventListener('mousemove', (e) => {
    if (isDragging) return; // Disable parallax tilt during drags
    
    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Tilt angle configuration (max 15 degrees)
    const tiltX = -(y / rect.height) * 15;
    const tiltY = (x / rect.width) * 15;
    
    wrapper.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    wrapper.style.transition = 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)';
  });
  
  heroSection.addEventListener('mouseleave', () => {
    // Smooth reset tilt on exit
    wrapper.style.transform = `rotateX(0deg) rotateY(0deg)`;
    wrapper.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
  });
  
  // Pause carousel rotation when mouse is hovering the wrapper (focus)
  wrapper.addEventListener('mouseenter', stopAutoRotation);
  wrapper.addEventListener('mouseleave', () => {
    if (!isDragging) startAutoRotation();
  });
  
  // Start the auto carousel engine
  startAutoRotation();
}
