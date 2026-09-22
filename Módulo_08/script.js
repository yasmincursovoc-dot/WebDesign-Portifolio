/* ==========================================
   1. FUNÇÃO PARA ALTERAR A MENSAGEM
   ========================================== */

function mudarMensagem() {

    const titulo = document.getElementById("titulo");

    const descricao = document.getElementById("descricao");


    titulo.textContent = "Você é incrível! ✨";

    descricao.textContent =
        "Nunca tenha medo de ser você mesma e mostrar sua personalidade. 💕";
}


/* ==========================================
   2. FUNÇÃO PARA MOSTRAR DICA
   ========================================== */

function mostrarDica() {

    const dica = document.getElementById("dica");


    dica.textContent =
        "Reserve alguns minutos do seu dia para fazer algo que você gosta. 🌷";
}


/* ==========================================
   3. FUNÇÃO PARA MUDAR PARA ROSA
   ========================================== */

function temaRosa() {

    const estilo = document.getElementById("estilo");

    const texto = document.getElementById("textoEstilo");


    estilo.classList.remove("tema-lilas");

    estilo.classList.add("tema-rosa");


    texto.textContent =
        "Hoje o seu estilo é ROSA! 🌸";
}


/* ==========================================
   4. FUNÇÃO PARA MUDAR PARA LILÁS
   ========================================== */

function temaLilás() {

    const estilo = document.getElementById("estilo");

    const texto = document.getElementById("textoEstilo");


    estilo.classList.remove("tema-rosa");

    estilo.classList.add("tema-lilas");


    texto.textContent =
        "Hoje o seu estilo é LILÁS! 💜";
}


/* ==========================================
   5. VOLTAR AO TEMA ORIGINAL
   ========================================== */

function temaOriginal() {

    const estilo = document.getElementById("estilo");

    const texto = document.getElementById("textoEstilo");


    estilo.classList.remove("tema-rosa");

    estilo.classList.remove("tema-lilas");


    texto.textContent =
        "Como você está se sentindo hoje?";
}


/* ==========================================
   6. MENSAGEM ALEATÓRIA
   ========================================== */

function mostrarMensagem() {

    const mensagem = document.getElementById("mensagem");


    const mensagens = [

        "Você consegue! 💪💖",

        "Acredite mais em você! ✨",

        "Você merece coisas incríveis! 🌷",

        "Continue sendo você mesma! 💕",

        "Nunca deixe de acreditar nos seus sonhos! 🌸"

    ];


    const numeroAleatorio =
        Math.floor(Math.random() * mensagens.length);


    mensagem.textContent =
        mensagens[numeroAleatorio];
}


/* ==========================================
   7. ADICIONAR NOVA DICA
   ========================================== */

function adicionarDica() {

    const input = document.getElementById("novaDica");

    const lista = document.getElementById("listaDicas");


    const texto = input.value;


    if (texto === "") {

        alert("Digite uma dica primeiro! 🌷");

        return;
    }


    const novaDica = document.createElement("p");


    novaDica.textContent = "🌸 " + texto;


    novaDica.classList.add("dica-item");


    lista.appendChild(novaDica);


    input.value = "";
}


/* ==========================================
   8. MOSTRAR / ESCONDER ELEMENTO
   ========================================== */

function alternarMensagem() {

    const mensagem =
        document.getElementById("mensagemSecreta");

    const botao =
        event.target;


    if (mensagem.style.display === "none") {

        mensagem.style.display = "block";

        botao.textContent =
            "Esconder mensagem";

    } else {

        mensagem.style.display = "none";

        botao.textContent =
            "Mostrar mensagem";
    }
}