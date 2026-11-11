// TODO: número real, formato 55 + DDD + número, só dígitos
var WA = "5588999999999";
var LOCATION = "Icaraizinho de Amontada \u00b7 CE";

var ICONS = {
  hosp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6"/><path d="M3 18h18"/><path d="M6 10V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><path d="M6 14h4"/></svg>',
  casa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10.5 12 4l8 6.5"/><path d="M6 9.5V20h12V9.5"/><path d="M10 20v-5h4v5"/></svg>',
  passeio: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/></svg>',
  transfer: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 16V8a1 1 0 0 1 1-1h9l4 4h3a1 1 0 0 1 1 1v4"/><path d="M3 16h18"/><circle cx="7" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/></svg>',
  alug: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17 10 8h4l4 9"/><path d="M9 8h5"/></svg>',
  heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.4-7-9.5A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 7 3.5C19 15.6 12 20 12 20Z"/></svg>',
  family: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M6 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"/><circle cx="5" cy="10" r="2"/><circle cx="19" cy="10" r="2"/></svg>',
  mountain: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 19 6-9 4 5 3-4 5 8Z"/><path d="m7 10 2 2"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19C5 10 12 5 20 5c0 8-5 14-13 14"/><path d="M5 19c2-4 5-6 9-8"/></svg>',
  paw: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="7" cy="9" r="1.6"/><circle cx="12" cy="7" r="1.6"/><circle cx="17" cy="9" r="1.6"/><path d="M8 16a4 4 0 0 1 8 0c0 2-2 3-4 3s-4-1-4-3Z"/></svg>',
  sun: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"/></svg>'
};

var TABS = [
  { k: "hosp", n: "Hospedagem", d: "Pousadas e chal\u00e9s", g: ["#efb089", "#d47b4a"] },
  { k: "casa", n: "Casas de temporada", d: "Casas inteiras", g: ["#e8a173", "#b96538"] },
  { k: "passeio", n: "Passeios", d: "Buggy, kite e mais", g: ["#f3c3a4", "#c46f42"] },
  { k: "transfer", n: "Transfer", d: "Aeroporto de Fortaleza", g: ["#fde3d2", "#a85c34"] },
  { k: "alug", n: "Alugu\u00e9is", d: "Quadriciclo e bike", g: ["#efb089", "#c46f42"] }
];

var STYLES = [
  { k: "hosp", icon: "heart", n: "Rom\u00e2ntico", d: "Pousadas e chal\u00e9s para uma estadia a dois", s: "style-romantico", g: ["#efb089", "#d47b4a"] },
  { k: "casa", icon: "family", n: "Fam\u00edlia", d: "Casas espa\u00e7osas com estrutura para crian\u00e7as", s: "style-familia", g: ["#e8a173", "#b96538"] },
  { k: "passeio", icon: "mountain", n: "Aventura", d: "Buggy, kite e dunas para quem gosta de adrenalina", s: "style-aventura", g: ["#f3c3a4", "#c46f42"] },
  { k: "passeio", icon: "leaf", n: "Natureza", d: "Lagoas, dunas e p\u00f4r do sol longe da rotina", s: "style-natureza", g: ["#fde3d2", "#a85c34"] },
  { k: "casa", icon: "paw", n: "Pet friendly", d: "Casas que recebem o seu pet", s: "style-pet", g: ["#e8a173", "#c46f42"] },
  { k: "hosp", icon: "sun", n: "Fim de semana", d: "Escapadas curtas para recarregar", s: "style-fim-de-semana", g: ["#efb089", "#a85c34"] }
];

var ITEMS = [
  { t: "hosp", tag: "Pousada", n: "Pousada Brisa do Kite", r: "9,2", v: 128, p: 290, u: "noite", g: ["#efb089", "#d47b4a"], s: "brisa-do-kite",
    d: "Pousada p\u00e9 na areia com piscina, caf\u00e9 da manh\u00e3 regional e vista para o mar.", am: ["Wi-Fi", "Piscina", "Caf\u00e9 da manh\u00e3"] },
  { t: "hosp", tag: "Chal\u00e9", n: "Chal\u00e9 P\u00f4r do Sol", r: "9,4", v: 86, p: 340, u: "noite", g: ["#efb089", "#c46f42"], s: "por-do-sol",
    d: "Chal\u00e9 privativo com varanda, rede e vista para o p\u00f4r do sol.", am: ["Wi-Fi", "Varanda", "Ar-condicionado"] },
  { t: "hosp", tag: "Pousada", n: "Pousada Vento Leste", r: "8,9", v: 203, p: 260, u: "noite", g: ["#fde3d2", "#d47b4a"], s: "vento-leste",
    d: "Pousada tranquila perto das dunas, ideal para quem busca sossego.", am: ["Wi-Fi", "Piscina", "Estacionamento"] },
  { t: "casa", tag: "Casa inteira", n: "Casa Duna Dourada \u00b7 6 pessoas", r: "9,5", v: 41, p: 780, u: "noite", g: ["#e8a173", "#b96538"], s: "duna-dourada",
    d: "Casa inteira com 3 quartos, piscina e \u00e1rea gourmet a poucos minutos da praia.", am: ["6 h\u00f3spedes", "Piscina", "Cozinha"] },
  { t: "casa", tag: "Casa inteira", n: "Casa Coqueiral \u00b7 8 pessoas", r: "9,1", v: 57, p: 980, u: "noite", g: ["#e8a173", "#d47b4a"], s: "coqueiral",
    d: "Casa ampla em meio aos coqueiros, com piscina e espa\u00e7o para fam\u00edlias.", am: ["8 h\u00f3spedes", "Piscina", "Churrasqueira"] },
  { t: "casa", tag: "Casa inteira", n: "Casa Mar\u00e9 Alta \u00b7 4 pessoas", r: "9,3", v: 34, p: 520, u: "noite", g: ["#efb089", "#b96538"], s: "mare-alta",
    d: "Casa aconchegante com dois quartos e varanda, perto do centro.", am: ["4 h\u00f3spedes", "Cozinha", "Ar-condicionado"] },
  { t: "passeio", tag: "Passeio", n: "Buggy pelas dunas e lagoas", r: "9,7", v: 312, p: 120, u: "pessoa", g: ["#f3c3a4", "#c46f42"], s: "buggy-dunas",
    d: "Roteiro guiado pelas dunas e lagoas de Icaraizinho, com paradas para banho.", am: ["Guia local", "Dura\u00e7\u00e3o 3h", "Fotos inclusas"] },
  { t: "passeio", tag: "Aula", n: "Aula de kitesurf \u00b7 2 h", r: "9,6", v: 148, p: 350, u: "pessoa", g: ["#efb089", "#d47b4a"], s: "kitesurf",
    d: "Aula para iniciantes com instrutor certificado e equipamento incluso.", am: ["Instrutor", "Equipamento", "2 horas"] },
  { t: "passeio", tag: "Passeio", n: "P\u00f4r do sol na duna", r: "9,8", v: 205, p: 60, u: "pessoa", g: ["#e8a173", "#c46f42"], s: "por-do-sol-duna",
    d: "Passeio curto para ver o p\u00f4r do sol no ponto mais alto da duna.", am: ["Guia local", "Dura\u00e7\u00e3o 1h30", "Fotos inclusas"] },
  { t: "transfer", tag: "Transfer", n: "Aeroporto de Fortaleza \u2192 Icaraizinho", r: "9,4", v: 97, p: 90, u: "pessoa", g: ["#fde3d2", "#a85c34"], s: "transfer-fortaleza",
    d: "Transfer compartilhado com sa\u00edda do aeroporto de Fortaleza.", am: ["Wi-Fi", "Ar-condicionado", "Porta a porta"] },
  { t: "transfer", tag: "Privativo", n: "Transfer privativo \u00b7 at\u00e9 4 pessoas", r: "9,6", v: 63, p: 520, u: "trajeto", g: ["#fde3d2", "#d47b4a"], s: "transfer-privativo",
    d: "Ve\u00edculo privativo com motorista, ideal para fam\u00edlias e grupos.", am: ["At\u00e9 4 pessoas", "Ar-condicionado", "Porta a porta"] },
  { t: "alug", tag: "Aluguel", n: "Quadriciclo \u00b7 1 hora", r: "9,2", v: 88, p: 180, u: "hora", g: ["#efb089", "#c46f42"], s: "quadriciclo",
    d: "Aluguel de quadriciclo com capacete e instru\u00e7\u00f5es de seguran\u00e7a.", am: ["Equipamento", "Seguro", "Instru\u00e7\u00f5es"] },
  { t: "alug", tag: "Aluguel", n: "Bicicleta \u00b7 di\u00e1ria", r: "9,0", v: 44, p: 40, u: "dia", g: ["#efb089", "#b96538"], s: "bicicleta",
    d: "Bicicleta para explorar a vila e as praias pr\u00f3ximas no seu ritmo.", am: ["Equipamento", "Seguro", "Di\u00e1ria"] }
];

var cur = "hosp";
var $ = function (id) { return document.getElementById(id); };
var money = function (n) { return "R$ " + n.toLocaleString("pt-BR"); };
function fmt(d) { return d ? d.split("-").reverse().join("/") : ""; }
function esc(v) {
  return String(v).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}
function waDigits() { return WA.replace(/\D/g, ""); }
function waLink(text) {
  var digits = waDigits();
  if (digits.length < 10) { console.warn("WhatsApp number is not configured correctly."); return "#"; }
  return "https://wa.me/" + digits + "?text=" + encodeURIComponent(text);
}
var PHOTOS = [
  "img/pousadas_melhoradas_fotos_e_ia/pousada-1-1280.webp",
  "img/pousadas_melhoradas_fotos_e_ia/pousada-2-1280.webp",
  "img/pousadas_melhoradas_fotos_e_ia/pousada-3-1280.webp",
  "img/pousadas_melhoradas_fotos_e_ia/pousada-4-1280.webp"
];
function img(n) { return PHOTOS[((n % PHOTOS.length) + PHOTOS.length) % PHOTOS.length]; }
function catOf(k) { return TABS.filter(function (x) { return x.k === k; })[0] || TABS[0]; }
function ratingLabel(r) {
  var n = parseFloat(String(r).replace(",", "."));
  if (n >= 9.5) return "Excepcional";
  if (n >= 9) return "Excelente";
  if (n >= 8.5) return "Muito bom";
  if (n >= 8) return "Bom";
  return "Agradável";
}

function toISO(d) {
  var m = String(d.getMonth() + 1).padStart(2, "0");
  var day = String(d.getDate()).padStart(2, "0");
  return d.getFullYear() + "-" + m + "-" + day;
}
function todayISO() { return toISO(new Date()); }
function addDays(iso, n) {
  var d = new Date(iso + "T00:00:00");
  d.setDate(d.getDate() + n);
  return toISO(d);
}

function dateText() {
  var a = $("d-in").value, b = $("d-out").value;
  if (!a) return "datas a combinar";
  if (b) return "de " + fmt(a) + " a " + fmt(b);
  return "data: " + fmt(a);
}

function msg(it, type) {
  var t = catOf(type);
  var range = t.k === "hosp" || t.k === "casa";
  var a = $("d-in").value, b = $("d-out").value, w;
  if (!a) { w = "datas a combinar"; }
  else if (range && b) { w = "de " + fmt(a) + " a " + fmt(b); }
  else { w = "data: " + fmt(a); }
  return "Ol\u00e1! Quero reservar: " + it + ". " + w + ". " + $("pax").value + " h\u00f3spede(s).";
}
function link(it, type) { return waLink(msg(it, type)); }

function setStatus(text) { $("search-status").textContent = text || ""; }

function render() {
  var t = catOf(cur);

  $("tabs").innerHTML = TABS.map(function (x) {
    return '<button class="tab" type="button" aria-pressed="' + (x.k === cur) + '" data-k="' + x.k + '">' + esc(x.n) + "</button>";
  }).join("");

  $("t-dest").textContent = "Mais reservados: " + t.n.toLowerCase();
  $("s-dest").textContent = t.d + " em Icaraizinho de Amontada. Se est\u00e1 aqui, \u00e9 porque vale a viagem.";

  $("grid").innerHTML = ITEMS.filter(function (i) { return i.t === cur; }).map(function (i) {
    var amen = (i.am || []).map(function (a) { return "<span>" + esc(a) + "</span>"; }).join("");
    return '<article class="card">' +
      '<div class="card-media" style="--g1:' + i.g[0] + ';--g2:' + i.g[1] + '">' +
        '<img loading="lazy" decoding="async" width="1280" height="720" src="' + img(ITEMS.indexOf(i)) + '" alt="Imagem ilustrativa de ' + esc(i.n) + '">' +
        '<span class="card-badge">' + esc(i.tag) + "</span>" +
        '<button class="card-wish" type="button" aria-pressed="false" aria-label="Salvar ' + esc(i.n) + ' nos favoritos">' + ICONS.heart + "</button>" +
      "</div>" +
      '<div class="card-body">' +
        '<p class="card-loc">' + esc(LOCATION) + "</p>" +
        '<div class="card-head">' +
          "<h3><a href=\"" + link(i.n, i.t) + "\" target=\"_blank\" rel=\"noopener\" data-it=\"" + esc(i.n) + "\" data-type=\"" + i.t + "\">" + esc(i.n) + "</a></h3>" +
          '<div class="card-rating" aria-label="Nota ' + esc(i.r) + ' de 10">' +
            '<span class="rating-score">' + esc(i.r) + "</span>" +
            '<span class="rating-text">' + ratingLabel(i.r) + "</span>" +
          "</div>" +
        "</div>" +
        '<div class="card-reviews">' + i.v + " avalia\u00e7\u00f5es</div>" +
        '<div class="amenities">' + amen + "</div>" +
        '<div class="card-foot">' +
          '<div class="price"><small>Por ' + esc(i.u) + "</small><strong>" + money(i.p) + "</strong></div>" +
          '<a class="card-link" target="_blank" rel="noopener" data-it="' + esc(i.n) + '" data-type="' + i.t + '" aria-label="Ver disponibilidade de ' + esc(i.n) + ' pelo WhatsApp" href="' + link(i.n, i.t) + '">Ver disponibilidade</a>' +
        "</div>" +
      "</div>" +
    "</article>";
  }).join("");

  links();
}

function links() {
  var a = document.querySelectorAll("a[data-it]");
  for (var i = 0; i < a.length; i++) {
    a[i].href = link(a[i].getAttribute("data-it"), a[i].getAttribute("data-type"));
  }
  $("pk").href = link("Pacote casa + transfer + passeio", "hosp");
}

$("tabs").addEventListener("click", function (e) {
  var btn = e.target.closest(".tab");
  if (!btn) return;
  cur = btn.getAttribute("data-k");
  setStatus("");
  render();
});

$("grid").addEventListener("click", function (e) {
  var btn = e.target.closest(".card-wish");
  if (!btn) return;
  var on = btn.getAttribute("aria-pressed") === "true";
  btn.setAttribute("aria-pressed", String(!on));
  btn.classList.toggle("is-saved", !on);
});

$("cats").innerHTML = STYLES.map(function (x) {
  return '<button class="style-card" type="button" data-k="' + x.k + '" aria-label="Ver op\u00e7\u00f5es para ' + esc(x.n) + '" style="--g1:' + x.g[0] + ';--g2:' + x.g[1] + '">' +
    '<span class="style-media"><img loading="lazy" decoding="async" width="1280" height="720" src="' + img(STYLES.indexOf(x)) + '" alt="Imagem ilustrativa de ' + esc(x.n) + ': ' + esc(x.d) + '"></span>' +
    '<span class="style-copy">' +
      "<b>" + esc(x.n) + "</b>" +
      '<span class="style-desc">' + esc(x.d) + "</span>" +
    "</span>" +
  "</button>";
}).join("");

$("cats").addEventListener("click", function (e) {
  var b = e.target.closest(".style-card");
  if (!b) return;
  cur = b.getAttribute("data-k");
  setStatus("");
  render();
  $("hospedagens").scrollIntoView();
});

function syncDates() {
  var min = $("d-in").value ? addDays($("d-in").value, 1) : todayISO();
  $("d-out").min = min;
  if ($("d-out").value && $("d-out").value < min) {
    $("d-out").value = "";
  }
}

["d-in", "d-out", "pax"].forEach(function (id) {
  $(id).addEventListener("change", function () {
    if (id === "d-in") syncDates();
    if (id === "d-out" && $("d-in").value && $("d-out").value) {
      if ($("d-out").value <= $("d-in").value) {
        setStatus("A data de check-out precisa ser depois do check-in.");
        $("d-out").value = "";
      } else {
        setStatus("");
      }
    }
    links();
  });
});

$("reservar").addEventListener("submit", function (e) {
  e.preventDefault();
  var a = $("d-in").value, b = $("d-out").value;
  if (a && b && b <= a) {
    setStatus("A data de check-out precisa ser depois do check-in.");
    $("d-out").focus();
    return;
  }
  if (a && a < todayISO()) {
    setStatus("Escolha uma data a partir de hoje.");
    $("d-in").focus();
    return;
  }
  setStatus("Escolha uma op\u00e7\u00e3o abaixo e finalize pelo WhatsApp.");
  render();
  $("hospedagens").scrollIntoView();
});

$("footer-wa").href = waLink("Ol\u00e1! Gostaria de falar com a equipe Icaraizinho Reservas.");
$("anuncie-cta").href = waLink("Ol\u00e1! Quero anunciar minha propriedade no Icaraizinho Reservas.");

var navToggle = $("nav-toggle");
var nav = $("main-nav");
function setMenu(open) {
  nav.classList.toggle("is-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
}
navToggle.addEventListener("click", function () { setMenu(!nav.classList.contains("is-open")); });
Array.prototype.forEach.call(nav.querySelectorAll("a"), function (a) {
  a.addEventListener("click", function () {
    setMenu(false);
    Array.prototype.forEach.call(nav.querySelectorAll("a"), function (x) { x.classList.remove("is-active"); });
    a.classList.add("is-active");
  });
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && nav.classList.contains("is-open")) { setMenu(false); navToggle.focus(); }
});

document.addEventListener("click", function (e) {
  if (!nav.classList.contains("is-open")) return;
  if (nav.contains(e.target) || navToggle.contains(e.target)) return;
  setMenu(false);
});

var desktop = window.matchMedia("(min-width:901px)");
function onDesktopChange(e) { if (e.matches) setMenu(false); }
if (desktop.addEventListener) { desktop.addEventListener("change", onDesktopChange); }
else { desktop.addListener(onDesktopChange); }

var t0 = todayISO();
$("d-in").min = t0;
$("d-out").min = addDays(t0, 1);
render();

/* Sombra suave no header ao rolar */
(function () {
  var header = document.getElementById("site-header");
  if (!header) return;
  function onScroll() { header.classList.toggle("is-scrolled", window.scrollY > 8); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

/* Carrossel de fundo do hero com crossfade suave e navegação por pontos */
(function () {
  var hero = document.querySelector(".hero");
  if (!hero) return;
  var slides = hero.querySelectorAll(".hero-slide");
  if (!slides.length) return;

  var dotsWrap = document.getElementById("hero-dots");
  var INTERVALO = 7000;
  var DURACAO = 1700;
  var atual = 0, timer = null, ocupado = false, dots = [];

  slides[0].classList.add("is-active");

  if (dotsWrap) {
    for (var i = 0; i < slides.length; i++) {
      (function (index) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "hero-dot";
        b.setAttribute("aria-label", "Ir para a foto " + (index + 1));
        b.addEventListener("click", function () { irPara(index); });
        dotsWrap.appendChild(b);
        dots.push(b);
      })(i);
    }
  }

  function sincronizarDots() {
    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.toggle("is-active", i === atual);
    }
  }

  function mostrar(n) {
    var destino = ((n % slides.length) + slides.length) % slides.length;
    if (destino === atual || ocupado) return;
    ocupado = true;
    var saindo = slides[atual];
    var entrando = slides[destino];

    entrando.classList.add("is-entering");
    atual = destino;
    sincronizarDots();

    setTimeout(function () {
      saindo.classList.remove("is-active");
      entrando.classList.remove("is-entering");
      entrando.classList.add("is-active");
      ocupado = false;
    }, DURACAO + 50);
  }

  function irPara(n) { mostrar(n); reiniciar(); }
  function proximo() { mostrar(atual + 1); }

  function iniciar() { if (!timer) timer = setInterval(proximo, INTERVALO); }
  function parar() { clearInterval(timer); timer = null; }
  function reiniciar() { parar(); iniciar(); }

  hero.addEventListener("mouseenter", parar);
  hero.addEventListener("mouseleave", iniciar);
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) { parar(); } else { iniciar(); }
  });

  sincronizarDots();
  iniciar();
})();
