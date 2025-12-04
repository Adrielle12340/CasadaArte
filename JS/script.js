const TopBtn = document.getElementById("TopBtn");

//mostrar ou esconder o botão quando o usuario rola a pagina 
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        TopBtn.style.display = "block";
    } else {
        TopBtn.style.display = "none";
    }
});

//ao clicar, volta suavemente ao topo
TopBtn,addEventListener("click", () => {
window.scrollTo ({ top: 0, behavior: 'smooth'});
})

const header = document.getElementById("header")

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("fixed");
    }
})