function show_hide_header_nav__container(id1, id2, id3, id4) {
    if (document.getElementById) {
        var el1 = document.getElementById(id1);
        var el2 = document.getElementById(id2);
        var el3 = document.getElementById(id3);
        var el4 = document.getElementById(id4);
        el1.style.display = (el1.style.display == 'block') ? 'none' : 'block';
        el2.style.display = (el2.style.display == 'block') ? 'none' : 'none';
        el3.style.display = (el3.style.display == 'none') ? 'block' : 'block';
        el4.style.display = (el4.style.display == 'block') ? 'none' : 'none';
    }
}
window.onload = function () {
    show_hide_header_nav__container('id-header-nav--container', 'id-header-nav-container--submenu', 'id-header-nav--down-arrow', 'id-header-nav--up-arrow');
}

function show_hide_header_nav_container__submenu(id1, id2,id3) {
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
    show_hide_header_nav_container__submenu('id-header-nav-container--submenu','id-header-nav--down-arrow','id-header-nav--up-arrow');
}