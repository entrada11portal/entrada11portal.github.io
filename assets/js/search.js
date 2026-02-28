document.addEventListener("DOMContentLoaded", function () {

    const toggle = document.querySelector(".search-toggle");
    const searchBar = document.querySelector(".search-bar");
    const closeBtn = document.querySelector(".search-close");
    const input = document.getElementById("searchInput");

    if (!toggle) return;

    toggle.addEventListener("click", () => {
        searchBar.classList.add("active");
        setTimeout(() => input.focus(), 300);
    });

    closeBtn.addEventListener("click", () => {
        searchBar.classList.remove("active");
    });

    // Fecha ao clicar fora
    document.addEventListener("click", function(e) {
        if (!searchBar.contains(e.target) && !toggle.contains(e.target)) {
            searchBar.classList.remove("active");
        }
    });

    // Fecha com ESC
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
            searchBar.classList.remove("active");
        }
    });

});
