// FAQ
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Atualizando as informações na página
const qt_e = parseInt(localStorage.getItem("qt_e")); // Quantidade da estufa
const qt_p = parseInt(localStorage.getItem("qt_p")); // Quantidade da porta

// BOTÃO +/- 
document.getElementById('increase').addEventListener('click', function() {
    let quantityInput = document.getElementById('quantity');
    let currentValue = parseInt(quantityInput.value);

    // Verifica se a quantidade atual + 1 é menor ou igual ao estoque disponível
    if (currentValue < qt_e) {
        quantityInput.value = currentValue + 1;
    } else {
        // Bloqueia o incremento se não houver itens suficientes no estoque
        alert("Não há itens suficientes no estoque para adicionar mais!");
    }
});

document.getElementById('decrease').addEventListener('click', function() {
    let quantityInput = document.getElementById('quantity');
    let currentValue = parseInt(quantityInput.value);

    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});

// Função para selecionar o pagamento
function selecionarPagamento(id) {
    // Remove a classe 'selecionado' de todos os botões
    document.querySelectorAll('.botaoPagamento').forEach(function(botao) {
        botao.classList.remove('selecionado');
    });

    // Adiciona a classe 'selecionado' ao botão clicado
    document.getElementById(id).classList.add('selecionado');
}


