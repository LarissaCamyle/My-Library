import { ListaLivrosArray } from "./criarObjLivro.js";

export function preencherFormParaEdicao(livroID){
    //encontra o livro pelo id
    const livro = ListaLivrosArray.find(livroArray => livroArray.id === livroID);

    //pega os campos de digitação
    const formulario = document.querySelector("form");
    formulario.setAttribute('id', livroID);
    const nomeLivro = document.getElementById("nome");
    const genero = document.querySelector(".select-genero");
    const data =  document.getElementById("data");
    const status = document.querySelector(".select-status");
    const ListaBtnEstrela = document.querySelectorAll('.btns-avaliacao button img');

    //printa as informacoes nos campos
    nomeLivro.value = livro.nome;
    genero.value = livro.genero;
    data.value = livro.data;
    status.value = livro.status;
    for(let i = 0; i < 3; i++){
        //se foi avaliado até essa posicao
        if(i < livro.avaliacao){
            ListaBtnEstrela[i].src = "/img/estrela-preenchida.png"
        }
        //se nao foi avaliado até essa posicao
        else{
            ListaBtnEstrela[i].src = "/img/estrela-vazia.png"
        }        
    }

    //sinaliza para fazer edicao
    const labelEdicao = document.querySelector(".editar-adicionar");
    labelEdicao.for = "editar";
    const btnAdicionar = document.querySelector(".form-adicionar-livro");
    btnAdicionar.innerText = "Editar Livro"

}