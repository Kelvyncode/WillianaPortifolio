# WillianaPortifolio

Portfólio pessoal de **Williana Silva** — profissional de Logística com especialização
em andamento na área de Dados. Site estático em HTML, CSS e JavaScript, com visual
moderno monocromático.

## Seções

1. **Início** — apresentação com foto de perfil
2. **Sobre** — trajetória profissional e capacitação em IA (Claude Cowork, Claude Code, GPTs/Codex)
3. **Trajetória** — linha do tempo da carreira
4. **Automações** — grade com as 12 automações desenvolvidas; a etiqueta de cada card
   abre um modal com *antes*, *agora*, *resultado* e as ferramentas usadas. A A12 leva
   ao `dashboard-indenizacoes.html`, painel completo com Chart.js (dados fictícios)
5. **Habilidades** — competências técnicas, com as ferramentas de cada área
6. **Certificações** — formação acadêmica e cursos concluídos
7. **Contato** — LinkedIn, e-mail e GitHub

## Como adicionar as fotos

Coloque as imagens na pasta `assets/` com estes nomes:

| Arquivo                  | Onde aparece            |
|--------------------------|-------------------------|
| `assets/foto-perfil.jpg` | Foto de perfil no topo  |

Enquanto a foto não existir, o site mostra um espaço reservado indicando o nome
do arquivo esperado.

## Como personalizar

- **Automações**: edite a lista `automacoes` no `js/automacoes.js` — os cards são
  montados a partir dela; para adicionar uma nova, copie um bloco e mude os textos.
  Um item com `link:` ganha o botão "Abrir dashboard completo" no modal
- **Contato**: troque os links de LinkedIn e e-mail na seção Contato do `index.html`
- **Cores**: os tons de cinza estão nas variáveis `:root` do `css/style.css`

## Como visualizar

Abra o `index.html` no navegador, ou publique via GitHub Pages:

1. **Settings → Pages** no repositório
2. Em **Source**, escolha a branch `main` e a pasta `/ (root)`
3. O site ficará em `https://kelvyncode.github.io/WillianaPortifolio/`
