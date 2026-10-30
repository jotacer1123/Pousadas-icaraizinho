var WA = "5588999999999";
var LOCATION = "Icaraizinho de Amontada \u00b7 CE";

var TABS = [
  { k: "hosp", n: "Hospedagem", e: "\ud83c\udfe8", d: "Pousadas e chal\u00e9s", range: true, g: ["#b07a5a", "#5f4232"] },
  { k: "casa", n: "Casas de temporada", e: "\ud83c\udfe1", d: "Casas inteiras", range: true, g: ["#b0693f", "#6b4230"] },
  { k: "passeio", n: "Passeios", e: "\ud83c\udfc4", d: "Buggy, kite e mais", range: false, g: ["#b07a5a", "#9a7355"] },
  { k: "transfer", n: "Transfer", e: "\ud83d\ude90", d: "Aeroporto de Fortaleza", range: false, g: ["#a08a78", "#5b4a40"] },
  { k: "alug", n: "Alugu\u00e9is", e: "\ud83d\udef5", d: "Quadriciclo e bike", range: false, g: ["#b0693f", "#5f4232"] }
];

var AMENITIES = {
  hosp: ["Wi-Fi", "Piscina", "Caf\u00e9 da manh\u00e3"],
  casa: ["Wi-Fi", "Cozinha", "Ar-condicionado"],
  passeio: ["Guia local", "Dura\u00e7\u00e3o 3h", "Fotos inclusas"],
  transfer: ["Wi-Fi", "Ar-condicionado", "Porta a porta"],
  alug: ["Equipamento", "Seguro", "Instru\u00e7\u00f5es"]
};

var ITEMS = [
  { t: "hosp", tag: "Pousada", n: "Pousada Brisa do Kite", r: "9,2", v: 128, p: 290, u: "noite", g: ["#b07a5a", "#5f4232"], e: "\ud83c\udfe8", s: "brisa-do-kite" },
  { t: "hosp", tag: "Chal\u00e9", n: "Chal\u00e9 P\u00f4r do Sol", r: "9,4", v: 86, p: 340, u: "noite", g: ["#b07a5a", "#9a7355"], e: "\ud83d\uded6", s: "por-do-sol" },
  { t: "hosp", tag: "Pousada", n: "Pousada Vento Leste", r: "8,9", v: 203, p: 260, u: "noite", g: ["#a08a78", "#5f4232"], e: "\ud83c\udf34", s: "vento-leste" },
  { t: "casa", tag: "Casa inteira", n: "Casa Duna Dourada \u00b7 6 pessoas", r: "9,5", v: 41, p: 780, u: "noite", g: ["#b0693f", "#6b4230"], e: "\ud83c\udfe1", s: "duna-dourada" },
  { t: "casa", tag: "Casa inteira", n: "Casa Coqueiral \u00b7 8 pessoas", r: "9,1", v: 57, p: 980, u: "noite", g: ["#b0693f", "#5f4232"], e: "\ud83c\udf34", s: "coqueiral" },
  { t: "casa", tag: "Casa inteira", n: "Casa Mar\u00e9 Alta \u00b7 4 pessoas", r: "9,3", v: 34, p: 520, u: "noite", g: ["#b07a5a", "#5f4232"], e: "\ud83c\udf0a", s: "mare-alta" },
  { t: "passeio", tag: "Passeio", n: "Buggy pelas dunas e lagoas", r: "9,7", v: 312, p: 120, u: "pessoa", g: ["#b07a5a", "#9a7355"], e: "\ud83d\ude99", s: "buggy-dunas" },
  { t: "passeio", tag: "Aula", n: "Aula de kitesurf \u00b7 2 h", r: "9,6", v: 148, p: 350, u: "pessoa", g: ["#b07a5a", "#5f4232"], e: "\ud83e\ude81", s: "kitesurf" },
  { t: "passeio", tag: "Passeio", n: "P\u00f4r do sol na duna", r: "9,8", v: 205, p: 60, u: "pessoa", g: ["#b0693f", "#6b4230"], e: "\ud83c\udf05", s: "por-do-sol-duna" },
  { t: "transfer", tag: "Transfer", n: "Aeroporto de Fortaleza \u2192 Icaraizinho", r: "9,4", v: 97, p: 90, u: "pessoa", g: ["#a08a78", "#5b4a40"], e: "\ud83d\ude90", s: "transfer-fortaleza" },
  { t: "transfer", tag: "Privativo", n: "Transfer privativo \u00b7 at\u00e9 4 pessoas", r: "9,6", v: 63, p: 520, u: "trajeto", g: ["#a08a78", "#5f4232"], e: "\ud83d\ude97", s: "transfer-privativo" },
  { t: "alug", tag: "Aluguel", n: "Quadriciclo \u00b7 1 hora", r: "9,2", v: 88, p: 180, u: "hora", g: ["#b0693f", "#5f4232"], e: "\ud83d\udef5", s: "quadriciclo" },
  { t: "alug", tag: "Aluguel", n: "Bicicleta \u00b7 di\u00e1ria", r: "9,0", v: 44, p: 40, u: "dia", g: ["#b0693f", "#6b4230"], e: "\ud83d\udeb2", s: "bicicleta" }
];

var cur = "hosp";
var $ = function (id) { return document.getElementById(id); };
var money = function (n) { return "R$ " + n.toLocaleString("pt-BR"); };
function fmt(d) { return d ? d.split("-").reverse().join("/") : ""; }

function msg(it) {
  var t = TABS.filter(function (x) { return x.k === cur; })[0];
  var a = $("d-in").value, b = $("d-out").value, w;
  if (!a) { w = "datas a combinar"; }
  else if (t.range && b) { w = "de " + fmt(a) + " a " + fmt(b); }
  else { w = "data: " + fmt(a); }
  return "Ol\u00e1! Quero reservar: " + it + ". " + w + ". " + $("pax").value + ".";
}
function link(it) { return "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg(it)); }
function img(seed) { return "https://picsum.photos/seed/" + seed + "/800/600"; }

function render() {
  var t = TABS.filter(function (x) { return x.k === cur; })[0];

  $("tabs").innerHTML = TABS.map(function (x) {
    return '<button class="tab" role="tab" aria-selected="' + (x.k === cur) + '" data-k="' + x.k + '">' + x.n + "</button>";
  }).join("");

  $("t-dest").textContent = "Mais reservados: " + t.n.toLowerCase();
  $("s-dest").textContent = t.d + " em Icaraizinho de Amontada. Se est\u00e1 aqui, \u00e9 porque vale a viagem.";

  $("grid").innerHTML = ITEMS.filter(function (i) { return i.t === cur; }).map(function (i) {
    var amen = (AMENITIES[i.t] || []).map(function (a) { return "<span>" + a + "</span>"; }).join("");
    return '<article class="card">' +
      '<div class="card-media" style="--g1:' + i.g[0] + ';--g2:' + i.g[1] + '">' +
        '<img loading="lazy" src="' + img(i.s) + '" alt="' + i.n + '">' +
        '<span class="card-badge">' + i.tag + "</span>" +
        '<span class="card-rating">\u2605 ' + i.r + "</span>" +
      "</div>" +
      '<div class="card-body">' +
        '<div class="card-loc">' + LOCATION + "</div>" +
        "<h3>" + i.n + "</h3>" +
        '<div class="amenities">' + amen + "</div>" +
        '<div class="card-foot">' +
          '<div class="price"><small>a partir de</small><strong>' + money(i.p) + "</strong><small>/ " + i.u + "</small></div>" +
          '<a class="card-link" target="_blank" rel="noopener" data-it="' + i.n + '" href="' + link(i.n) + '">Ver detalhes \u2192</a>' +
        "</div>" +
      "</div>" +
    "</article>";
  }).join("");

  links();
}

function links() {
  var a = document.querySelectorAll("a[data-it]");
  for (var i = 0; i < a.length; i++) { a[i].href = link(a[i].getAttribute("data-it")); }
  $("pk").href = link("Pacote casa + transfer + passeio");
}

$("tabs").addEventListener("click", function (e) {
  var k = e.target.getAttribute("data-k");
  if (k) { cur = k; render(); }
});

$("cats").innerHTML = TABS.map(function (x) {
  return '<button class="style-card" data-k="' + x.k + '" style="--g1:' + x.g[0] + ';--g2:' + x.g[1] + '">' +
    '<img loading="lazy" src="' + img("style-" + x.k) + '" alt="' + x.n + '">' +
    '<span class="style-copy"><em>' + x.e + "</em><b>" + x.n + "</b><span>" + x.d + "</span></span>" +
  "</button>";
}).join("");

$("cats").addEventListener("click", function (e) {
  var b = e.target.closest(".style-card");
  if (b) { cur = b.getAttribute("data-k"); render(); $("hospedagens").scrollIntoView(); }
});

["d-in", "d-out", "pax"].forEach(function (id) {
  $(id).addEventListener("change", function () {
    if (id === "d-in") { $("d-out").min = $("d-in").value; }
    links();
  });
});

$("reservar").addEventListener("submit", function (e) {
  e.preventDefault();
  render();
  $("hospedagens").scrollIntoView();
});

var t0 = new Date().toISOString().slice(0, 10);
$("d-in").min = t0;
$("d-out").min = t0;
render();
