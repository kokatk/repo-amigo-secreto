let amigos = [];

function adicionarAmigo() {
    
    const nomeInput = document.getElementById('nome-amigo').value.trim();


    if (nomeInput === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nomeInput);

    
    document.getElementById('nome-amigo').value = '';

    
    console.log(amigos);
}

function atualizarListaAmigos() {
    
    const lista = document.getElementById('lista-amigos');
    

    lista.innerHTML = '';
    

    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}