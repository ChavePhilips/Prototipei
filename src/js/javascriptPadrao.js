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


// BOTÃO +/-
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


