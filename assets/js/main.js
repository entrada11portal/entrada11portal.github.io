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

// ============================ CARROSSEL HOME =========================================== //

let slideIndex = 0;
let slides = document.querySelectorAll(".carousel-slide");
let indicators = document.querySelectorAll(".indicator");
let totalSlides = slides.length;

function atualizarSlide() {
  const track = document.getElementById("carouselTrack");
  track.style.transform = `translateX(-${slideIndex * 100}%)`;

  indicators.forEach(ind => ind.classList.remove("active"));
  if (indicators[slideIndex]) {
    indicators[slideIndex].classList.add("active");
  }
}

function moverSlide(direcao) {
  slideIndex += direcao;

  if (slideIndex < 0) slideIndex = totalSlides - 1;
  if (slideIndex >= totalSlides) slideIndex = 0;

  atualizarSlide();
}

function irParaSlide(index) {
  slideIndex = index;
  atualizarSlide();
}

/* AUTOPLAY */
/*setInterval(() => {
  slideIndex++;
  if (slideIndex >= totalSlides) slideIndex = 0;
  atualizarSlide();
}, 5000); // troca a cada 5 segundos

// ============================ CARROSSEL POST =========================================== //

const track = document.getElementById("carouselTrack");

if (track) {

  let slideAtual = 0;
  const slides = track.children;
  const totalSlides = slides.length;
  const indicadores =
    document.querySelectorAll(".carousel:not(.relacionados-carousel) .indicator");

  function atualizarSlide() {
    track.style.transform =
      `translate3d(-${slideAtual * 100}%, 0, 0)`;

    indicadores.forEach(ind =>
      ind.classList.remove("active")
    );

    if (indicadores[slideAtual]) {
      indicadores[slideAtual].classList.add("active");
    }
  }

  function moverSlide(direcao) {
    slideAtual += direcao;

    if (slideAtual >= totalSlides) slideAtual = 0;
    if (slideAtual < 0) slideAtual = totalSlides - 1;

    atualizarSlide();
  }

  function irParaSlide(index) {
    slideAtual = index;
    atualizarSlide();
  }

  setInterval(() => {
    moverSlide(1);
  }, 5000);

  window.moverSlide = moverSlide;
  window.irParaSlide = irParaSlide;
}
*/

document.addEventListener("DOMContentLoaded", function () {

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
  }

});
