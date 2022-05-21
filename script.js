const hamburger = document.querySelector('.hamburger');
const headerMenu  = document.querySelector('.header-menu');

const handleClick = () =>{
    hamburger.classList.toggle('hamburger--active');
    headerMenu.classList.toggle('header-menu--active')
};

hamburger.addEventListener('click', handleClick);

let cards = document.querySelectorAll('.card');


for(let i =0; i < cards.length; i++){
    j = 1;
    cards[i].style.backgroundImage =  `url("css/img/${i}.jpg")`;
    j++;
}