// Animaciones del cartel en pantalla (modo "Explorar cartel"), inspiradas en el video de referencia:
//  1. Entrada por capas: los recortes del collage aparecen en secuencia sobre una base apagada,
//     luego la luz pasa de apagada a color completo y el título COAHUILA llega al final.
//  2. 3D al mover: el cartel se inclina en perspectiva y el apartado bajo el cursor/dedo se eleva.
//  3. Linterna: una luz suave sigue al cursor/dedo sobre el cartel.
// No toca la escena de realidad aumentada: solo actúa sobre #explore / #poster (DOM), con transformaciones CSS.
(function () {
  const explore = document.getElementById("explore");
  const poster = document.getElementById("poster");
  if (!explore || !poster || typeof S === "undefined") return;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const img = poster.querySelector("img");

  // capas: un recorte del cartel por apartado, colocado exactamente encima de su lugar
  const stage = document.createElement("div"); stage.className = "anim-capas";
  const luz = document.createElement("div"); luz.className = "anim-luz";
  poster.insertBefore(stage, img.nextSibling); poster.appendChild(luz);
  const piezas = S.map(s => {
    const d = document.createElement("div"); d.className = "anim-pieza";
    Object.assign(d.style, {
      left: s.x + "%", top: s.y + "%", width: s.w + "%", height: s.h + "%",
      backgroundImage: `url("${img.getAttribute("src")}")`,
      backgroundSize: `${10000 / s.w}% auto`,
      backgroundPosition: `${s.w >= 100 ? 0 : (s.x / (100 - s.w)) * 100}% ${s.h >= 100 ? 0 : (s.y / (100 - s.h)) * 100}%`
    });
    stage.appendChild(d); return { s, d };
  });

  // 1) entrada por capas, en el orden del video: centro, lados, conjunto, luz y título al final
  const ORDEN = ["catedral", "dinos", "cultura", "etnias", "tradicion", "comida", "desierto", "poblacion", "escolaridad", "reto", "identidad"];
  let timers = [];
  function entrada() {
    timers.forEach(clearTimeout); timers = [];
    if (reduce) { poster.classList.remove("anim-base"); piezas.forEach(p => p.d.className = "anim-pieza on"); return; }
    poster.classList.add("anim-base", "anim-oscuro");
    piezas.forEach(p => p.d.className = "anim-pieza");
    ORDEN.forEach((id, i) => {
      const p = piezas.find(q => q.s.id === id); if (!p) return;
      const last = id === "identidad";
      timers.push(setTimeout(() => p.d.classList.add(last ? "on-titulo" : "on"), last ? 2300 : 150 + i * 170));
    });
    timers.push(setTimeout(() => poster.classList.remove("anim-oscuro"), 1900));   // cambio de luz
    timers.push(setTimeout(() => poster.classList.remove("anim-base"), 3100));
  }

  // 2) inclinación 3D y apartado que se eleva + 3) linterna; un solo requestAnimationFrame por movimiento
  let raf = 0, px = 0.5, py = 0.5, activo = false, relax = 0;
  function pintar() {
    raf = 0;
    const nx = px - 0.5, ny = py - 0.5;
    poster.style.setProperty("--rx", (activo ? -ny * 9 : 0).toFixed(2) + "deg");
    poster.style.setProperty("--ry", (activo ? nx * 11 : 0).toFixed(2) + "deg");
    poster.style.setProperty("--lx", (px * 100).toFixed(1) + "%");
    poster.style.setProperty("--ly", (py * 100).toFixed(1) + "%");
    luz.style.opacity = activo ? 1 : 0;
    const X = px * 100, Y = py * 100;
    piezas.forEach(({ s, d }) => {
      const dentro = activo && X >= s.x && X <= s.x + s.w && Y >= s.y && Y <= s.y + s.h;
      d.classList.toggle("alto", dentro);
    });
  }
  function mover(e) {
    const r = poster.getBoundingClientRect();
    px = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    py = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
    activo = true; clearTimeout(relax);
    if (!raf) raf = requestAnimationFrame(pintar);
  }
  function soltar(delay) {
    clearTimeout(relax);
    relax = setTimeout(() => { activo = false; if (!raf) raf = requestAnimationFrame(pintar); }, delay);
  }
  if (!reduce) {
    poster.addEventListener("pointermove", e => { if (e.pointerType === "mouse") mover(e); });
    poster.addEventListener("pointerleave", e => { if (e.pointerType === "mouse") soltar(0); });
    // en pantallas táctiles: al tocar, el cartel se inclina hacia el dedo y luego regresa (sin bloquear el desplazamiento)
    poster.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse") { mover(e); soltar(900); } });
  }

  // se activa cada vez que se abre "Explorar cartel"; al cerrarlo se limpian temporizadores y estado
  new MutationObserver(() => {
    if (explore.hidden) { timers.forEach(clearTimeout); timers = []; activo = false; pintar(); }
    else entrada();
  }).observe(explore, { attributes: true, attributeFilter: ["hidden"] });
  if (!explore.hidden) entrada();
})();
