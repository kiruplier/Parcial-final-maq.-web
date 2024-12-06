document.addEventListener("DOMContentLoaded", function(){
	var btnArriba = document.getElementById("botonArriba");
	btnArriba.addEventListener("click", function() {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	});
});

