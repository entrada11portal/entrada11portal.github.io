/*document.addEventListener("DOMContentLoaded", function () {

    const toggle = document.querySelector(".pesquisa");
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

*/

document.addEventListener("DOMContentLoaded", function () {

    const toggle = document.querySelector(".pesquisa");
    const searchBar = document.querySelector(".search-bar");
    const closeBtn = document.querySelector(".search-close");
    const input = document.getElementById("searchInput");

    if (toggle) {
        toggle.addEventListener("click", () => {
            searchBar.classList.add("active");
            setTimeout(() => input.focus(), 300);
        });

        closeBtn.addEventListener("click", () => {
            searchBar.classList.remove("active");
        });

        document.addEventListener("click", function(e) {
            if (!searchBar.contains(e.target) && !toggle.contains(e.target)) {
                searchBar.classList.remove("active");
            }
        });

        document.addEventListener("keydown", function(e) {
            if (e.key === "Escape") {
                searchBar.classList.remove("active");
            }
        });

        // Redireciona ao pressionar Enter
        input.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                window.location.href = `/search/?q=${input.value}`;
            }
        });
    }

    // ===== Página de resultados =====
    if (window.location.pathname.includes("/search")) {

        const params = new URLSearchParams(window.location.search);
        const query = params.get("q");

        if (!query) return;

        fetch("/search.json")
            .then(res => res.json())
            .then(data => {

                const idx = lunr(function () {
                    this.ref("url");
                    this.field("title");
                    this.field("content");

                    data.forEach(function (doc) {
                        this.add(doc);
                    }, this);
                });

                const results = idx.search(query + "*");
                const resultsContainer = document.getElementById("results");

                if (results.length === 0) {
                    resultsContainer.innerHTML = "<p>Nenhum resultado encontrado.</p>";
                    return;
                }

                results.forEach(result => {
                    const post = data.find(p => p.url === result.ref);
                    resultsContainer.innerHTML += `
                        <div style="margin-bottom:20px;">
                            <h3><a href="${post.url}">${post.title}</a></h3>
                        </div>
                    `;
                });

            });
    }

});
