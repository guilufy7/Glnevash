const routes = [
  { min:13.02,max:13.52, url:"https://psx8.github.io/1352/index.html", title:"Firmware 13.02–13.52", desc:"Fluxo comunitário SlopKit / GoldHEN listado pelo projeto upstream." },
  { min:11.00,max:13.00, url:"https://psx8.github.io/1300/index.html", title:"Firmware 11.00–13.00", desc:"Fluxo comunitário listado para a faixa 11.00–13.00. Confira a compatibilidade exata no README." },
  { min:9.00,max:9.60, url:"https://psx8.github.io/900/version-selector.html", title:"Firmware 9.00–9.60", desc:"Seletor comunitário PSFree / Lapse." },
  { min:7.00,max:8.52, url:"https://psx8.github.io/700/version-selector.html", title:"Firmware 7.00–8.52", desc:"Seletor comunitário PSFree / Lapse." },
  { exact:"6.72", url:"https://psx8.github.io/672/index.html", title:"Firmware 6.72", desc:"Página comunitária dedicada ao firmware 6.72." },
  { exact:"5.05", url:"https://psx8.github.io/505/index.html", title:"Firmware 5.05", desc:"Página comunitária dedicada ao firmware 5.05." },
  { min:6.00,max:11.02, url:"https://psx8.github.io/css/version-selector.html", title:"Firmware 6.00–11.02", desc:"Seletor comunitário CSSFontFace / Lapse / NetCtrl. Confirme o intervalo exato no README." }
];
const select = document.getElementById("firmware");
const launch = document.getElementById("launch");
const title = document.getElementById("route-title");
const desc = document.getElementById("route-desc");
function getRoute(value) {
  const exact = routes.find(r => r.exact === value);
  if (exact) return exact;
  const n = Number(value);
  return routes.find(r => r.min !== undefined && n >= r.min && n <= r.max);
}
function update() {
  const route = getRoute(select.value);
  if (!route) {
    title.textContent = "Firmware sem rota definida";
    desc.textContent = "Não abra um host de outra versão. Consulte o README upstream para confirmar suporte.";
    launch.removeAttribute("href");
    launch.setAttribute("aria-disabled","true");
    launch.style.opacity = ".45";
    launch.style.pointerEvents = "none";
    return;
  }
  title.textContent = route.title;
  desc.textContent = route.desc;
  launch.href = route.url;
  launch.setAttribute("aria-disabled","false");
  launch.style.opacity = "1";
  launch.style.pointerEvents = "auto";
  try { localStorage.setItem("ps4-host-lab-firmware", select.value); } catch (_) {}
}
try {
  const saved = localStorage.getItem("ps4-host-lab-firmware");
  if (saved && [...select.options].some(o => o.value === saved)) select.value = saved;
} catch (_) {}
select.addEventListener("change", update);
update();
