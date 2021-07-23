
const search = document.querySelector('.barsearch')

search.addEventListener('keydown',()=>{
	let searchX = document.querySelector('.fa-times')
	searchX.style.visibility = "visible"
	searchX.addEventListener('click',()=>{
		search.value = "";
		searchX.style.visibility = "hidden"
	})
})