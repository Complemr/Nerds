var btnOpenModal = document.querySelector(".btnOpenModal");
var modal = document.querySelector(".modal");
var close = modal.querySelector(".close");
var header = document.querySelector("header");
var main = document.querySelector("main");
var footer = document.querySelector("footer");


btnOpenModal.addEventListener("click", function(){
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
/*
function initialize() {     
	var myLatlng = new google.maps.LatLng(-34.397, 150.644);
	var myOptions = {
		zoom: 8,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 
}

var marker = new google.maps.Marker({
	position: myLatlng,
	map: map,
	title:"Hello World!" 
});
*/