(function () {
  "use strict";

  // TODO: número real, formato 55 + DDD + número, só dígitos
  var WA = "5588999999999";
  var HEART_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.4-7-9.5A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 7 3.5C19 15.6 12 20 12 20Z"/></svg>';

  var TABS = [
    { k: "hosp", n: "Pousadas" },
    { k: "casa", n: "Casas" },
    { k: "passeio", n: "Passeios" },
    { k: "transfer", n: "Transfer" },
    { k: "alug", n: "Aluguéis" }
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

  var FAV_KEY = "icaraizinho:favs";
  var favs = {};
  try {
    var favRaw = localStorage.getItem(FAV_KEY);
    var favArr = favRaw ? JSON.parse(favRaw) : [];
    if (Array.isArray(favArr)) favArr.forEach(function (n) { favs[n] = true; });
  } catch (e) {}
  function ehFav(n) { return favs[n] === true; }
  function salvarFavs() {
    try { localStorage.setItem(FAV_KEY, JSON.stringify(Object.keys(favs))); } catch (e) {}
  }
  function alternarFav(n) {
    if (favs[n]) { delete favs[n]; } else { favs[n] = true; }
    salvarFavs();
  }
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
  function img(n) { return PHOTOS[n % PHOTOS.length]; }

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

  function dateText(includeCheckout) {
    var checkIn = $("d-in");
    var checkOut = $("d-out");
    if (!checkIn || !checkIn.value || !checkIn.validity.valid) return "datas a combinar";

    var arrival = fmt(checkIn.value);
    if (includeCheckout && checkOut && checkOut.value && checkOut.validity.valid) {
      return "de " + arrival + " a " + fmt(checkOut.value);
    }
    return "data: " + arrival;
  }

  function msg(item, type) {
    var stay = type === "hosp" || type === "casa";
    var guests = $("pax");
    var count = guests ? guests.value : "2";
    var group = stay ? " hóspede(s)." : " pessoa(s).";
    return "Olá! Quero reservar: " + item + ". " + dateText(stay) + ". " + count + group;
  }

  function link(item, type) { return waLink(msg(item, type)); }

  function favoriteLabel(name, saved) {
    return saved ? "Remover " + name + " dos favoritos" : "Salvar " + name + " nos favoritos";
  }

  function toggleCardFavorite(event) {
    var button = event.target.closest(".card-wish");
    if (!button) return;
    var name = button.dataset.it;
    alternarFav(name);
    var saved = ehFav(name);
    button.setAttribute("aria-pressed", String(saved));
    button.classList.toggle("is-saved", saved);
    button.setAttribute("aria-label", favoriteLabel(name, saved));
  }

  function renderCard(item, type, photoIndex, actionLabel) {
    var name = esc(item.n);
    var amenities = (item.am || []).map(function (amenity) { return "<span>" + esc(amenity) + "</span>"; }).join("");
    var saved = ehFav(item.n);
    var favoriteClass = saved ? " is-saved" : "";
    var bookingLabel = esc(actionLabel + " pelo WhatsApp · " + item.n);
    return '<article class="card">' +
      '<div class="card-media" style="--g1:' + item.g[0] + ';--g2:' + item.g[1] + '">' +
        '<img loading="lazy" decoding="async" width="1280" height="720" src="' + img(photoIndex) + '" alt="Imagem ilustrativa de ' + name + '">' +
        '<span class="card-badge">' + esc(item.tag) + '</span>' +
        '<button class="card-wish' + favoriteClass + '" type="button" aria-pressed="' + saved + '"' +
          ' data-it="' + name + '" aria-label="' + esc(favoriteLabel(item.n, saved)) + '">' + HEART_ICON + '</button>' +
      '</div>' +
      '<div class="card-body">' +
        '<div class="card-head">' +
          '<h3>' + name + '</h3>' +
          '<div class="card-rating">' +
            '<span class="rating-score">' + esc(item.r) + ' / 10</span>' +
            '<span class="card-reviews">' + item.v + ' avaliações</span>' +
          '</div>' +
        '</div>' +
        '<div class="amenities">' + amenities + '</div>' +
        '<div class="card-foot">' +
          '<div class="price"><small>Por ' + esc(item.u) + '</small><strong>' + money(item.p) + '</strong></div>' +
          '<a class="card-link" target="_blank" rel="noopener" data-it="' + name + '" data-type="' + type + '"' +
            ' aria-label="' + bookingLabel + '" href="' + link(item.n, type) + '">' + esc(actionLabel) + '</a>' +
        '</div>' +
      '</div>' +
    '</article>';
  }

  function initIndex() {
    var form = $("reservar");
    var checkIn = $("d-in");
    var checkOut = $("d-out");
    var guests = $("pax");
    var tabs = $("experiencias");
    var grid = $("grid");
    var packageLink = $("pk");

    tabs.innerHTML = TABS.map(function (tab) {
      return '<button class="tab" type="button" aria-controls="grid" data-k="' + tab.k + '">' + esc(tab.n) + '</button>';
    }).join("");
    var buttons = tabs.querySelectorAll(".tab");

    function renderCatalog(category) {
      buttons.forEach(function (button) {
        button.setAttribute("aria-pressed", String(button.dataset.k === category));
      });
      grid.innerHTML = ITEMS.filter(function (item) {
        return item.t === category;
      }).map(function (item) {
        return renderCard(item, item.t, ITEMS.indexOf(item), "Ver disponibilidade");
      }).join("");
    }

    function syncDates() {
      var today = todayISO();
      var arrival = checkIn.value >= today ? checkIn.value : today;
      checkIn.min = today;
      checkIn.required = Boolean(checkOut.value);
      checkOut.min = addDays(arrival, 1);
    }

    function updateBookingLinks() {
      grid.querySelectorAll(".card-link").forEach(function (anchor) {
        anchor.href = link(anchor.dataset.it, anchor.dataset.type);
      });
      packageLink.href = link("Pacote casa + transfer + passeio", "hosp");
    }

    tabs.addEventListener("click", function (event) {
      var button = event.target.closest(".tab");
      if (button && button.getAttribute("aria-pressed") !== "true") renderCatalog(button.dataset.k);
    });

    document.querySelectorAll('a[href="#hospedagens"]').forEach(function (anchor) {
      anchor.addEventListener("click", function () { renderCatalog("hosp"); });
    });
    grid.addEventListener("click", toggleCardFavorite);

    [checkIn, checkOut, guests].forEach(function (field) {
      field.addEventListener("change", function () {
        syncDates();
        updateBookingLinks();
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      syncDates();
      if (!form.reportValidity()) return;
      updateBookingLinks();
      $("catalog-title").focus({ preventScroll: true });
      $("hospedagens").scrollIntoView();
    });

    syncDates();
    renderCatalog("hosp");
    updateBookingLinks();
  }

  function initShared() {
    var footerWa = $("footer-wa");
    if (footerWa) footerWa.href = waLink("Ol\u00e1! Gostaria de falar com a equipe Icaraizinho Reservas.");

    var anuncie = $("anuncie-cta");
    if (anuncie) anuncie.href = waLink("Ol\u00e1! Quero anunciar minha propriedade no Icaraizinho Reservas.");

    var navToggle = $("nav-toggle");
    var nav = $("main-nav");
    if (!navToggle || !nav) return;

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
  }

  /* Sombra suave no header ao rolar */
  function initHeader() {
    var header = $("site-header");
    if (!header) return;
    function onScroll() { header.classList.toggle("is-scrolled", window.scrollY > 8); }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  var CASAS = [
    { tag: "Casa inteira", n: "Casa Duna Dourada \u00b7 6 pessoas", r: "9,5", v: 41, p: 780, u: "noite", g: ["#e8a173", "#b96538"],
      am: ["6 h\u00f3spedes", "Piscina", "Cozinha", "Wi-Fi"] },
    { tag: "Casa inteira", n: "Casa Coqueiral \u00b7 8 pessoas", r: "9,1", v: 57, p: 980, u: "noite", g: ["#e8a173", "#d47b4a"],
      am: ["8 h\u00f3spedes", "Piscina", "Churrasqueira", "Wi-Fi"] },
    { tag: "Casa inteira", n: "Casa Mar\u00e9 Alta \u00b7 4 pessoas", r: "9,3", v: 34, p: 520, u: "noite", g: ["#efb089", "#b96538"],
      am: ["4 h\u00f3spedes", "Cozinha", "Ar-condicionado", "Wi-Fi"] },
    { tag: "Casa inteira", n: "Casa Jardim dos Ventos \u00b7 5 pessoas", r: "9,0", v: 29, p: 640, u: "noite", g: ["#fde3d2", "#c46f42"],
      am: ["5 h\u00f3spedes", "Jardim", "Cozinha", "Estacionamento"] }
  ];

  var PASSEIOS = [
    { tag: "Passeio", n: "Buggy pelas dunas e lagoas", r: "9,7", v: 312, p: 120, u: "pessoa", g: ["#f3c3a4", "#c46f42"],
      am: ["Dura\u00e7\u00e3o 3h", "Guia local", "Fotos inclusas"] },
    { tag: "Passeio", n: "Passeio de barco pela costa", r: "9,5", v: 168, p: 150, u: "pessoa", g: ["#efb089", "#d47b4a"],
      am: ["Dura\u00e7\u00e3o 2h30", "Guia local", "Coletes inclusos"] },
    { tag: "Passeio", n: "Tour pela Lagoa do Arrombado", r: "9,6", v: 141, p: 90, u: "pessoa", g: ["#e8a173", "#c46f42"],
      am: ["Dura\u00e7\u00e3o 4h", "Transporte", "Paradas para banho"] },
    { tag: "Passeio", n: "P\u00f4r do sol nas dunas", r: "9,8", v: 205, p: 60, u: "pessoa", g: ["#fde3d2", "#a85c34"],
      am: ["Dura\u00e7\u00e3o 1h30", "Guia local", "Fotos inclusas"] }
  ];

  function renderSimpleGrid(gridId, items, type, actionLabel) {
    var grid = $(gridId);
    grid.innerHTML = items.map(function (item, index) {
      return renderCard(item, type, index, actionLabel);
    }).join("");
    grid.addEventListener("click", toggleCardFavorite);
  }

  function initCasas() { renderSimpleGrid("casas-grid", CASAS, "casa", "Ver disponibilidade"); }
  function initPasseios() { renderSimpleGrid("passeios-grid", PASSEIOS, "passeio", "Reservar passeio"); }

  if ($("grid")) initIndex();
  if ($("casas-grid")) initCasas();
  if ($("passeios-grid")) initPasseios();
  initShared();
  initHeader();
})();
