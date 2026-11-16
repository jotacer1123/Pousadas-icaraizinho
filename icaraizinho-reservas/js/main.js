(function () {
  "use strict";

  // TODO: número real, formato 55 + DDD + número, só dígitos
  var WA = "5588999999999";
  var LOCATION = "Icaraizinho de Amontada \u00b7 CE";

  var HEART_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.4-7-9.5A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 7 3.5C19 15.6 12 20 12 20Z"/></svg>';

  var TABS = [
    { k: "hosp", n: "Hospedagem" },
    { k: "casa", n: "Casas de temporada" },
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
    { t: "casa", tag: "Casa inteira", n: "Casa Duna Dourada \u00b7 6 pessoas", maxGuests: 6, r: "9,5", v: 41, p: 780, u: "noite", g: ["#e8a173", "#b96538"], s: "duna-dourada",
      d: "Casa inteira com 3 quartos, piscina e \u00e1rea gourmet a poucos minutos da praia.", am: ["6 h\u00f3spedes", "Piscina", "Cozinha"] },
    { t: "casa", tag: "Casa inteira", n: "Casa Coqueiral \u00b7 8 pessoas", maxGuests: 8, r: "9,1", v: 57, p: 980, u: "noite", g: ["#e8a173", "#d47b4a"], s: "coqueiral",
      d: "Casa ampla em meio aos coqueiros, com piscina e espa\u00e7o para fam\u00edlias.", am: ["8 h\u00f3spedes", "Piscina", "Churrasqueira"] },
    { t: "casa", tag: "Casa inteira", n: "Casa Mar\u00e9 Alta \u00b7 4 pessoas", maxGuests: 4, r: "9,3", v: 34, p: 520, u: "noite", g: ["#efb089", "#b96538"], s: "mare-alta",
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
  function img(n) { return PHOTOS[((n % PHOTOS.length) + PHOTOS.length) % PHOTOS.length]; }
  function ratingLabel(r) {
    var n = parseFloat(String(r).replace(",", "."));
    if (n >= 9.5) return "Excepcional";
    if (n >= 9) return "Excelente";
    if (n >= 8.5) return "Muito bom";
    if (n >= 8) return "Bom";
    return "Agrad\u00e1vel";
  }

  function toISO(d) {
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + m + "-" + day;
  }
  function todayISO() { return toISO(new Date()); }
  function calendarDate(iso) { return new Date(iso + "T12:00:00"); }

  function addDays(iso, count) {
    var date = calendarDate(iso);
    date.setDate(date.getDate() + count);
    return toISO(date);
  }

  function selectedDates() {
    var checkIn = $("d-in");
    var checkOut = $("d-out");
    var start = checkIn && checkIn.value >= todayISO() ? checkIn.value : "";
    var end = start && checkOut && checkOut.value > start ? checkOut.value : "";
    return { start: start, end: end };
  }

  var dayMonthFormat = new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "long" });
  var fullDateFormat = new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "long", year: "numeric" });

  function stayLabel(dates) {
    if (!dates.start) return "";
    var start = calendarDate(dates.start);
    var end = dates.end ? calendarDate(dates.end) : null;
    var year = new Date().getFullYear();
    var formatter = start.getFullYear() !== year || (end && end.getFullYear() !== year) ? fullDateFormat : dayMonthFormat;
    if (!end) return "Entrada em " + formatter.format(start);
    var sameMonth = start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();
    return (sameMonth ? start.getDate() : formatter.format(start)) + " a " + formatter.format(end);
  }

  function isStay(type) { return type === "hosp" || type === "casa"; }

  function msg(item, type) {
    var dates = selectedDates();
    var guests = $("pax");
    var count = guests ? guests.value : "2";
    var when = "datas a combinar";
    if (dates.start) {
      when = isStay(type) && dates.end ? "de " + fmt(dates.start) + " a " + fmt(dates.end) : "data: " + fmt(dates.start);
    }
    return "Olá! Quero reservar: " + item + ". " + when + ". " + count + (isStay(type) ? " hóspede(s)." : " pessoa(s).");
  }

  function link(item, type) { return waLink(msg(item, type)); }

  function initStayCalendar(onChange) {
    var trigger = $("stay-date-trigger");
    var dialog = $("stay-dates");
    var days = $("stay-date-days");
    var previous = $("stay-date-prev");
    var monthFormat = new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric" });
    var dayFormat = new Intl.DateTimeFormat("pt-BR", { dateStyle: "full" });
    var arrowOffsets = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 };
    var today, activeDate, draft;

    function draw() {
      var active = calendarDate(activeDate);
      var first = new Date(active.getFullYear(), active.getMonth(), 1, 12);
      var last = new Date(active.getFullYear(), active.getMonth() + 1, 0, 12).getDate();
      $("stay-date-month").textContent = monthFormat.format(first);
      previous.setAttribute("aria-disabled", String(toISO(first).slice(0, 7) === today.slice(0, 7)));
      $("stay-date-instruction").textContent = draft.end ? stayLabel(draft) :
        (draft.start ? "Selecione a saída ou aplique só a entrada." : "Selecione a data de entrada.");

      var buttons = '<span aria-hidden="true"></span>'.repeat(first.getDay());
      for (var number = 1; number <= last; number++) {
        var date = new Date(active.getFullYear(), active.getMonth(), number, 12);
        var key = toISO(date);
        var start = key === draft.start;
        var end = key === draft.end;
        var classes = key === today ? " is-today" : "";
        if (draft.start < key && key < draft.end) classes += " is-in-range";
        var label = dayFormat.format(date) + (start ? ", entrada" : end ? ", saída" : "");
        buttons += '<button class="calendar-day' + classes + '" type="button" data-date="' + key + '"' +
          ' aria-label="' + esc(label) + '" aria-pressed="' + (start || end) + '"' +
          (key === today ? ' aria-current="date"' : "") +
          (key < today ? " disabled" : "") +
          ' tabindex="' + (key === activeDate ? "0" : "-1") + '">' + number + "</button>";
      }
      days.innerHTML = buttons;
    }

    function focusDay() { days.querySelector('[tabindex="0"]').focus({ preventScroll: true }); }

    function moveMonth(offset) {
      var date = calendarDate(activeDate);
      var first = toISO(new Date(date.getFullYear(), date.getMonth() + offset, 1, 12));
      activeDate = first < today ? today : first;
      draw();
    }

    function apply() {
      $("d-in").value = draft.start;
      $("d-out").value = draft.end;
      onChange();
      dialog.close();
    }

    trigger.addEventListener("click", function () {
      today = todayISO();
      draft = selectedDates();
      activeDate = draft.start || today;
      draw();
      dialog.showModal();
      focusDay();
    });
    previous.addEventListener("click", function () {
      if (previous.getAttribute("aria-disabled") !== "true") moveMonth(-1);
    });
    $("stay-date-next").addEventListener("click", function () { moveMonth(1); });
    $("stay-date-close").addEventListener("click", function () { dialog.close(); });
    $("stay-date-apply").addEventListener("click", apply);
    $("stay-date-clear").addEventListener("click", function () {
      draft = { start: "", end: "" };
      apply();
    });
    dialog.addEventListener("close", function () { trigger.focus({ preventScroll: true }); });
    dialog.addEventListener("click", function (event) {
      if (event.target !== dialog) return;
      var bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right ||
          event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });

    days.addEventListener("click", function (event) {
      var button = event.target.closest("[data-date]");
      if (!button || button.disabled) return;
      activeDate = button.dataset.date;
      if (draft.start && !draft.end && activeDate > draft.start) {
        draft.end = activeDate;
      } else {
        draft = { start: activeDate, end: "" };
      }
      draw();
      focusDay();
    });

    days.addEventListener("keydown", function (event) {
      var offset = arrowOffsets[event.key];
      if (!offset) return;
      event.preventDefault();
      var target = addDays(activeDate, offset);
      if (target < today) return;
      activeDate = target;
      draw();
      focusDay();
    });
  }

  function hasPublishedRate(item) {
    return item.priceConfirmed === true && Number.isFinite(item.p) && item.p > 0;
  }

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

  function renderCard(item, type, index) {
    var name = esc(item.n);
    var amenities = (item.am || []).slice().sort(function (left, right) {
      return Number(left === "Wi-Fi") - Number(right === "Wi-Fi");
    }).slice(0, 2).map(function (amenity) {
      return "<span>" + esc(amenity) + "</span>";
    }).join("");
    var saved = ehFav(item.n);
    var reviews = "";
    if (item.reviewsConfirmed === true && item.r && item.v > 0) {
      reviews = '<div class="card-rating" aria-label="Nota ' + esc(item.r) + ' de 10">' +
        '<span class="rating-score">' + esc(item.r) + "</span>" +
        '<span class="rating-text">' + ratingLabel(item.r) + "</span>" +
        '<span class="card-reviews">' + esc(item.v) + " avaliações</span></div>";
    }
    var price = '<p class="price-pending">Valor sob consulta</p>';
    if (hasPublishedRate(item)) {
      price = '<div class="price"><small>A partir de</small><strong>' + money(item.p) +
        '</strong><span class="price-unit">por ' + esc(item.u) + "</span></div>";
    }
    return '<article class="card">' +
      '<div class="card-media" style="--g1:' + item.g[0] + ';--g2:' + item.g[1] + '">' +
        '<img loading="lazy" decoding="async" width="1280" height="720" src="' + img(index) + '" alt="Imagem ilustrativa de ' + name + '">' +
        '<span class="card-badge">' + esc(item.tag) + "</span>" +
        '<button class="card-wish' + (saved ? " is-saved" : "") + '" type="button" aria-pressed="' + saved + '"' +
          ' data-it="' + name + '" aria-label="' + esc(favoriteLabel(item.n, saved)) + '">' + HEART_ICON + "</button>" +
      "</div>" +
      '<div class="card-body">' +
        '<div class="card-head"><div><h3>' + name + '</h3><p class="card-loc">' + esc(item.distance || LOCATION) + '</p></div>' +
          reviews +
        "</div>" +
        '<div class="amenities">' + amenities + "</div>" +
        '<div class="card-foot">' + price +
          '<a class="card-link" target="_blank" rel="noopener" data-it="' + name + '" data-type="' + type + '"' +
            ' aria-label="Consultar no WhatsApp · ' + name + '" href="' + link(item.n, type) + '">Consultar no WhatsApp</a>' +
        "</div>" +
      "</div>" +
    "</article>";
  }

  function initIndex() {
    var form = $("reservar");
    var guests = $("pax");
    var heading = $("catalog-title");
    var tabs = $("tabs");
    var filterGroup = $("catalog-filters");
    var filterButtons = Array.from(filterGroup.querySelectorAll("button"));
    var order = $("price-order");
    var grid = $("grid");
    var category = "hosp";
    var submitted = false;

    tabs.innerHTML = TABS.map(function (tab) {
      return '<button class="tab" type="button" aria-controls="grid" data-k="' + tab.k + '">' + esc(tab.n) + "</button>";
    }).join("");
    var tabButtons = Array.from(tabs.querySelectorAll("button"));

    function updateBooking() {
      var dateLabel = stayLabel(selectedDates());
      $("stay-date-summary").textContent = dateLabel || "Adicionar datas";
      if (submitted) {
        $("search-context").hidden = false;
        $("search-criteria").textContent = (dateLabel || "Datas a combinar") + " · " + guests.options[guests.selectedIndex].text;
      }
      document.querySelectorAll("a[data-it][data-type]").forEach(function (anchor) {
        anchor.href = link(anchor.dataset.it, anchor.dataset.type);
      });
      $("pk").href = link("Pacote casa + transfer + passeio", "hosp");
    }

    function render() {
      var stay = isStay(category);
      var groupSize = submitted ? Number(guests.value) : 0;
      var items = ITEMS.filter(function (item) { return item.t === category; });
      var visible = items.filter(function (item) { return !item.maxGuests || groupSize <= item.maxGuests; });
      var currentTab = tabButtons.find(function (button) { return button.dataset.k === category; });
      tabButtons.forEach(function (button) {
        button.setAttribute("aria-pressed", String(button === currentTab));
      });
      heading.textContent = (category === "hosp" ? "Hospedagens" : currentTab.textContent) + " em Icaraizinho";

      filterButtons.forEach(function (button) {
        button.hidden = !stay || !items.some(function (item) { return (item.am || []).includes(button.dataset.amenity); });
        if (button.hidden) button.setAttribute("aria-pressed", "false");
      });
      filterGroup.hidden = filterButtons.every(function (button) { return button.hidden; });
      var filters = filterButtons.filter(function (button) { return button.getAttribute("aria-pressed") === "true"; });
      var matches = visible.filter(function (item) {
        return filters.every(function (button) { return (item.am || []).includes(button.dataset.amenity); });
      });

      var canSort = stay && matches.length > 1 && matches.every(function (item) {
        return item.u === "noite" && hasPublishedRate(item);
      });
      $("catalog-sort").hidden = !canSort;
      if (canSort && order.value === "price") matches.sort(function (a, b) { return a.p - b.p; });

      $("catalog-count").textContent = matches.length === 1 ? "1 opção" : matches.length + " opções";
      if (!matches.length) {
        var message = visible.length ? "Ajuste os filtros para ver mais opções." : "Edite a busca para alterar o número de hóspedes.";
        grid.innerHTML = '<p class="catalog-empty">Nenhuma opção encontrada. ' + message + '</p>';
        return;
      }
      grid.innerHTML = matches.map(function (item) { return renderCard(item, item.t, ITEMS.indexOf(item)); }).join("");
    }

    function selectCategory(next) {
      category = next;
      filterButtons.forEach(function (button) { button.setAttribute("aria-pressed", "false"); });
      render();
    }

    tabs.addEventListener("click", function (event) {
      var button = event.target.closest(".tab");
      if (button && button.dataset.k !== category) selectCategory(button.dataset.k);
    });
    grid.addEventListener("click", toggleCardFavorite);
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        button.setAttribute("aria-pressed", String(button.getAttribute("aria-pressed") !== "true"));
        render();
      });
    });
    order.addEventListener("change", render);
    guests.addEventListener("change", function () {
      if (submitted && isStay(category)) render();
      updateBooking();
    });
    $("edit-search").addEventListener("click", function (event) {
      event.preventDefault();
      form.scrollIntoView();
      $("stay-date-trigger").focus({ preventScroll: true });
    });
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      submitted = true;
      if (isStay(category)) render();
      else selectCategory("hosp");
      updateBooking();
      heading.focus({ preventScroll: true });
      $("hospedagens").scrollIntoView();
    });

    initStayCalendar(updateBooking);
    render();
    updateBooking();
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

  function renderSimpleGrid(gridId, items, type) {
    var grid = $(gridId);
    grid.innerHTML = items.map(function (item, index) { return renderCard(item, type, index); }).join("");
    grid.addEventListener("click", toggleCardFavorite);
  }

  function initCasas() { renderSimpleGrid("casas-grid", CASAS, "casa"); }
  function initPasseios() { renderSimpleGrid("passeios-grid", PASSEIOS, "passeio"); }

  /* Carrossel de fundo do hero com crossfade suave e navegação por pontos */
  function initCarousel() {
    var hero = document.querySelector(".hero");
    if (!hero) return;
    var slides = hero.querySelectorAll(".hero-slide");
    if (!slides.length) return;

    var dotsWrap = document.getElementById("hero-dots");
    var toggle = document.getElementById("hero-toggle");
    var INTERVALO = 7000;
    var DURACAO = 1700;
    var atual = 0, timer = null, ocupado = false, dots = [];
    var hover = false, foco = false, pausadoManual = false;
    var reduzido = window.matchMedia("(prefers-reduced-motion: reduce)");

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
        var ativo = i === atual;
        dots[i].classList.toggle("is-active", ativo);
        if (ativo) { dots[i].setAttribute("aria-current", "true"); }
        else { dots[i].removeAttribute("aria-current"); }
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
    function podeRodar() {
      return !pausadoManual && !reduzido.matches && !hover && !foco && !document.hidden;
    }
    function atualizar() { parar(); if (podeRodar()) iniciar(); }
    function reiniciar() { parar(); if (podeRodar()) iniciar(); }

    function atualizarBotao() {
      if (!toggle) return;
      toggle.setAttribute("aria-pressed", String(pausadoManual));
      toggle.setAttribute("aria-label", pausadoManual ? "Retomar apresenta\u00e7\u00e3o autom\u00e1tica" : "Pausar apresenta\u00e7\u00e3o autom\u00e1tica");
      var label = toggle.querySelector(".hero-toggle__label");
      if (label) label.textContent = pausadoManual ? "Retomar" : "Pausar";
    }

    if (toggle) {
      toggle.addEventListener("click", function () {
        pausadoManual = !pausadoManual;
        atualizarBotao();
        atualizar();
      });
    }

    hero.addEventListener("mouseenter", function () { hover = true; atualizar(); });
    hero.addEventListener("mouseleave", function () { hover = false; atualizar(); });
    hero.addEventListener("focusin", function () { foco = true; atualizar(); });
    hero.addEventListener("focusout", function (e) {
      if (e.relatedTarget && hero.contains(e.relatedTarget)) return;
      foco = false;
      atualizar();
    });

    document.addEventListener("visibilitychange", atualizar);

    if (reduzido.addEventListener) { reduzido.addEventListener("change", atualizar); }
    else if (reduzido.addListener) { reduzido.addListener(atualizar); }

    sincronizarDots();
    atualizarBotao();
    atualizar();
  }

  if ($("grid")) initIndex();
  if ($("casas-grid")) initCasas();
  if ($("passeios-grid")) initPasseios();
  initShared();
  initHeader();
  initCarousel();
})();
