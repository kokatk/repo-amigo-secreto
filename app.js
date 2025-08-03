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

function sortearAmigo() {

    if (amigos.length === 0) {
        alert('Por favor, adicione pelo menos um amigo antes de sortear.');
        return;
    }

    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    
    const amigoSorteado = amigos[indiceAleatorio];

    
    const resultado = document.getElementById('resultado-sorteio');
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}