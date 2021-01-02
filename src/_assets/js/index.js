const toggles = document.querySelectorAll('.page-header .toggle');
const nav = document.querySelector('.page-navigation');
toggles.forEach( toggle => {
  toggle.addEventListener('click', event => {
    event.preventDefault();
    nav.classList.toggle('page-navigation--targeted');
  });
});
