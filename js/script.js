import { manipularForm } from './manipularForm.js';
import eventosCss from '/js/eventosCSS.js'

//EVENTOS CSS
const trocarTema = document.querySelector("header button");
trocarTema.addEventListener("click", (evento) => eventosCss.trocaTemaFuncao(evento));

const btnAdicionarAbrirForm = document.querySelector(".adicionar-livro");
btnAdicionarAbrirForm.addEventListener("click", (evento) => eventosCss.abrirFormulario(evento));

const btnXForm = document.querySelector(".fechar");
btnXForm.addEventListener("click", (evento) => eventosCss.xFormulario(evento));

const ListaBtnEstrela = document.querySelectorAll('.btns-avaliacao button');
ListaBtnEstrela.forEach(btn => {
    btn.addEventListener("click", (evento) => eventosCss.preencherEstrelasForm(evento, btn));
});


//FORMULARIO
const btnAdicionarForm = document.querySelector(".form-adicionar-livro");
btnAdicionarForm.addEventListener("click", (evento) => manipularForm(evento));