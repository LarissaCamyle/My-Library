import { criarVisualmente } from "./criarVisualmenteObj.js";
import { ListaLivrosArray } from "./criarObjLivro.js";

export function excluirObjLivro (idLivro) {
    //encontra a posicao no array
    const index = ListaLivrosArray.findIndex(livroArray => livroArray.id === idLivro);

    if (index !== -1) {
        // Remove o item do array
        ListaLivrosArray.splice(index, 1);  
    }
    
    console.log(ListaLivrosArray);

    criarVisualmente();

}