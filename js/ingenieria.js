var image = ['up','up','up','up','up','up','up','up'];
function muestra_oculta(id1,id2){
    if (document.getElementById){ //se obtiene el id
        var el1 = document.getElementById(id1);
        var el2 = document.getElementById(id2);
        el1.style.display = (el1.style.display == 'none') ? 'block' : 'none';
        var containerNum = parseInt(id1.slice(-2));
        // console.log(containerNum)
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
}

function oculta(id){
    if (document.getElementById){ //se obtiene el id
        var aux = 0;
        for (var i = 0; i < id.length; i = i+2) {
            var el1 = document.getElementById(id[i]);
            var el2 = document.getElementById(id[i+1]);
            el1.style.display = 'none';
            el2.style.backgroundImage = "url('../assets/icons/DownArrowBlue.svg')"
            image[aux] = 'up';
            aux++;
         }
    }
}

