function navigation() {
  const header = document.querySelector('.header');
  const siteInner = document.querySelector('.site-inner');

  //Массив с дата атрибутами ссылок
  let allSections = [];

  //Кнопка начала на начальной странице
  document.querySelector('.hero__btn').addEventListener('click', () => {
    siteInner.style.top = '-100vh';
    //Вызов анимации появления в About
    aboutAnimation();
    //Появление панели навигации
    header.classList.add('header--visible');
    //Назначение ссылке активного состояния
    document.querySelectorAll('.nav__link').forEach(item => {
      item.dataset.nav == allSections[1] &&
        item.classList.add('btn--link-active');
    });
  });

  document.querySelectorAll('.nav__link').forEach(item => {
    //добавление дата атрибутов в массив
    allSections.push(item.dataset.nav);

    //Отслеживание клика на ссылку
    item.addEventListener('click', () => {
      //Удаление активного состояния у всех ссылках
      document
        .querySelectorAll('.nav__link')
        .forEach(item => item.classList.remove('btn--link-active'));
      //Добавление активного состояния активной ссылке
      item.classList.add('btn--link-active');

      //Анимация секций при нажатии на ссылку (зависит от расположения ссылок (ссылки и секции должны идти 1 в 1))
      switch (allSections.indexOf(item.dataset.nav)) {
        case 1:
          aboutAnimation();
          projectAnimationClose();
          contactsAnimationClose();
          break;
        case 2:
          projectAnimation();
          aboutAnimationClose();
          contactsAnimationClose();

          break;
        case 3:
          contactsAnimation();
          aboutAnimationClose();
          projectAnimationClose();

          break;

        default:
          header.classList.remove('header--visible');
          aboutAnimationClose();
          projectAnimationClose();
          contactsAnimationClose();
          document.querySelectorAll('.nav__link').forEach(item => {
            item.classList.remove('btn--link-active');
          });
          break;
      }

      //передвижение экрана
      siteInner.style.top = `${allSections.indexOf(item.dataset.nav) * -100}vh`;
    });
  });
}
