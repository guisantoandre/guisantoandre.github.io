// Botão voltar para o topo
const btn = document.querySelector(".btn-top");

function showButton() {
  if (window.scrollY > 1500) {
    btn.style.opacity = 1;
    btn.style.pointerEvents = "all";
  } else if (window.scrollY < 1500) {
    btn.style.opacity = 0;
    btn.style.pointerEvents = "none";
  }
}

window.addEventListener("scroll", showButton);
