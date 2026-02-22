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

let slideIndexRelacionados = 0;
const trackRelacionados = document.getElementById("carouselRelacionados");
const slidesRelacionados = document.querySelectorAll("#carouselRelacionados .carousel-slide");
const indicatorsRelacionados = document.querySelectorAll(".relacionados-carousel .indicator");

function atualizarRelacionados() {
  trackRelacionados.style.transform = "translate3d(-" + (slideIndexRelacionados * 100) + "%, 0, 0)";
  
  indicatorsRelacionados.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === slideIndexRelacionados);
  });
}

function moverSlideRelacionados(direcao) {
  slideIndexRelacionados += direcao;

  if (slideIndexRelacionados >= slidesRelacionados.length) slideIndexRelacionados = 0;
  if (slideIndexRelacionados < 0) slideIndexRelacionados = slidesRelacionados.length - 1;

  atualizarRelacionados();
}

function irParaSlideRelacionados(index) {
  slideIndexRelacionados = index;
  atualizarRelacionados();
}
