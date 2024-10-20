document.getElementById('increase').addEventListener('click', function() {
    let quantityInput = document.getElementById('quantity');
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
  });

  document.getElementById('decrease').addEventListener('click', function() {
    let quantityInput = document.getElementById('quantity');
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
  });
  
  function selecionarPagamento(id) {
    // Remove a classe 'selecionado' de todos os botões
    document.querySelectorAll('.botaoPagamento').forEach(function(botao) {
      botao.classList.remove('selecionado');
    });

    // Adiciona a classe 'selecionado' ao botão clicado
    document.getElementById(id).classList.add('selecionado');
  }