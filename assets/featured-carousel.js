(function () {
  var root = document.querySelector("[data-feature-carousel]");
  if (!root) return;

  var slides = Array.prototype.slice.call(root.querySelectorAll(".feature-slide"));
  var dots = Array.prototype.slice.call(root.querySelectorAll(".feature-dot"));
  if (slides.length < 2) return;

  var intervalMs = parseInt(root.getAttribute("data-interval"), 10) || 10000;
  var index = 0;
  var timer = null;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var lightboxOpen = false;

  function show(next) {
    if (next === index) return;
    slides[index].classList.remove("is-active");
    slides[index].setAttribute("aria-hidden", "true");
    dots[index].classList.remove("is-active");
    dots[index].setAttribute("aria-selected", "false");

    index = (next + slides.length) % slides.length;

    slides[index].classList.add("is-active");
    slides[index].setAttribute("aria-hidden", "false");
    dots[index].classList.add("is-active");
    dots[index].setAttribute("aria-selected", "true");
  }

  function next() {
    show(index + 1);
  }

  function start() {
    if (reduceMotion || timer || lightboxOpen) return;
    timer = window.setInterval(next, intervalMs);
  }

  function stop() {
    if (!timer) return;
    window.clearInterval(timer);
    timer = null;
  }

  dots.forEach(function (dot, i) {
    dot.addEventListener("click", function () {
      show(i);
      stop();
      start();
    });
  });

  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", start);
  root.addEventListener("focusin", stop);
  root.addEventListener("focusout", function (event) {
    if (!root.contains(event.relatedTarget)) start();
  });

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stop();
    else start();
  });

  // --- Lightbox popout for featured figures ---
  var links = Array.prototype.slice.call(root.querySelectorAll("[data-lightbox]"));
  var lastFocus = null;
  var overlay = document.createElement("div");
  overlay.className = "feature-lightbox";
  overlay.hidden = true;
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "Enlarged project figure");
  overlay.innerHTML =
    '<button type="button" class="feature-lightbox-close" aria-label="Close enlarged figure">&times;</button>' +
    '<figure class="feature-lightbox-figure">' +
    '<img class="feature-lightbox-img" alt="">' +
    '<figcaption class="feature-lightbox-caption"></figcaption>' +
    "</figure>";
  document.body.appendChild(overlay);

  var lbImg = overlay.querySelector(".feature-lightbox-img");
  var lbCaption = overlay.querySelector(".feature-lightbox-caption");
  var lbClose = overlay.querySelector(".feature-lightbox-close");

  function openLightbox(link) {
    var img = link.querySelector("img");
    var figure = link.closest("figure");
    var caption = figure ? figure.querySelector("figcaption") : null;

    lastFocus = document.activeElement;
    lbImg.src = link.getAttribute("href");
    lbImg.alt = img ? img.getAttribute("alt") || "" : "";
    lbCaption.textContent = caption
      ? caption.textContent.replace(/\s*·\s*click to enlarge\s*$/i, "").trim()
      : "";

    overlay.hidden = false;
    document.body.classList.add("feature-lightbox-open");
    lightboxOpen = true;
    stop();
    lbClose.focus();
  }

  function closeLightbox() {
    if (overlay.hidden) return;
    overlay.hidden = true;
    document.body.classList.remove("feature-lightbox-open");
    lbImg.removeAttribute("src");
    lightboxOpen = false;
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
    start();
  }

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      openLightbox(link);
    });
  });

  lbClose.addEventListener("click", closeLightbox);
  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) closeLightbox();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !overlay.hidden) {
      event.preventDefault();
      closeLightbox();
    }
  });

  start();
})();
