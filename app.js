let amigos = [];

function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const nomeInput = document.getElementById('nome-amigo').value.trim();

    // Valida se o campo não está vazio
    if (nomeInput === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nomeInput);

    // Limpa o campo de entrada
    document.getElementById('nome-amigo').value = '';

    // Opcional: Atualiza a exibição da lista de amigos (se necessário)
    console.log(amigos); 
}