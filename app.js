let amigos = [];

// Adicionar evento para tecla Enter no input
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('amigo');
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            adicionarAmigo();
        }
    });
});

function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo').value.trim();

    if (nomeInput === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    if (amigos.includes(nomeInput)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    amigos.push(nomeInput);
    document.getElementById('amigo').value = '';
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {

    if (amigos.length === 0) {
        alert('Por favor, adicione pelo menos um amigo antes de sortear.');
        return;
    }

    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}