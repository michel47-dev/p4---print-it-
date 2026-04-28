const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let arrowleft = document.querySelector(".arrow_left");
let arrowright = document.querySelector(".arrow_right");

arrowleft.addEventListener("click", function() {
	currentIndex--;
	updateSlide();
	console.log("click gauche");
});

arrowright.addEventListener("click", function() {
	currentIndex++;
	updateSlide();
	console.log("click droite");
});

let dots = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("span");
	dot.classList.add("dot");
	dots.appendChild(dot);

	if (i === 0) {
		dot.classList.add("dot_selected");
	}
	dot.classList.add("dot");
}
let currentIndex = 0;

let bannerImage = document.querySelector(".banner-img");
let bannerText = document.querySelector("#banner p");

function updateSlide() {
  bannerImage.src = slides[currentIndex].image;
  bannerText.innerHTML = slides[currentIndex].tagLine;
    let allDots = document.querySelectorAll(".dot");

  for (let i = 0; i < allDots.length; i++) {
    allDots[i].classList.remove("dot_selected");
  }

  allDots[currentIndex].classList.add("dot_selected");

}