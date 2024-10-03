'use strict';
document.addEventListener("DOMContentLoaded", () => {
        
    console.log("Atrapamos evento de onclick en foto");

    function minimizar(){
        const f = document.getElementById("foto");
        f.innerHTML="Camba";
        //f.style.height="15px";
        //f.style.width="15px";
        //f.style.backgroundColor="Red";
        document.write("<h2>Vamos</h2>");
    };

    var xa=document.getElementById("foto");//addEventListener("click",minimizar,true);
    var xafoto=document.getElementById("b1").addEventListener("click",minimizar,false);
    xa.addEventListener ("mouseover" , minimizar , false);
});







