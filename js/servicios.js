var imageIng = ['down','down','down','down','down','down','down','down'];
var imageCont = ['down','down','down'];
var imageSobre = ['down','down','down'];
function show_hide(id1,id2){
    if (document.getElementById){ //se obtiene el id
        var el1 = document.getElementById(id1);
        var el2 = document.getElementById(id2);
        el1.style.display = (el1.style.display == 'block') ? 'none' : 'block';
        var containerNum = parseInt(id1.slice(-2));
        // console.log(containerNum)
        // console.log(id1.slice(-3, -2))
        if (id1.slice(-3, -2) == 'i'){
            if (imageIng[containerNum-1] == 'up'){
                el2.style.transform = "rotate(90deg)";
                imageIng[containerNum-1]= 'down';
            } else if (imageIng[containerNum-1] == 'down'){
                el2.style.transform = "rotate(-90deg)";
                imageIng[containerNum-1] = 'up';
            }
        }
        if (id1.slice(-3, -2) == 'c'){
            if (imageCont[containerNum-1] == 'up'){
                el2.style.transform = "rotate(90deg)";
                imageCont[containerNum-1]= 'down';
            } else if (imageCont[containerNum-1] == 'down'){
                el2.style.transform = "rotate(-90deg)";
                imageCont[containerNum-1] = 'up';
            }
        }  
        if (id1.slice(-3, -2) == 's'){
            if (imageSobre[containerNum-1] == 'up'){
                el2.style.transform = "rotate(90deg)";
                imageSobre[containerNum-1]= 'down';
            } else if (imageSobre[containerNum-1] == 'down'){
                el2.style.transform = "rotate(-90deg)";
                imageSobre[containerNum-1] = 'up';
            }
        }    
    }
}
function info_hide(id){
    if (document.getElementById){
        var aux = 0;
        for (var i = 0; i < id.length; i = i+2) {
            var el1 = document.getElementById(id[i]);
            var el2 = document.getElementById(id[i+1]);
            el1.style.display = 'none';
            if (id[i].slice(-3, -2) == 'i'){
                el2.style.transform = "rotate(90deg)";
                imageIng[aux] = 'down';
            }
            if (id[i].slice(-3, -2) == 'c'){
                el2.style.transform = "rotate(90deg)";
                imageCont[aux] = 'down';
            }
            if (id[i].slice(-3, -2) == 's'){
                el2.style.transform = "rotate(90deg)";
                imageSobre[aux] = 'down';
            }
            aux++;
        }
    }
}
window.onload = function () {
}

