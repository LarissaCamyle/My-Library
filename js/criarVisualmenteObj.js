import { ListaLivrosArray } from "./criarObjLivro.js";

const ulLivros = document.querySelector("#lista-livros");

export function criarVisualmente () {
    ulLivros.innerHTML = "";

    //percorre por todo array e cria no HTML
    ListaLivrosArray.forEach(livro => {
        //criar os elementos html
        const li = criarElemento("li", "livro", "", "", "");
        const divBorda = criarElemento("div", "borda", "", "", "");

        const divStatus = criarElemento("div", "status-info", "", livro.status, "");
        const h1Nome = criarElemento("h1", "", "", livro.nome, "");
        const imgLivro = criarElemento("img", "", "", "", "/img/livro-terror.png");

        const divAvaliacao = criarElemento("div", "avaliacao-livro", "", "", "");
        const btnEstrela1 = criarElemento("button", "", "btn-estrela-livro-1", "", "")
        const btnEstrela2 = criarElemento("button", "", "btn-estrela-livro-2", "", "")
        const btnEstrela3 = criarElemento("button", "", "btn-estrela-livro-3", "", "")
        const imgEstrela1 = criarElemento("img", "", "", "", "/img/estrela-vazia.png")
        const imgEstrela2 = criarElemento("img", "", "", "", "/img/estrela-vazia.png")
        const imgEstrela3 = criarElemento("img", "", "", "", "/img/estrela-vazia.png")

        const divInfo = criarElemento("div", "info", "", "", "");
        const h1Data = criarElemento("h1", "", "", livro.data, "");
        const h1Genero = criarElemento("h1", "", "", livro.genero, "");

        const divBtns = criarElemento("div", "btn", "", "", "");
        const btnExcluir = criarElemento("button", "", "btn-livro-excluir", "", "");
        const btnEditar = criarElemento("button", "", "btn-livro-editar", "", "");
        const imgExcluir = criarElemento("img", "", "", "","/img/excluir.png");
        const imgEditar = criarElemento("img", "", "", "","/img/editar.png");

        //adicionar ao html
        ulLivros.appendChild(li);
        li.appendChild(divBorda);

        divBorda.appendChild(divStatus);
        divBorda.appendChild(h1Nome);
        divBorda.appendChild(imgLivro);

        divBorda.appendChild(divAvaliacao);
        divAvaliacao.appendChild(btnEstrela1);
        divAvaliacao.appendChild(btnEstrela2);
        divAvaliacao.appendChild(btnEstrela3);
        btnEstrela1.appendChild(imgEstrela1);
        btnEstrela2.appendChild(imgEstrela2);
        btnEstrela3.appendChild(imgEstrela3);
        
        divBorda.appendChild(divInfo);
        divInfo.appendChild(h1Data);
        divInfo.appendChild(h1Genero);

        divBorda.appendChild(divBtns);
        divBtns.appendChild(btnExcluir);
        divBtns.appendChild(btnEditar);
        btnExcluir.appendChild(imgExcluir);
        btnEditar.appendChild(imgEditar);




    });
    
}

function criarElemento(tipo, classe, id, texto, src){
    const elemento = document.createElement(`${tipo}`);

    //se estiver vazio nao faz nada, se tiver preenchido adiciona
    classe === "" ? null : elemento.classList.add(`${classe}`)
    id === "" ? null : elemento.setAttribute("id", id);
    texto === "" ? null : elemento.innerText = texto;
    src === "" ? null : elemento.setAttribute("src", src);

    return elemento;
}