function gerarLista() {
    const quantidade = document.getElementById('quantidade').value;
    const mensagem = document.getElementById('mensagem');
    const lista = document.getElementById('lista');
    
    
    if (quantidade.trim() === "" || isNaN(quantidade) || quantidade <= 0) {
        mensagem.textContent = "Por favor, um número válido.";
    } else {
        
        const n = parseInt(quantidade, 10);
        lista.innerHTML = ""; 
        
       
        for (let i = 1; i <= n; i++) {
            const item = document.createElement('li'); 
            item.textContent = `Seu nome ${i}`; 
            lista.appendChild(item); 
        }
    }
}
