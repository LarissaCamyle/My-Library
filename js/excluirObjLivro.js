import { criarVisualmente } from "./criarVisualmenteObj.js";
import { ListaLivrosArray } from "./criarObjLivro.js";

export function excluirObjLivro (idLivro) {
    //encontra a posicao no array
    const index = ListaLivrosArray.findIndex(livroArray => livroArray.id === idLivro);

    //altera informacoes locais
    if (index !== -1) {
        // Remove o item do array
        ListaLivrosArray.splice(index, 1);  
    }
    
    //altera informacoes no navegador
    localStorage.setItem('livros', JSON.stringify(ListaLivrosArray));
    
    console.log(ListaLivrosArray);

    criarVisualmente();

}