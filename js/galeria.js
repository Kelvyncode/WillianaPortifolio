/* ============================================================
   Galeria — carrossel automático
   Para trocar as fotos, edite apenas a lista GALERIA abaixo e
   coloque os arquivos em assets/galeria/.
   ============================================================ */
const GALERIA = [
  {
    arquivo: "assets/galeria/dashboard-indenizacoes.jpg",
    titulo: "Dashboard de indenizações",
    legenda: "Painel gerencial construído do zero em HTML, CSS e Chart.js · dados fictícios",
  },
  {
    arquivo: "assets/galeria/painel-pendencias.jpg",
    titulo: "Controle de pendências",
    legenda: "Painel que se reordena sozinho por status e responsável · dados fictícios",
  },
  {
    arquivo: "assets/galeria/slack-prazos.jpg",
    titulo: "Alerta de prazos no Slack",
    legenda: "Disparo diário às 8h, agrupado por responsável · dados fictícios",
  },
  {
    arquivo: "assets/galeria/slack-descontos.jpg",
    titulo: "Consolidado de descontos no Slack",
    legenda: "Um único aviso reunindo todos os descontos do dia · dados fictícios",
  },
  {
    arquivo: "assets/galeria/automacao-aniversarios.jpg",
    titulo: "Automação de aniversários",
    legenda: "Aviso automático disparado pelo fluxo · nome fictício",
  },
  {
    arquivo: "assets/galeria/diploma-logistica.jpg",
    titulo: "Tecnóloga em Logística",
    legenda: "Universidade Pitágoras Unopar Anhanguera · colação de grau em jan 2026",
  },
  {
    arquivo: "assets/galeria/certificado-ia.jpg",
    titulo: "Jornada Inteligência Artificial",
    legenda: "Hashtag Treinamentos · 8 horas · concluído em jul 2025",
  },
  {
    arquivo: "assets/galeria/certificado-python.jpg",
    titulo: "Análise de Dados com Python",
    legenda: "Universidade Pitágoras Unopar Anhanguera · trilha de 40 horas · 2025",
  },
  {
    arquivo: "assets/galeria/certificado-excel.jpg",
    titulo: "Excel Completo — do Básico ao Avançado",
    legenda: "Udemy · 28,5 horas · mar 2025",
  },
];

const INTERVALO = 5000;

(function iniciarGaleria() {
  const carrossel = document.getElementById("carrossel");
  const trilho = document.getElementById("carrossel-trilho");
  const pontos = document.getElementById("carrossel-pontos");
  const anterior = document.getElementById("carrossel-anterior");
  const proxima = document.getElementById("carrossel-proxima");

  if (!carrossel || !trilho || !GALERIA.length) return;

  let atual = 0;
  let temporizador = null;

  const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ===== Monta os slides =====
  GALERIA.forEach((item, i) => {
    const slide = document.createElement("li");
    slide.className = "carrossel__slide";
    slide.setAttribute("role", "group");
    slide.setAttribute("aria-roledescription", "slide");
    slide.setAttribute("aria-label", `${i + 1} de ${GALERIA.length}`);

    const figura = document.createElement("figure");

    const img = document.createElement("img");
    img.src = item.arquivo;
    img.alt = item.titulo;
    img.loading = i === 0 ? "eager" : "lazy";
    img.decoding = "async";

    // Enquanto a foto não existir, mostra o nome do arquivo esperado
    img.addEventListener("error", () => {
      const vazio = document.createElement("div");
      vazio.className = "carrossel__vazio";
      vazio.innerHTML =
        `<span>${item.titulo}</span><small>${item.arquivo}</small>`;
      img.replaceWith(vazio);
    });

    const legenda = document.createElement("figcaption");
    legenda.innerHTML =
      `<strong>${item.titulo}</strong>${item.legenda ? `<span>${item.legenda}</span>` : ""}`;

    figura.append(img, legenda);
    slide.append(figura);
    trilho.append(slide);

    const ponto = document.createElement("button");
    ponto.type = "button";
    ponto.className = "carrossel__ponto";
    ponto.setAttribute("role", "tab");
    ponto.setAttribute("aria-label", `Ir para a imagem ${i + 1}`);
    ponto.addEventListener("click", () => {
      irPara(i);
      reiniciar();
    });
    pontos.append(ponto);
  });

  const listaPontos = [...pontos.children];

  function irPara(indice) {
    atual = (indice + GALERIA.length) % GALERIA.length;
    trilho.style.transform = `translateX(-${atual * 100}%)`;
    [...trilho.children].forEach((slide, i) => {
      slide.setAttribute("aria-hidden", String(i !== atual));
    });
    listaPontos.forEach((ponto, i) => {
      ponto.classList.toggle("ativo", i === atual);
      ponto.setAttribute("aria-selected", String(i === atual));
    });
  }

  function avancar(passo) {
    irPara(atual + passo);
  }

  function iniciar() {
    if (semMovimento || GALERIA.length < 2) return;
    temporizador = setInterval(() => avancar(1), INTERVALO);
  }

  function parar() {
    clearInterval(temporizador);
    temporizador = null;
  }

  function reiniciar() {
    parar();
    iniciar();
  }

  anterior.addEventListener("click", () => {
    avancar(-1);
    reiniciar();
  });

  proxima.addEventListener("click", () => {
    avancar(1);
    reiniciar();
  });

  // Pausa quando o visitante está olhando ou navegando pelo teclado
  carrossel.addEventListener("mouseenter", parar);
  carrossel.addEventListener("mouseleave", iniciar);
  carrossel.addEventListener("focusin", parar);
  carrossel.addEventListener("focusout", iniciar);
  document.addEventListener("visibilitychange", () => {
    document.hidden ? parar() : iniciar();
  });

  // Teclado
  carrossel.setAttribute("tabindex", "0");
  carrossel.addEventListener("keydown", (evento) => {
    if (evento.key === "ArrowLeft") {
      avancar(-1);
      reiniciar();
    }
    if (evento.key === "ArrowRight") {
      avancar(1);
      reiniciar();
    }
  });

  // Arrastar no celular
  let inicioX = null;
  carrossel.addEventListener(
    "touchstart",
    (evento) => {
      inicioX = evento.touches[0].clientX;
      parar();
    },
    { passive: true }
  );
  carrossel.addEventListener(
    "touchend",
    (evento) => {
      if (inicioX === null) return;
      const distancia = evento.changedTouches[0].clientX - inicioX;
      if (Math.abs(distancia) > 45) avancar(distancia < 0 ? 1 : -1);
      inicioX = null;
      iniciar();
    },
    { passive: true }
  );

  irPara(0);
  iniciar();
})();
