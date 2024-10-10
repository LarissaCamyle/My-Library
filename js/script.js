import eventosCss from '/js/eventosCSS.js'

//EVENTOS CSS
const trocarTema = document.querySelector("header button");
trocarTema.addEventListener("click", (evento) => eventosCss.trocaTemaFuncao(evento));
const btnAdicionarAbrirForm = document.querySelector(".adicionar-livro");
btnAdicionarAbrirForm.addEventListener("click", (evento) => eventosCss.abrirFormulario(evento));
const btnXForm = document.querySelector(".fechar");
btnXForm.addEventListener("click", (evento) => eventosCss.xFormulario(evento));

