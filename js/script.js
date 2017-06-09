var btnModal = document.querySelector(".btnModal");
var modal = document.querySelector(".modal");
var close = modal.querySelector(".close");
var header = document.querySelector("header");
var main = document.querySelector("main");
var footer = document.querySelector("footer");
//var no = document.querySelectorAll(".no");


btnModal.addEventListener("click", function(){
	modal.classList.toggle("open");
})

close.addEventListener("click", function(){
	modal.classList.remove("open");
})

header.addEventListener("click", function(){
	modal.classList.remove("open");
})

main.addEventListener("click", function(){
	modal.classList.remove("open");
})

footer.addEventListener("click", function(){
	modal.classList.remove("open");
})

/*no.addEventListener("click", function(){
	alert('Что-то пошло не так...');
})*/