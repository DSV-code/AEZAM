var imageIng = ['up','up','up','up','up','up','up','up'];
var imageCont = ['up','up','up'];
function show_hide(id1,id2){
    if (document.getElementById){ //se obtiene el id
        var el1 = document.getElementById(id1);
        var el2 = document.getElementById(id2);
        el1.style.display = (el1.style.display == 'none') ? 'block' : 'none';
        var containerNum = parseInt(id1.slice(-2));
        // console.log(containerNum)
        // console.log(id1.slice(-3, -2))
        if (id1.slice(-3, -2) == 'i'){
            if (imageIng[containerNum-1] == 'up'){
                el2.style.backgroundImage = "url('./assets/icons/Arrow_Blue.svg')"
                imageIng[containerNum-1]= 'down';
            } else if (imageIng[containerNum-1] == 'down'){
                el2.style.backgroundImage = "url('./assets/icons/Arrow_Blue--Full.svg')"
                imageIng[containerNum-1] = 'up';
            }
        }
        if (id1.slice(-3, -2) == 'c'){
            if (imageCont[containerNum-1] == 'up'){
                el2.style.backgroundImage = "url('./assets/icons/Arrow_Blue_Light.svg')"
                imageCont[containerNum-1]= 'down';
            } else if (imageCont[containerNum-1] == 'down'){
                el2.style.backgroundImage = "url('./assets/icons/Arrow_Blue_Light--Full.svg')"
                imageCont[containerNum-1] = 'up';
            }
        } 
        if (id1.slice(-3, -2) == 'p'){
            if (imageCont[containerNum-1] == 'up'){
                el2.style.backgroundImage = "url('./assets/icons/Arrow_Blue_Light.svg')"
                imageCont[containerNum-1]= 'down';
            } else if (imageCont[containerNum-1] == 'down'){
                el2.style.backgroundImage = "url('./assets/icons/Arrow_Blue_Light--Full.svg')"
                imageCont[containerNum-1] = 'up';
            }
        }     
    }
}
function oculta(id){
    if (document.getElementById){
        var aux = 0;
        for (var i = 0; i < id.length; i = i+2) {
            var el1 = document.getElementById(id[i]);
            var el2 = document.getElementById(id[i+1]);
            el1.style.display = 'none';
            if (id[i].slice(-3, -2) == 'i'){
                el2.style.backgroundImage = "url('../assets/icons/DownArrowBlue.svg')"
                imageIng[aux] = 'up';
            }
            if (id[i].slice(-3, -2) == 'c'){
                el2.style.backgroundImage = "url('../assets/icons/DownArrowLightBlue.svg')"
                imageCont[aux] = 'up';
            }
            aux++;
        }
    }
}
window.onload = function () {
}

