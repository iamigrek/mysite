function projectAnimation() {
  setTimeout(() => {
    const projectsItem = document.querySelectorAll('.projects__item');

    for (let i = 0; i < projectsItem.length; i++) {
      projectsItem[i].classList.add('projects__item--active');
    }
    document
      .querySelector('.projects__container')
      .classList.remove('container--active');
  }, 500);
}

function projectAnimationClose() {
  const projectsItem = document.querySelectorAll('.projects__item');

  for (let i = 0; i < projectsItem.length; i++) {
    projectsItem[i].classList.remove('projects__item--active');
  }
  document
    .querySelector('.projects__container')
    .classList.add('container--active');
}
