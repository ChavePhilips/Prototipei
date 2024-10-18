document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].getBoundingClientRect().width;

    let currentIndex = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < items.length - 4) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = items.length - 4;
        }
        updateCarousel();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('click', () => {
            squares.forEach(sq => sq.classList.remove('expanded'));
            square.classList.add('expanded');
        });
    });
});

function redirecionar(url) {
    window.location.href = url;
}

let indiceAtual = 0;

function moverDireita() {
    const carrossel = document.getElementById('carrossel');
    const items = document.querySelectorAll('.item');
    indiceAtual = (indiceAtual + 1) % items.length;
    carrossel.style.transform = `translateX(-${indiceAtual * 100}%)`;
}

function moverEsquerda() {
    const carrossel = document.getElementById('carrossel');
    const items = document.querySelectorAll('.item');
    indiceAtual = (indiceAtual - 1 + items.length) % items.length;
    carrossel.style.transform = `translateX(-${indiceAtual * 100}%)`;
}