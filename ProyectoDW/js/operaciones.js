//SLIDER
function transicion(){
        document.getElementById("imgcab").style.opacity="0";
        document.getElementById("imgcab").style.transition= "all 1s"; 
        setTimeout("slider()", 1000);
    }

var contador = 1;
function slider(){
    contador++;
    if(contador>3) contador=1;
    document.getElementById("imgcab").setAttribute("src","../img/blog/banner"+contador+".png");
    document.getElementById("imgcab").style.opacity="1";
    document.getElementById("imgcab").style.transition= "all 1s"; 
    setTimeout("transicion()", 2000);
}

document.body.setAttribute("onload","slider()");