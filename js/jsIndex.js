var btnMenu = document.getElementById("header-img--list");
var nav = document.getElementById("header-nav--container");
var btnOutMenu = document.getElementById("header-nav--next-arrow")

btnMenu.addEventListener("click", function(){
    nav.classList.toggle("mostrar")
})

btnOutMenu.addEventListener("click", function(){
    nav.classList.toggle("ocultar")
})