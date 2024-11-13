//AVALIAÇÕES JS

// Aqui estão os números de avaliações dos produtos. No site final, vamos ter q puxar isso do banco de dados
let data = [
    {
        'spanEstrelas': 5,
        'count': 98,
    },
  
    {
        'spanEstrelas': 4,
        'count': 31,
    },
  
    {
        'spanEstrelas': 3,
        'count': 12,
    },
  
    {
        'spanEstrelas': 2,
        'count': 6,
    },
  
    {
        'spanEstrelas': 1,
        'count': 3,
    }
  ]
  
  let totalDeAvaliacoes = 0;
  avaliacao_baseada_em_estrelas = 0;
  
  data.forEach((rating) => {
    totalDeAvaliacoes += rating.count;
    avaliacao_baseada_em_estrelas += rating.count * rating.spanEstrelas;
  });
  
  data.forEach(rating => {
    let divProgresso = `
    <div class="divValorProgresso">
         <p class="textoPadrao">${rating.spanEstrelas} <span class="spanEstrelas material-symbols-outlined"> grade </span></p>
  
         <div class="divBarrasProgresso">
              <div class="divBarraIndividual" style="width: ${(rating.count / totalDeAvaliacoes) * 100}%"></div>
         </div>
  
         <p class="textoPadrao">${rating.count.toLocaleString()}</p>
    </div>
    `;
  
    document.querySelector('.divProgresso').innerHTML += divProgresso;
  });
  
  let rating_media = (avaliacao_baseada_em_estrelas / totalDeAvaliacoes).toFixed(1);
  document.querySelector('.divMedia h1').innerHTML = rating_media;
  document.querySelector('.divMedia p').innerHTML = totalDeAvaliacoes.toLocaleString();
  document.querySelector('.divEstrelas').style.width = (rating_media / 5) * 100 + "%";
  