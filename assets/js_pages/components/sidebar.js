const listItem = document.querySelectorAll("nav ul li");

listItem.forEach((li) => {
    li.addEventListener("mouseover", () => li.classList.add("hovered"));
    li.addEventListener("mouseout", () => li.classList.remove("hovered"));
});

export function menuLateral() {
    const menu = document.getElementById("menu-lateral");
    const botaoExpandir = document.getElementById("btn-menu");
    const logoMarca = document.getElementById("logomarca");

    function verificarTela() {
        if (window.innerWidth <= 600) {
            menu.classList.add("oculto");
            logoMarca.classList.add("invisivel");
        } else {
            menu.classList.remove("oculto");
            logoMarca.classList.remove("invisivel");
        }
    }

    verificarTela();
    window.addEventListener("resize", verificarTela);

    botaoExpandir.addEventListener("click", () => {
        menu.classList.toggle("oculto");
    })
}

menuLateral();