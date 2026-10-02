// ✏️ TROQUE: número do WhatsApp só com dígitos (55 + DDD + número)
const WHATSAPP = "5511900000000";

const whatsLink = (msg) =>
  `https://wa.me/${WHATSAPP}${msg ? "?text=" + encodeURIComponent(msg) : ""}`;

const openNewTab = (a, href) => { a.href = href; a.target = "_blank"; a.rel = "noopener"; };

// ---------- WhatsApp ----------
document.querySelectorAll(".js-whats").forEach((a) =>
  openNewTab(a, whatsLink("Oi! Vi seu portfólio e queria conversar sobre um vídeo."))
);
document.querySelectorAll(".js-ask").forEach((a) =>
  openNewTab(a, whatsLink(`Oi! Queria um orçamento de "${a.dataset.servico}".`))
);

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const data = f.get("data") ? f.get("data").split("-").reverse().join("/") : "";
  const msg =
    `Oi! Sou ${f.get("nome")}.\nTipo: ${f.get("tipo")}` +
    (data ? `\nData: ${data}` : "") +
    `\n\n${f.get("msg")}`;
  window.open(whatsLink(msg), "_blank", "noopener");
});

// ---------- Menu ----------
const nav = document.getElementById("nav");
document.getElementById("burger").addEventListener("click", () => nav.classList.toggle("is-open"));
document.querySelectorAll("#navLinks a").forEach((a) =>
  a.addEventListener("click", () => nav.classList.remove("is-open"))
);

// Timecode "REC" no menu
const tc = document.getElementById("timecode");
const t0 = performance.now();
const pad = (n) => String(n).padStart(2, "0");
(function tick() {
  const ms = performance.now() - t0;
  const s = Math.floor(ms / 1000);
  tc.textContent = `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}:${pad(Math.floor((ms % 1000) / 41.67))}`;
  requestAnimationFrame(tick);
})();

// ---------- Mídia que ainda não existe: esconde e deixa o placeholder ----------
document.querySelectorAll(".media img, .media video, .hero__bg").forEach((el) =>
  el.addEventListener("error", () => (el.style.display = "none"))
);

// ---------- Player (modal) ----------
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");

function play(src) {
  const v = document.createElement("video");
  v.src = src;
  v.controls = v.autoplay = v.playsInline = true;
  v.addEventListener("error", () => {
    modalBody.innerHTML = `<p class="modal__empty">Vídeo ainda não adicionado<br><small>${src}</small></p>`;
  });
  modalBody.replaceChildren(v);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  setTimeout(() => modalBody.replaceChildren(), 300);
}
document.querySelectorAll(".js-play").forEach((el) =>
  el.addEventListener("click", () => play(el.dataset.src))
);
document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => e.target === modal && closeModal());
document.addEventListener("keydown", (e) => e.key === "Escape" && closeModal());

// ---------- Projetos: prévia que segue o mouse ----------
const peek = document.getElementById("peek");
const peekImg = peek.querySelector("img");
peekImg.addEventListener("error", () => (peekImg.style.visibility = "hidden"));
peekImg.addEventListener("load", () => (peekImg.style.visibility = "visible"));
document.querySelectorAll(".project").forEach((p) => {
  p.addEventListener("mouseenter", () => { peekImg.src = p.dataset.img; peek.classList.add("is-on"); });
  p.addEventListener("mouseleave", () => peek.classList.remove("is-on"));
});
window.addEventListener("mousemove", (e) => {
  peek.style.left = e.clientX + 170 + "px";
  peek.style.top = e.clientY + "px";
}, { passive: true });

// ---------- Reels: toca sem som no hover + setas ----------
document.querySelectorAll(".reel").forEach((r) => {
  const v = r.querySelector("video");
  r.addEventListener("mouseenter", () => v.play().catch(() => {}));
  r.addEventListener("mouseleave", () => v.pause());
});
const track = document.getElementById("reelsTrack");
document.querySelectorAll(".arrow").forEach((b) =>
  b.addEventListener("click", () =>
    track.scrollBy({ left: Number(b.dataset.dir) * track.clientWidth * 0.7, behavior: "smooth" })
  )
);

// ---------- Animação de entrada ----------
document
  .querySelectorAll(".head, .project, .reel, .service, .about__photo, .about__text, .steps li, .quote, .faq__list, .contact__grid")
  .forEach((el) => el.classList.add("reveal"));
const io = new IntersectionObserver(
  (entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
  }),
  { threshold: 0.1 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
