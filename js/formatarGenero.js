export function formatarGenero (genero) {
    switch(genero){
        case 'ficcao':
            return "Ficção"
            
        case 'nao-ficcao':
            return "Não ficcao"

        case 'fantasia':
            return "Fantasia"

        case 'romance':
            return "Romance"

        case 'misterio':
            return "Mistério"

        case 'terror':
            return "Terror"

        case 'aventura':
            return "Aventura"
    }
}