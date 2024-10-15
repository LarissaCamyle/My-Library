import { ListaLivrosArray } from "./criarObjLivro.js";
import { excluirObjLivro } from "./excluirObjLivro.js";
import { formatarData } from "./formatarData.js";
import { preencherFormParaEdicao } from "./preencherFormParaEdicao.js";

const ulLivros = document.querySelector("#lista-livros");

export function criarVisualmente () {
    ulLivros.innerHTML = "";

    //percorre por todo array e cria no HTML
    ListaLivrosArray.forEach(livro => {
        //CRIA OS ELEMENTOS HTML-------------------------------------------------
        const li = criarElemento("li", "livro", livro.id, "", "");
        const divBorda = criarElemento("div", "borda", "", "", "");

        const divStatus = criarElemento("div", "status-info", "", livro.status, "");
        const h1Nome = criarElemento("h1", "", "", livro.nome, "");

        const imgLivro = criarElemento("img", "", "", "", `/img/livro-${livro.genero}.png`);

        const divAvaliacao = criarElemento("div", "avaliacao-livro", "", "", "");
        const btnEstrela1 = criarElemento("button", `btn-avaliacao${livro.id}`, "btn-estrela-livro-1", "", "")
        const btnEstrela2 = criarElemento("button", `btn-avaliacao${livro.id}`, "btn-estrela-livro-2", "", "")
        const btnEstrela3 = criarElemento("button", `btn-avaliacao${livro.id}`, "btn-estrela-livro-3", "", "")

        const divInfo = criarElemento("div", "info", "", "", "");
        const data = formatarData(livro.data)
        const h1Data = criarElemento("h1", "", "", data, "");
        const h1Genero = criarElemento("h1", "", "", livro.genero, "");

        const divBtns = criarElemento("div", "btn", "", "", "");
        const btnExcluir = criarElemento("button", "", "btn-livro-excluir", "", "");
        const btnEditar = criarElemento("button", "", "btn-livro-editar", "", "");
        const imgExcluir = criarElemento("img", "", "", "","/img/excluir.png");
        const imgEditar = criarElemento("img", "", "", "","/img/editar.png");

        //ADICIONA AO HTML -----------------------------------------------------
        ulLivros.appendChild(li);
        li.appendChild(divBorda);

        divBorda.appendChild(divStatus);
        divBorda.appendChild(h1Nome);
        divBorda.appendChild(imgLivro);

        divBorda.appendChild(divAvaliacao);
        divAvaliacao.appendChild(btnEstrela1);
        divAvaliacao.appendChild(btnEstrela2);
        divAvaliacao.appendChild(btnEstrela3);
        
        divBorda.appendChild(divInfo);
        divInfo.appendChild(h1Data);
        divInfo.appendChild(h1Genero);

        divBorda.appendChild(divBtns);
        divBtns.appendChild(btnExcluir);
        divBtns.appendChild(btnEditar);
        btnExcluir.appendChild(imgExcluir);
        btnEditar.appendChild(imgEditar);

        //cria e adiciona no html as imagens das estrelas de acordo cm a avaliacao
        const ListaBtnEstrela = document.querySelectorAll(`.btn-avaliacao${livro.id}`)
        for(let i = 0; i < 3; i++){
            let imgEstrela = null;
            //se foi avaliado até essa posicao
            if(i < livro.avaliacao){
                imgEstrela = criarElemento("img", `img-estrela-${i}`, "", "", "/img/estrela-preenchida.png")
            }
            //se nao foi avaliado até essa posicao
            else{
                imgEstrela = criarElemento("img", `img-estrela-${i}`, "", "", "/img/estrela-vazia.png")
            }
            //adiciona no btn correspondente
            const btn = ListaBtnEstrela[i];
            btn.appendChild(imgEstrela);
            
        }

        //FUNCOES -----------------------------------------------------------
        btnEditar.addEventListener("click", () => {
            preencherFormParaEdicao(livro.id)
        })

        btnExcluir.addEventListener("click", () => {
            excluirObjLivro(livro.id);
        })

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