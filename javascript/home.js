let navigateInfo = document.querySelector('.navigate_info');
let toggleBar = document.querySelector('.bar');
let homeSearch = document.querySelector('.home_search');
let helpTag = document.querySelector('.help')
let showHelpTag = document.querySelector('.help_section');
let closeHelpShow = document.querySelector('.cross');
let nameInput = document.querySelector('.name_input')
let emailInput = document.querySelector('.email_input')
let messageInput = document.querySelector('.message_input')
let submitMessage = document.querySelector('.message_submit');
homeSearch.addEventListener('click',() => {
    window.location.href = "../html/search.html";
})




toggleBar.addEventListener('click',() => {
    if(toggleBar){
         navigateInfo.classList.toggle('navigate_active');
    } 
   
})



helpTag.addEventListener('click',() => {
    showHelpTag.classList.toggle('help_active');
})

closeHelpShow.addEventListener('click',() => {
    showHelpTag.classList.toggle('help_active');
})





submitMessage.addEventListener('click',() => {
    let nameValue = nameInput.value;
    let emailValue = emailInput.value;
    let messageValue = messageInput.value;
    if(nameValue && emailValue && messageValue) {
        alert(`Thanks ${nameValue}  we will response later `);
        showHelpTag.classList.toggle('help_active')
    }
})
