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

 function initMap() {
	var uluru = {lat: 59.938796, lng: 30.323081};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 17,
		center: uluru
		});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map,
		icon: {
			url: "img/map_marker.png"
		}
	});
}