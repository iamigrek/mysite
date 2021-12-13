//функция для анимации каждой буквы
function letterHover() {
  const letterText = document.querySelector('.lh');
  letterText.innerHTML = letterText.textContent.replace(
    /\S/g,
    '<span class="lh__letter">$&</span>'
  );

  letterText.addEventListener('mousemove', e => {
    if (e.target.className != 'lh__letter') return;
    e.target.classList.add('lh__hover');
    setTimeout(() => {
      e.target.classList.remove('lh__hover');
    }, 500);
  });
}
