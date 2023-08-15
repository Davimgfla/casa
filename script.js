const buttonYes = document.getElementById('button-yes');
const buttonNo = document.getElementById('button-no');
const message = document.getElementById('message');
const confettiContainer = document.getElementById('confetti-container');

let avoidingClick = false;

buttonYes.addEventListener('click', function() {
  message.style.display = 'block';
  buttonYes.style.display = 'none';
  buttonNo.style.display = 'none';
  message.innerText = 'Sim! Nada poderia me deixar mais feliz do que passar o resto da minha vida ao seu lado.';
  message.style.opacity = 1;

  // Adicionar animação de confetes e balões
  confettiContainer.innerHTML = `
    <div class="confetti confetti1"></div>
    <div class="confetti confetti2"></div>
    <div class="confetti confetti3"></div>
  `;
});

buttonNo.addEventListener('mouseover', function() {
  if (!avoidingClick) {
    const maxX = window.innerWidth - buttonNo.offsetWidth;
    const maxY = window.innerHeight - buttonNo.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    buttonNo.style.position = 'absolute';
    buttonNo.style.left = randomX + 'px';
    buttonNo.style.top = randomY + 'px';
  }
});

buttonNo.addEventListener('click', function() {
  if (!avoidingClick) {
    avoidingClick = true;
  } else {
    buttonNo.style.position = 'static';
    buttonNo.style.display = 'none';
    message.style.display = 'block';
    message.style.color = 'red';
    message.innerText = 'Não é a resposta que eu esperava, mas respeito sua decisão.';
  }
});

buttonNo.addEventListener('mouseover', function() {
  if (avoidingClick) {
    const randomColor = getRandomColor();
    buttonNo.style.backgroundColor = randomColor;
    buttonNo.style.color = 'black';
  }
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
