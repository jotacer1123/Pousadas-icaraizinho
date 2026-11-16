# Icaraizinho Reservas

Site estático de reservas de pousadas, casas, passeios, transfer e aluguéis em Icaraizinho de Amontada (CE). Feito com HTML, CSS e JavaScript puro, sem build e sem dependências. Toda conversão acontece pelo WhatsApp (`wa.me`).

## Estrutura

```
icaraizinho-reservas/
├── index.html          # página principal
├── privacidade.html    # política de privacidade (LGPD)
├── termos.html         # termos de uso
├── favicon.png
├── robots.txt
├── sitemap.xml
├── css/style.css
├── js/main.js
├── fonts/              # Fraunces e Inter self-hosted (woff2)
└── img/                # imagens do site
```

## Rodar localmente

Dentro de `icaraizinho-reservas/`, inicie um servidor estático:

```bash
cd icaraizinho-reservas
python3 -m http.server 8000
```

Depois abra `http://localhost:8000`.

## Configurar o WhatsApp

O número fica em uma única constante no topo de `js/main.js`:

```js
// TODO: número real, formato 55 + DDD + número, só dígitos
var WA = "55DDDNNNNNNNNN";
```

Use apenas dígitos, no formato `55` + DDD + número. Todos os links `wa.me` do site são gerados a partir dessa constante.

## Editar propriedades e experiências

Os dados dos cards estão em `ITEMS`, também em `js/main.js`. Cada item tem tipo (`t`), nome (`n`), nota (`r`), número de avaliações (`v`), preço (`p`), unidade (`u`), descrição (`d`) e comodidades (`am`). As abas usam `TABS` e as categorias de estilo usam `STYLES`.

Valores, notas e fotos atuais são ilustrativos — substitua por dados reais antes de divulgar como oferta.

## Deploy

O deploy é feito na Vercel a partir da branch `main`. Como o site está em `icaraizinho-reservas/`, configure na Vercel:

- **Root Directory:** `icaraizinho-reservas`
- **Framework Preset:** Other / None
- **Build Command:** (vazio)
- **Output Directory:** (vazio, serve a própria pasta)

Os caminhos internos são relativos (`img/...`, `css/...`, `js/...`), então não é necessário `vercel.json`.

## Antes de publicar

- Preencher o número real de WhatsApp.
- Preencher o domínio real em `canonical`, Open Graph, Twitter Card, `robots.txt` e `sitemap.xml` (placeholder `https://SEU-DOMINIO.vercel.app`).
- Revisar textos marcados com `TODO:` em `index.html`, `privacidade.html` e `termos.html`.
- Revisar juridicamente as páginas de privacidade e termos.
- Substituir fotos de referência por fotos reais das propriedades.
