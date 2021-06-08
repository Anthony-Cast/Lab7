function toggle() {
  var ele = document.getElementById("toggleText");
  var imagen = document.getElementById("image_3395978");
  if(ele.innerText == "Texto") {
    imagen.src='img/onpe1.jpg';
    ele.innerText="Texto2";
  }else if(ele.innerText == "Texto2"){
    imagen.src='img/onpe2.svg';
    ele.innerText="Texto";
  }else{
    ele.innerText="TextoError";
  }
}

function verificarDni(){
  var dni=document.getElementById("dni").value;
  if(dni.length!=8){
    document.getElementById("dni").style.boxShadow="0 0 0 .2rem rgba(255, 0, 0, 1)";
    document.getElementById("texto").innerHTML="<h2 style='color: red'>El DNI ingresado no es válido</h2>"
  }
}


