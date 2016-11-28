
window.onload=pulsarboton;

var it;
it="<img src='";
var tama="' height='500vw' width='1000vw'/>";
var it2;
it2="<img src='";
var ultima="<img src='imagen1.jpg' height='500vw' width='1000vw'/>";

    function pulsarboton() {
	
		var uno=document.getElementById("imag1");
		uno.addEventListener("click",function(){
	    definir("imagen1.jpg");
		});

		uno.addEventListener("mouseover",function(){
							cambiar("imagen1.jpg");
								});
		uno.addEventListener("mouseout",salir);

		var dos=document.getElementById("imag2");
		dos.addEventListener("click",function(){
		definir("imagen2.jpg");
		});
		dos.addEventListener("mouseover",function(){
							cambiar("imagen2.jpg");
								});
		dos.addEventListener("mouseout",salir);

		var tres=document.getElementById("imag3");
		tres.addEventListener("click",function(){
	    definir("imagen3.jpg");
		});
		tres.addEventListener("mouseover",function(){
							cambiar("imagen3.jpg");
								});
		tres.addEventListener("mouseout",salir);

		var cuatro=document.getElementById("imag4");
		cuatro.addEventListener("click",function(){
	    definir("imagen4.png");
		});
		cuatro.addEventListener("mouseover",function(){
							cambiar("imagen4.png");
								});
		cuatro.addEventListener("mouseout",salir);

		var cinco=document.getElementById("imag5");
		cinco.addEventListener("click",function(){
	    definir("imagen5.jpg");
		});
		cinco.addEventListener("mouseover",function(){
							cambiar("imagen5.jpg");
								});
		cinco.addEventListener("mouseout",salir);

		var seis=document.getElementById("imag6");
		seis.addEventListener("click",function(){
	    definir("imagen6.png");
	    });
		seis.addEventListener("mouseover",function(){
							cambiar("imagen6.png");
								});
		seis.addEventListener("mouseout",salir);

		var siete=document.getElementById("imag7");
		siete.addEventListener("click",function(){
		definir("imagen7.jpg");
		});
		siete.addEventListener("mouseover",function(){
							cambiar("imagen7.jpg");
								});
		siete.addEventListener("mouseout",salir);

		var ocho=document.getElementById("imag8");
		ocho.addEventListener("click",function(){
		definir("imagen8.png");
	    });
		ocho.addEventListener("mouseover",function(){
							cambiar("imagen8.png");
								});
		ocho.addEventListener("mouseout",salir);

		var nueve=document.getElementById("imag9");
		nueve.addEventListener("click",function(){
		definir("imagen9.jpg");
		});
		nueve.addEventListener("mouseover",function(){
							cambiar("imagen9.jpg");
								});
		nueve.addEventListener("mouseout",salir);
	    }

function definir (imagen){
	it +=imagen;
	it +=tama;
	
	ultima=it;
	var m=document.getElementById("imgprincipal").innerHTML =it;
	it= "<img src='";

}
function cambiar(im){
	it2+=im;
	it2+=tama;

	var i=document.getElementById("imgprincipal").innerHTML=it2;
	it2="<img src='";
 }


function salir(){

var h =document.getElementById("imgprincipal").innerHTML = ultima;

}