// function muestra_oculta(id){
//     if (document.getElementById){ //se obtiene el id
//     var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
//     el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
//     }
//     }
//     window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
//     muestra_oculta('contenido');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
//     }

function show_hide_header_nav__container(id) {
    if (document.getElementById) {
        var el = document.getElementById(id);
        el.style.display = (el.style.display == 'block') ? 'none' : 'block';
    }
}
window.onload = function () {
    show_hide_header_nav__container('id-header-nav--container');
}

function show_header_nav_container__submenu(id1, id2,id3) {
    if (document.getElementById) {
        var el1 = document.getElementById(id1);
        var el2 = document.getElementById(id2);
        var el3 = document.getElementById(id3);
        el1.style.display = (el1.style.display == 'none') ? 'block' : 'none';
        el2.style.display = (el2.style.display == 'block') ? 'none' : 'block';
        el3.style.display = (el3.style.display == 'none') ? 'block' : 'none';
    }
}
window.onload = function () {
    show_header_nav_container__submenu('id-header-nav-container--submenu','id-header-nav--down-arrow','id-header-nav--up-arrow');
}

function hide_header_nav_container__submenu(id1, id2,id3) {
    if (document.getElementById) {
        var el1 = document.getElementById(id1);
        var el2 = document.getElementById(id2);
        var el3 = document.getElementById(id3);
        el1.style.display = (el1.style.display == 'none') ? 'block' : 'none';
        el2.style.display = (el2.style.display == 'block') ? 'none' : 'block';
        el3.style.display = (el3.style.display == 'none') ? 'block' : 'none';
    }
}
window.onload = function () {
    hide_header_nav_container__submenu('id-header-nav-container--submenu','id-header-nav--down-arrow','id-header-nav--up-arrow');
}
