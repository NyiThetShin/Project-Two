let clothingShow = document.querySelector('.clothing_show');
let clothingShowTwo = document.querySelector('.clothing_show_two')
let clothingShowThree = document.querySelector('.clothing_show_three')
let homeSearch = document.querySelector('.home_search');


homeSearch.addEventListener('click', () => {
    window.location.href = "search.html";
})


let necklaceNav = document.querySelector('.necklace');
let hatNav = document.querySelector('.hat');
let braceletNav = document.querySelector('.bracelet');


necklaceNav.addEventListener('click', () => {
    clothingShowThree.classList.remove('cloth_active');
    clothingShowTwo.classList.remove('cloth_active');
    clothingShow.classList.add('cloth_active');
})

hatNav.addEventListener('click', () => {
    clothingShowThree.classList.remove('cloth_active');
    clothingShow.classList.remove('cloth_active');
    clothingShowTwo.classList.add('cloth_active');

})

braceletNav.addEventListener('click', () => {
   
    clothingShow.classList.remove('cloth_active');
    clothingShowTwo.classList.remove('cloth_active');
     clothingShowThree.classList.add('cloth_active');

})