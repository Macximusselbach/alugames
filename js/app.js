let jogosAlugados = [3];
let jogosDisponiveis = [1, 2];

function alterarStatus(id) {
    alugarJogo(id);
    alterarDisplayJogo(id);
    
}

function alugarJogo(id) {
    let jogoSelecionado = document.getElementById(`game-${id}`);
    let nomeJogo = jogoSelecionado.querySelector('.dashboard__item__name').textContent;

    if(verificarDisponibilidade(id) == false) {
        let indexJogo = jogosDisponiveis.indexOf(id);
        jogosDisponiveis.splice(indexJogo, 1);
        jogosAlugados.push(id);

        alert(`Você alugou o jogo ${nomeJogo}!`);

    } else {
        let indexJogo = jogosAlugados.indexOf(id);
        jogosAlugados.splice(indexJogo, 1);
        jogosDisponiveis.push(id);

        alert(`Você devolveu o jogo ${nomeJogo}!`);

    }

}

function alterarDisplayJogo(id) {
    let jogoSelecionado = document.getElementById(`game-${id}`);
    let disponibilidade = verificarDisponibilidade(id);
    let imagemJogo = jogoSelecionado.querySelector('.dashboard__item__img');
    let botaoAlugar = jogoSelecionado.querySelector('.dashboard__item__button');

    if(disponibilidade == false) {
        imagemJogo.classList.remove('dashboard__item__img--rented');
        botaoAlugar.classList.remove('dashboard__item__button--return');
        botaoAlugar.textContent = 'Alugar';

    } else {
        imagemJogo.classList.add('dashboard__item__img--rented');
        botaoAlugar.classList.add('dashboard__item__button--return');
        botaoAlugar.textContent = 'Devovler';
    }



}

function verificarDisponibilidade(id) {
    return jogosAlugados.includes(id);

}
