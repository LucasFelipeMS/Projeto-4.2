// =====================================
// MENU PARA CELULARES
// =====================================

const menuMobile = document.getElementById("menuMobile");
const navegacao = document.getElementById("navegacao");

menuMobile.addEventListener("click", () => {

    const aberto = navegacao.classList.toggle("ativo");

    menuMobile.setAttribute("aria-expanded", aberto);

    menuMobile.setAttribute(
        "aria-label",
        aberto ? "Fechar menu de navegação" : "Abrir menu de navegação"
    );

    menuMobile.textContent = aberto ? "✕" : "☰";

});


// Fechar o menu depois de clicar em um link

document.querySelectorAll("#navegacao a").forEach(link => {

    link.addEventListener("click", () => {

        navegacao.classList.remove("ativo");

        menuMobile.setAttribute("aria-expanded", "false");

        menuMobile.setAttribute(
            "aria-label",
            "Abrir menu de navegação"
        );

        menuMobile.textContent = "☰";

    });

});


// =====================================
// TEMA CLARO E ESCURO
// =====================================

const botaoTema = document.getElementById("alternarTema");

function atualizarTema() {

    const escuro = document.body.classList.contains("escuro");

    botaoTema.textContent = escuro ? "☀" : "☾";

    botaoTema.setAttribute(
        "aria-label",
        escuro ? "Ativar tema claro" : "Ativar tema escuro"
    );

}

botaoTema.addEventListener("click", () => {

    document.body.classList.toggle("escuro");

    localStorage.setItem(
        "tema",
        document.body.classList.contains("escuro") ? "escuro" : "claro"
    );

    atualizarTema();

});


// Recuperar tema escolhido

if (localStorage.getItem("tema") === "escuro") {

    document.body.classList.add("escuro");

}

atualizarTema();


// =====================================
// ALTO CONTRASTE
// =====================================

const botaoContraste = document.getElementById("altoContraste");

function atualizarContraste() {

    const ativo = document.body.classList.contains("alto-contraste");

    botaoContraste.setAttribute(
        "aria-label",
        ativo ? "Desativar alto contraste" : "Ativar alto contraste"
    );

}

botaoContraste.addEventListener("click", () => {

    document.body.classList.toggle("alto-contraste");

    atualizarContraste();

});


// =====================================
// CONTROLE DO TAMANHO DA FONTE
// =====================================

let escalaFonte = 1;

const botaoAumentar = document.getElementById("aumentarFonte");
const botaoDiminuir = document.getElementById("diminuirFonte");

function atualizarFonte() {

    document.documentElement.style.fontSize =
        (16 * escalaFonte) + "px";

}

botaoAumentar.addEventListener("click", () => {

    if (escalaFonte < 1.3) {

        escalaFonte = Math.min(1.3, escalaFonte + 0.1);

        atualizarFonte();

    }

});

botaoDiminuir.addEventListener("click", () => {

    if (escalaFonte > 0.8) {

        escalaFonte = Math.max(0.8, escalaFonte - 0.1);

        atualizarFonte();

    }

});


// =====================================
// MODAL DOS DIREITOS DIGITAIS
// =====================================

const botoesCards = document.querySelectorAll(".ler-mais");

const modal = document.getElementById("modal");

const modalTitulo = document.getElementById("modalTitulo");

const modalTexto = document.getElementById("modalTexto");

const fecharModal = document.getElementById("fecharModal");

botoesCards.forEach(botao => {

    botao.addEventListener("click", () => {

        modalTitulo.textContent = botao.dataset.titulo;

        modalTexto.textContent = botao.dataset.texto;

        modal.showModal();

    });

});

fecharModal.addEventListener("click", () => {

    modal.close();

});

modal.addEventListener("click", evento => {

    if (evento.target === modal) {

        modal.close();

    }

});


// =====================================
// ANO AUTOMÁTICO NO RODAPÉ
// =====================================

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.textContent =
        "Projeto educacional — " + new Date().getFullYear();

}