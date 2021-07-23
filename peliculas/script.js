
const opciones = document.querySelector(".player").children

function init() {
	for (var i = 0; i < opciones.length; i++) {
		opciones[i].classList.remove("active")
		opciones[i].addEventListener("click",setActive)
		if (i == 0) {opciones[0].classList.add("active")}
	}
}init()



function setActive(e) {
	for (var i = 0; i < opciones.length; i++) {
		opciones[i].classList.remove("active")
		e.target.classList.add("active")
	}
	var url_op = e.target.getAttribute("url-op")
	document.querySelector(".iframe").setAttribute("src", url_op)
}