document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".custom-carousel").forEach(carousel => {

    const track = carousel.querySelector(".carousel-track");
    const slides = carousel.querySelectorAll(".carousel-slide");
    const indicatorsContainer = carousel.querySelector(".carousel-indicators");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");
    const titleContainer = carousel.querySelector(".carousel-title");
    

    let current = 0;
    const total = slides.length;

    if (total === 0) return;

    const postsData = Array.from(slides).map(slide => {
      const link = slide.querySelector("a");
      const img = slide.querySelector("img");

      return {
        title: img.alt,
        url: link.href
      };
    });

    function updateCarousel() {
      track.style.transform = `translateX(-${current * 100}%)`;

      carousel.querySelectorAll(".indicator").forEach(i =>
        i.classList.remove("active")
      );

      const activeIndicator = carousel.querySelectorAll(".indicator")[current];
      if (activeIndicator) activeIndicator.classList.add("active");

      // Atualiza o título
      const titleLink = titleContainer.querySelector(".carousel-title-link");

      titleLink.textContent = postsData[current].title;
      titleLink.href = postsData[current].url;
    }

    function createIndicators() {
      slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("indicator");
        if (index === 0) dot.classList.add("active");

        dot.addEventListener("click", () => {
          current = index;
          updateCarousel();
        });

        indicatorsContainer.appendChild(dot);
      });
    }

    function nextSlide() {
      current = (current + 1) % total;
      updateCarousel();
    }

    function prevSlide() {
      current = (current - 1 + total) % total;
      updateCarousel();
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    createIndicators();
    updateCarousel();
    setInterval(nextSlide, 5000);

  });

});
