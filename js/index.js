function show_function(id1) {
    if (document.getElementById) {
        var el1 = document.getElementById(id1);
        el1.style.display = 'block';
    }
}
function hide_function(id1,id2,id3) {
    if (document.getElementById) {
        var el1 = document.getElementById(id1);
        var el2 = document.getElementById(id2);
        var el3 = document.getElementById(id3);
        el1.style.display = 'none';
        el2.style.display = 'none';
        el3.style.transform = "rotate(90deg)";
    }
}
function show_hide_function__submenu(id1, id2) {
    if (document.getElementById) {
        var el1 = document.getElementById(id1);
        var el2 = document.getElementById(id2);
        if (el1.style.display == 'block'){
            el1.style.display = 'none';
            el2.style.transform = "rotate(90deg)";
        }
        else {
            el1.style.display = 'block';
            el2.style.transform = "rotate(-90deg)";
        }
    }
}
function show_hide_submenu_desktop(id1){
    if (document.getElementById){
        var el1 = document.getElementById(id1);
        el1.style.display = (el1.style.display == 'block') ? 'none' : 'block';
    }
}
function hide_submenu_desktop(id){
    if (document.getElementById) {
        var el = document.getElementById(id);
        el.style.display = 'none';
    }
}
window.onload = function () {
}