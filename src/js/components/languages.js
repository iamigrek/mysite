function selectlanguage() {
  //Данные всех языков
  const langData = {
    //RU
    ru: {
      hero: {
        title: 'Frontend Developer',
        name: 'Игорь Деревянко',
        btn: 'Начать',
      },
      header: ['Главная', 'Обо мне', 'Работы', 'Контакты'],
      about: {
        title: 'Обо мне',
        text: 'Привет, меня зовут Игорь, я Fontend Developer. <br> Почти все свободное время посвящаю написанию кода или же его изучению. <br> Учусь самостоятельно, но также нахожусь на 3 курсе в Национальном Авиационном Университете на специальности Кибербезопасность.',
        btn: 'Cкачать резюме',
      },
      projects: {
        title: 'Работы',
        btnSite: 'Сайт',
        btnCode: 'Код',
        projectsList: [
          {
            projectName: 'Игра Крестики-нолики',
            projectDesc:
              'Старая добрая, известная всем игра, крестики-нолики.<br>Имеет небольшой функционал, а именно, смену имени игрока, выбор крестиков или ноликов, очистку игрового поля и отображение победителя или же ничью. ',
            projectSite: 'https://iamigrek.github.io/game-tic-tac-toe/',
            projectCode: 'https://github.com/iamigrek/game-tic-tac-toe',
          },
          {
            projectName: 'Магазин фруктов',
            projectDesc:
              'Интернет магазин с рабочей корзиной и калькулятором в ней.<br>Добавленный в корзину товар хранится на локальном хранилище.<br>Проект разрабатывался только для отображения функционала корзины.',
            projectSite: 'https://iamigrek.github.io/fruity-shop/',
            projectCode: 'https://github.com/iamigrek/fruity-shop',
          },
          {
            projectName: 'Портфолио оператора',
            projectDesc:
              'Сайт состоит из 4 секций: Главная - на которой находится модальное окно для обратной связи, с проверкой на валидность; Обо мне - секция с кратной информацией о человеке и его фото; Портфолио - самая интересная секция, в галерею можно добавлять контент, также в ней присутствует кастомный плеер; Контакты - секция с формой обратной связи и ссылками на владельца сайта. Также на сайте присутствует функция смены языка.',
            projectSite: 'https://iamigrek.github.io/cameraman-host/',
            projectCode: 'https://github.com/iamigrek/cameraman-host',
          },
          {
            projectName: 'Калькулятор на JS',
            projectDesc:
              'Имеет красивую анимацию и полноценный функционал калькулятора, в том числе и полное удаление.',
            projectSite: 'https://iamigrek.github.io/calc/',
            projectCode: 'https://github.com/iamigrek/calc',
          },
          {
            projectName: 'Сайт маркетингового агентства',
            projectDesc:
              'На сайте есть появляющееся меню навигации, при скролле, два самодельных слайдера (в отзывах и в блоге).',
            projectSite: 'https://iamigrek.github.io/marketing-agency/',
            projectCode: 'https://github.com/iamigrek/marketing-agency',
          },
        ],
      },
      contacts: {
        title: 'Контакты',
        contactsHelp: ['GitHub', 'Telegram', 'Email'],
      },
    },
    //EN
    en: {
      hero: {
        title: 'Frontend Developer',
        name: 'Ihor Derevianko',
        btn: 'Get start',
      },
      header: ['Home', 'About', 'Projects', 'Contacts'],
      about: {
        title: 'About',
        text: 'Hi, my name is Igor, I am a Fontend Developer.<br> I devote almost all my free time to writing code or studying it.<br> I am studying on my own, but I am also in the 3rd year at the National Aviation University with a Cybersecurity major.',
        btn: 'Download cv',
      },
      projects: {
        title: 'Projects',
        btnSite: 'visit site',
        btnCode: 'view code',
        projectsList: [
          {
            projectName: 'Tic Tac Toe',
            projectDesc:
              "Good old, well-known game, tic-tac-toe. It has a small functionality, namely, changing the player's name, choosing zeroes or crosses, clearing the playing field and displaying a winner or a draw.",
            projectSite: 'https://iamigrek.github.io/game-tic-tac-toe/',
            projectCode: 'https://github.com/iamigrek/game-tic-tac-toe',
          },
          {
            projectName: 'Fruit shop',
            projectDesc:
              'Online store with a working basket and a calculator in it. <br> The product added to the basket is stored on the local storage. <br> The project was developed only to display the functionality of the basket.',
            projectSite: 'https://iamigrek.github.io/fruity-shop/',
            projectCode: 'https://github.com/iamigrek/fruity-shop',
          },
          {
            projectName: 'Operator portfolio',
            projectDesc:
              'The site consists of 4 sections: Home - on which there is a modal window for feedback, with a check for validity; About me - a section with brief information about a person and his photo; Portfolio is the most interesting section, you can add content to the gallery, it also has a custom player; Contacts - a section with a feedback form and links to the site owner. Also, the site has a function for changing the language.',
            projectSite: 'https://iamigrek.github.io/cameraman-host/',
            projectCode: 'https://github.com/iamigrek/cameraman-host',
          },
          {
            projectName: 'JS calculator',
            projectDesc:
              'Has beautiful animation and full functionality of the calculator, including complete removal.',
            projectSite: 'https://iamigrek.github.io/calc/',
            projectCode: 'https://github.com/iamigrek/calc',
          },
          {
            projectName: 'Marketing agency website',
            projectDesc:
              'The site has a navigation menu that appears when scrolling, two homemade sliders (in reviews and in the blog).',
            projectSite: 'https://iamigrek.github.io/marketing-agency/',
            projectCode: 'https://github.com/iamigrek/marketing-agency',
          },
        ],
      },
      contacts: {
        title: 'Contacts',
        contactsHelp: ['My GitHub', 'My Telegram', 'My Email'],
      },
    },
    //UK
    uk: {
      hero: {
        title: 'Frontend Developer',
        name: "Ігор Дерев'янко",
        btn: 'Почати',
      },
      header: ['Головна', 'Про мене', 'Роботи', 'Контакти'],
      about: {
        title: 'Про мене',
        text: 'Привіт мене звати Ігор, я Fontend Developer. <br> Майже весь вільний час присвячую написанню коду або його вивченню. <br> Вчуся самостійно, але також перебуваю на 3 курсі в Національному Авіаційному Університеті на спеціальності Кібербезпека.',
        btn: 'Завантажити резюме',
      },
      projects: {
        title: 'Роботи',
        btnSite: 'Сайт',
        btnCode: 'Код',
        projectsList: [
          {
            projectName: 'Гра Хрестики-нуліки',
            projectDesc:
              'Стара добра, відома всім гра, хрестики-нуліки. Має невеликий функціонал, а саме, зміну імені гравця, вибір хрестиків або нуліків, очищення ігрового поля та відображення переможця або нічию.',
            projectSite: 'https://iamigrek.github.io/game-tic-tac-toe/',
            projectCode: 'https://github.com/iamigrek/game-tic-tac-toe',
          },
          {
            projectName: 'Магазин фруктів',
            projectDesc:
              'Інтернет магазин з робочим кошиком та калькулятором у ньому.<br>Доданий до кошику товар зберігається на локальному сховищі.<br>Проект розроблявся тільки для відображення функціоналу кошика.',
            projectSite: 'https://iamigrek.github.io/fruity-shop/',
            projectCode: 'https://github.com/iamigrek/fruity-shop',
          },
          {
            projectName: 'Портфоліо оператора',
            projectDesc:
              "Сайт складається з 4 секцій: Головна – на якій знаходиться модальне вікно для зворотного зв'язку, з перевіркою на валідність; Про мене - секція з короткою інформацією про людину та її портфоліо; Портфоліо - найцікавіша секція, до галереї можна додавати контент, також у ній присутній кастомний плеєр; Контакти - секція з формою зворотного зв'язку та посиланнями на власника сайту. Також на сайті є функція зміни мови.",
            projectSite: 'https://iamigrek.github.io/cameraman-host/',
            projectCode: 'https://github.com/iamigrek/cameraman-host',
          },
          {
            projectName: 'Калькулятор на JS',
            projectDesc:
              'Має гарну анімацію та повноцінний функціонал калькулятора, у тому числі повне видалення.',
            projectSite: 'https://iamigrek.github.io/calc/',
            projectCode: 'https://github.com/iamigrek/calc',
          },
          {
            projectName: 'Сайт маркетингової агенції',
            projectDesc:
              'На сайті є відображення меню навігації, при прокрутці, два саморобні слайдери (у відгуках і в блозі).',
            projectSite: 'https://iamigrek.github.io/marketing-agency/',
            projectCode: 'https://github.com/iamigrek/marketing-agency',
          },
        ],
      },
      contacts: {
        title: 'Контакти',
        contactsHelp: ['GitHub', 'Telegram', 'Email'],
      },
    },
  };

  //Начальный язык в зависимости от языка браузера
  let lang;

  if (localStorage.getItem('lang')) {
    //получение выбраного языка из localStorage

    lang = localStorage.getItem('lang');

    document.querySelectorAll('.header__lang-btn').forEach(item => {
      if (item.dataset.lang == lang) {
        item.classList.add('btn--lang-selected');
      }
    });
    //применить изменения
    changeLang(lang);
  } else {
    //Стандартный язык
    if (
      !Object.keys(langData).includes(
        navigator.language || navigator.userLanguage
      )
    ) {
      lang = 'en';
      changeLang(lang);
    } else {
      //в случае отсутствия выбраного языка применяеться язык браузера
      lang = navigator.language || navigator.userLanguage;
      changeLang(lang);
    }
  }

  //Отслеживание и анимация выбраного языка
  document.querySelectorAll('.header__lang-btn').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.header__lang-btn').forEach(el => {
        el.classList.remove('btn--lang-selected');
      });
      item.classList.add('btn--lang-selected');
      lang = item.dataset.lang;
      //Запись выбраного языка в localStorage
      localStorage.setItem('lang', lang);
      changeLang(lang);
    });
  });

  //Функция изменения языка
  function changeLang(lang) {
    //HERO
    document.querySelector(
      '.hero__title'
    ).innerHTML = `${langData[lang].hero.title} <span class="hero__title-big title--hero-big lh">${langData[lang].hero.name}</span>`;
    document.querySelector('.hero__btn').textContent = langData[lang].hero.btn;
    letterHover();

    //HEADER
    document.querySelectorAll('.nav__link').forEach((item, index) => {
      item.textContent = langData[lang].header[index];
    });

    //ABOUT
    document.querySelector('.about__title').textContent =
      langData[lang].about.title;
    document.querySelector('.about__desc').innerHTML =
      langData[lang].about.text;
    document.querySelector('.about__big-title').textContent =
      langData[lang].about.title;
    document.querySelector('.about__btn').textContent =
      langData[lang].about.btn;

    //PROJECTS
    document.querySelector('.projects__title').textContent =
      langData[lang].projects.title;
    document.querySelector('.projects__bit-title').textContent =
      langData[lang].projects.title;
    document.querySelectorAll('.project__title').forEach((item, index) => {
      item.innerHTML = langData[lang].projects.projectsList[index].projectName;
    });
    document.querySelectorAll('.project__desc').forEach((item, index) => {
      item.innerHTML = langData[lang].projects.projectsList[index].projectDesc;
    });
    document.querySelectorAll('.project__btn-site').forEach((item, index) => {
      item.href = langData[lang].projects.projectsList[index].projectSite;
    });
    document.querySelectorAll('.project__btn-code').forEach((item, index) => {
      item.href = langData[lang].projects.projectsList[index].projectCode;
    });
    document.querySelectorAll('.project__btn-code').forEach(item => {
      item.textContent = langData[lang].projects.btnCode;
    });
    document.querySelectorAll('.project__btn-site').forEach(item => {
      item.textContent = langData[lang].projects.btnSite;
    });

    //CONTACTS
    document.querySelectorAll('.contacts__title').forEach(item => {
      item.textContent = langData[lang].contacts.title;
    });
    document.querySelectorAll('.contacts__help').forEach((item, index) => {
      item.textContent = langData[lang].contacts.contactsHelp[index];
    });
  }
}
