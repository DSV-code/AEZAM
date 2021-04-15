var btnMenu = document.getElementById("main-img--List");
var nav = document.getElementById("header--nav-container");

btnMenu.addEventListener("click", function(){
    nav.classList.toggle("mostrar");
})