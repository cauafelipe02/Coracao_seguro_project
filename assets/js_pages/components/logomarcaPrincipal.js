const logoPrincipal = document.getElementById("logo-Principal");

export function logoEscondida() {
    if (window.innerWidth > 600) {
        logoPrincipal.classList.add('escondido');
    } else {
        logoPrincipal.classList.remove('escondido');
    }
}

logoEscondida();
window.addEventListener("resize", logoEscondida);