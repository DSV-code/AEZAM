var image = ['down','down'];
function muestra_oculta(id1,id2){
    if (document.getElementById){ //se obtiene el id
        var el1 = document.getElementById(id1);
        var el2 = document.getElementById(id2);
        el1.style.display = (el1.style.display == 'none') ? 'block' : 'none';
        var containerNum = parseInt(id1.charAt(id1.length-1));
        // console.log(image[containerNum-1])
        if (image[containerNum-1] == 'up'){
            el2.style.backgroundImage = "url('../assets/icons/UpArrowBlue.svg')"
            image[containerNum-1]= 'down';
        } else if (image[containerNum-1] == 'down'){
            el2.style.backgroundImage = "url('../assets/icons/DownArrowBlue.svg')"
            image[containerNum-1] = 'up';
        }
    }
}
window.onload = function () {
    muestra_oculta('id-contenido1','id-arrow-up1');
    muestra_oculta('id-contenido2','id-arrow-up2');
}