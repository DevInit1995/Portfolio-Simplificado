const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function  mostrarMaisProjetos(){
    const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

// console.log(document.querySelector('.btn-mostrar-projetos'));

