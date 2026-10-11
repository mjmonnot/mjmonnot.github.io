/* Yearly post shares. Aggregates only; no post text. */
(function () {
  var host = document.getElementById("trend");
  var raw = document.getElementById("trend-data");
  if (!host || !raw) return;
  var rows = JSON.parse(raw.textContent);
  var keys = [
    { id: "frustrated", label: "frustrated meaning", color: "#1c1917" },
    { id: "apparatus", label: "ratios, metrics, charting", color: "#57534e" },
    { id: "ai", label: "AI named", color: "#a8a29e" }
  ];
  var on = { frustrated: true, apparatus: true, ai: true };
  var W = 920, H = 400, L = 44, R = 196, T = 18, B = 52;
  var yMax = 34;
  var svg = el("svg", { viewBox: "0 0 " + W + " " + H, role: "img" });
  svg.setAttribute("aria-label", "Share of nurses' posts by capture year, 2016 to 2026");
  host.insertBefore(svg, host.querySelector(".trend-fallback"));

  function el(name, attrs) {
    var n = document.createElementNS("http://www.w3.org/2000/svg", name);
    Object.keys(attrs || {}).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    return n;
  }
  function x(year) { return L + ((year - 2016) / 10) * (W - L - R); }
  function y(pct) { return T + (1 - pct / yMax) * (H - T - B); }

  var band = el("rect", {
    x: x(2018.5), y: T, width: x(2021.5) - x(2018.5), height: H - T - B,
    fill: "#e7e5e4"
  });
  svg.appendChild(band);
  var note = el("text", { x: x(2020), y: T + 16, "text-anchor": "middle", fill: "#57534e", "font-size": "12", "font-family": "Source Sans 3, Calibri, sans-serif" });
  note.textContent = "forum software changed, 2019–2021";
  svg.appendChild(note);

  [0, 10, 20, 30].forEach(function (g) {
    svg.appendChild(el("line", { x1: L, x2: W - R, y1: y(g), y2: y(g), stroke: "#e7e5e4", "stroke-width": "1" }));
    var t = el("text", { x: L - 8, y: y(g) + 4, "text-anchor": "end", fill: "#57534e", "font-size": "12", "font-family": "Source Sans 3, Calibri, sans-serif" });
    t.textContent = g + (g ? "" : "");
    if (g === 0) t.textContent = "0";
    else t.textContent = String(g);
    svg.appendChild(t);
  });
  var pct = el("text", { x: L - 8, y: y(30) - 14, "text-anchor": "end", fill: "#57534e", "font-size": "12", "font-family": "Source Sans 3, Calibri, sans-serif" });
  pct.textContent = "%";
  svg.appendChild(pct);

  var layer = el("g");
  svg.appendChild(layer);
  var marks = el("g");
  svg.appendChild(marks);

  rows.forEach(function (r) {
    var t = el("text", { x: x(r.year), y: H - 28, "text-anchor": "middle", fill: "#1c1917", "font-size": "13", "font-family": "Source Sans 3, Calibri, sans-serif" });
    t.textContent = String(r.year).slice(2);
    svg.appendChild(t);
    var n = el("text", { x: x(r.year), y: H - 12, "text-anchor": "middle", fill: "#a8a29e", "font-size": "11", "font-family": "Source Sans 3, Calibri, sans-serif" });
    n.textContent = r.n.toLocaleString();
    svg.appendChild(n);
  });

  function pathOf(id, which) {
    return rows.map(function (r, i) {
      var v = which === "lo" ? r[id][1] : which === "hi" ? r[id][2] : r[id][0];
      return (i ? "L" : "M") + x(r.year).toFixed(1) + "," + y(v).toFixed(1);
    }).join("");
  }
  function draw() {
    while (layer.firstChild) layer.removeChild(layer.firstChild);
    while (marks.firstChild) marks.removeChild(marks.firstChild);
    keys.forEach(function (k) {
      if (!on[k.id]) return;
      var ribbon = el("path", { d: pathOf(k.id, "hi") + rows.slice().reverse().map(function (r, i) {
        return (i ? "L" : "L") + x(r.year).toFixed(1) + "," + y(r[k.id][1]).toFixed(1);
      }).join("") + "Z", fill: k.color, opacity: "0.12" });
      layer.appendChild(ribbon);
      layer.appendChild(el("path", { d: pathOf(k.id, "mid"), fill: "none", stroke: k.color, "stroke-width": "2" }));
      var last = rows[rows.length - 1];
      var lab = el("text", { x: x(last.year) + 10, y: y(last[k.id][0]) + 4, fill: k.color, "font-size": "13", "font-family": "Source Sans 3, Calibri, sans-serif" });
      lab.textContent = k.label;
      marks.appendChild(lab);
    });
  }
  draw();

  var tip = document.createElement("div");
  tip.className = "trend-tip";
  tip.hidden = true;
  host.appendChild(tip);
  var hover = el("line", { y1: T, y2: H - B, stroke: "#1c1917", "stroke-width": "1", visibility: "hidden" });
  svg.appendChild(hover);

  rows.forEach(function (r, i) {
    var prev = i ? (r.year + rows[i - 1].year) / 2 : r.year - 0.5;
    var next = i < rows.length - 1 ? (r.year + rows[i + 1].year) / 2 : r.year + 0.5;
    var hit = el("rect", { x: x(prev), y: T, width: x(next) - x(prev), height: H - T - B, fill: "transparent" });
    hit.style.cursor = "crosshair";
    hit.addEventListener("mousemove", function (ev) { show(r, ev); });
    hit.addEventListener("mouseleave", hide);
    svg.appendChild(hit);
  });

  function show(r, ev) {
    hover.setAttribute("x1", x(r.year));
    hover.setAttribute("x2", x(r.year));
    hover.setAttribute("visibility", "visible");
    var lines = ["<strong>" + r.year + (r.year === 2026 ? " (partial year)" : "") + "</strong> · " + r.n.toLocaleString() + " posts"];
    keys.forEach(function (k) {
      if (!on[k.id]) return;
      var a = r[k.id];
      lines.push(k.label + " " + a[0].toFixed(1) + "% [" + a[1].toFixed(1) + ", " + a[2].toFixed(1) + "]");
    });
    tip.innerHTML = lines.join("<br>");
    tip.hidden = false;
    var box = host.getBoundingClientRect();
    var left = ev.clientX - box.left + 14;
    if (left > box.width - 220) left = ev.clientX - box.left - 220;
    tip.style.left = left + "px";
    tip.style.top = Math.max(8, ev.clientY - box.top - 20) + "px";
  }
  function hide() {
    tip.hidden = true;
    hover.setAttribute("visibility", "hidden");
  }

  var legend = document.createElement("p");
  legend.className = "small";
  legend.style.marginTop = ".4rem";
  keys.forEach(function (k) {
    var b = document.createElement("button");
    b.type = "button";
    b.textContent = k.label;
    b.style.cssText = "margin:0 .4rem 0 0;border:0;background:none;cursor:pointer;font:inherit;color:" + k.color + ";text-decoration:underline;text-underline-offset:2px";
    b.addEventListener("click", function () {
      on[k.id] = !on[k.id];
      b.style.opacity = on[k.id] ? "1" : ".35";
      draw();
    });
    legend.appendChild(b);
  });
  var hint = document.createTextNode(" · click a label to hide it");
  legend.appendChild(hint);
  host.appendChild(legend);
  host.classList.add("is-live");
})();
