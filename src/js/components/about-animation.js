function aboutAnimation() {
  setTimeout(() => {
    document
      .querySelector('.about__canvas')
      .classList.add('about__canvas--active');
  }, 250);
  setTimeout(() => {
    document
      .querySelector('.about__container')
      .classList.remove('container--active');
  }, 500);
}

function aboutAnimationClose() {
  document
    .querySelector('.about__canvas')
    .classList.remove('about__canvas--active');
  document
    .querySelector('.about__container')
    .classList.add('container--active');
}
