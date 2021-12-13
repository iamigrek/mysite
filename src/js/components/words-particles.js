function aboutWords() {
  const wordsCanvas = document.createElement('canvas');
  const ctx = wordsCanvas.getContext('2d');
  //Начальный угол
  var currentAngle = 0;
  //Размеры канвас
  let w = (wordsCanvas.width = innerWidth);
  let h = (wordsCanvas.height = innerHeight);
  //Середина экрана
  var baseX = innerWidth / 2;
  var baseY = innerHeight / 2;
  //Радиус
  var radius = w / 3;

  let wordsLength = 0;
  //угол для анимации
  let currentAngle2 = 0;

  //Массив для индивидуальных данных частиц
  let words = [];
  //Настройки
  wordsSettings = {
    wordsName: [
      'HTML',
      'CSS',
      'JS',
      'SCSS',
      'SASS',
      'BEM',
      'GIT',
      'FLEX',
      'GRID',
      'CANVAS',
    ],
    prtMaxVelocity: 0.5,
    prtBgColor: 'rgba(26, 29, 45, 1)',
  };

  //Помещение частиц в секцию
  wordsCanvas.classList.add('about__canvas');
  document.querySelector('.about').appendChild(wordsCanvas);

  //Изменение параметров при изменении размеров окна
  window.onresize = () => {
    w = wordsCanvas.width = innerWidth;
    h = wordsCanvas.height = innerHeight;
    baseX = w / 2;
    baseY = h / 2;
    radius = w / 3;
  };

  class Word {
    constructor() {
      //Текст
      this.text = this.word = wordsSettings.wordsName[wordsLength];
      //Назначение координаты частиц
      this.vx = Math.cos(currentAngle) * radius;
      this.vy = (Math.sin(currentAngle) * radius) / 2;
      //изменение угла
      currentAngle += 360 / (10 / 3.3333);
      wordsLength++;
    }
    position() {
      //изменение угла для анимации
      currentAngle2 += 360 / (10 / 3.3333) + 0.01;
      //изменение координат для анимации
      this.vx = Math.cos(currentAngle2) * radius;
      this.vy = (Math.sin(currentAngle2) * radius) / 2;
    }
    //отрисовка частиц (текста)
    wordDraw() {
      ctx.font = `400 16px montserrat`;
      ctx.textAlign = 'center';
      ctx.fillStyle = '#fff';
      ctx.fillText(this.text, baseX + this.vx, baseY + this.vy);
    }
  }

  //Заполнение канвас цветом
  function reDrawBackgroung() {
    ctx.fillStyle = 'rgba(26, 29, 45)';
    ctx.fillRect(0, 0, w, h);
  }

  //Цикл применения функций к частицам
  function reDrawParticles() {
    for (var i in words) {
      words[i].position();
      words[i].wordDraw();
    }
  }

  //Вызов функций, которые отвечают за анимацию частиц
  function loop() {
    reDrawBackgroung();
    reDrawParticles();
    requestAnimationFrame(loop);
  }

  //Назначение параметров частицам
  function init() {
    for (let i = 0; i < wordsSettings.wordsName.length; i++) {
      words.push(new Word());
    }
    loop();
  }
  init();
}
