import { ListaLivrosArray } from "./criarObjLivro.js";

export function filtrarStatus(evento, btn){
    evento.preventDefault();

    const barraDePesquisa = document.querySelector("#pesquisa");
    barraDePesquisa.value = "";

    const status = btn.getAttribute("id").split("btn-status-")[1];
    console.log(status)

    //mostra todos os livros
    if(status === "todos"){
        ListaLivrosArray.forEach(livro => {
            const divLivro = document.getElementById(livro.id)
            divLivro.style.display = "block"
        });     
    }
    //filtra
    else{
        ListaLivrosArray.forEach(livro => {
            const divLivro = document.getElementById(livro.id)
            if(livro.status === status){
                divLivro.style.display = "block"
            }
            else{
                divLivro.style.display = "none" 
            }
        });
    }
}