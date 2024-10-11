import { criarObjLivro } from "./criarObjLivro.js";
import { criarVisualmente } from "./criarVisualmenteObj.js";

export function manipularForm (evento) {
    evento.preventDefault();
    //pega todos os valores
    const nomeLivro = document.getElementById("nome").value;
    const genero = document.querySelector(".select-genero").value;
    const data =  document.getElementById("data").value;
    const status = document.querySelector(".select-status").value;
    //descobrindo a avaliacao
    const ListaBtnEstrela = document.querySelectorAll('.btns-avaliacao button');
    let favorito = 0;
    for(let i = 0; i < ListaBtnEstrela.length; i++){
        const img = ListaBtnEstrela[i].children[0];
        img.src.includes("/img/estrela-preenchida.png") ? 
        favorito += 1 : null
    }

    //verifica se estão todos preenchidos
    if(nomeLivro.trim() === "" || genero.trim() === "" || data.trim() === "" || status.trim() === ""){
        alert("Preencha corretamente todos os campos!");
        return
    }

    alert('adicionado')
    //cria o obj e adiciona ao array
    criarObjLivro(nomeLivro, genero, data, status, favorito);

    criarVisualmente();

}