function heroParticles() {
  const prtCanvas = document.createElement('canvas');
  const ctx = prtCanvas.getContext('2d');

  //Размеры канвас
  let w = (prtCanvas.width = innerWidth);
  let h = (prtCanvas.height = innerHeight);
  //Для хранения частиц
  let prt = [];
  //Главные настройки частиц
  const prtSettings = {
    prtBgColor: 'rgba(17, 17, 19, 1)',
    prtColor: 'rgba(255, 255, 255, 1)',
    prtRadius: 4,
    prtCount: 30,
    prtMaxVelocity: 0.2,
  };

  //Помещение частиц в секцию
  prtCanvas.classList.add('hero__canvas');
  document.querySelector('.hero').appendChild(prtCanvas);

  //Изменение размеров канвы при изменении размеров окна
  window.addEventListener('resize', () => {
    w = prtCanvas.width = innerWidth;
    h = prtCanvas.height = innerHeight;
  });

  class Particle {
    constructor() {
      //Назначение координат случайного размещения частиц
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      //Назначение радиуса частиц
      this.r = Math.random() * prtSettings.prtRadius;
      //Назначение направления движения частиц
      this.velocityX =
        Math.random() * (prtSettings.prtMaxVelocity * 2) -
        prtSettings.prtMaxVelocity;
      this.velocityY =
        Math.random() * (prtSettings.prtMaxVelocity * 2) -
        prtSettings.prtMaxVelocity;
    }
    position() {
      //Изменение направления при столкновении с границей
      (this.x + this.velocityX > w && this.velocityX > 0) ||
      (this.x + this.velocityX < 0 && this.velocityX < 0)
        ? (this.velocityX *= -1)
        : this.velocityX;
      (this.y + this.velocityY > h && this.velocityY > 0) ||
      (this.y + this.velocityY < 0 && this.velocityY < 0)
        ? (this.velocityY *= -1)
        : this.velocityY;

      //Движение частиц
      this.x += this.velocityX;
      this.y += this.velocityY;
    }
    //Отрисовка частиц
    reDraw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = prtSettings.prtColor;
      ctx.fill();
    }
  }
  //Заполнение канвас цветом
  function reDrawBackgroung() {
    ctx.fillStyle = prtSettings.prtBgColor;
    ctx.fillRect(0, 0, w, h);
  }
  //Цикл применения функций к частицам
  function reDrawParticles() {
    for (var i in prt) {
      prt[i].position();
      prt[i].reDraw();
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
    for (let i = 0; i < prtSettings.prtCount; i++) {
      prt.push(new Particle());
    }

    loop();
  }

  init();
}
