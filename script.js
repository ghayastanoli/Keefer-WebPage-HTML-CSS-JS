const hamburger = document.getElementById('hamburger-menu');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('active');
  if (navList.classList.contains('active')) {
    document.body.style.backgroundColor = 'blue';
  } else {
    document.body.style.backgroundColor = '';
  }
});
