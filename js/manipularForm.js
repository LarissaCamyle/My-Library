import { criarObjLivro } from "./criarObjLivro.js";
import { criarVisualmente } from "./criarVisualmenteObj.js";
import { editarObjLivro } from "./editarObjLivro.js";
import { validarData } from "./validarData.js";

export function manipularForm (evento) {
    evento.preventDefault();
    //PEGANDO VALORES -------------------------------------------------
    const nome = document.getElementById("nome").value;
    const genero = document.querySelector(".select-genero").value;
    const data =  document.getElementById("data").value;
    const status = document.querySelector(".select-status").value;
    const id = document.querySelector("form").getAttribute("id");
    //pega a quantidade de estrelas preenchidas
    const ListaBtnEstrela = document.querySelectorAll('.btns-avaliacao button');
    let favorito = 0;
    for(let i = 0; i < ListaBtnEstrela.length; i++){
        const img = ListaBtnEstrela[i].children[0];
        //se tem estrela soma se nao tem nao soma
        img.src.includes("/img/estrela-preenchida.png") ? 
        favorito += 1 : null
    }

    //VERIFICANDO SE TODOS DADOS FORAM PREENCHIDOS---------------------
    if(nome.trim() === "" || genero.trim() === "" || data.trim() === "" || status.trim() === ""){
        alert("Preencha corretamente todos os campos!");
        return
    }
    if(!validarData(data)){
        alert('A data preenchida é maior que a data atual!')
        return
    }

    //ADICIONA OU EDITA O OBJ-----------------------------------------
    const labelEdicao = document.querySelector(".editar-adicionar");
    if(labelEdicao.for === "editar"){
        labelEdicao.for = "adicionar";
        const btnAdicionar = document.querySelector(".form-adicionar-livro");
        btnAdicionar.innerText = "Adicionar Livro"
        editarObjLivro(id, nome, genero, data, status, favorito);
    }
    else{
        //cria o obj e adiciona ao array
        criarObjLivro(nome, genero, data, status, favorito);
    }

    //CRIA VISUALMENTE E LIMPA O FORM---------------------------------
    criarVisualmente();
    limparForm();

}

function limparForm(){
    const formulario = document.querySelector("form");
    formulario.reset();

    const ListaBtnEstrela = document.querySelectorAll('.btns-avaliacao button');
    ListaBtnEstrela.forEach(btn => {
        const img = btn.children[0];
        img.src="/img/estrela-vazia.png"
        
    });
}