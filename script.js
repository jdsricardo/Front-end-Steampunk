// Função para criar uma nova instância da imagem giratória
function createRotatingImage(src, x, y, reverse = false) {
  // Cria um elemento <img> para a engrenagem
  const img = document.createElement('img');
  img.src = src; // Define a fonte da imagem
  img.classList.add('rotating-image'); // Adiciona a classe CSS básica para rotação
  if (reverse) {
    img.classList.add('reverse-rotation'); // Adiciona a classe para rotação reversa se o parâmetro reverse for true
  }
  img.style.left = x + 'px'; // Define a posição horizontal da imagem
  img.style.top = y + 'px'; // Define a posição vertical da imagem
  document.querySelector('.engrenagens-container').appendChild(img); // Adiciona a imagem ao contêiner de engrenagens no DOM
}

// Distribuir as engrenagens pela tela
const screenWidth = window.innerWidth; // Largura da janela do navegador
const screenHeight = window.innerHeight; // Altura da janela do navegador
const numImagesX = Math.ceil(screenWidth / 100); // Calcula quantas engrenagens cabem horizontalmente (a cada 100 pixels)
const numImagesY = Math.ceil(screenHeight / 100); // Calcula quantas engrenagens cabem verticalmente (a cada 100 pixels)

for (let i = 0; i < numImagesX; i++) {
  for (let j = 0; j < numImagesY; j++) {
    const x = i * 100; // Calcula a posição horizontal da engrenagem
    const y = j * 100; // Calcula a posição vertical da engrenagem
    const reverse = (i + j) % 2 === 0; // Alterna a direção da rotação: se a soma dos índices for par, define reverse como true
    createRotatingImage('assets/engrenagem.png', x, y, reverse); // Cria a engrenagem com a possível rotação reversa
  }
}

var $tdTotalCursos = document.querySelector('.js-total-de-cursos')
var $tdTotalDeHoras = document.querySelector('.js-total-de-horas')
var $buttonConfirmar = document.querySelector('.js-botao-matricula')

var totalHoras = 0
var totalCursos = 0


function adicionaCurso(checkbox){
  
  if(checkbox.checked){
    totalCursos ++
    totalHoras += parseInt(checkbox.value)
  }
  else {
    totalCursos --
    totalHoras -= parseInt(checkbox.value)
  }
  
  $tdTotalDeHoras.textContent = totalHoras + 'h'
  $tdTotalCursos.textContent = totalCursos + ' curso(s)'
  
}

$buttonConfirmar.onclick = confirmaMatriculas

function confirmaMatriculas() {
  if(totalCursos === 0) {
    alert('Nenhum curso selecionado')
  } else {
    alert('Matricula confirmada nos cursos!')
    window.location.href = 'index.html'
  }
}


function playSound() {
  console.log('Reproduzindo som...');
  var audio = new Audio('assets/trem.mp3');
  audio.play();
}


window.addEventListener('load', function() {
  playSound();
});


setInterval(playSoundRandomly, 10000); 

