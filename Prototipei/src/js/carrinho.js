
const itensCarrinho = document.querySelectorAll('.itemCarrinho');

itensCarrinho.forEach(item => {
  const botaoAumentar = item.querySelector('.aumentar');
  const botaoDiminuir = item.querySelector('.diminuir');
  const quantidadeInput = item.querySelector('.quantidade');

  botaoAumentar.addEventListener('click', () => {
    let valorAtual = parseInt(quantidadeInput.value);
    quantidadeInput.value = valorAtual + 1;
  });

  botaoDiminuir.addEventListener('click', () => {
    let valorAtual = parseInt(quantidadeInput.value);
    if (valorAtual > 1) {
      quantidadeInput.value = valorAtual - 1;
    }
  });
});
  