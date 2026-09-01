// ============================================================
//  Automações — conteúdo e modal de detalhes
//  Para adicionar ou editar uma automação, mexa apenas na
//  lista abaixo. O site monta os cards sozinho.
// ============================================================

const automacoes = [
  {
    numero: "A1",
    tag: "Eficiência",
    titulo: "Alerta de aniversários",
    resumo:
      "Substitui o controle manual de datas por avisos automáticos por e-mail e Slack.",
    antes:
      "lembrar aniversários da equipe manualmente, com risco de esquecer ou avisar em cima da hora.",
    agora:
      "um script dispara e-mail 7 dias antes, felicitação automática no dia e alerta para os colegas comemorarem juntos.",
    resultado:
      "zero esquecimentos, mais integração do time, com registro automático no Slack.",
    stack: ["Google Apps Script", "Gmail", "Slack Webhook"],
  },
  {
    numero: "A2",
    tag: "Rastreabilidade",
    titulo: "Relatório de extravios",
    resumo:
      "Trata, classifica e distribui milhares de linhas de extravio sem intervenção manual.",
    antes:
      "tratar planilhas de extravio linha por linha, classificar manualmente e enviar um arquivo separado para cada transportadora.",
    agora:
      "3 módulos automatizados limpam, classificam e separam a base; outro script localiza os arquivos no Drive e dispara os e-mails.",
    resultado:
      "83,33% menos tempo no processo — cerca de 110 horas economizadas por mês, com 1.800 linhas processadas e 23 arquivos gerados e enviados por ciclo.",
    stack: ["VBA · Excel", "Google Apps Script", "Gmail"],
  },
  {
    numero: "A3",
    tag: "Redução de retrabalho",
    titulo: "Cobrança de notas de débito",
    resumo: "Monitora vencimentos e dispara avisos e cobranças sem duplicidade.",
    antes:
      "acompanhar vencimentos de notas de débito manualmente, com risco de cobrar duas vezes ou esquecer um vencimento.",
    agora:
      "um script verifica a base todos os dias, avisa 3 dias antes do vencimento e cobra automaticamente as notas vencidas.",
    resultado:
      "100% do disparo manual eliminado — 330 minutos economizados por mês, com cada envio registrado e sem duplicidade.",
    stack: ["Google Apps Script", "Gmail", "Google Sheets"],
  },
  {
    numero: "A4",
    tag: "Padronização",
    titulo: "Geração de PDFs",
    resumo:
      "Preenche, exporta e organiza documentos financeiros a partir de uma única marcação na planilha.",
    antes:
      "preencher notas de débito uma a uma, exportar em PDF manualmente e organizar os arquivos por transportadora.",
    agora:
      "ao marcar uma linha como pronta, o script preenche o modelo, exporta o PDF e salva direto na pasta certa do Drive.",
    resultado:
      "62,28% menos tempo no processo — 251 minutos economizados por mês, sem preenchimento manual e com nome de arquivo padronizado.",
    stack: ["Google Apps Script", "Google Sheets", "Google Drive"],
  },
  {
    numero: "A5",
    tag: "Visibilidade",
    titulo: "Alerta de fatura lançada",
    resumo:
      "Avisa a equipe assim que uma fatura de transportadora monitorada é lançada, sem duplicar avisos.",
    antes:
      "descobrir manualmente quando uma fatura de uma transportadora monitorada era lançada na planilha.",
    agora:
      "ao preencher a coluna Fatura, o script confere se a transportadora está na lista monitorada e se a fatura já não foi avisada antes, e dispara um e-mail com os detalhes.",
    resultado:
      "aviso instantâneo, sem retrabalho de conferência e com trava anti-duplicidade.",
    stack: ["Google Apps Script", "Gmail", "LockService"],
  },
  {
    numero: "A6",
    tag: "Comunicação",
    titulo: "Aviso de descontos no Slack",
    resumo:
      "Reúne todos os descontos conferidos no dia em um único aviso consolidado.",
    antes:
      "avisar o time financeiro manualmente, um por um, sempre que um desconto era conferido.",
    agora:
      'ao marcar "OK" na planilha, o script espera alguns segundos, junta todas as linhas marcadas, calcula o vencimento mais comum e publica um resumo com link direto para as linhas.',
    resultado:
      "um único aviso consolidado no Slack em vez de várias mensagens soltas.",
    stack: ["Google Apps Script", "Slack Webhook"],
  },
  {
    numero: "A7",
    tag: "Integração",
    titulo: "Indenizações via e-mail",
    resumo:
      "Lê e-mails de transportadoras, testa os anexos e preenche a base de indenização sozinho.",
    antes:
      "abrir e-mail por e-mail de cada transportadora, achar a planilha anexada certa e copiar a classificação manualmente.",
    agora:
      "o script varre as conversas do Gmail por transportadora, mês e quinzena, testa os anexos até achar a versão já classificada e preenche status, valor de perda e valor recuperado na linha certa.",
    resultado:
      "elimina a conferência manual de centenas de e-mails e ainda registra o motivo quando não encontra o anexo certo.",
    stack: ["Google Apps Script", "Gmail", "Google Sheets"],
  },
  {
    numero: "A8",
    tag: "Precisão",
    titulo: "Cálculo de faturamento",
    resumo:
      "Cruza bases externas com o controle geral e calcula o faturamento por transportadora.",
    antes:
      "cruzar manualmente valores de diferentes bases com o controle geral para calcular o faturamento.",
    agora:
      "o script cruza automaticamente as bases externas com o controle, considerando quinzena, mensal ou pontual, e soma o valor certo por transportadora.",
    resultado:
      "cálculo consistente, sem erro de digitação, disparado sob demanda ou agendado.",
    stack: ["Google Apps Script", "Google Sheets"],
  },
  {
    numero: "A9",
    tag: "Organização",
    titulo: "Indicadores de pendências",
    resumo:
      "Reordena o painel de pendências sozinho e permite ocultar o que já foi resolvido.",
    antes:
      "organizar manualmente a lista de pendências por prioridade e esconder o que já tinha sido resolvido.",
    agora:
      "o painel se reordena automaticamente por status (pendente > em andamento > resolvido) e permite mostrar ou ocultar os itens resolvidos com um clique.",
    resultado:
      "visão sempre atualizada do que precisa de atenção, sem manutenção manual da planilha.",
    stack: ["Google Apps Script", "Google Sheets"],
  },
  {
    numero: "A10",
    tag: "Proatividade",
    titulo: "Alerta de prazos",
    resumo:
      "Avisa no Slack, agrupado por responsável, quando um prazo está perto ou já venceu.",
    antes:
      "acompanhar manualmente o prazo de cada pendência para não deixar passar da data.",
    agora:
      "todos os dias às 8h o script verifica quais pendências vencem em 3 dias ou já estão vencidas, agrupa por responsável e avisa no Slack.",
    resultado:
      "nenhum prazo estourado passa despercebido — o aviso chega sozinho e já agrupado por pessoa.",
    stack: ["Google Apps Script", "Slack Webhook", "Triggers"],
  },
  {
    numero: "A11",
    tag: "Consolidação",
    titulo: "Organização de descontos",
    resumo:
      "Agrupa descontos aprovados por transportadora e organiza na aba certa automaticamente.",
    antes:
      "copiar manualmente cada desconto aprovado para a aba de descontos, agrupando à mão por transportadora.",
    agora:
      'ao marcar uma linha como "OK", o script agrupa automaticamente por transportadora e escreve as linhas na aba "Página de Descontos", já com a atribuição correta.',
    resultado: "elimina a cópia manual e evita duplicidade com trava de execução.",
    stack: ["Google Apps Script", "Google Sheets"],
  },
  {
    numero: "A12",
    tag: "Visão gerencial",
    titulo: "Dashboard de indenizações",
    resumo:
      "Painel visual que reúne todos os indicadores de indenização em um só lugar.",
    antes:
      "montar relatórios avulsos no Excel toda vez que a gestão pedia um panorama de indenizações, sem visão histórica nem comparação entre operações.",
    agora:
      "um painel único reúne KPIs, gráficos e rankings por transportadora, operação e status, com filtros de período e tema claro/escuro.",
    resultado:
      "visão gerencial em tempo real, sem montar planilha nenhuma para cada pedido de relatório.",
    stack: ["HTML/CSS/JS", "Chart.js", "Google Sheets"],
    link: "dashboard-indenizacoes.html",
  },
];

// ===== Monta os cards =====
const grade = document.getElementById("automacoes-grade");

automacoes.forEach((item, indice) => {
  const card = document.createElement("article");
  card.className = "card";

  const numero = document.createElement("span");
  numero.className = "card__indice";
  numero.textContent = item.numero;

  const titulo = document.createElement("h3");
  titulo.textContent = item.titulo;

  const resumo = document.createElement("p");
  resumo.textContent = item.resumo;

  const botao = document.createElement("button");
  botao.type = "button";
  botao.className = "card__etiqueta card__etiqueta--botao";
  botao.textContent = item.tag;
  botao.dataset.indice = indice;
  botao.setAttribute("aria-label", "Ver detalhes: " + item.titulo);

  card.append(numero, titulo, resumo, botao);
  grade.appendChild(card);
});

// ===== Modal de detalhes =====
const modal = document.getElementById("modal-automacao");
const modalEtiqueta = document.getElementById("modal-etiqueta");
const modalTitulo = document.getElementById("modal-titulo");
const modalAntes = document.getElementById("modal-antes");
const modalAgora = document.getElementById("modal-agora");
const modalResultado = document.getElementById("modal-resultado");
const modalStack = document.getElementById("modal-stack");
const modalLink = document.getElementById("modal-link");
const modalFechar = document.getElementById("modal-fechar");

let botaoQueAbriu = null;

function abrirModal(item, origem) {
  modalEtiqueta.textContent = item.tag;
  modalTitulo.textContent = item.titulo;
  modalAntes.textContent = item.antes;
  modalAgora.textContent = item.agora;
  modalResultado.textContent = item.resultado;

  modalStack.textContent = "";
  item.stack.forEach((ferramenta) => {
    const chip = document.createElement("span");
    chip.className = "modal__chip";
    chip.textContent = ferramenta;
    modalStack.appendChild(chip);
  });

  if (item.link) {
    modalLink.href = item.link;
    modalLink.hidden = false;
  } else {
    modalLink.hidden = true;
  }

  botaoQueAbriu = origem;
  modal.classList.add("modal--aberto");
  document.body.classList.add("sem-rolagem");
  modalFechar.focus();
}

function fecharModal() {
  modal.classList.remove("modal--aberto");
  document.body.classList.remove("sem-rolagem");
  if (botaoQueAbriu) {
    botaoQueAbriu.focus();
    botaoQueAbriu = null;
  }
}

grade.addEventListener("click", (evento) => {
  const botao = evento.target.closest(".card__etiqueta--botao");
  if (!botao) return;
  abrirModal(automacoes[botao.dataset.indice], botao);
});

modalFechar.addEventListener("click", fecharModal);

modal.addEventListener("click", (evento) => {
  if (evento.target === modal) fecharModal();
});

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape" && modal.classList.contains("modal--aberto")) {
    fecharModal();
  }
});
