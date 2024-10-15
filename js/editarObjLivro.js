import { ListaLivrosArray } from "./criarObjLivro.js";

export function editarObjLivro (id, nome, genero, data, status, avaliacao){
    //encontra o livro pelo id
    const livro = ListaLivrosArray.find(livroArray => livroArray.id === id);

    //edita o livro no array com as novas informacoes
    livro.nome = nome;
    livro.genero = genero;
    livro.data = data;
    livro.status = status;
    livro.avaliacao = avaliacao;

    console.log(ListaLivrosArray);
}