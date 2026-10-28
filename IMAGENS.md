# Imagens do site — Helena Viana, Nutrição Clínica

Hoje cada slot usa um placeholder `.svg` em `/assets`. Quando a imagem final estiver pronta, salve-a em `/assets` com o nome da coluna **Arquivo final** e troque, no `index.html`, o `src` do placeholder pelo novo arquivo. A proporção já está travada no CSS, então a imagem não deforma o layout.

**Tratamento comum a todas:** fotografia natural, luz do dia suave e difusa, sem flash. Tons da paleta do site: creme, verde-sálvia, oliva e um toque de terracota. Pouca saturação e grão leve de filme. Pessoas brasileiras reais, com pele de textura natural e sem retoque de "banco de imagem". Nada de antes e depois, balança, fita métrica, corpo em evidência ou exames.

| # | Arquivo final | Placeholder atual | Proporção | Onde aparece |
|---|---|---|---|---|
| 1 | `assets/hero-prato.jpg` | `assets/hero-prato.svg` | 1:1 (mín. 1400×1400) | Hero: o prato redondo grande que sai pela borda direita. É recortado em círculo, então o prato precisa ocupar o quadro inteiro, centralizado. |
| 2 | `assets/hero-helena.jpg` | `assets/hero-helena.svg` | 4:5 (mín. 800×1000) | Hero: o retrato da Helena, apoiado sobre a mesa como uma foto impressa. |
| 3 | `assets/sobre-helena.jpg` | `assets/sobre-helena.svg` | 3:4 (mín. 900×1200) | Seção "Prazer, eu sou a Helena". |
| 4 | `assets/og-image.jpg` | nenhum (só a meta tag) | 1200×630 | Prévia ao compartilhar o link (WhatsApp, Instagram, Facebook). Depois do deploy, troque o caminho da meta `og:image` pela URL absoluta. |

## Prompts

### 1. hero-prato.jpg (1:1)
> Top-down overhead photograph of a single round ceramic plate, off-white with a thin rim, perfectly centered and filling the whole square frame. On the plate: a grilled Amazonian fish fillet (pescada amarela), white rice, brown beans, a fresh green salad with tomato and cucumber, a small spoon of toasted cassava flour (farinha d'água) and a lime wedge. Light natural wood table and a sage-green linen napkin barely visible at the edges. Soft diffuse daylight from a window, gentle natural shadows, muted earthy palette of cream, sage green, olive and a hint of terracotta. Realistic home-cooked Brazilian meal, not styled for advertising, subtle film grain, 1:1.

### 2. hero-helena.jpg (4:5)
> Natural portrait of a Brazilian woman nutritionist in her late 30s from northern Brazil, warm brown skin, dark wavy shoulder-length hair, genuine relaxed smile, looking at the camera. She wears a simple cream linen shirt, no lab coat. Bright consultation room with plants and soft window light, background softly blurred in sage and cream tones. Real skin texture, no heavy retouching, editorial documentary style, muted earthy palette, 4:5 vertical.

### 3. sobre-helena.jpg (3:4)
> Candid documentary photograph of the same Brazilian nutritionist (late 30s, warm brown skin, dark wavy hair, cream linen shirt) sitting at a wooden table, talking with a patient seen partially from behind. An open notebook, a pen and a ceramic cup of tea on the table. Calm, welcoming atmosphere, soft daylight from the side, plants in the background, muted palette of cream, sage green, olive and terracotta. Realistic, unposed, no medical equipment, no scale, no measuring tape, 3:4 vertical.

### 4. og-image.jpg (1200×630)
> Wide overhead photograph of a light wooden table set for one: a round off-white plate with a balanced Brazilian meal (grilled fish, rice, beans, green salad, lime), a sage-green linen napkin, a glass of water and a few loose herb leaves. Generous empty cream-toned space on the left third for text. Soft diffuse daylight, muted earthy palette of cream, sage, olive and a touch of terracotta, realistic, subtle film grain, 1200×630.

**Consistência:** gere o slot 2 primeiro e use-o como referência de rosto (Soul ID / imagem de referência) no slot 3, para que a Helena seja a mesma pessoa nas duas fotos.
