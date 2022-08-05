let clothingShow = document.querySelector('.clothing_show');
let clothingShowTwo = document.querySelector('.clothing_show_two')
let clothingShowThree = document.querySelector('.clothing_show_three')

let jordanNav = document.querySelector('.jordan');
let addidasNav = document.querySelector('.addidas');
let sliperNav = document.querySelector('.sliper');


jordanNav.addEventListener('click', () => {
    clothingShowThree.classList.remove('cloth_active');
    clothingShowTwo.classList.remove('cloth_active');
    clothingShow.classList.add('cloth_active');
})

addidasNav.addEventListener('click', () => {
    clothingShowThree.classList.remove('cloth_active');
    clothingShow.classList.remove('cloth_active');
    clothingShowTwo.classList.add('cloth_active');

})

sliperNav.addEventListener('click', () => {

    clothingShow.classList.remove('cloth_active');
    clothingShowTwo.classList.remove('cloth_active');
    clothingShowThree.classList.add('cloth_active');

})