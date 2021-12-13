function contactsAnimation() {
  setTimeout(() => {
    const projectsItem = document.querySelectorAll('.contacts__item');

    for (let i = 0; i < projectsItem.length; i++) {
      projectsItem[i].classList.add('contacts__item--active');
    }
    document
      .querySelector('.contacts__container')
      .classList.remove('container--active');
  }, 600);
}

function contactsAnimationClose() {
  const projectsItem = document.querySelectorAll('.contacts__item');

  for (let i = 0; i < projectsItem.length; i++) {
    projectsItem[i].classList.remove('contacts__item--active');
  }
  document
    .querySelector('.contacts__container')
    .classList.add('container--active');
}
