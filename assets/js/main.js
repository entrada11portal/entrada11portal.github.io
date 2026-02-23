document.addEventListener("DOMContentLoaded", function () {

  function iniciarCarousel(containerSelector, trackSelector) {

    const carousel = document.querySelector(containerSelector);
    if (!carousel) return;

    const track = carousel.querySelector(trackSelector);
    const slides = track.children;
    const indicadores = carousel.querySelectorAll(".indicator");

    let slideAtual = 0;
    const totalSlides = slides.length;

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

    setInterval(() => {
      mover(1);
    }, 5000);

    // expor funções apenas se precisar usar onclick inline
    window.moverSlideRelacionados = mover;
    window.irParaSlideRelacionados = irPara;

  }

  // HOME
  iniciarCarousel(".home-carousel", "#carouselTrack");

  // POST RELACIONADOS
  iniciarCarousel(".relacionados-carousel", "#carouselRelacionados");

});
