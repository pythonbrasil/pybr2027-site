# Python Brasil 2027 · Belém, Pará

Site oficial da **Python Brasil 2027**, o maior evento Python da América Latina, que em 2027 acontece pela segunda vez na Região Norte e a primeira na cidade de **Belém, no Pará** (novembro de 2027).

O projeto segue a mesma base tecnológica, organização e navegação do [site da Python Brasil 2026](https://github.com/pythonbrasil/pybr2026-site), com a identidade visual da edição 2027.

> **Status:** nesta primeira etapa apenas a página inicial está pronta. Programação, Keynotes, Guia da cidade, Patrocinadores e FAQ exibem a página "Em construção".

## Tecnologias

- **React 19** + **TypeScript 5.9** + **Vite 7**
- **React Router 7** — roteamento SPA
- **i18next / react-i18next** — Português (BR), Inglês (EN) e Espanhol (ES)
- **ESLint** + typescript-eslint, react-hooks e react-refresh
- **GitHub Pages** — deploy automático via GitHub Actions (`.github/workflows/deploy.yml`)

## Identidade visual

Conceito **"Módulos em confluência"**: pessoas chegam por caminhos diferentes e se encontram no evento, como os rios que se juntam em Belém.

- **Tipografia:** Bricolage Grotesque (títulos e palavras dos módulos) e Figtree (textos, datas, botões e interface)
- **Paleta "Suave e calorosa"** (variáveis em `src/App.css`):

| Cor | Hex |
| --- | --- |
| Verde profundo | `#173D35` |
| Verde água | `#81C7B5` |
| Azul de rio | `#7FB6D0` |
| Laranja quente | `#F4BF69` |
| Creme | `#FFF9EA` |
| Vermelho coral | `#D76552` |

- **Pictogramas** (`public/img/pictogramas`), em cinco temas: Python e comunidade, Rios e deslocamento, Belém vivida, Natureza e Movimento cultural. Catálogo em `src/data/pictogramas.ts`.
- **Marca** (`public/img/marca`): assinatura completa (`logo.png`), versões monocromáticas verde e creme e a serpente isolada.
- **Sistema:** módulos 1×1 e 2×1 com o mesmo raio de canto, ligados por linhas de confluência em azul de rio.

## Estrutura

```
src/
├── App.tsx / Layout.tsx       # Rotas e layout (Contador + Header + Outlet + ButtonPrincipal + Footer)
├── i18n.ts                    # Traduções BR / EN / ES
├── links.ts                   # Links e data do evento (links vazios aparecem como "em breve")
├── data/pictogramas.ts        # Família de pictogramas
├── hooks/useScrollToId.ts     # Navegação suave para âncoras da home
├── components/                # Header, Menu, Footer, Contador, Carrossel, Carregamento, ButtonPrincipal...
└── pages/
    ├── home/                  # Página inicial (seções 1 a 4)
    └── emConstrucao/          # Página "Em construção" usada pelas demais rotas
```

### Página inicial

1. **Hero** — assinatura, chamada "O maior evento Python da América Latina", "Pessoas > Tecnologia" e composição de módulos
2. **Carrossel** — "pela comunidade · para comunidade"
3. **O evento** (`#O_EVENTO`)
4. **Belém, o coração da Amazônia** (`#BELEM`)
5. **Em construção** (`#EM_CONSTRUCAO`) — atalhos para as próximas seções

### Rotas

| Rota | Conteúdo |
| --- | --- |
| `/` | Página inicial |
| `/programacao`, `/keynotes`, `/guia_da_cidade`, `/patrocinadores`, `/perguntas_frequentes` | Em construção |
| `*` | Página não encontrada |

## Como executar

```bash
npm install
npm run dev       # servidor de desenvolvimento
npm run build     # checagem de tipos + build de produção em dist/
npm run preview   # serve o build localmente
npm run lint
```

## Configuração

Edite `src/links.ts` para atualizar:

- `DATA_DO_EVENTO` — usada no contador regressivo (provisória: 01/11/2027, horário de Belém)
- `LINK_COMPRAR_INGRESSO`, `LINK_PLANO_DE_PATROCINIO`, `LINK_SUBMISSAO_DE_ATIVIDADES` — enquanto vazios, os botões aparecem como "em breve"

## Deploy

A cada push na branch `main`, o workflow `Deploy to GitHub Pages` executa o build, cria o `404.html` (fallback da SPA) e publica `dist/` na branch `gh-pages`. O domínio está em `public/CNAME` (`2027.pythonbrasil.org.br`).
