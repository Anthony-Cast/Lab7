function toggle() {
    var ele = document.getElementById("toggleText");
    var imagen=document.getElementById("image_3395978");
    if(ele.style.display == "block") {
        ele.style.display = "none";
        imagen.onmouseout="this.src='onpe1.jpg'";
    }
    else {
        ele.style.display = "block";
        imagen.onmouseout="this.src='onpe2.svg'";
    }
}

function verificarDni(){
  var dni=document.getElementById("dni").value;
  if(dni.length!=8){
    document.getElementById("dni").style.boxShadow="0 0 0 .2rem rgba(255, 0, 0, 1)";
    document.getElementById("texto").innerHTML="<h2 style='color: red'>El DNI ingresado no es válido</h2>"
  }
}


