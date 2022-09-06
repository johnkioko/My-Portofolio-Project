hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".menu-list-link").forEach(linkItem => linkItem.addEventListener("click", function(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active"); 
}))