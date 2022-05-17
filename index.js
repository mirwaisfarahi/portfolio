const openNav = document.querySelector('#menu');

openNav.addEventListener('click', () => {
  document.querySelector('#mobileNav').style.height = '812px';
});

const closeNav = document.querySelector('.close-button');
closeNav.addEventListener('click', () => {
  document.querySelector('#mobileNav').style.height = '0%';
});

const closes = document.querySelectorAll('.close');
Array.from(closes).forEach((close) => {
  close.addEventListener('click', () => {
    document.querySelector('#mobileNav').style.height = '0%';
  });
});
