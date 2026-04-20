/* ============================================================
   CHATBOT JS - Universidad Sergio Arboleda Santa Marta
   ============================================================ */

(function () {
  'use strict';

  /* ── Knowledge Base ──────────────────────────────────────── */
  const KB = [
    {
      patterns: ['hola', 'hi', 'buenos', 'buenas', 'buen día', 'saludos', 'hey'],
      response: '¡Hola! 👋 Soy **Sergio**, el asistente virtual de la Universidad Sergio Arboleda Santa Marta. ¿En qué puedo ayudarte hoy?',
      replies: ['Ver programas', 'Admisiones', 'Costos de matrícula', 'Contacto']
    },
    {
      patterns: ['programa', 'carrera', 'pregrado', 'licenciatura', 'ingeniería', 'derecho', 'administración', 'psicología', 'comunicación'],
      response: '📚 Ofrecemos los siguientes **programas de pregrado**:\n\n• Derecho\n• Administración de Empresas y Transformación Digital\n• Contaduría Pública\n• Finanzas, Fintech y Comercio Exterior\n• Marketing y Negocios Internacionales\n• Comunicación Social y Periodismo\n• Diseño Digital\n• Ingeniería Industrial\n• Psicología\n\n¿Te interesa alguno en especial?',
      replies: ['Posgrados', 'Educación Continuada', 'Ver admisiones']
    },
    {
      patterns: ['posgrado', 'maestría', 'especialización', 'postgrado'],
      response: '🎓 Contamos con **posgrados** en múltiples áreas:\n\n**Área jurídica:** Derecho Administrativo, Derecho Penal, Contratación Estatal, entre otros.\n\n**Área administrativa:** Gerencia Financiera, Gerencia Logística, Gestión Humana y más.\n\n**Área de comunicación:** Comunicación Estratégica.\n\n¿Quieres información de algún posgrado específico?',
      replies: ['Pregrados', 'Educación Continuada', 'Solicitar info']
    },
    {
      patterns: ['educación continuada', 'diplomado', 'curso', 'seminario', 'extensión'],
      response: '📖 En **Educación Continuada** ofrecemos:\n\n• Diplomados en Derecho, Comunicación, Psicología y más\n• Cursos cortos y seminarios especializados\n• Preparación Prueba Saber 11°\n• Cursos en Excel, Marketing Político y otros\n\nSon programas flexibles para actualizar tus conocimientos. ¿Te interesa alguno?',
      replies: ['Ver programas', 'Costos', 'Contacto']
    },
    {
      patterns: ['admision', 'inscripcion', 'inscribir', 'matricular', 'ingresar', 'estudiar', 'cómo entro'],
      response: '📋 El **proceso de admisión** es sencillo:\n\n1️⃣ Diligencia el formulario de inscripción en línea\n2️⃣ Entrega los documentos requeridos\n3️⃣ Realiza la prueba de admisión (si aplica)\n4️⃣ Espera los resultados y formaliza tu matrícula\n\n¿Quieres que te explique los documentos necesarios o las fechas de inscripción?',
      replies: ['Documentos requeridos', 'Fechas de inscripción', 'Costos de matrícula']
    },
    {
      patterns: ['document', 'requisito', 'qué necesito'],
      response: '📄 Los **documentos generales** para admisión son:\n\n• Fotocopia del documento de identidad\n• Diploma o acta de grado bachillerato\n• Resultado de las Pruebas Saber 11°\n• Formulario de inscripción diligenciado\n• Foto tamaño documento\n\n*Los requisitos pueden variar según el programa. Te recomendamos confirmar con admisiones.*',
      replies: ['Ver admisiones', 'Costos de matrícula', 'Contacto']
    },
    {
      patterns: ['costo', 'valor', 'precio', 'matrícula', 'cuanto cuesta', 'cuánto vale'],
      response: '💰 Los **valores de matrícula** varían según el programa y semestre. En general:\n\n• Los costos se actualizan cada período académico\n• Contamos con **descuentos** por mérito, convenios empresariales y beneficios especiales\n• Opciones de **financiación** con entidades aliadas (ICETEX, bancos, créditos internos)\n\nPara conocer el valor exacto de tu programa, te recomendamos contactarnos directamente. 😊',
      replies: ['Descuentos disponibles', 'Opciones de financiación', 'Contacto']
    },
    {
      patterns: ['descuento', 'beca', 'beneficio'],
      response: '🌟 Contamos con varios **descuentos y beneficios**:\n\n• Descuento por pago anticipado\n• Convenios con empresas y gremios\n• Beneficios para egresados de La Sergio\n• Apoyo para deportistas destacados\n• Descuentos por hermanos matriculados simultáneamente\n\n¿Quieres saber si aplicas a alguno de estos beneficios?',
      replies: ['Financiación', 'Admisiones', 'Contacto']
    },
    {
      patterns: ['finan', 'crédito', 'icetex', 'pago'],
      response: '💳 Opciones de **financiación disponibles**:\n\n• **ICETEX:** Crédito educativo con tasa preferencial\n• **Crédito bancario:** Alianzas con Bancolombia, Davivienda y otros\n• **Crédito interno:** Financiación directa con la universidad\n• **Pago por cuotas:** Fraccionamiento del semestre\n\nNuestros asesores te guiarán en el proceso. ¿Deseas que te contacten?',
      replies: ['Sí, quiero ser contactado', 'Ver descuentos', 'Más info']
    },
    {
      patterns: ['virtual', 'distancia', 'online', 'remoto', 'e-learning'],
      response: '💻 Tenemos **programas virtuales** de pregrado y posgrado:\n\n**Pregrados virtuales:**\n• Negocios Digitales\n• Licenciatura en Pedagogía Digital para la Primera Infancia\n• Tecnología en Publicidad Digital\n\n**Posgrados virtuales:**\n• Maestría en Innovación en Derecho Digital y Legal Tech\n• Maestría en Didáctica Digital\n\n¿Cuál te interesa?',
      replies: ['Admisiones virtual', 'Costos', 'Contacto']
    },
    {
      patterns: ['contacto', 'teléfono', 'dirección', 'email', 'correo', 'whatsapp', 'sede', 'donde quedan'],
      response: '📍 **Contáctanos:**\n\n📞 Teléfono: (605) 325-7500\n📧 Email: informacion.sm@usergioarboleda.edu.co\n📌 Dirección: Calle 44 #14B-23, El Prado, Santa Marta\n🕐 Horario: Lunes a viernes 7am–6pm, Sábados 8am–12pm\n\n¿Hay algo más en lo que pueda ayudarte?',
      replies: ['Ver programas', 'Admisiones', 'Volver al inicio']
    },
    {
      patterns: ['bienestar', 'deporte', 'cultura', 'psicología', 'salud', 'servicios'],
      response: '🏫 **Servicios de Bienestar Universitario:**\n\n• Atención psicológica y salud mental\n• Actividades deportivas y culturales\n• Grupos artísticos y semilleros de investigación\n• Bolsa de empleo para egresados\n• Centro de idiomas (inglés, francés y más)\n• Biblioteca y recursos digitales\n\n¿Quieres más información sobre algún servicio?',
      replies: ['Centro de idiomas', 'Biblioteca', 'Contacto']
    },
    {
      patterns: ['idioma', 'inglés', 'frances', 'alemán', 'lengua'],
      response: '🌐 El **Centro de Idiomas** ofrece:\n\n• Inglés (niveles básico a avanzado)\n• Francés, Alemán y otros idiomas\n• Preparación para certificaciones internacionales (TOEFL, Cambridge)\n• Clases presenciales y virtuales\n\n¡Mejorar tu inglés puede abrir muchas puertas! ¿Deseas inscribirte?',
      replies: ['Costos idiomas', 'Más programas', 'Contacto']
    },
    {
      patterns: ['gracias', 'thank', 'perfecto', 'listo', 'ok', 'entendido', 'genial'],
      response: '¡Con mucho gusto! 😊 Si tienes más preguntas, aquí estaré. ¿Hay algo más en lo que pueda ayudarte?',
      replies: ['Ver programas', 'Contacto', 'Nada más, gracias']
    },
    {
      patterns: ['adiós', 'bye', 'hasta luego', 'chao', 'nos vemos', 'nada más'],
      response: '¡Hasta luego! 👋 Fue un placer atenderte. Si en cualquier momento necesitas información, aquí estaré. ¡Que tengas un excelente día! 🎓',
      replies: []
    }
  ];

  const DEFAULT_RESPONSE = {
    text: 'Hmm, no estoy seguro de cómo ayudarte con eso. Puedo orientarte sobre programas académicos, admisiones, costos, servicios y más. ¿Sobre qué tema te puedo ayudar?',
    replies: ['Ver programas', 'Admisiones', 'Costos de matrícula', 'Contacto']
  };

  /* ── Helpers ─────────────────────────────────────────────── */
  function getTime() {
    return new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
  }

  function normalize(str) {
    return str.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[¿?¡!.,;:]/g, '');
  }

  function findAnswer(input) {
    const norm = normalize(input);
    for (const entry of KB) {
      for (const pattern of entry.patterns) {
        if (norm.includes(normalize(pattern))) {
          return { text: entry.response, replies: entry.replies || [] };
        }
      }
    }
    return { text: DEFAULT_RESPONSE.text, replies: DEFAULT_RESPONSE.replies };
  }

  function formatText(text) {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  /* ── DOM Injection ───────────────────────────────────────── */
  function buildHTML() {
    const el = document.createElement('div');
    el.id = 'chatbot-root';
    el.innerHTML = `
      <!-- Toggle Button -->
      <button id="chatbot-toggle" aria-label="Abrir chat">
        <span id="chatbot-badge">1</span>
        <!-- Chat icon -->
        <svg class="icon-chat" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-6 11H7v-2h7v2zm3-4H7V7h10v2z"/>
        </svg>
        <!-- Close icon -->
        <svg class="icon-close" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </button>

      <!-- Chat Window -->
      <div id="chatbot-window" role="dialog" aria-label="Chat de soporte">
        <!-- Header -->
        <div id="chatbot-header">
          <div class="chat-avatar">
            <svg viewBox="0 0 24 24"><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z"/></svg>
          </div>
          <div class="chat-header-info">
            <p class="chat-header-name">Sergio IA</p>
            <p class="chat-header-status">
              <span class="status-dot"></span> En línea ahora
            </p>
          </div>
          <div class="chat-header-actions">
            <button class="chat-header-btn" id="chat-minimize-btn" aria-label="Minimizar">
              <svg viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg>
            </button>
          </div>
        </div>

        <!-- Quick Topics -->
        <div id="chatbot-topics">
          <button class="topic-chip" data-topic="Ver programas">🎓 Programas</button>
          <button class="topic-chip" data-topic="Admisiones">📋 Admisiones</button>
          <button class="topic-chip" data-topic="Costos de matrícula">💰 Costos</button>
          <button class="topic-chip" data-topic="Educación virtual">💻 Virtual</button>
          <button class="topic-chip" data-topic="Contacto">📍 Contacto</button>
        </div>

        <!-- Messages -->
        <div id="chatbot-messages" aria-live="polite" aria-atomic="false"></div>

        <!-- Input -->
        <div id="chatbot-input-area">
          <textarea
            id="chatbot-input"
            placeholder="Escribe tu mensaje..."
            rows="1"
            maxlength="500"
            aria-label="Mensaje"
          ></textarea>
          <button id="chatbot-send" aria-label="Enviar mensaje">
            <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </button>
        </div>

        <!-- Footer -->
        <div id="chatbot-footer">
          Asistente virtual · <a href="https://www.usergioarboleda.edu.co/santamarta/" target="_blank">Universidad Sergio Arboleda</a>
        </div>
      </div>
    `;
    document.body.appendChild(el);
  }

  /* ── Message Rendering ───────────────────────────────────── */
  function addMessage(type, text, replies = []) {
    const msgs = document.getElementById('chatbot-messages');
    const row = document.createElement('div');
    row.className = `msg-row ${type}`;

    const time = getTime();

    if (type === 'bot') {
      let replyHTML = '';
      if (replies.length) {
        replyHTML = `<div class="quick-replies">${
          replies.map(r => `<button class="qr-btn" data-qr="${r}">${r}</button>`).join('')
        }</div>`;
      }

      row.innerHTML = `
        <div class="msg-avatar-sm">
          <svg viewBox="0 0 24 24"><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z"/></svg>
        </div>
        <div class="msg-bubble">
          ${formatText(text)}
          ${replyHTML}
          <span class="msg-time">${time}</span>
        </div>
      `;
    } else {
      row.innerHTML = `
        <div class="msg-bubble">
          ${formatText(text)}
          <span class="msg-time">${time}</span>
        </div>
      `;
    }

    msgs.appendChild(row);
    msgs.scrollTop = msgs.scrollHeight;

    // Bind quick reply buttons
    row.querySelectorAll('.qr-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        handleUserInput(btn.dataset.qr);
      });
    });
  }

  function showTyping() {
    const msgs = document.getElementById('chatbot-messages');
    const row = document.createElement('div');
    row.className = 'msg-row bot';
    row.id = 'typing-indicator-row';
    row.innerHTML = `
      <div class="msg-avatar-sm">
        <svg viewBox="0 0 24 24"><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z"/></svg>
      </div>
      <div class="typing-indicator">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    `;
    msgs.appendChild(row);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function removeTyping() {
    const el = document.getElementById('typing-indicator-row');
    if (el) el.remove();
  }

  /* ── Core Logic ──────────────────────────────────────────── */
  function handleUserInput(text) {
    if (!text.trim()) return;

    // Show user message
    addMessage('user', text);

    // Disable input while responding
    const input = document.getElementById('chatbot-input');
    const send  = document.getElementById('chatbot-send');
    if (input) { input.value = ''; input.style.height = 'auto'; }
    if (send)  send.disabled = true;

    // Show typing indicator
    showTyping();

    // Simulate response delay (800–1500ms)
    const delay = 800 + Math.random() * 700;
    setTimeout(() => {
      removeTyping();
      const answer = findAnswer(text);
      addMessage('bot', answer.text, answer.replies);
      if (send) send.disabled = false;
      if (input) input.focus();
    }, delay);
  }

  /* ── Events ──────────────────────────────────────────────── */
  function bindEvents() {
    const toggle  = document.getElementById('chatbot-toggle');
    const window_ = document.getElementById('chatbot-window');
    const badge   = document.getElementById('chatbot-badge');
    const input   = document.getElementById('chatbot-input');
    const send    = document.getElementById('chatbot-send');
    const minBtn  = document.getElementById('chat-minimize-btn');

    // Toggle open/close
    toggle.addEventListener('click', () => {
      const isOpen = window_.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      if (badge) badge.style.display = 'none';
      if (isOpen && input) setTimeout(() => input.focus(), 350);
    });

    // Minimize button
    if (minBtn) {
      minBtn.addEventListener('click', () => {
        window_.classList.remove('open');
        toggle.classList.remove('open');
      });
    }

    // Topic chips
    document.querySelectorAll('.topic-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        handleUserInput(chip.dataset.topic);
      });
    });

    // Send on button click
    send.addEventListener('click', () => {
      handleUserInput(input.value.trim());
    });

    // Send on Enter (Shift+Enter = newline)
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleUserInput(input.value.trim());
      }
    });

    // Auto-resize textarea
    input.addEventListener('input', () => {
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 100) + 'px';
    });
  }

  /* ── Init ────────────────────────────────────────────────── */
  function init() {
    // Inject CSS
    const link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = 'chatbot.css';
    document.head.appendChild(link);

    // Build HTML
    buildHTML();

    // Bind events
    bindEvents();

    // Welcome message (after short delay)
    setTimeout(() => {
      addMessage(
        'bot',
        '¡Hola! 👋 Soy **Sergio**, el asistente virtual de la Universidad Sergio Arboleda Santa Marta. Estoy aquí para ayudarte con información sobre programas, admisiones, costos y más. ¿En qué puedo ayudarte?',
        ['Ver programas', 'Admisiones', 'Costos de matrícula', 'Contacto']
      );
    }, 600);
  }

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
