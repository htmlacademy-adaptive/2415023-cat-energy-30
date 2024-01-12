/* в этот файл добавляет скрипты */
document.addEventListener('DOMContentLoaded', function() {
  const menuButtons = document.querySelectorAll('.header__menu-button');
  const navigation = document.querySelector('.main-navigation__list');

  menuButtons.forEach(function(menuButton) {
    menuButton.addEventListener('click', function() {
      menuButton.classList.toggle('header__menu-button--closed');
      menuButton.classList.toggle('header__menu-button--opened');

      // Проверяем, открыто ли меню
      if (menuButton.classList.contains('header__menu-button--opened')) {
        navigation.classList.add('main-navigation__list--opened');
        navigation.classList.remove('main-navigation__list--closed');
      } else {
        navigation.classList.add('main-navigation__list--closed');
        navigation.classList.remove('main-navigation__list--opened');
      }
    });
  });
});
