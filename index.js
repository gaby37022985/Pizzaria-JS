function fazerPedido() {
    // Capturar os elementos do formulário
    const nomeCliente = document.querySelector("#nome").value.trim(); // Campo de nome
    const tamanhoEscolhido = document.querySelector('input[name="tamanho"]:checked'); // Tamanho da pizza
    const adicionaisSelecionados = document.querySelectorAll('input[name="adicionais"]:checked'); // Adicionais
    const valorTotalElemento = document.querySelector("h2 strong"); // Elemento para exibir o valor total

    // Validar se o nome foi preenchido
    if (!nomeCliente) {
        alert("Por favor, preencha o nome antes de fazer o pedido.");
        return;
    }

    // Verificar se um tamanho foi selecionado
    if (!tamanhoEscolhido) {
        alert("Por favor, selecione o tamanho da pizza.");
        return;
    }

    // Preços fixos
    const precosPizza = {
        pequena: 25.0,
        media: 35.0,
        grande: 50.0
    };
    const precoAdicional = 5.0;

    // Calcular o valor da pizza escolhida
    const precoPizza = precosPizza[tamanhoEscolhido.value];

    // Calcular o valor total dos adicionais
    const totalAdicionais = adicionaisSelecionados.length * precoAdicional;

    // Calcular o valor total
    const valorTotal = precoPizza + totalAdicionais;

    // Atualizar o valor total no HTML
    valorTotalElemento.textContent = valorTotal.toFixed(2).replace(".", ",");
}
