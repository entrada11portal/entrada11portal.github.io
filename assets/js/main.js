function openMenu() {
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
setInterval(() => {
  slideIndex++;
  if (slideIndex >= totalSlides) slideIndex = 0;
  atualizarSlide();
}, 5000); // troca a cada 5 segundos

// ============================ CARROSSEL POST =========================================== //

const trackRelacionados = document.getElementById("carouselRelacionados");

if (trackRelacionados) {

  let slideAtualRelacionados = 0;
  const slidesRelacionados = trackRelacionados.children;
  const totalSlidesRelacionados = slidesRelacionados.length;
  const indicadoresRelacionados =
    document.querySelectorAll(".relacionados-carousel .indicator");

  function atualizarRelacionados() {
    trackRelacionados.style.transform =
      `translate3d(-${slideAtualRelacionados * 100}%, 0, 0)`;

    indicadoresRelacionados.forEach(ind =>
      ind.classList.remove("active")
    );

    if (indicadoresRelacionados[slideAtualRelacionados]) {
      indicadoresRelacionados[slideAtualRelacionados]
        .classList.add("active");
    }
  }

  function moverSlideRelacionados(direcao) {
    slideAtualRelacionados += direcao;

    if (slideAtualRelacionados >= totalSlidesRelacionados) {
      slideAtualRelacionados = 0;
    }

    if (slideAtualRelacionados < 0) {
      slideAtualRelacionados = totalSlidesRelacionados - 1;
    }

    atualizarRelacionados();
  }

  function irParaSlideRelacionados(index) {
    slideAtualRelacionados = index;
    atualizarRelacionados();
  }

  /* AUTOPLAY */
  setInterval(() => {
    moverSlideRelacionados(1);
  }, 5000);

  /* Torna funções acessíveis aos botões */
  window.moverSlideRelacionados = moverSlideRelacionados;
  window.irParaSlideRelacionados = irParaSlideRelacionados;
}
