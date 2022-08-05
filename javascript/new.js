let shirtShow = document.querySelector('.shirt_show');
let shirtShowTwo = document.querySelector('.shirt_show_two')
let shirtShowThree = document.querySelector('.shirt_show_three')

let shirtNav = document.querySelector('.shirt');
let trouserNav = document.querySelector('.trouser');
let sneakerNav = document.querySelector('.sneaker');


shirtNav.addEventListener('click', () => {
    shirtShowThree.classList.remove('new_active');
    shirtShowTwo.classList.remove('new_active');
    shirtShow.classList.add('new_active');
})

trouserNav.addEventListener('click', () => {
    shirtShowThree.classList.remove('new_active');
    shirtShow.classList.remove('new_active');
    shirtShowTwo.classList.add('new_active');

})

sneakerNav.addEventListener('click', () => {

    shirtShow.classList.remove('new_active');
    shirtShowTwo.classList.remove('new_active');
    shirtShowThree.classList.add('new_active');

})