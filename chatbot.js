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
      patterns: ['educación continuada', 'diplomado', 'curso', 'seminario', 'extensión', 'educacion continuada'],
      response: '📖 En **Educación Continuada** ofrecemos:\n\n• Diplomados en Derecho, Comunicación, Psicología y más\n• Cursos cortos y seminarios especializados\n• Preparación Prueba Saber 11°\n• Cursos en Excel, Marketing Político y otros\n\nSon programas flexibles para actualizar tus conocimientos. ¿Te interesa alguno?',
      replies: ['Ver programas', 'Costos', 'Contacto']
    },
    {
      patterns: ['admision', 'inscripcion', 'inscribir', 'matricular', 'ingresar', 'estudiar', 'cómo entro'],
      response: '📋 El **proceso de admisión** es sencillo:\n\n1️⃣ Diligencia el formulario en línea\n2️⃣ Entrega los documentos requeridos\n3️⃣ Realiza la prueba de admisión (si aplica)\n4️⃣ Espera los resultados y formaliza tu matrícula\n\n¿Quieres que te explique los documentos necesarios o las fechas de inscripción?',
      replies: ['Documentos requeridos', 'Fechas de inscripción', 'Costos de matrícula']
    },
    {
      patterns: ['document', 'requisito', 'qué necesito', 'que necesito'],
      response: '📄 Los **documentos generales** para admisión son:\n\n• Fotocopia del documento de identidad\n• Diploma o acta de grado bachillerato\n• Resultado de las Pruebas Saber 11°\n• Formulario de inscripción diligenciado\n• Foto tamaño documento\n\n*Los requisitos pueden variar según el programa.*',
      replies: ['Ver admisiones', 'Costos de matrícula', 'Contacto']
    },

    /* ── Costos específicos por programa ───────────────────── */
    {
      patterns: [
        'precio diseño', 'costo diseño', 'valor diseño', 'costo de diseño', 'precio de diseño', 'valor de diseño', 'valor del diseño', 'cuánto vale diseño', 'cuanto vale diseño', 'cuánto cuesta diseño', 'cuanto cuesta diseño', 'diseño digital precio', 'diseño digital costo', 'diseño digital valor', 'diseño digital cuánto'
      ],
      response: '🎨 El **valor de la matrícula** para **Diseño Digital** oscila entre **$5.7M y $6.5M** para el período 2025-2.\n\n• Contamos con opciones de financiación y becas por mérito con resultados Saber 11.\n• Programa innovador con enfoque global.',
      replies: ['Descuentos disponibles', 'Opciones de financiación', 'Hablar con un asesor']
    },
    {
      patterns: ['precio derecho', 'costo derecho', 'valor derecho', 'valor del derecho', 'costo de derecho', 'precio de derecho', 'cuánto vale derecho', 'cuanto cuesta derecho', 'derecho precio', 'derecho costo', 'derecho valor'],
      response: '⚖️ El **valor de la matrícula** para **Derecho** oscila entre **$8.2M y $9.5M** para 2025-2.\n\n• Programa de altísimo prestigio con Consultorio Jurídico disponible desde temprano.',
      replies: ['Descuentos disponibles', 'Hablar con un asesor']
    },
    {
      patterns: ['precio administracion', 'costo administracion', 'valor administracion', 'precio administración', 'cuanto vale administracion'],
      response: '💼 El **valor de la matrícula** para **Administración de Empresas y Transformación Digital** oscila entre **$7.0M y $8.2M**.\n\nFormamos líderes para la 4ta revolución industrial.',
      replies: ['Descuentos disponibles', 'Hablar con un asesor']
    },
    {
      patterns: ['precio psicologia', 'costo psicologia', 'valor psicologia', 'precio psicología', 'cuanto vale psicologia'],
      response: '🧠 El **valor de la matrícula** para **Psicología** oscila entre **$6.8M y $7.8M**.\n\nEl programa cuenta con un enfoque integral y prácticas presenciales directas.',
      replies: ['Opciones de financiación', 'Hablar con un asesor']
    },
    {
      patterns: ['precio comunicacion', 'costo comunicacion', 'valor comunicacion', 'precio comunicación', 'cuanto cuesta comunicacion'],
      response: '🎙️ El **valor de la matrícula** para **Comunicación Social y Periodismo** oscila entre **$6.2M y $7.0M**.\n\nPodrás usar estudios de TV, radio y edición de nivel profesional desde primer semestre.',
      replies: ['Descuentos disponibles', 'Hablar con un asesor']
    },
    {
      patterns: ['precio ingenieria', 'costo ingenieria', 'valor ingenieria', 'precio ingeniería', 'cuanto cuesta ingenieria'],
      response: '⚙️ El **valor de la matrícula** para **Ingeniería Industrial** oscila entre **$7.2M y $8.0M**.\n\nAcreditado por su alta calidad y laboratorios de manufactura.',
      replies: ['Descuentos disponibles', 'Hablar con un asesor']
    },
    {
      patterns: ['precio finanzas', 'costo finanzas', 'precio contaduria', 'costo contaduria', 'precio marketing', 'costo marketing'],
      response: '📊 El **valor de la matrícula** para programas de Finanzas, Contaduría y Marketing está entre **$5.8M y $6.8M** (referencia 2025-2).\n\nEnfoque en casos reales y bolsa de valores digital.',
      replies: ['Descuentos disponibles', 'Hablar con un asesor']
    },

    /* ── Costo Genérico (Fallback) ─────────────────────────── */
    {
      patterns: ['costo', 'valor', 'precio', 'matrícula', 'cuanto cuesta', 'cuánto vale', 'precio carrera', 'valor carrera'],
      response: '💰 Los **valores de matrícula** varían según el programa.\nPor ejemplo, van desde $5.7M (Diseño Digital) hasta opciones alrededor de $9.5M (Derecho).\n\n¿Qué carrera específica te gustaría cotizar?',
      replies: ['Precio Diseño Digital', 'Precio Derecho', 'Descuentos disponibles']
    },

    /* ── Descuentos ────────────────────────────────────────── */
    {
      patterns: ['descuento', 'beca', 'beneficio', 'financiación', 'financiacion', 'icetex', 'crédito', 'credito'],
      response: '🌟 **Beneficios económicos disponibles:**\n\n• **Descuento por mérito:** Según resultados Saber 11\n• **Convenio empresarial:** Trabajadores de empresas aliadas\n• **Hermanos sergistas:** Si un familiar ya estudia aquí\n• **ICETEX:** Financiación a largo plazo\n• **Banco Sergio:** Crédito interno 0% de interés\n\n📞 Asesoría personalizada: (605) 434 6444',
      replies: ['Hablar con un asesor']
    },

    {
      patterns: ['horario de atención', 'horario de atencion', 'cuándo abren', 'cuando abren', 'a qué hora abren'],
      response: '🕒 El **horario de atención** del campus es:\n\n**Lunes a Viernes:**\n8:00 a.m. - 12:00 m. y 2:00 p.m. - 6:00 p.m.\n\n**Sábados:**\n8:00 a.m. - 12:00 m.\n\nTambién contamos con atención virtual en las mismas franjas. ¿Necesitas nuestra dirección?',
      replies: ['Sede principal', 'Hablar con un asesor']
    },
    {
      patterns: ['calendario', 'calendario academico', 'calendario académico'],
      response: '📅 El **Calendario Académico** establece las fechas de inicio de clases, parciales y cierres de notas.\n\nPuedes descargarlo actualizado directamente desde nuestro sitio web o solicitar acompañamiento puntual.',
      replies: ['Hablar con un asesor']
    },
    {
      patterns: ['sede', 'dónde quedan', 'donde quedan', 'ubicación', 'ubicacion', 'dirección', 'direccion'],
      response: '📍 Nos encontramos en **Santa Marta**: \n\n• **Sede Principal:** Troncal del Caribe Km 4 vía a Gaira.\n• **Sede Centro:** Calle 18 # 14 - 18\n\n¿Deseas llegar en transporte público o privado?',
      replies: ['Horario de atención', 'Contacto']
    },
    {
      patterns: ['estudiante activo', 'soy estudiante', 'mis horarios', 'ver notas', 'ver mis notas', 'certificado', 'portal estudiantil'],
      response: '🎓 Como **Estudiante Activo**, tus plataformas principales son:\n\n• **Sistema Sapio:** Para consultar notas y matrícula.\n• **Portal Estudiantil:** Para descargar certificados sabanillas de pago.\n• **Moodle:** Para las aulas virtuales.\n\n¿De cuál sistema necesitas información o acceso?',
      replies: ['Hablar con un asesor']
    },
    {
      patterns: ['bienestar', 'bienestar universitario', 'deportes', 'cultura'],
      response: '🏃🏽‍♀️ **Bienestar Universitario** fomenta tu desarrollo integral. Ofrecemos:\n\n• Selecciones deportivas (Fútbol, Natación, Voleibol)\n• Talleres culturales (Música, Teatro)\n• Acompañamiento psicológico y asesoría académica.\n\n¿Te interesa inscribirte en alguna actividad?',
      replies: ['Hablar con un asesor']
    },
    {
      patterns: ['internacionalizacion', 'internacionalización', 'intercambio', 'viajar'],
      response: '🌍 Nuestro departamento de **Internacionalización** (ORI) te permite cursar semestres en el exterior, participar en escuelas de verano y aplicar a becas internacionales como Alianza del Pacífico.\n\nContamos con convenios en España, México, EE.UU. y más.',
      replies: ['Hablar con un asesor']
    },
    {
      patterns: ['padre', 'padres', 'soy padre', 'acudiente', 'pagos', 'recibo'],
      response: '👩‍👧‍👦 Bienvenidos, **Padres de Familia**.\nPara temas financieros:\n\n• La descarga de recibos se hace desde el Portal Estudiantil.\n• Ofrecemos reuniones y escuela para padres cada semestre.\n\n¿Buscan información financiera o académica de su hijo?',
      replies: ['Costo de matrícula', 'Financiación', 'Hablar con un asesor']
    },
    {
      patterns: ['contacto', 'teléfono', 'telefono', 'llamar', 'correo', 'email'],
      response: '📞 **Líneas de contacto**:\n\n**PBX:** (605) 434 6444\n**Email:** atencion.usuario@usa.edu.co\n\nSi deseas, puedo mostrarte alternativas para agendar o hablar con un asesor ahora mismo.',
      replies: ['Hablar con un asesor']
    },
    {
      patterns: ['gracias', 'muchas gracias', 'excelente', 'ok', 'vale'],
      response: '¡Con muchísimo gusto! 😊 Recuerda que estoy aquí 24/7 para resolver tus dudas. ¡Qué tengas un excelente día!',
      replies: []
    },
    {
      patterns: ['adiós', 'adios', 'chao', 'hasta luego', 'nos vemos'],
      response: '¡Hasta pronto! 👋 Fue un placer atenderte. Te esperamos en la Universidad Sergio Arboleda.',
      replies: []
    }
  ];

  /* ── Configuración ───────────────────────────────────────── */
  const DEFAULT_RESPONSE = {
    text: 'Hmm, no estoy seguro de cómo ayudarte con eso 🤔 Puedo orientarte sobre precios, admisiones, admisiones, o te puedo enlazar con un asesor.',
    replies: ['Precios', 'Admisiones', 'Hablar con un asesor']
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
    
    // 1st pass: exact pattern matching
    for (const entry of KB) {
      for (const pattern of entry.patterns) {
        if (norm.includes(normalize(pattern))) {
          return { text: entry.response, replies: entry.replies || [] };
        }
      }
    }

    // 2nd pass: multi-keyword intent detection
    const priceIntent = /precio|costo|valor|cuanto|cuánto|cuesta|vale/.test(norm);
    if (priceIntent) {
      const programMap = [
        { keywords: ['diseno', 'diseño'], idx: 6 }, // Diseño is at KB index 6
        { keywords: ['derecho'], idx: 7 },
        { keywords: ['administracion', 'administración'], idx: 8 },
        { keywords: ['psicolog'], idx: 9 },
        { keywords: ['comunicac'], idx: 10 },
        { keywords: ['ingenieria', 'ingeniería'], idx: 11 },
        { keywords: ['finanzas', 'marketing', 'contadur'], idx: 12 },
      ];

      for (const { keywords, idx } of programMap) {
        if (keywords.some(k => norm.includes(k))) {
          const entry = KB[idx];
          if (entry) return { text: entry.response, replies: entry.replies || [] };
        }
      }
    }

    return { text: DEFAULT_RESPONSE.text, replies: DEFAULT_RESPONSE.replies };
  }

  function formatText(text) {
    return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
  }

  /* ── DOM Injection ──────────────────────────────────────────── */
  function buildHTML() {
    const el = document.createElement('div');
    el.id = 'chatbot-root';
    el.innerHTML = `
      <!-- Toggle Button -->
      <button id="chatbot-toggle" aria-label="Abrir chat">
        <span id="chatbot-badge">1</span>
        <svg class="icon-chat" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-6 11H7v-2h7v2zm3-4H7V7h10v2z"/>
        </svg>
        <svg class="icon-close" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </button>

      <!-- Chat Window -->
      <div id="chatbot-window" role="dialog" aria-label="Chat de soporte">

        <!-- ── LANDING ─────────────────────────────────────────── -->
        <div id="chatbot-landing">
          <div id="chatbot-header">
            <div class="chat-avatar">
              <svg viewBox="0 0 24 24"><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z"/></svg>
            </div>
            <div class="chat-header-info">
              <p class="chat-header-name">Sergio &middot; USA Santa Marta</p>
              <p class="chat-header-status">
                <span class="status-dot"></span> Asesores disponibles ahora
              </p>
            </div>
            <div class="chat-header-actions">
              <button class="chat-header-btn" id="chat-minimize-btn" aria-label="Minimizar">
                <svg viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg>
              </button>
            </div>
          </div>
          <div id="landing-body">
            <p id="landing-greeting">&#128075; &iexcl;Hola! &iquest;C&oacute;mo podemos ayudarte hoy?</p>

            <button class="landing-option" id="btn-asesor">
              <span class="landing-option-icon"><span class="material-symbols-outlined">support_agent</span></span>
              <span class="landing-option-text">
                <strong>Hablar con un asesor</strong>
                <small>Atenci&oacute;n personalizada</small>
              </span>
              <span class="landing-arrow"><span class="material-symbols-outlined">open_in_new</span></span>
            </button>

            <div class="landing-divider"><span>o</span></div>

            <button class="landing-option" id="btn-bot">
              <span class="landing-option-icon"><span class="material-symbols-outlined">smart_toy</span></span>
              <span class="landing-option-text">
                <strong>Asistente virtual</strong>
                <small>Respuestas inmediatas 24/7</small>
              </span>
              <span class="landing-arrow"><span class="material-symbols-outlined">open_in_new</span></span>
            </button>

            <button class="landing-option secondary" id="btn-faq">
              <span class="landing-option-icon"><span class="material-symbols-outlined">help</span></span>
              <span class="landing-option-text">
                <strong>Preguntas frecuentes</strong>
                <small>Horarios, notas, tr&aacute;mites</small>
              </span>
              <span class="landing-arrow"><span class="material-symbols-outlined">open_in_new</span></span>
            </button>
          </div>
          <div id="chatbot-footer">
            Asistente virtual &middot; <a href="https://www.usergioarboleda.edu.co/santamarta/" target="_blank">Universidad Sergio Arboleda</a>
          </div>
        </div>

        <!-- ── CHAT VIEW ──────────────────────────────────────── -->
        <div id="chatbot-chat-view" style="display:none; flex-direction:column; height:100%;">
          <div id="chatbot-header-chat">
            <button id="chat-back-btn" aria-label="Volver" class="chat-header-btn" style="margin-right:4px;">
              <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
            </button>
            <div class="chat-avatar">
              <svg viewBox="0 0 24 24"><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z"/></svg>
            </div>
            <div class="chat-header-info">
              <p class="chat-header-name">Sergio IA</p>
              <p class="chat-header-status"><span class="status-dot"></span> En l&iacute;nea ahora</p>
            </div>
            <div class="chat-header-actions">
              <button class="chat-header-btn" id="chat-minimize-btn-2" aria-label="Minimizar">
                <svg viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg>
              </button>
            </div>
          </div>

          <div id="chatbot-topics">
            <button class="topic-chip" data-topic="Mis horarios"><span class="material-symbols-outlined">calendar_view_week</span> Horarios</button>
            <button class="topic-chip" data-topic="Ver mis notas"><span class="material-symbols-outlined">grade</span> Notas</button>
            <button class="topic-chip" data-topic="Calendario académico"><span class="material-symbols-outlined">event</span> Calendario</button>
            <button class="topic-chip" data-topic="Bienestar universitario"><span class="material-symbols-outlined">health_and_safety</span> Bienestar</button>
            <button class="topic-chip" data-topic="Internacionalización"><span class="material-symbols-outlined">public</span> Internacional</button>
          </div>

          <div id="chatbot-messages" aria-live="polite" aria-atomic="false"></div>

          <div id="chatbot-input-area">
            <textarea id="chatbot-input" placeholder="Escribe tu mensaje..." rows="1" maxlength="500" aria-label="Mensaje"></textarea>
            <button id="chatbot-send" aria-label="Enviar mensaje">
              <span class="material-symbols-outlined">send</span>
            </button>
          </div>

          <div id="chatbot-footer-chat">
            Asistente virtual &middot; <a href="https://www.usergioarboleda.edu.co/santamarta/" target="_blank">Universidad Sergio Arboleda</a>
          </div>
        </div>

        <!-- ── ASESOR CONTACT VIEW ───────────────────────────── -->
        <div id="chatbot-asesor-view" style="display:none; flex-direction:column; height:100%;">
          <div id="chatbot-header-asesor" class="ibm-header" style="display:flex; align-items:center; padding:12px 16px; color:#fff;">
            <button id="asesor-back-btn" class="chat-header-btn" aria-label="Volver">
              <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
            </button>
            <div class="chat-header-info" style="margin-left:8px; flex:1;">
              <p class="chat-header-name" style="margin:0; font-weight:600; font-size:14px;">Contactar asesor</p>
            </div>
            <div class="chat-header-actions">
              <button class="chat-header-btn" id="asesor-minimize-btn" aria-label="Minimizar">
                <svg viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg>
              </button>
            </div>
          </div>

          <div class="asesor-lead">
            <p class="asesor-lead-text">Seleccione su canal de contacto preferido:</p>
          </div>

          <div class="contact-channels">

            <!-- Chat en vivo -->
            <button class="channel-row" id="channel-live-chat">
              <div class="channel-icon-wrap"><span class="material-symbols-outlined">chat</span></div>
              <div class="channel-info">
                <span class="channel-title">Chat en vivo</span>
                <span class="channel-status-text" id="live-status-text">
                  <span class="ch-status-dot" id="live-status-dot"></span>
                  <span id="live-status-label">Verificando&hellip;</span>
                </span>
              </div>
              <span class="material-symbols-outlined channel-arrow">chevron_right</span>
            </button>

            <!-- Llamar -->
            <a class="channel-row" href="tel:+576054346444" id="channel-phone">
              <div class="channel-icon-wrap"><span class="material-symbols-outlined">phone_in_talk</span></div>
              <div class="channel-info">
                <span class="channel-title">Llamar a admisiones</span>
                <span class="channel-phone">(605) 434 6444</span>
                <span class="channel-hours">Lun &ndash; Vie &middot; 8:00 AM &ndash; 6:00 PM</span>
              </div>
              <span class="material-symbols-outlined channel-arrow">chevron_right</span>
            </a>

            <!-- Email -->
            <a class="channel-row" href="mailto:admisiones.sm@usa.edu.co" id="channel-email">
              <div class="channel-icon-wrap"><span class="material-symbols-outlined">mail</span></div>
              <div class="channel-info">
                <span class="channel-title">Enviar correo electr&oacute;nico</span>
                <span class="channel-email">admisiones.sm@usa.edu.co</span>
              </div>
              <span class="material-symbols-outlined channel-arrow">chevron_right</span>
            </a>

            <!-- Agendar -->
            <button class="channel-row" id="channel-schedule">
              <div class="channel-icon-wrap"><span class="material-symbols-outlined">calendar_today</span></div>
              <div class="channel-info">
                <span class="channel-title">Agendar reuni&oacute;n</span>
                <span class="channel-meta">Coordinar cita virtual</span>
              </div>
              <span class="material-symbols-outlined channel-arrow">chevron_right</span>
            </button>

          </div>

          <div id="chatbot-footer-asesor">
            Asistente virtual &middot; <a href="https://www.usergioarboleda.edu.co/santamarta/" target="_blank">Universidad Sergio Arboleda</a>
          </div>
        </div>

        <!-- ── DEMO LIVE AGENT VIEW ─────────────────────────── -->
        <div id="chatbot-demo-view" style="display:none; flex-direction:column; height:100%;">
          <div id="chatbot-header-demo" class="ibm-header" style="display:flex; align-items:center; padding:12px 16px; color:#fff;">
            <button id="demo-back-btn" class="chat-header-btn" aria-label="Volver">
              <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
            </button>
            <div class="chat-avatar agent-initials">JC</div>
            <div class="chat-header-info" style="margin-left:12px;">
              <p class="chat-header-name" style="margin:0; font-weight:600; font-size:14px;">Juan Carlos R.</p>
              <p class="chat-header-status" style="margin:0; font-size:12px; color:#c6c6c6;"><span class="status-dot online"></span> Asesor &middot; En l&iacute;nea</p>
            </div>
            <div class="chat-header-actions">
              <button class="chat-header-btn" id="demo-minimize-btn" aria-label="Minimizar">
                <svg viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg>
              </button>
            </div>
          </div>

          <div class="demo-mode-badge">
            <span class="material-symbols-outlined">info</span>
            MODO DEMO &mdash; Simulaci&oacute;n de asesor
          </div>

          <div id="demo-messages" aria-live="polite"></div>

          <div id="demo-input-area">
            <textarea id="demo-input" placeholder="Escribe un mensaje..." rows="1" maxlength="500"></textarea>
            <button id="demo-send" aria-label="Enviar">
              <span class="material-symbols-outlined">send</span>
            </button>
          </div>

          <div id="chatbot-footer-demo">
            Simulaci&oacute;n &middot; <a href="https://www.usergioarboleda.edu.co/santamarta/" target="_blank">Universidad Sergio Arboleda</a>
          </div>
        </div>

      </div>
    `;
    document.body.appendChild(el);
  }

  /* ── Message Rendering ───────────────────────────────────── */
  function addMessage(type, text, replies = []) {
    const msgs = document.getElementById('chatbot-messages');
    if (!msgs) return;
    const row = document.createElement('div');
    row.className = `msg-row ${type}`;
    const time = getTime();

    if (type === 'bot') {
      let replyHTML = '';
      if (replies.length) {
        replyHTML = `<div class="quick-replies">${replies.map(r => `<button class="qr-btn" data-qr="${r}">${r}</button>`).join('')}</div>`;
      }
      row.innerHTML = `<div class="msg-avatar-sm"><svg viewBox="0 0 24 24"><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z"/></svg></div><div class="msg-bubble">${formatText(text)}${replyHTML}<span class="msg-time">${time}</span></div>`;
    } else {
      row.innerHTML = `<div class="msg-bubble">${formatText(text)}<span class="msg-time">${time}</span></div>`;
    }

    msgs.appendChild(row);
    msgs.scrollTop = msgs.scrollHeight;

    row.querySelectorAll('.qr-btn').forEach(btn => {
      btn.addEventListener('click', () => handleUserInput(btn.dataset.qr));
    });
  }

  function showTyping() {
    const msgs = document.getElementById('chatbot-messages');
    if (!msgs) return;
    const row = document.createElement('div');
    row.className = 'msg-row bot';
    row.id = 'typing-indicator-row';
    row.innerHTML = `<div class="msg-avatar-sm"><svg viewBox="0 0 24 24"><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z"/></svg></div><div class="typing-indicator"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div>`;
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

    // Direct routing for contact handoff
    if (normalize(text) === normalize('Hablar con un asesor')) {
      showAsesorView();
      return;
    }

    addMessage('user', text);
    const input = document.getElementById('chatbot-input');
    if (input) { input.value = ''; input.style.height = 'auto'; }
    showTyping();
    setTimeout(() => {
      removeTyping();
      const answer = findAnswer(text);
      addMessage('bot', answer.text, answer.replies);
    }, 1000);
  }

  /* ── View switching ──────────────────────────────────────── */
  function showLandingView() {
    document.getElementById('chatbot-landing').style.cssText = 'display:flex; flex-direction:column;';
    document.getElementById('chatbot-chat-view').style.display    = 'none';
    document.getElementById('chatbot-asesor-view').style.display  = 'none';
    document.getElementById('chatbot-demo-view').style.display    = 'none';
  }

  function showChatView() {
    document.getElementById('chatbot-landing').style.display     = 'none';
    document.getElementById('chatbot-asesor-view').style.display = 'none';
    document.getElementById('chatbot-demo-view').style.display   = 'none';
    const chatView = document.getElementById('chatbot-chat-view');
    chatView.style.cssText = 'display:flex; flex-direction:column; height:100%;';
    setTimeout(() => { const i = document.getElementById('chatbot-input'); if(i) i.focus(); }, 200);
  }

  function showAsesorView() {
    document.getElementById('chatbot-landing').style.display     = 'none';
    document.getElementById('chatbot-chat-view').style.display   = 'none';
    document.getElementById('chatbot-demo-view').style.display   = 'none';
    document.getElementById('chatbot-asesor-view').style.cssText = 'display:flex; flex-direction:column; height:100%;';
    
    // Live Agent Status checks if local time in Bogota is within Mon-Fri 8am-6pm.
    const now = new Date();
    const col = new Date(now.toLocaleString('en-US', { timeZone: 'America/Bogota' }));
    const day = col.getDay(), hr = col.getHours();
    const online = true; // Forzado para demo: el usuario siempre ve disponibilidad inmediata
    const dot   = document.getElementById('live-status-dot');
    const label = document.getElementById('live-status-label');
    if (dot)   dot.className   = 'ch-status-dot ' + (online ? 'online' : 'offline');
    if (label) label.textContent = online ? 'En línea · Respuesta inmediata' : 'Desconectado · Fuera de horario';
  }

  function showDemoView() {
    document.getElementById('chatbot-landing').style.display     = 'none';
    document.getElementById('chatbot-chat-view').style.display   = 'none';
    document.getElementById('chatbot-asesor-view').style.display = 'none';
    document.getElementById('chatbot-demo-view').style.cssText   = 'display:flex; flex-direction:column; height:100%;';
    
    const msgs = document.getElementById('demo-messages');
    if (msgs && msgs.children.length === 0) {
      setTimeout(() => addDemoMessage('agent', '¡Hola! Soy **Juan Carlos R.**, asesor de la Sergio. Puedo ayudarte con **negociación de becas**, revisión de documentos de admisión o agendar una cita presencial. ¿En qué puedo orientarte?'), 700);
    }
    setTimeout(() => { const inp = document.getElementById('demo-input'); if(inp) inp.focus(); }, 300);
  }

  /* ── Demo Agent Chat ────────────────────────────────────── */
  const ADVISOR_REPLIES = [
    { t: ['hola','buenos','buenas','buen','hey','que tal'], r: '¡Hola! Con gusto te atiendo. Soy **Juan Carlos R.**, asesor de admisiones. ¿Sobre qué programa o proceso te puedo orientar?' },
    { t: ['diseño','diseno'], r: 'Excelente elección. **Diseño Digital** es uno de nuestros programas más innovadores. El valor semestral para 2025-2 oscila entre $5.7M y $6.5M. Tenemos opciones de financiación flexibles. ¿Tienes resultados Saber 11? Podrías aplicar a descuento por mérito.' },
    { t: ['derecho'], r: '**Derecho** en la Sergio tiene gran tradición. Valor semestral: $8.2M – $9.5M, con acceso al Consultorio Jurídico desde los primeros semestres. ¿Quieres que te cuente los requisitos?' },
    { t: ['administración','administracion','prime'], r: '**Administración de Empresas** (PRIME Business School) es nuestro programa bandera. Valor semestral: $7M – $8.2M. ¿Te interesa?' },
    { t: ['psicología','psicologia'], r: '**Psicología** tiene un enfoque clínico y organizacional muy completo. Valor semestral: $6.8M – $7.8M. ¿Tienes alguna orientación de área de interés?' },
    { t: ['comunicación','comunicacion'], r: '**Comunicación Social y Periodismo** articula medios digitales y periodismo de datos. Valor semestral: $6.2M – $7.0M.' },
    { t: ['ingeniería','ingenieria'], r: '**Ingeniería Industrial** tiene alta empleabilidad. Valor semestral: $7.2M – $8.0M. Acreditación de alta calidad.' },
    { t: ['precio','costo','valor','cuanto','vale','cuesta'], r: 'Con gusto. Los valores semestre 2025-2 van desde $5.7M (Diseño Digital) hasta $9.5M (Derecho). ¿Cuál programa exacto te interesa?' },
    { t: ['descuento','beca','icetex','financiación','financiacion'], r: 'Contamos con: descuento por **mérito** (Saber 11), **convenio empresarial**, **hermanos sergistas**, y crédito con **ICETEX** o Banco Sergio.' },
    { t: ['inscripción','inscripcion','admisión','admision','proceso'], r: 'El proceso es 100% online: (1) Formulario en línea, (2) Entrega de documentos PDF, (3) Matrícula y pago virtual. ¿Quieres que te envíe el link directo de inscripción?' },
    { t: ['gracias','perfecto','listo','ok','entendido','genial'], r: '¡Con mucho gusto! Si necesitas más información o quieres iniciar el proceso de matrícula, aquí sigo disponible. También me puedes llamar al **(605) 434 6444**.' },
    { t: ['adiós','adios','bye','hasta','chao'], r: '¡Hasta luego! Fue un placer atenderte y resolver tus inquietudes. Recuerda que puedes llamarnos al **(605) 434 6444**. ¡Éxitos!' }
  ];

  function getAdvisorReply(text) {
    const n = normalize(text);
    for (const item of ADVISOR_REPLIES) {
      if (item.t.some(t => n.includes(normalize(t)))) return item.r;
    }
    return '¿Podrías darme más detalles sobre lo que estás buscando? De forma paralela, puedes llamarnos directamente al **(605) 434 6444**.';
  }

  function addDemoMessage(type, text) {
    const msgs = document.getElementById('demo-messages');
    if (!msgs) return;
    const row = document.createElement('div');
    row.className = `msg-row ${type}`;
    
    if(type === 'agent') {
      row.innerHTML = `<div class="msg-avatar-sm agent-sm">JC</div><div class="msg-bubble">${formatText(text)}<span class="msg-time">${getTime()}</span></div>`;
    } else {
      row.innerHTML = `<div class="msg-bubble">${formatText(text)}<span class="msg-time">${getTime()}</span></div>`;
    }
    
    msgs.appendChild(row);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function showDemoTyping() {
    const msgs = document.getElementById('demo-messages');
    if (!msgs) return;
    const row = document.createElement('div');
    row.id = 'demo-typing-row';
    row.className = 'msg-row bot';
    row.innerHTML = `<div class="msg-avatar-sm agent-sm">JC</div><div class="typing-indicator"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div>`;
    msgs.appendChild(row);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function removeDemoTyping() {
    const el = document.getElementById('demo-typing-row');
    if (el) el.remove();
  }

  function handleDemoInput(text) {
    if (!text.trim()) return;
    addDemoMessage('user', text);
    const input = document.getElementById('demo-input');
    if (input) { input.value = ''; input.style.height = 'auto'; }
    showDemoTyping();
    setTimeout(() => {
      removeDemoTyping();
      addDemoMessage('agent', getAdvisorReply(text));
    }, 1200);
  }

  /* ── Events ──────────────────────────────────────────────── */
  function bindEvents() {
    const toggle = document.getElementById('chatbot-toggle');
    const window_= document.getElementById('chatbot-window');
    const badge  = document.getElementById('chatbot-badge');

    // Toggle open/close
    toggle.addEventListener('click', () => {
      const isOpen = window_.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      if (badge) badge.style.display = 'none';
      if(isOpen && document.getElementById('chatbot-landing').style.display !== 'none') {
          // just open the landing, it's fine
      }
    });

    // Minimize buttons
    ['chat-minimize-btn', 'chat-minimize-btn-2', 'asesor-minimize-btn', 'demo-minimize-btn'].forEach(id => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.addEventListener('click', () => {
          window_.classList.remove('open');
          toggle.classList.remove('open');
        });
      }
    });

    // Back buttons
    const backBtn = document.getElementById('chat-back-btn');
    if (backBtn) backBtn.addEventListener('click', showLandingView);

    const asesorBackBtn = document.getElementById('asesor-back-btn');
    if (asesorBackBtn) asesorBackBtn.addEventListener('click', showLandingView);

    const demoBackBtn = document.getElementById('demo-back-btn');
    if (demoBackBtn) demoBackBtn.addEventListener('click', showAsesorView);

    // Landing navigation
    const btnAsesor = document.getElementById('btn-asesor');
    if (btnAsesor) btnAsesor.addEventListener('click', showAsesorView);

    const btnBot = document.getElementById('btn-bot');
    if (btnBot) {
      btnBot.addEventListener('click', () => {
        showChatView();
        if (document.getElementById('chatbot-messages').children.length === 0) {
          addMessage('bot',
            '¡Hola! 👋 Soy **Sergio**, asistente virtual. Puedo ayudarte rápidamente con:\n\n🗓️ Horarios\n📊 Notas\n📅 Calendario\n🏫 Bienestar\n🌐 Internacional',
            ['Mis horarios', 'Ver notas', 'Calendario', 'Bienestar']
          );
        }
      });
    }

    const btnFaq = document.getElementById('btn-faq');
    if (btnFaq) {
      btnFaq.addEventListener('click', () => {
        showChatView();
        document.getElementById('chatbot-messages').innerHTML = ''; // reset chat
        addMessage('bot', '❓ ¡Claro! Estas son las preguntas más frecuentes. Para empezar, ¿Cuál es tu perfil?', [
          '🎓 Soy estudiante activo',
          '👨‍👩‍👧 Soy padre de familia',
          '📋 Soy aspirante'
        ]);
      });
    }

    // Asesor channel bindings
    const channelLive = document.getElementById('channel-live-chat');
    if (channelLive) channelLive.addEventListener('click', showDemoView);

    const channelSched = document.getElementById('channel-schedule');
    if (channelSched) channelSched.addEventListener('click', () => {
      alert('Próximamente: Agendamiento online en vivo. Por favor llámanos al (605) 434 6444.');
    });

    // Topic chips
    document.querySelectorAll('.topic-chip').forEach(chip => {
      chip.addEventListener('click', () => handleUserInput(chip.dataset.topic));
    });

    // SEND Input (Bot)
    const sendBtn = document.getElementById('chatbot-send');
    const inputEl = document.getElementById('chatbot-input');
    if(sendBtn) sendBtn.addEventListener('click', () => handleUserInput(inputEl.value.trim()));
    if(inputEl) {
      inputEl.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleUserInput(inputEl.value.trim()); } });
      inputEl.addEventListener('input', () => { inputEl.style.height = 'auto'; inputEl.style.height = Math.min(inputEl.scrollHeight, 100) + 'px'; });
    }

    // SEND Input (Demo)
    const demoSendBtn = document.getElementById('demo-send');
    const demoInputEl = document.getElementById('demo-input');
    if(demoSendBtn) demoSendBtn.addEventListener('click', () => handleDemoInput(demoInputEl.value.trim()));
    if(demoInputEl) {
      demoInputEl.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleDemoInput(demoInputEl.value.trim()); } });
      demoInputEl.addEventListener('input', () => { demoInputEl.style.height = 'auto'; demoInputEl.style.height = Math.min(demoInputEl.scrollHeight, 100) + 'px'; });
    }
  }

  /* ── Init ────────────────────────────────────────────────── */
  function init() {
    const link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = 'chatbot.css';
    document.head.appendChild(link);

    buildHTML();
    bindEvents();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
