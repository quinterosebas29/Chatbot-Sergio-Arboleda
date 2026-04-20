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
    {
      patterns: ['precio diseño', 'costo diseño', 'valor diseño', 'costo de diseño', 'precio de diseño', 'valor de diseño', 'valor del diseño', 'cuánto vale diseño', 'cuanto vale diseño', 'cuánto cuesta diseño', 'cuanto cuesta diseño', 'diseño digital precio', 'diseño digital costo', 'diseño digital valor', 'diseño digital cuánto'],
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
    {
      patterns: ['costo', 'valor', 'precio', 'matrícula', 'cuanto cuesta', 'cuánto vale', 'precio carrera', 'valor carrera'],
      response: '💰 Los **valores de matrícula** varían según el programa.\nPor ejemplo, van desde $5.7M (Diseño Digital) hasta opciones alrededor de $9.5M (Derecho).\n\n¿Qué carrera específica te gustaría cotizar?',
      replies: ['Precio Diseño Digital', 'Precio Derecho', 'Descuentos disponibles']
    },
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
      patterns: ['calendario', 'calendario academico', 'calendario académico', 'cuando empiezan las clases', 'cuando son los parciales'],
      response: '📅 El **Calendario Académico** establece las fechas de inicio de clases, parciales y cierres de notas.\n\nPuedes descargarlo actualizado directamente desde nuestro sitio web o solicitar acompañamiento puntual en secretaría.',
      replies: ['Hablar con un asesor']
    },
    {
      patterns: ['sede', 'dónde quedan', 'donde quedan', 'ubicación', 'ubicacion', 'dirección', 'direccion'],
      response: '📍 Nos encontramos en **Santa Marta**: \n\n• **Sede Principal:** Troncal del Caribe Km 4 vía a Gaira.\n• **Sede Centro:** Calle 18 # 14 - 18\n\n¿Deseas llegar en transporte público o privado?',
      replies: ['Horario de atención', 'Contacto']
    },
    {
      patterns: ['estudiante activo', 'soy estudiante', 'certificado', 'portal estudiantil'],
      response: '🎓 Como **Estudiante Activo**, tus plataformas principales son:\n\n• **Sistema Sapio:** Para consultar notas y matrícula.\n• **Portal Estudiantil:** Para descargar certificados sabanillas de pago.\n• **Moodle:** Para las aulas virtuales.\n\n¿De cuál sistema necesitas información o acceso?',
      replies: ['Hablar con un asesor']
    },
    {
      patterns: ['donde puedo ver mis notas', 'como consulto mi promedio', 'ver notas', 'ver mis notas'],
      response: '📊 Tus **calificaciones** y promedio académico están disponibles en el **Sistema Sapio**.\n\nSi necesitas un certificado oficial, sábana de notas o consolidado histórico, puedes generarlo desde tu Portal Estudiantil.',
      replies: ['Hablar con un asesor']
    },
    {
      patterns: ['cual es mi horario', 'que materias tengo este semestre', 'mi horario', 'mis horarios', 'horario de clases'],
      response: '🕒 Para consultar tu **horario de clases** y las materias inscritas, debes ingresar al **Sistema Sapio** con tu usuario y contraseña.\n\n*(Si acabas de realizar tu matrícula, recuerda que puede tardar hasta 48 horas en reflejarse en el sistema).*',
      replies: ['Hablar con un asesor']
    },
    {
      patterns: ['como puedo inscribirme a clases de ingles', 'clases de ingles', 'instituto de idiomas', 'aprender ingles', 'clases de inglés'],
      response: '🇺🇸 **Centro de Idiomas:**\n\nPara tomar las clases de inglés, debes dirigirte al Centro de Idiomas de la universidad y realizar tu proceso de nivelación o inscripción. Recuerda que certificar un segundo idioma es un requisito de grado.',
      replies: ['Hablar con un asesor']
    },
    {
      patterns: ['que clases tiene diseño digital', 'que clases tiene diseño', 'cuantos semestres dura psicologia', 'cuantos semestres dura psicología', 'plan de estudios', 'malla curricular', 'semestres dura'],
      response: '📚 **Información Curricular:**\n\nNuestros pregrados profesionales (como Diseño Digital, Derecho o Psicología) suelen tener una duración de **8 a 10 semestres**.\n\nPuedes consultar el plan de estudios exacto y las materias a cursar en el sitio web de la universidad (Sección Programas) o mediante nuestros asesores.',
      replies: ['Hablar con un asesor']
    },
    {
      patterns: ['bienestar', 'bienestar universitario', 'deportes', 'cultura'],
      response: '🏃🏽‍♀️ **Bienestar Universitario** fomenta tu desarrollo integral. Ofrecemos:\n\n• Selecciones deportivas (Fútbol, Natación, Voleibol)\n• Talleres culturales (Música, Teatro)\n• Acompañamiento psicológico y asesoría académica.\n\n¿Te interesa inscribirte en alguna actividad?',
      replies: ['Hablar con un asesor']
    },
    {
      patterns: ['internacionalizacion', 'internacionalización', 'intercambio', 'viajar', 'como puedo ver los convenios internacionales', 'convenios internacionales'],
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

  /* ── AI-style dynamic responses for the bot ──────────────── */
  const AI_FALLBACKS = [
    (q) => `Entiendo tu consulta sobre "${q.slice(0,40)}...". En la Universidad Sergio Arboleda Santa Marta tenemos varias opciones que pueden ayudarte. ¿Podrías contarme un poco más sobre lo que buscas? 😊`,
    (q) => `Gracias por tu mensaje. Para orientarte mejor sobre **"${q.slice(0,35)}..."**, nuestros asesores están disponibles ahora mismo. ¿Prefieres continuar aquí o hablar con alguien en persona?`,
    (q) => `¡Buena pregunta! La **Universidad Sergio Arboleda** ofrece múltiples recursos para ese tema. ¿Quieres que te conecte con un asesor especializado o prefieres explorar más opciones aquí?`,
    () => `Estoy procesando tu consulta... 🤔 Mientras tanto, ¿sabías que tenemos **más de 20 programas** académicos? Puedo guiarte al que mejor se adapte a tu perfil.`,
    () => `Entendido. Para darte información precisa sobre eso, lo mejor es hablar con uno de nuestros **asesores académicos** que están en línea ahora. ¿Te conecto?`,
    (q) => `He registrado tu consulta sobre "${q.slice(0,30)}...". En la **Sergio Santa Marta** siempre buscamos orientarte de la mejor forma. ¿Tienes alguna preferencia de programa o área de estudio?`,
  ];

  /* ── Configuración ───────────────────────────────────────── */
  const DEFAULT_RESPONSE = {
    text: 'Hmm, no estoy seguro de cómo ayudarte con eso 🤔 Puedo orientarte sobre precios, admisiones, o te puedo enlazar con un asesor.',
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
        { keywords: ['diseno', 'diseño'], idx: 6 },
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

    // 3rd pass: AI-style dynamic fallback for realism
    const aiReply = AI_FALLBACKS[Math.floor(Math.random() * AI_FALLBACKS.length)](input);
    return { text: aiReply, replies: ['Ver programas', 'Costos de matrícula', 'Hablar con un asesor'] };
  }

  function formatText(text) {
    return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
  }

  function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
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

        <!-- ── QUEUE VIEW (Cola de espera) ──────────────────── -->
        <div id="chatbot-queue-view" style="display:none; flex-direction:column; height:100%;">
          <div id="chatbot-header-queue" class="ibm-header" style="display:flex; align-items:center; padding:12px 16px; color:#fff;">
            <button id="queue-back-btn" class="chat-header-btn" aria-label="Volver">
              <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
            </button>
            <div class="chat-avatar agent-initials" style="margin-left:8px;">JC</div>
            <div class="chat-header-info" style="margin-left:10px; flex:1;">
              <p class="chat-header-name" style="margin:0; font-size:14px; font-weight:600;">Juan Carlos R.</p>
              <p class="chat-header-status" style="margin:0; font-size:11px;"><span class="status-dot online"></span> Asesor disponible</p>
            </div>
            <div class="chat-header-actions">
              <button class="chat-header-btn" id="queue-minimize-btn" aria-label="Minimizar">
                <svg viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg>
              </button>
            </div>
          </div>

          <div id="queue-body">
            <div id="queue-spinner">
              <div class="queue-orbit">
                <div class="queue-dot-outer"></div>
              </div>
              <span class="material-symbols-outlined queue-icon-center">support_agent</span>
            </div>
            <p id="queue-title">Conectando con un asesor&hellip;</p>
            <p id="queue-subtitle">Por favor espera, estamos buscando al asesor más adecuado para ti.</p>
            <div id="queue-status-row">
              <div class="queue-stat">
                <span id="queue-position">3</span>
                <small>Posición en cola</small>
              </div>
              <div class="queue-divider-v"></div>
              <div class="queue-stat">
                <span id="queue-wait">~2 min</span>
                <small>Tiempo estimado</small>
              </div>
            </div>
            <div id="queue-progress-bar"><div id="queue-progress-fill"></div></div>
            <p id="queue-tips-text">💡 Mientras esperas, ¿sabías que puedes consultar tu horario en el <strong>Sistema Sapio</strong>?</p>
          </div>

          <div id="chatbot-footer-queue">
            Cola de atenci&oacute;n &middot; <a href="https://www.usergioarboleda.edu.co/santamarta/" target="_blank">Universidad Sergio Arboleda</a>
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

          <!-- Hidden file input -->
          <input type="file" id="demo-file-input" accept="image/*,application/pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt" style="display:none;">
          <!-- Recording indicator (hidden by default) -->
          <div id="demo-recording-bar" style="display:none;">
            <span class="rec-dot"></span>
            <span id="rec-timer">0:00</span>
            <span class="rec-label">Grabando&hellip; Toca el mic para detener</span>
          </div>

          <div id="demo-input-area">
            <button id="demo-attach-btn" class="demo-icon-btn" aria-label="Adjuntar archivo" title="Adjuntar archivo">
              <span class="material-symbols-outlined">attach_file</span>
            </button>
            <button id="demo-audio-btn" class="demo-icon-btn" aria-label="Enviar audio" title="Enviar audio">
              <span class="material-symbols-outlined">mic</span>
            </button>
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

    if (normalize(text) === normalize('Hablar con un asesor')) {
      showAsesorView();
      return;
    }

    addMessage('user', text);
    const input = document.getElementById('chatbot-input');
    if (input) { input.value = ''; input.style.height = 'auto'; }
    showTyping();

    // Variable delay for realism
    const delay = 800 + Math.random() * 900;
    setTimeout(() => {
      removeTyping();
      const answer = findAnswer(text);
      addMessage('bot', answer.text, answer.replies);
    }, delay);
  }

  /* ── View switching ──────────────────────────────────────── */
  function showLandingView() {
    document.getElementById('chatbot-landing').style.cssText = 'display:flex; flex-direction:column;';
    document.getElementById('chatbot-chat-view').style.display    = 'none';
    document.getElementById('chatbot-asesor-view').style.display  = 'none';
    document.getElementById('chatbot-queue-view').style.display   = 'none';
    document.getElementById('chatbot-demo-view').style.display    = 'none';
  }

  function showChatView() {
    document.getElementById('chatbot-landing').style.display     = 'none';
    document.getElementById('chatbot-asesor-view').style.display = 'none';
    document.getElementById('chatbot-queue-view').style.display  = 'none';
    document.getElementById('chatbot-demo-view').style.display   = 'none';
    const chatView = document.getElementById('chatbot-chat-view');
    chatView.style.cssText = 'display:flex; flex-direction:column; height:100%;';
    setTimeout(() => { const i = document.getElementById('chatbot-input'); if(i) i.focus(); }, 200);
  }

  function showAsesorView() {
    document.getElementById('chatbot-landing').style.display     = 'none';
    document.getElementById('chatbot-chat-view').style.display   = 'none';
    document.getElementById('chatbot-queue-view').style.display  = 'none';
    document.getElementById('chatbot-demo-view').style.display   = 'none';
    document.getElementById('chatbot-asesor-view').style.cssText = 'display:flex; flex-direction:column; height:100%;';

    const dot   = document.getElementById('live-status-dot');
    const label = document.getElementById('live-status-label');
    if (dot)   dot.className   = 'ch-status-dot online';
    if (label) label.textContent = 'En línea · Respuesta inmediata';
  }

  /* ── Queue (Fake) ─────────────────────────────────────────── */
  let queueInterval = null;
  let queueTimeout  = null;

  const QUEUE_TIPS = [
    '💡 Mientras esperas, ¿sabías que puedes consultar tu horario en el <strong>Sistema Sapio</strong>?',
    '🎓 Tenemos <strong>más de 20 programas</strong> académicos. ¡Pregúntale a tu asesor cuál va contigo!',
    '🌍 ¿Sabías que la Sergio tiene convenios con universidades en <strong>España, México y EE.UU.</strong>?',
    '💰 Contamos con opciones de <strong>financiación ICETEX</strong> y Banco Sergio al 0% de interés.',
    '📋 Ten listos tus <strong>documentos</strong>: cédula, diploma y resultados Saber 11 para agilizar el proceso.',
  ];

  function showQueueView() {
    document.getElementById('chatbot-landing').style.display     = 'none';
    document.getElementById('chatbot-chat-view').style.display   = 'none';
    document.getElementById('chatbot-asesor-view').style.display = 'none';
    document.getElementById('chatbot-demo-view').style.display   = 'none';
    document.getElementById('chatbot-queue-view').style.cssText  = 'display:flex; flex-direction:column; height:100%;';

    // Reset queue state
    let position = 3;
    let elapsed  = 0;
    const totalWait = 12000; // 12 seconds total fake wait
    const posEl   = document.getElementById('queue-position');
    const waitEl  = document.getElementById('queue-wait');
    const fillEl  = document.getElementById('queue-progress-fill');
    const tipEl   = document.getElementById('queue-tips-text');

    if (posEl)  posEl.textContent  = position;
    if (waitEl) waitEl.textContent = '~2 min';
    if (fillEl) fillEl.style.width = '0%';

    // Rotate tips
    let tipIdx = 0;
    if (queueInterval) clearInterval(queueInterval);
    queueInterval = setInterval(() => {
      elapsed += 500;
      const pct = Math.min((elapsed / totalWait) * 100, 100);
      if (fillEl) fillEl.style.width = pct + '%';

      // Decrement position gradually
      if (elapsed === 3000 && posEl) { position = 2; posEl.textContent = '2'; if (waitEl) waitEl.textContent = '~1 min'; }
      if (elapsed === 7000 && posEl) { position = 1; posEl.textContent = '1'; if (waitEl) waitEl.textContent = '~30 seg'; }

      // Rotate tips every 4s
      if (elapsed % 4000 === 0) {
        tipIdx = (tipIdx + 1) % QUEUE_TIPS.length;
        if (tipEl) tipEl.innerHTML = QUEUE_TIPS[tipIdx];
      }

      if (elapsed >= totalWait) {
        clearInterval(queueInterval);
        queueInterval = null;
        // Transition to demo view
        if (fillEl) fillEl.style.width = '100%';
        queueTimeout = setTimeout(() => { showDemoView(); }, 600);
      }
    }, 500);
  }

  function cancelQueue() {
    if (queueInterval) { clearInterval(queueInterval); queueInterval = null; }
    if (queueTimeout)  { clearTimeout(queueTimeout);  queueTimeout  = null; }
  }

  /* ── Audio Recording State ─────────────────────────────── */
  let mediaRecorder  = null;
  let audioChunks    = [];
  let isRecording    = false;
  let recognition    = null;
  let lastTranscript = '';
  let recTimerInterval = null;
  let recSeconds     = 0;

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

  // AI-style dynamic responses for demo agent (for unmatched inputs)
  const ADVISOR_DYNAMIC = [
    (q) => `Entiendo, gracias por compartirme eso. Cuando mencionas "${q.slice(0,30)}..." — déjame verificar la información más actualizada para ti. ¿Tienes algún programa específico en mente? Así te puedo orientar mejor. 😊`,
    (q) => `Recibido. Sobre "${q.slice(0,30)}...", voy a consultarlo con el equipo de admisiones ahora mismo. Mientras tanto, ¿ya conoces nuestras opciones de **becas por mérito** disponibles?`,
    () => `¡Perfecto! Ese es un punto muy importante en el proceso. Te recomiendo también visitar nuestra sede principal en **Troncal del Caribe Km 4** si puedes, o podemos coordinar una sesión virtual. ¿Cuál prefieres?`,
    () => `Anotado. ¿Tienes ya tus **resultados Saber 11** a la mano? Eso me ayudaría a decirte exactamente a qué beneficios económicos aplicas. También podría enviarte el formulario de inscripción si ya estás decidido.`,
    (q) => `Claro, con gusto. Lo que me describes sobre "${q.slice(0,25)}..." es algo que vemos seguido y tiene una solución sencilla. ¿Quieres que te explique el proceso paso a paso o prefieres que te llame directamente?`,
  ];

  function getAdvisorReply(text) {
    const n = normalize(text);
    for (const item of ADVISOR_REPLIES) {
      if (item.t.some(t => n.includes(normalize(t)))) return item.r;
    }
    // Dynamic AI-style fallback
    return ADVISOR_DYNAMIC[Math.floor(Math.random() * ADVISOR_DYNAMIC.length)](text);
  }

  function addDemoMessage(type, text, isFile = false, isAudio = false) {
    const msgs = document.getElementById('demo-messages');
    if (!msgs) return;
    const row = document.createElement('div');
    row.className = `msg-row ${type}`;

    if (type === 'agent') {
      row.innerHTML = `<div class="msg-avatar-sm agent-sm">JC</div><div class="msg-bubble">${formatText(text)}<span class="msg-time">${getTime()}</span></div>`;
    } else if (isFile) {
      row.innerHTML = `<div class="msg-bubble msg-file-bubble">${text}<span class="msg-time">${getTime()}</span></div>`;
    } else if (isAudio) {
      row.innerHTML = `<div class="msg-bubble msg-audio-bubble">${text}<span class="msg-time">${getTime()}</span></div>`;
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
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      removeDemoTyping();
      addDemoMessage('agent', getAdvisorReply(text));
    }, delay);
  }

  // File analysis responses from agent
  const FILE_ANALYSIS_RESPONSES = [
    (name) => `He recibido tu archivo **"${name}"** ✅. Lo estoy revisando ahora mismo. Parece estar en buen estado. ¿Es este el documento de identidad o el diploma de bachillerato?`,
    (name) => `¡Perfecto! Recibí **"${name}"**. A primera vista se ve completo. Solo falta que me confirmes si este es el resultado Saber 11 o el formulario de solicitud.`,
    (name) => `Documento recibido: **"${name}"** 📎. Lo adjuntaré a tu expediente de admisión. ¿Tienes algún otro documento pendiente para completar el paquete?`,
    (name) => `Listo, **"${name}"** fue recibido correctamente ✔️. En 24 horas recibirás confirmación de que fue procesado. ¿Necesitas ayuda con algo más?`,
  ];

  const AUDIO_ANALYSIS_RESPONSES = [
    (t) => `🎙️ Escuché tu mensaje: *"${t}"*. Déjame orientarte mejor — ¿me confirmas tu nombre y el programa que te interesa para darte info más precisa?`,
    (t) => `🎙️ Recibí tu voz: *"${t}"*. Interesante consulta. En la **Sergio Santa Marta** tenemos respuesta para eso. ¿Quieres que te explique paso a paso?`,
    (t) => `🎙️ Te escuché decir: *"${t}"*. Con gusto te ayudo con eso. ¿Tienes ya tus resultados Saber 11? Eso me ayudaría a decirte exactamente a qué beneficios aplicas.`,
    (t) => `🎙️ Entendido: *"${t}"*. Es una consulta muy común. Voy a verificarlo con el equipo ahora mismo — ¿me puedes compartir tu correo para enviarte el detalle?`,
  ];

  const AUDIO_FALLBACK_RESPONSES = [
    '🎙️ ¡Mensaje de voz recibido! Se escucha claro. ¿Sobre qué programa o proceso te puedo orientar mejor?',
    '🎙️ ¡Audio recibido! Entiendo tu consulta. ¿Me puedes confirmar si eres aspirante nuevo o estudiante activo?',
    '🎙️ ¡Gracias por tu mensaje de voz! Cuéntame más — ¿el tema es sobre costos, admisión o trámites académicos?',
  ];

  function getAdvisorReplyFromAudio(transcript) {
    if (!transcript || !transcript.trim()) {
      return AUDIO_FALLBACK_RESPONSES[Math.floor(Math.random() * AUDIO_FALLBACK_RESPONSES.length)];
    }
    // Try to match transcript against KB patterns first
    const n = normalize(transcript);
    for (const item of ADVISOR_REPLIES) {
      if (item.t.some(t => n.includes(normalize(t)))) {
        return `🎙️ Escuché: *"${transcript.slice(0, 60)}${transcript.length > 60 ? '...' : ''}"*\n\n${item.r}`;
      }
    }
    // Dynamic response based on detected keywords
    const fn = AUDIO_ANALYSIS_RESPONSES[Math.floor(Math.random() * AUDIO_ANALYSIS_RESPONSES.length)];
    return fn(transcript.slice(0, 80));
  }

  function startAudioRecording() {
    const audioBtn = document.getElementById('demo-audio-btn');
    const recBar   = document.getElementById('demo-recording-bar');
    const inputArea = document.getElementById('demo-input-area');

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        isRecording    = true;
        audioChunks    = [];
        lastTranscript = '';
        recSeconds     = 0;

        // UI: show recording bar, hide textarea, style mic button
        if (recBar) recBar.style.display = 'flex';
        const textarea = document.getElementById('demo-input');
        if (textarea) textarea.style.display = 'none';
        if (audioBtn) { audioBtn.classList.add('recording'); audioBtn.title = 'Detener grabación'; }

        // Timer
        const timerEl = document.getElementById('rec-timer');
        recTimerInterval = setInterval(() => {
          recSeconds++;
          const m = Math.floor(recSeconds / 60);
          const s = recSeconds % 60;
          if (timerEl) timerEl.textContent = `${m}:${s.toString().padStart(2, '0')}`;
        }, 1000);

        // SpeechRecognition for transcript
        const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SR) {
          try {
            recognition = new SR();
            recognition.lang = 'es-CO';
            recognition.interimResults = false;
            recognition.continuous = true;
            recognition.onresult = (ev) => {
              lastTranscript = Array.from(ev.results)
                .map(r => r[0].transcript).join(' ');
            };
            recognition.start();
          } catch(e) { recognition = null; }
        }

        // MediaRecorder
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.addEventListener('dataavailable', e => {
          if (e.data.size > 0) audioChunks.push(e.data);
        });
        mediaRecorder.addEventListener('stop', () => {
          stream.getTracks().forEach(t => t.stop());
          const blob = new Blob(audioChunks, { type: 'audio/webm' });
          const url  = URL.createObjectURL(blob);
          handleRecordedAudio(url, recSeconds);
        });
        mediaRecorder.start();
      })
      .catch(() => {
        // Permission denied — show a friendly message in chat instead
        const msgs = document.getElementById('demo-messages');
        if (!msgs) return;
        const row = document.createElement('div');
        row.className = 'msg-row agent';
        row.innerHTML = `<div class="msg-avatar-sm agent-sm">JC</div><div class="msg-bubble" style="background:#fff3cd;color:#664d03;border:1px solid #ffecb5;">Para usar el micrófono necesitas permitir el acceso. Por favor acepta el permiso del navegador e intenta de nuevo. 🎙️<span class="msg-time" style="color:#997404;">${getTime()}</span></div>`;
        msgs.appendChild(row);
        msgs.scrollTop = msgs.scrollHeight;
      });
  }

  function stopAudioRecording() {
    isRecording = false;
    if (recTimerInterval) { clearInterval(recTimerInterval); recTimerInterval = null; }
    if (recognition) { try { recognition.stop(); } catch(e) {} recognition = null; }
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
    }
    // Restore UI
    const recBar  = document.getElementById('demo-recording-bar');
    const audioBtn = document.getElementById('demo-audio-btn');
    const textarea = document.getElementById('demo-input');
    if (recBar)   recBar.style.display = 'none';
    if (textarea) textarea.style.display = '';
    if (audioBtn) { audioBtn.classList.remove('recording'); audioBtn.title = 'Grabar mensaje de voz'; }
  }

  function handleRecordedAudio(url, durationSec) {
    const m = Math.floor(durationSec / 60);
    const s = durationSec % 60;
    const durStr = `${m}:${s.toString().padStart(2, '0')}`;

    const audioHTML = `
      <div class="demo-audio-recorded">
        <span class="material-symbols-outlined demo-audio-icon">mic</span>
        <div class="demo-audio-player-wrap">
          <audio controls src="${url}" preload="metadata"></audio>
          <span class="demo-audio-meta">Mensaje de voz &middot; ${durStr}</span>
        </div>
      </div>`;
    addDemoMessage('user', audioHTML, false, true);

    showDemoTyping();
    // Give SpeechRecognition a moment to finalize
    setTimeout(() => {
      removeDemoTyping();
      addDemoMessage('agent', getAdvisorReplyFromAudio(lastTranscript));
    }, 1800 + Math.random() * 800);
  }

  function handleDemoFile(file) {
    if (!file) return;
    const isImage = file.type.startsWith('image/');
    const sizeTxt = formatFileSize(file.size);

    if (false) { // audio branch removed — now handled by MediaRecorder
      void 0;
    } else {
      // Show file preview bubble
      let iconName = 'description';
      if (isImage) iconName = 'image';
      else if (file.type === 'application/pdf') iconName = 'picture_as_pdf';
      else if (file.name.endsWith('.xls') || file.name.endsWith('.xlsx')) iconName = 'table_chart';

      const fileHTML = `
        <div class="demo-file-preview">
          <span class="material-symbols-outlined demo-file-icon">${iconName}</span>
          <div class="demo-file-info">
            <span class="demo-file-name">${file.name}</span>
            <span class="demo-file-size">${sizeTxt}</span>
          </div>
        </div>`;
      addDemoMessage('user', fileHTML, true, false);

      showDemoTyping();
      setTimeout(() => {
        removeDemoTyping();
        const replyFn = FILE_ANALYSIS_RESPONSES[Math.floor(Math.random() * FILE_ANALYSIS_RESPONSES.length)];
        addDemoMessage('agent', replyFn(file.name));
      }, 2500 + Math.random() * 1000);
    }
  }

  function showDemoView() {
    cancelQueue();
    document.getElementById('chatbot-landing').style.display     = 'none';
    document.getElementById('chatbot-chat-view').style.display   = 'none';
    document.getElementById('chatbot-asesor-view').style.display = 'none';
    document.getElementById('chatbot-queue-view').style.display  = 'none';
    document.getElementById('chatbot-demo-view').style.cssText   = 'display:flex; flex-direction:column; height:100%;';

    const msgs = document.getElementById('demo-messages');
    if (msgs && msgs.children.length === 0) {
      setTimeout(() => addDemoMessage('agent', '¡Hola! Soy **Juan Carlos R.**, asesor de la Sergio. Puedo ayudarte con **negociación de becas**, revisión de documentos de admisión o agendar una cita presencial. ¿En qué puedo orientarte?'), 700);
    }
    setTimeout(() => { const inp = document.getElementById('demo-input'); if(inp) inp.focus(); }, 300);
  }

  /* ── Events ──────────────────────────────────────────────── */
  function bindEvents() {
    const toggle  = document.getElementById('chatbot-toggle');
    const window_ = document.getElementById('chatbot-window');
    const badge   = document.getElementById('chatbot-badge');

    // Toggle open/close
    toggle.addEventListener('click', () => {
      const isOpen = window_.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      if (badge) badge.style.display = 'none';
    });

    // Minimize buttons
    ['chat-minimize-btn', 'chat-minimize-btn-2', 'asesor-minimize-btn', 'queue-minimize-btn', 'demo-minimize-btn'].forEach(id => {
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

    const queueBackBtn = document.getElementById('queue-back-btn');
    if (queueBackBtn) queueBackBtn.addEventListener('click', () => { cancelQueue(); showAsesorView(); });

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
        document.getElementById('chatbot-messages').innerHTML = '';
        addMessage('bot', '❓ ¡Claro! Estas son las preguntas más frecuentes. Para empezar, ¿Cuál es tu perfil?', [
          '🎓 Soy estudiante activo',
          '👨‍👩‍👧 Soy padre de familia',
          '📋 Soy aspirante'
        ]);
      });
    }

    // Asesor channel bindings — now goes to queue first
    const channelLive = document.getElementById('channel-live-chat');
    if (channelLive) channelLive.addEventListener('click', showQueueView);

    const channelSched = document.getElementById('channel-schedule');
    if (channelSched) channelSched.addEventListener('click', () => {
      alert('Próximamente: Agendamiento online en vivo. Por favor llámanos al (605) 434 6444.');
    });

    // Topic chips — drag-to-scroll on desktop
    const topicsEl = document.getElementById('chatbot-topics');
    if (topicsEl) {
      let isDragging = false;
      let startX = 0;
      let scrollLeft = 0;

      topicsEl.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - topicsEl.offsetLeft;
        scrollLeft = topicsEl.scrollLeft;
        topicsEl.style.cursor = 'grabbing';
        topicsEl.style.userSelect = 'none';
      });

      document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - topicsEl.offsetLeft;
        const walk = (x - startX) * 1.5;
        topicsEl.scrollLeft = scrollLeft - walk;
      });

      document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        topicsEl.style.cursor = 'grab';
        topicsEl.style.userSelect = '';
      });

      topicsEl.style.cursor = 'grab';
    }

    document.querySelectorAll('.topic-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        // Don't fire if was a drag
        if (topicsEl && Math.abs(topicsEl.scrollLeft - (parseInt(topicsEl.dataset.scrollStart) || 0)) > 5) return;
        handleUserInput(chip.dataset.topic);
      });
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

    // File attachment (Demo)
    const attachBtn  = document.getElementById('demo-attach-btn');
    const fileInput  = document.getElementById('demo-file-input');
    if (attachBtn && fileInput) {
      attachBtn.addEventListener('click', () => fileInput.click());
      fileInput.addEventListener('change', () => {
        if (fileInput.files && fileInput.files[0]) {
          handleDemoFile(fileInput.files[0]);
          fileInput.value = '';
        }
      });
    }

    // Audio recording (Demo) — real MediaRecorder + SpeechRecognition
    const audioBtn = document.getElementById('demo-audio-btn');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        if (!isRecording) {
          startAudioRecording();
        } else {
          stopAudioRecording();
        }
      });
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
