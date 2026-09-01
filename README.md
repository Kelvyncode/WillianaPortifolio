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
5. **Reconhecimentos** — prêmios e reconhecimentos recebidos na empresa
6. **Habilidades** — competências técnicas, com as ferramentas de cada área, e o
   bloco *Como eu trabalho* com as competências comportamentais
7. **Certificações** — formação acadêmica e cursos concluídos
8. **Contato** — LinkedIn, e-mail e GitHub

As galerias não são uma seção própria: a das automações fica dentro de *Automações*
e a dos certificados dentro de *Certificações*.

## Como adicionar as fotos

Coloque as imagens na pasta `assets/` com estes nomes:

| Arquivo                                       | Onde aparece           |
|-----------------------------------------------|------------------------|
| `assets/foto-perfil.jpg`                      | Foto de perfil no topo |
| `assets/curriculo-williana-silva.pdf`         | Botão "Baixar currículo" |
| `assets/galeria/*.jpg`                        | Galeria (carrossel)    |

Enquanto a foto não existir, o site mostra um espaço reservado indicando o nome
do arquivo esperado.

### Galerias

São duas, cada uma dentro da sua seção e com comportamento próprio:

- **Automações** (dentro da seção Automações) — telas largas, com setas e pontos.
  Lista `AUTOMACOES_IMGS` no topo do `js/galeria.js`
- **Certificados** (dentro de Certificações) — formato folha, navegação por
  miniaturas clicáveis. Lista `CERTIFICADOS_IMGS`

Cada item tem `arquivo`, `titulo` e `legenda` — para acrescentar uma imagem, copie um
bloco, salve o arquivo em `assets/galeria/` e aponte o `arquivo` para ele. Os pontos e
as miniaturas são criados automaticamente.

O tempo de cada imagem na tela está em `INTERVALO_AUTOMACOES` (8s) e
`INTERVALO_CERTIFICADOS` (9s). Ambas pausam quando o mouse ou o teclado está sobre
elas, aceitam setas do teclado e arrastar no celular, e não rodam sozinhas para quem
usa `prefers-reduced-motion`.

As telas de automação são **recriações com dados fictícios** das saídas reais dos
scripts (nomes de pessoas e transportadoras trocados). O diploma está publicado com
RG, data de nascimento e código de validação tarjados.

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
