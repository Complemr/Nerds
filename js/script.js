var btnModal = document.querySelector(".btnModal");
var modal = document.querySelector(".modal");
var close = modal.querySelector(".close");

btnModal.addEventListener("click", function(){
	modal.classList.toggle("open");
})

close.addEventListener("click", function(){
	modal.classList.remove("open");
})