let btnTemaClick = 0;
// Seleciona o elemento :root
const root = document.documentElement;

const eventosCss={
    trocaTemaFuncao (event){
        event.preventDefault();
        btnTemaClick += 1;

        if(btnTemaClick === 1){
            root.style.setProperty('--destaque1', '#C69EFF');
            root.style.setProperty('--destaque2', '#6B44A3');
        }
        if(btnTemaClick === 2){
            root.style.setProperty('--destaque1', '#9DD8D3');
            root.style.setProperty('--destaque2', '#136375');
        }
        if(btnTemaClick === 3){
            root.style.setProperty('--destaque1', '#FADDD3');
            root.style.setProperty('--destaque2', '#DD713C');
        }
        if(btnTemaClick === 4){
            root.style.setProperty('--destaque1', '#AAD89D');
            root.style.setProperty('--destaque2', '#CF4257');
            btnTemaClick = 0;
        }
    },

    abrirFormulario(event){
        event === "" ? null : event.preventDefault()
        const btnAdicionarAbrirForm = document.querySelector(".adicionar-livro")
        btnAdicionarAbrirForm.classList.toggle("hidden");

        const form = document.querySelector("form");
        form.classList.toggle("hidden")
    },

    xFormulario (event) {
        //fecha o form e mostra o btn adicionar livro
        event.preventDefault();
        const form = document.querySelector("form");
        form.classList.toggle("hidden");
        const btnAdicionarAbrirForm = document.querySelector(".adicionar-livro")
        btnAdicionarAbrirForm.classList.toggle("hidden");
    },

    preencherEstrelasForm(evento, btn){
        evento.preventDefault();
        const idBtn = btn.id;
        const posicaoBtn = idBtn.split('-')[2];
        const ListaBtnEstrela = document.querySelectorAll('.btns-avaliacao button');
        
        //primeiro limpa todas as estrelas
        ListaBtnEstrela.forEach(btn => {
            btn.children[0].setAttribute("src", "/img/estrela-vazia.png")
        })
        //segundo seleciona as estrelas desejadas
        for(let i = 0; i < posicaoBtn; i++){
            const img = ListaBtnEstrela[i].children[0];
            img.setAttribute("src", "/img/estrela-preenchida.png")
        }
    }



};

export default eventosCss;