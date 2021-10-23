const input = document.querySelector('#input');
const qty = document.querySelector('#qty');
const form = document.querySelector('form');
const resposta = document.querySelector('#resposta');
const situ = document.querySelector('#situ');

form.addEventListener('submit', (e) => {
    e.preventDefault();
        situ.innerText = 'Clique na caixa para copiar!';
        let merge = '';

        for (let i = 1; i <= qty.value; i++) {
            merge += input.value;
        }

        resposta.value = merge;

})

resposta.addEventListener('click', copy);

function copy() {
    resposta.select()
    document.execCommand('Copy');

    situ.innerText = 'Copiado para o clipboard!';
}