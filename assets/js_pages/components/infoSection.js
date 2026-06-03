const lembretes = document.querySelector('.lembretes');
const dicas = document.querySelector('.dicas');
const profile = document.querySelector('.profile')

export function infoSectionEscondida() {
    if (window.innerWidth < 600) {
        lembretes.classList.add('escondido');
        dicas.classList.add('escondido');
    } else {
        lembretes.classList.remove('escondido');
        dicas.classList.remove('escondido');
    }
}

infoSectionEscondida()
window.addEventListener("resize", infoSectionEscondida);