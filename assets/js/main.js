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

/* ======================= Carrossel de imagens ============================= */

let indiceNovo = 0;
const trackNovo = document.getElementById("carouselTrackNovo");
const slidesNovo = document.querySelectorAll(".carousel-slide-novo");
const indicadoresNovo = document.getElementById("indicadoresNovo");

/* Criar indicadores */
slidesNovo.forEach((_, i) => {
    const ponto = document.createElement("span");
    ponto.addEventListener("click", () => irParaSlideNovo(i));
    indicadoresNovo.appendChild(ponto);
});

function atualizarCarouselNovo() {
    trackNovo.style.transform = `translateX(-${indiceNovo * 100}%)`;

    document.querySelectorAll(".carousel-indicadores-novo span")
    .forEach((ponto, i) => {
        ponto.classList.toggle("ativo", i === indiceNovo);
    });
}

function moverSlideNovo(direcao) {
    indiceNovo = (indiceNovo + direcao + slidesNovo.length) % slidesNovo.length;
    atualizarCarouselNovo();
}

function irParaSlideNovo(index) {
    indiceNovo = index;
    atualizarCarouselNovo();
}

/* Auto slide */
setInterval(() => {
    moverSlideNovo(1);
}, 5000);

atualizarCarouselNovo();

let indexHome = 0;
const trackHome = document.getElementById("carouselHome");
const slidesHome = document.querySelectorAll("#carouselHome .carousel-slide-novo");
const indicadoresHome = document.getElementById("indicadoresHome");

slidesHome.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => irParaHome(i));
    indicadoresHome.appendChild(dot);
});

function atualizarHome() {
    trackHome.style.transform = `translateX(-${indexHome * 100}%)`;
    document.querySelectorAll("#indicadoresHome span").forEach((dot,i)=>{
        dot.classList.toggle("ativo", i === indexHome);
    });
}

function moverHome(direcao) {
    indexHome = (indexHome + direcao + slidesHome.length) % slidesHome.length;
    atualizarHome();
}

function irParaHome(i) {
    indexHome = i;
    atualizarHome();
}

setInterval(()=> moverHome(1), 5000);

atualizarHome();
