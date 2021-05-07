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

function show_hide_header_nav_container__submenu(id1 , id2) {
    if (document.getElementById) {
        var al1 = document.getElementById(id1);
        var al2 = document.getElementById(id2);
        al1.style.display = (al1.style.display == 'none') ? 'block' : 'none';
        al2.style.backgroundImage.url = (al2.style.backgroundImage.url == '../assets/icons/UpArrow.svg') ? '../assets/icons/DownArrow.svg' : '../assets/icons/UpArrow.svg';
        }
    }
    window.onload = function () {
        show_hide_header_nav_container__submenu('id-header-nav-container--submenu');
    }