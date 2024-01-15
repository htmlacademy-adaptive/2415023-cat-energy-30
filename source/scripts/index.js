/* в этот файл добавляет скрипты */
document.addEventListener('DOMContentLoaded', () => {

  /* кнопка меню */
  const menuButton = document.querySelector('.header__menu-button');
  const navigation = document.querySelector('.main-navigation__list');

  menuButton.addEventListener('click', () => {
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

  /* слайдер толстого-худого кота*/
  const sliderButton = document.querySelector('.operation-example__slider-button');
  const slider = document.querySelector('.operation-example__slider');
  const sliderWrapperBefore = document.querySelector('.operation-example__slider-wrapper--before');
  const sliderWrapperAfter = document.querySelector('.operation-example__slider-wrapper--after');

  if (slider && sliderButton && sliderWrapperBefore && sliderWrapperAfter) {
    let isDragging = false;
    let startX = 0;

    sliderButton.addEventListener('mousedown', (event) => {
      event.preventDefault();
      isDragging = true;
      startX = event.clientX;

      sliderButton.style.opacity = '0.6';
    });

    document.addEventListener('mousemove', (event) => {
      if (isDragging) {
        const deltaX = event.clientX - startX;

        const newWidthBefore = Math.min(Math.max(sliderWrapperBefore.offsetWidth + deltaX * 1, 0), slider.offsetWidth);
        const newWidthAfter = slider.offsetWidth - newWidthBefore;

        sliderWrapperBefore.style.width = `${newWidthBefore}px`;
        sliderWrapperAfter.style.width = `${newWidthAfter}px`;

        startX = event.clientX;
      }
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  }
});
