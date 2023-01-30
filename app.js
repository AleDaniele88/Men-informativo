let btnSelector = document.getElementById('btn-selector');
let selector = document.getElementById('selector');
let formSelector = document.getElementById('form-selector');
let administracion = document.getElementById('administracion');
let inmobiliaria = document.getElementById('inmobiliaria');
let terraza = document.getElementById('terraza')





formSelector.addEventListener("submit", (e)=>{
	e.preventDefault();
	if(selector.value==="Contactar a la administración"){
		administracion.classList.remove("d-none");
		inmobiliaria.classList.add("d-none");
		terraza.classList.add("d-none");
	}
	else if (selector.value==="Contactar a la inmobiliaria") {
		inmobiliaria.classList.remove("d-none");
		administracion.classList.add("d-none");
		terraza.classList.add("d-none");
	}
	else{
		inmobiliaria.classList.add("d-none");
		administracion.classList.add("d-none");
		terraza.classList.remove("d-none");
	}
});