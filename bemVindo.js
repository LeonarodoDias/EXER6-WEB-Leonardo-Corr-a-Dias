function mostrarMensagem() {
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem');
    
    if (nome.trim() === "") {
        mensagem.textContent = "Por favor, insira o seu nome.";}
        
        else {
        mensagem.textContent = `OLá ${nome}! Seja bem-vindo(a)!`;
    }
}
