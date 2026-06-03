let cronometroAlerta;

// TRAVA DE SEGURANÇA: Começa como 'true' porque a primeira rodada é a abertura do site
let primeiraExecucao = true;

export function atualizarBatimentos() {
    const campoContador = document.getElementById('bpm-contador');

    // coloca os valores de variação
    const min = 45;
    const max = 130;

    // faz com que gere um numero aleatorio
    const batimentoAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

    // Só atualiza o texto se o elemento existir na tela
    if (campoContador) {
        campoContador.textContent = batimentoAleatorio;
    }
    
    verificarSaude(batimentoAleatorio);

    // IMPORTANTE: Após a primeira rodada acontecer, mudamos a trava para 'false' para sempre.
    primeiraExecucao = false;
}

function verificarSaude(bpm) {
    const limiteBaixo = 55;
    const limiteAlto = 110;

    // SE FOR A PRIMEIRA EXECUÇÃO, IGNORE O RESTO DA FUNÇÃO E NÃO ABRA ALERTA
    if (primeiraExecucao) {
        console.log("Sistema iniciando... Primeira leitura ignorada para segurança.");
        return; 
    }

    // se o limite for baixo ou alto ele verifica a chance
    if (bpm < limiteBaixo || bpm > limiteAlto) {
        const chanceDisparar = Math.floor(Math.random() * 50) + 1;

        // Como o dado vai até 50, se for menor ou igual a 10, temos 20% de chance. Excelente para testes!
        if (chanceDisparar <= 10) {
            dispararAlertaTela(bpm);
        }
    }
}

function dispararAlertaTela(bpm) {
    const card = document.getElementById('card-alerta');
    const texto = document.getElementById('texto-alerta');

    if (card && texto) {

        texto.innerHTML = `Seus batimentos cardíacos estão em <strong>${bpm} BPM</strong>`;
    
        card.classList.remove('escondido');

        cronometroAlerta = setTimeout(function() {
            fecharCard();
            alert("O usuário NÃO respondeu a tempo! Acionando ambulância e enviando localização...");
        }, 10000);
    }
}

function fecharCard() {
    const card = document.getElementById('card-alerta');
    if (card) {
        card.classList.add('escondido');
    }
    clearTimeout(cronometroAlerta);
}

// Garante que os botões existem antes de adicionar o "click"
// Esse evento roda assim que o HTML inteiro termina de carregar na tela
window.addEventListener('DOMContentLoaded', function() {
    const btnSim = document.getElementById('btn-sim');
    const btnNao = document.getElementById('btn-nao');

    if (btnSim) {
        btnSim.addEventListener('click', function() {
            fecharCard();
            console.log("Usuário passa bem. Monitoramento normalizado.");
        });
    }

    if (btnNao) {
        btnNao.addEventListener('click', function() {
            fecharCard();
            alert("🚨 Acionando serviços de emergência imediatamente!");
        });
    }

    // Inicializa o looping de repetição e a primeira chamada de dados
    setInterval(atualizarBatimentos, 3000);
    atualizarBatimentos();
});