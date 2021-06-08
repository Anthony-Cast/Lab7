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
