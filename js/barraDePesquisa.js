import { criarVisualmente } from "./criarVisualmenteObj.js";

const barraDePesquisa = document.querySelector("#pesquisa");

//roda a funcao a cada letra digitada
export function pesquisa(){
    const listaLivros = document.querySelectorAll(".livro");

    //se digitar algo na barra de pesquisa
    if(barraDePesquisa.value != ""){
        for(let i = 0; i < listaLivros.length; i++){
            const livro = listaLivros[i];
            let tituloLivro = livro.querySelector("h1").textContent.toLowerCase();
            let textoBarraDePesquisa = barraDePesquisa.value.toLowerCase();

            //se o titulo do livro contém oq está na barra de pesquisa
            if(!tituloLivro.includes(textoBarraDePesquisa)){
                livro.style.display = "none";
            }
            else{
                livro.style.display = "block";
            }

        }
    }
    //se a barra de pesquisa estiver vazia
    else{
        criarVisualmente();
    }
}