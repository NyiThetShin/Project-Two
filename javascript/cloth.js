let clothingShow = document.querySelector('.clothing_show');
let clothingShowTwo = document.querySelector('.clothing_show_two')

let shirtNav = document.querySelector('.shirt');
let flannelNav = document.querySelector('.flannel');

shirtNav.addEventListener('click',() => {
    clothingShowTwo.classList.remove('cloth_active');
    clothingShow.classList.add('cloth_active');
})

flannelNav.addEventListener('click', () => {
     clothingShow.classList.remove('cloth_active');
    clothingShowTwo.classList.add('cloth_active');
   
})