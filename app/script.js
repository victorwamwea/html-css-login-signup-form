const navbarMenu = document.querySelector(".navbar .links");
const MenuBtn = document.querySelector(".form-popup .close-btn");
const hideMenuBtn = navbarMenu.querySelector(" .close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");


menuBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
})
hideMenuBtn.addEventListener('click',()=> menuBtn.click()); 
showPopupBtn.addEventListener("click", () =>{
    document.body.classList.toggle("show-popup");
})

hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

loginSignupLink.forEach( link =>{
    link.addEventListener("click",(e) =>{
        e.preventDefault();
        formPopup.classList[link.id ==="signup-link" ? 'add' : 'remove']("show-signup");
    });
});