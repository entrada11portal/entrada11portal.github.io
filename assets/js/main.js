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

function moverSlide(direcao) {
  const track = document.getElementById("carouselTrack");
  const slides = document.querySelectorAll(".carousel-slide");

  slideIndex += direcao;

  if (slideIndex < 0) slideIndex = slides.length - 1;
  if (slideIndex >= slides.length) slideIndex = 0;

  track.style.transform = `translateX(-${slideIndex * 100}%)`;
}
