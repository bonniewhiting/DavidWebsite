// for the menu

const button = document.getElementById('menu-button');
const menuUL = document.getElementById('menu-UL');

button.addEventListener('click', function(){
  if (menuUL.classList.contains('is-active')) {
    menuUL.classList.remove('is-active')
  } else menuUL.classList.add('is-active');
});