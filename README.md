# WillianaPortifolio

Portfólio pessoal de **Williana Maria** — profissional de Logística com especialização
em andamento na área de Dados. Site estático em HTML, CSS e JavaScript, com visual
moderno monocromático.

## Seções

1. **Início** — apresentação com foto de perfil
2. **Sobre** — trajetória profissional e capacitação em IA (Claude Cowork, Claude Code, GPTs/Codex)
3. **Trajetória** — linha do tempo da carreira
4. **Automações** — grade com as 11 automações desenvolvidas; a etiqueta de cada card
   abre um modal com *antes*, *agora*, *resultado* e as ferramentas usadas
5. **Habilidades** — competências em operações, finanças, dados e automação
6. **Galeria** — espaço para fotos
7. **Contato** — LinkedIn, e-mail e GitHub

## Como adicionar as fotos

Coloque as imagens na pasta `assets/` com estes nomes:

| Arquivo                  | Onde aparece            |
|--------------------------|-------------------------|
| `assets/foto-perfil.jpg` | Foto de perfil no topo  |
| `assets/foto-1.jpg` a `assets/foto-6.jpg` | Galeria |

Enquanto as fotos não existirem, o site mostra um espaço reservado indicando o nome
do arquivo esperado. As fotos são exibidas em preto e branco para manter a paleta
monocromática (o efeito colorido aparece ao passar o mouse na galeria).

## Como personalizar

- **Automações**: edite a lista `automacoes` no `js/automacoes.js` — os cards são
  montados a partir dela; para adicionar uma nova, copie um bloco e mude os textos
- **Contato**: troque os links de LinkedIn e e-mail na seção Contato do `index.html`
- **Cores**: os tons de cinza estão nas variáveis `:root` do `css/style.css`

## Como visualizar

Abra o `index.html` no navegador, ou publique via GitHub Pages:

1. **Settings → Pages** no repositório
2. Em **Source**, escolha a branch `main` e a pasta `/ (root)`
3. O site ficará em `https://kelvyncode.github.io/WillianaPortifolio/`
