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


