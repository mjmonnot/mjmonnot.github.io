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
    if (reduceMotion || timer) return;
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

  start();
})();
