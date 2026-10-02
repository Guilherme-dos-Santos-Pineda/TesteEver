# Site portfólio — como personalizar e publicar

## 1. Personalizar
Tudo que precisa trocar está marcado com `✏️ TROQUE` nos arquivos.

- **index.html** — nome, textos, preços, contatos, Instagram.
- **script.js** (primeira linha) — número do WhatsApp, só dígitos: `5511912345678`.
- **style.css** (topo) — cores. `--gold` é a cor de destaque.

## 2. Fotos e vídeos
Coloque os arquivos na pasta `assets/` com estes nomes (ou mude os nomes no `index.html`):

| Arquivo | Onde aparece |
|---|---|
| `showreel.mp4` + `showreel.jpg` | Vídeo de fundo do topo (horizontal, curto, sem som) |
| `showreel-completo.mp4` | Abre no botão "Assistir showreel" |
| `projeto1.jpg` … `projeto5.jpg` | Prévia ao passar o mouse na lista de projetos |
| `projeto1.mp4` … `projeto5.mp4` | Vídeo que abre ao clicar no projeto |
| `reel1.mp4` … `reel6.mp4` | Carrossel de reels (vertical 9:16) |
| `perfil.jpg` | Seção "Quem filma" |
| `capa.jpg` | Imagem que aparece quando o link é compartilhado |

Enquanto um arquivo não existir, aparece um quadro escuro com o nome dele no lugar.

**Dica:** o GitHub não aceita arquivos acima de 100 MB, e vídeos pesados deixam o site lento.
Comprima os vídeos para menos de ~10 MB cada (ex.: HandBrake, ou 720p no CapCut).

## 3. Publicar no GitHub Pages
1. Crie uma conta em github.com e um repositório novo (ex.: `portfolio`), público.
2. Clique em **Add file → Upload files** e arraste o conteúdo desta pasta
   (`index.html`, `style.css`, `script.js` e a pasta `assets`). Clique em **Commit changes**.
3. Vá em **Settings → Pages**, em *Branch* escolha `main` e `/ (root)`, e clique em **Save**.
4. Em 1–2 minutos o site fica no ar em `https://SEU-USUARIO.github.io/portfolio/`.

Se o repositório se chamar `SEU-USUARIO.github.io`, o endereço fica só `https://SEU-USUARIO.github.io/`.
