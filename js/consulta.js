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
    document.getElementById("dni").className="dni_input_error";
    document.getElementById("texto").innerHTML="<h3>El DNI ingresado no es válido</h3>";
  }
  else{
    document.location.href="resultado.html";
  }
}


