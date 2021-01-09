const toggles = document.querySelectorAll('body > header .toggle');
const nav = document.querySelector('body > header > nav');
toggles.forEach( toggle => {
  toggle.addEventListener('click', event => {
    event.preventDefault();
    nav.classList.toggle('is-targeted');
  });
});
