const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        removerCardSelecionado();

        personagem.classList.add(('selecionado'))

        alterarImagemPrincipal(personagem);

        alterarNomePersonagemPrincipal(personagem);

        alterarDescricaoPersonagemPrincipal(personagem);
    })
})

/* 
function alterarPedestalPersonagem(personagem) {
    const pedestalPersonagem = document.querySelector('.pedestal');
    const idPersonagem = personagem.attributes.id.value;
    pedestalPersonagem.src = `./src/images/socle_${idPersonagem}.png`;
} */

function removerCardSelecionado() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

function alterarImagemPrincipal(personagem) {
    const imagemPersonagemPrincipal = document.querySelector('.principal');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemPrincipal.src = `./src/images/${idPersonagem}-mob.png`;
}

function alterarNomePersonagemPrincipal(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarDescricaoPersonagemPrincipal(personagem) {
    const descricaoPersonagem = document.getElementById('descricao');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

