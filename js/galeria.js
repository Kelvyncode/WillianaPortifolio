/* ============================================================
   Galerias — duas, com comportamentos diferentes
   AUTOMACOES: telas largas, setas e pontos
   CERTIFICADOS: folhas, navegação por miniaturas
   Para trocar as imagens, edite só as duas listas abaixo.
   ============================================================ */
const AUTOMACOES_IMGS = [
  {
    arquivo: "assets/galeria/dashboard-indenizacoes.jpg",
    titulo: "Dashboard de indenizações",
    legenda: "Painel gerencial em HTML, CSS e Chart.js · dados fictícios",
  },
  {
    arquivo: "assets/galeria/painel-pendencias.jpg",
    titulo: "Controle de pendências",
    legenda: "Reordena sozinho por status e responsável · dados fictícios",
  },
  {
    arquivo: "assets/galeria/slack-prazos.jpg",
    titulo: "Alerta de prazos no Slack",
    legenda: "Disparo diário às 8h, agrupado por responsável · dados fictícios",
  },
];

const CERTIFICADOS_IMGS = [
  {
    arquivo: "assets/galeria/diploma-logistica.jpg",
    titulo: "Tecnóloga em Logística",
    legenda: "Unopar Anhanguera · colação de grau em jan 2026",
  },
  {
    arquivo: "assets/galeria/certificado-ia.jpg",
    titulo: "Jornada Inteligência Artificial",
    legenda: "Hashtag Treinamentos · 8 horas · jul 2025",
  },
  {
    arquivo: "assets/galeria/certificado-python.jpg",
    titulo: "Análise de Dados com Python",
    legenda: "Unopar Anhanguera · trilha de 40 horas · 2025",
  },
  {
    arquivo: "assets/galeria/certificado-excel.jpg",
    titulo: "Excel Completo — do Básico ao Avançado",
    legenda: "Udemy · 28,5 horas · mar 2025",
  },
];

// Tempo que cada imagem fica na tela (ms)
const INTERVALO_AUTOMACOES = 8000;
const INTERVALO_CERTIFICADOS = 9000;

function montarCarrossel({ raiz, itens, intervalo, navegacao }) {
  const carrossel = document.getElementById(raiz);
  if (!carrossel || !itens.length) return;

  const trilho = carrossel.querySelector(".carrossel__trilho");
  const nav = carrossel.querySelector(".carrossel__nav");
  const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let atual = 0;
  let temporizador = null;

  itens.forEach((item, i) => {
    const slide = document.createElement("li");
    slide.className = "carrossel__slide";
    slide.setAttribute("role", "group");
    slide.setAttribute("aria-roledescription", "slide");
    slide.setAttribute("aria-label", `${i + 1} de ${itens.length}`);

    const figura = document.createElement("figure");
    const img = document.createElement("img");
    img.src = item.arquivo;
    img.alt = item.titulo;
    img.loading = i === 0 ? "eager" : "lazy";
    img.decoding = "async";
    img.addEventListener("error", () => {
      const vazio = document.createElement("div");
      vazio.className = "carrossel__vazio";
      vazio.innerHTML = `<span>${item.titulo}</span><small>${item.arquivo}</small>`;
      img.replaceWith(vazio);
    });

    const legenda = document.createElement("figcaption");
    legenda.innerHTML =
      `<strong>${item.titulo}</strong>${item.legenda ? `<span>${item.legenda}</span>` : ""}`;

    figura.append(img, legenda);
    slide.append(figura);
    trilho.append(slide);

    // Navegação: ponto simples ou miniatura da própria imagem
    const botao = document.createElement("button");
    botao.type = "button";
    botao.setAttribute("role", "tab");
    botao.setAttribute("aria-label", `Ir para: ${item.titulo}`);

    if (navegacao === "miniaturas") {
      botao.className = "carrossel__mini";
      const mini = document.createElement("img");
      mini.src = item.arquivo;
      mini.alt = "";
      mini.loading = "lazy";
      botao.append(mini);
    } else {
      botao.className = "carrossel__ponto";
    }

    botao.addEventListener("click", () => {
      irPara(i);
      reiniciar();
    });
    nav.append(botao);
  });

  const botoes = [...nav.children];

  function irPara(indice) {
    atual = (indice + itens.length) % itens.length;
    trilho.style.transform = `translateX(-${atual * 100}%)`;
    [...trilho.children].forEach((slide, i) =>
      slide.setAttribute("aria-hidden", String(i !== atual))
    );
    botoes.forEach((b, i) => {
      b.classList.toggle("ativo", i === atual);
      b.setAttribute("aria-selected", String(i === atual));
    });
  }

  const avancar = (passo) => irPara(atual + passo);

  function iniciar() {
    if (semMovimento || itens.length < 2 || temporizador) return;
    temporizador = setInterval(() => avancar(1), intervalo);
  }

  function parar() {
    clearInterval(temporizador);
    temporizador = null;
  }

  function reiniciar() {
    parar();
    iniciar();
  }

  carrossel.querySelectorAll("[data-passo]").forEach((seta) => {
    seta.addEventListener("click", () => {
      avancar(Number(seta.dataset.passo));
      reiniciar();
    });
  });

  carrossel.addEventListener("mouseenter", parar);
  carrossel.addEventListener("mouseleave", iniciar);
  carrossel.addEventListener("focusin", parar);
  carrossel.addEventListener("focusout", iniciar);
  document.addEventListener("visibilitychange", () =>
    document.hidden ? parar() : iniciar()
  );

  carrossel.setAttribute("tabindex", "0");
  carrossel.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { avancar(-1); reiniciar(); }
    if (e.key === "ArrowRight") { avancar(1); reiniciar(); }
  });

  let inicioX = null;
  carrossel.addEventListener("touchstart", (e) => {
    inicioX = e.touches[0].clientX;
    parar();
  }, { passive: true });
  carrossel.addEventListener("touchend", (e) => {
    if (inicioX === null) return;
    const d = e.changedTouches[0].clientX - inicioX;
    if (Math.abs(d) > 45) avancar(d < 0 ? 1 : -1);
    inicioX = null;
    iniciar();
  }, { passive: true });

  irPara(0);
  iniciar();
}

montarCarrossel({
  raiz: "galeria-automacoes",
  itens: AUTOMACOES_IMGS,
  intervalo: INTERVALO_AUTOMACOES,
  navegacao: "pontos",
});

montarCarrossel({
  raiz: "galeria-certificados",
  itens: CERTIFICADOS_IMGS,
  intervalo: INTERVALO_CERTIFICADOS,
  navegacao: "miniaturas",
});
