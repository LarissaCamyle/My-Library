export const livros = [];

//cria o obj livro e adiciona ao array
export function criarObjLivro (nome, genero, data, status, avaliacao){
    const livro = new objLivro (nome, genero, data, status, avaliacao);
    livros.push(livro);
    console.log(livros)
}

export class objLivro {
    constructor(nome, genero, data, status, avaliacao) {
        this.id = gerarID(10);
        this.nome = nome;
        this.genero = genero;
        this.data = data;
        this.status = status;
        this.avaliacao = avaliacao;
    }
}

function gerarID(){
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 10; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        id += caracteres.charAt(indiceAleatorio);
    }
    return id;
}