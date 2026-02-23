/*function openMenu() {
    document.getElementById("sideMenu").classList.add("active");
}

function closeMenu() {
    document.getElementById("sideMenu").classList.remove("active");
}

const links = document.querySelectorAll(".menu-links a");
links.forEach(link => {
    link.addEventListener("click", function() {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

// ============================ CARROSSEL RELACIONADOS ============================

document.addEventListener("DOMContentLoaded", function () {

  const carousel = document.querySelector(".relacionados-carousel");
  if (!carousel) return;

  const track = carousel.querySelector("#carouselRelacionados");
  const slides = track.children;
  const indicadores = carousel.querySelectorAll(".indicator");

  let slideAtual = 0;
  const totalSlides = slides.length;

  function atualizarSlideRelacionados() {
    track.style.transform =
      `translate3d(-${slideAtual * 100}%, 0, 0)`;

    indicadores.forEach(ind =>
      ind.classList.remove("active")
    );

    if (indicadores[slideAtual]) {
      indicadores[slideAtual].classList.add("active");
    }
  }

  function moverSlideRelacionados(direcao) {
    slideAtual += direcao;

    if (slideAtual >= totalSlides) slideAtual = 0;
    if (slideAtual < 0) slideAtual = totalSlides - 1;

    atualizarSlideRelacionados();
  }

  function irParaSlideRelacionados(index) {
    slideAtual = index;
    atualizarSlideRelacionados();
  }

  setInterval(() => {
    moverSlideRelacionados(1);
  }, 5000);

  // Tornar acessível ao HTML
  window.moverSlideRelacionados = moverSlideRelacionados;
  window.irParaSlideRelacionados = irParaSlideRelacionados;

});

  /* ==================== MENU LATERAL ================================= */

  function openMenu() {
    document.getElementById("sideMenu")?.classList.add("active");
  }

  function closeMenu() {
    document.getElementById("sideMenu")?.classList.remove("active");
  }

  window.openMenu = openMenu;
  window.closeMenu = closeMenu;

  const links = document.querySelectorAll(".menu-links a");
  links.forEach(link => {
    link.addEventListener("click", function () {
      links.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  /* ============= FUNÇÃO GENÉRICA DE CARROSSEL ===================== */

  function iniciarCarrossel(trackId, containerSelector) {

    const track = document.getElementById(trackId);
    if (!track) return; // Se não existir, não faz nada

    let slideAtual = 0;
    const slides = track.children;
    const totalSlides = slides.length;

    const indicadores =
      document.querySelectorAll(`${containerSelector} .indicator`);

    function atualizar() {
      track.style.transform =
        `translate3d(-${slideAtual * 100}%, 0, 0)`;

      indicadores.forEach(ind =>
        ind.classList.remove("active")
      );

      if (indicadores[slideAtual]) {
        indicadores[slideAtual].classList.add("active");
      }
    }

    function mover(direcao) {
      slideAtual += direcao;

      if (slideAtual >= totalSlides) slideAtual = 0;
      if (slideAtual < 0) slideAtual = totalSlides - 1;

      atualizar();
    }

    function irPara(index) {
      slideAtual = index;
      atualizar();
    }

    // Autoplay
    setInterval(() => {
      mover(1);
    }, 5000);

    return {
      mover,
      irPara
    };
  }

  /* ================== INICIALIZAÇÃO DOS CARROSSEIS ========================= */

  // HOME
  const homeCarousel = iniciarCarrossel(
    "carouselTrack",
    ".carousel:not(.relacionados-carousel)"
  );

  if (homeCarousel) {
    window.moverSlide = homeCarousel.mover;
    window.irParaSlide = homeCarousel.irPara;
  }

  // POST (Relacionados)
  const relacionadosCarousel = iniciarCarrossel(
    "carouselRelacionados",
    ".relacionados-carousel"
  );

  if (relacionadosCarousel) {
    window.moverSlideRelacionados = relacionadosCarousel.mover;
    window.irParaSlideRelacionados = relacionadosCarousel.irPara;
  };
