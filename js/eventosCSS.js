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
        event.preventDefault();
        const btnAdicionarAbrirForm = document.querySelector(".adicionar-livro")
        btnAdicionarAbrirForm.classList.toggle("hidden");

        const form = document.querySelector("form");
        form.classList.toggle("hidden")
    },

    xFormulario (event) {
        event.preventDefault();
        const form = document.querySelector("form");
        form.classList.toggle("hidden");
    },

    preencherEstrelasForm(event, btnClicado){
        alert("b")
    }



};

export default eventosCss;