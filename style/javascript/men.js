let clothingShow = document.querySelector('.clothing_show');
let clothingShowTwo = document.querySelector('.clothing_show_two')
let clothingShowThree = document.querySelector('.clothing_show_three')

let shirtNav = document.querySelector('.shirt');
let accessoryNav = document.querySelector('.accessory');
let sneakerNav = document.querySelector('.sneaker');


shirtNav.addEventListener('click', () => {
    clothingShowThree.classList.remove('cloth_active');
    clothingShowTwo.classList.remove('cloth_active');
    clothingShow.classList.add('cloth_active');
})

accessoryNav.addEventListener('click', () => {
    clothingShowThree.classList.remove('cloth_active');
    clothingShow.classList.remove('cloth_active');
    clothingShowTwo.classList.add('cloth_active');

})

sneakerNav.addEventListener('click', () => {

    clothingShow.classList.remove('cloth_active');
    clothingShowTwo.classList.remove('cloth_active');
    clothingShowThree.classList.add('cloth_active');

})