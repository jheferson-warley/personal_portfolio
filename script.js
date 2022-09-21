const menuItems = document.querySelectorAll('.menu a[href^="#"]');
menuItems.forEach((a) => {
  a.addEventListener("click", scrollToIdOnClick);
});
function getScrollTopByHref(a) {
  const b = a.getAttribute("href");
  return document.querySelector(b).offsetTop;
}
function scrollToIdOnClick(a) {
  a.preventDefault();
  const b = getScrollTopByHref(a.target) - 80;
  scrollToPosition(b);
}
function scrollToPosition(a) {
  smoothScrollTo(0, a);
}
function smoothScrollTo(a, b, c) {
  const d = window.scrollX || window.pageXOffset,
    e = window.scrollY || window.pageYOffset,
    f = new Date().getTime();
  c = "undefined" == typeof c ? 400 : c;
  const g = (a, b, c, d) =>
      1 > (a /= d / 2)
        ? (c / 2) * a * a * a * a + b
        : (-c / 2) * ((a -= 2) * a * a * a - 2) + b,
    h = setInterval(() => {
      const i = new Date().getTime() - f,
        j = g(i, d, a - d, c),
        k = g(i, e, b - e, c);
      i >= c && clearInterval(h), window.scroll(j, k);
    }, 1e3 / 60);
}
const ano = document.getElementById("ano"),
  anoAtual = new Date();
ano.innerHTML = anoAtual.getFullYear();
