document.addEventListener("DOMContentLoaded", function() {
  // Открытие-закрытие формы
  let menuButtons = document.querySelectorAll('.header__menu-button');

  menuButtons.forEach(function(menuButton) {
    menuButton.addEventListener('click', function() {
      menuButton.classList.remove('header__menu-button--closed');
      menuButton.classList.add('header__menu-button--opened');
    });
  });
});
