const project = document.querySelectorAll('.project');
let projectActive;

project.forEach(item => {
  item.addEventListener('click', () => {
    project.forEach(el => el.classList.remove('project--active'));
    if (item == projectActive) {
      item.classList.remove('project--active');
      projectActive = '';
    } else {
      item.classList.add('project--active');
      projectActive = item;
    }
  });
});

const projectsItem = document.querySelectorAll('.projects__item');

projectsItem.forEach(item => {
  item.addEventListener('mouseover', () => {
    document
      .querySelectorAll('.project')
      .forEach(el => el.classList.remove('project--visible'));
    item.querySelector('.project').classList.add('project--visible');

    document.querySelectorAll('.projects__link').forEach(el => {
      el.classList.add('projects__link--hidden');
    });
    item
      .querySelector('.projects__link')
      .classList.remove('projects__link--hidden');
  });
  item.addEventListener('mouseout', () => {
    item.querySelector('.project').classList.remove('project--visible');
    document.querySelectorAll('.projects__link').forEach(el => {
      el.classList.remove('projects__link--hidden');
    });
  });
});
