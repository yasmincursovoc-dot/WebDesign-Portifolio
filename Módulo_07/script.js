
// ==========================================
// BOTÃO DE MENSAGEM
// ==========================================

const botaoMensagem = document.getElementById("botaoMensagem");

const mensagem = document.getElementById("mensagem");


botaoMensagem.addEventListener("click", function() {

    mensagem.textContent = "Você está maravilhosa hoje! ✨💖";

});


// ==========================================
// BOTÃO DE DICA
// ==========================================

const botaoDica = document.getElementById("botaoDica");

const dica = document.getElementById("dica");


botaoDica.addEventListener("click", function() {

    dica.textContent =
        "Tire um tempo para você hoje. Você também merece descansar. 🌷";

});


// ==========================================
// ALTERAR COR PARA ROSA
// ==========================================

const botaoRosa = document.getElementById("botaoRosa");

const textoPersonalizado =
    document.getElementById("textoPersonalizado");


botaoRosa.addEventListener("click", function() {

    textoPersonalizado.style.color = "#d86b8a";

    textoPersonalizado.textContent =
        "Você escolheu o tema rosa! 🌸";

});


// ==========================================
// ALTERAR COR PARA LILÁS
// ==========================================

const botaoLilas = document.getElementById("botaoLilás");


botaoLilas.addEventListener("click", function() {

    textoPersonalizado.style.color = "#8e6bbd";

    textoPersonalizado.textContent =
        "Você escolheu o tema lilás! 💜";

});


// ==========================================
// VOLTAR AO ORIGINAL
// ==========================================

const botaoOriginal =
    document.getElementById("botaoOriginal");


botaoOriginal.addEventListener("click", function() {

    textoPersonalizado.style.color = "#4a3a3f";

    textoPersonalizado.textContent =
        "Clique nos botões para mudar a aparência desta área.";

});


// ==========================================
// MOSTRAR / ESCONDER MENSAGEM
// ==========================================

const botaoMensagemSecreta =
    document.getElementById("botaoMensagemSecreta");

const mensagemSecreta =
    document.getElementById("mensagemSecreta");


botaoMensagemSecreta.addEventListener("click", function() {

    if (mensagemSecreta.classList.contains("escondido")) {

        mensagemSecreta.classList.remove("escondido");

        botaoMensagemSecreta.textContent =
            "Esconder mensagem";

    } else {

        mensagemSecreta.classList.add("escondido");

        botaoMensagemSecreta.textContent =
            "Mostrar mensagem";

    }

});