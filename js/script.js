var cornerImagesList = document.querySelectorAll('img.card_image')
console.log(111, cornerImagesList)
// Find elements
var showPrevBtn = document.getElementById("show_previous");
var showNextBtn = document.getElementById("show_next");
var slideImage = document.getElementById("slide_image");


showPrevBtn.addEventListener("click", showPrevBtnClick);
showNextBtn.addEventListener("click", showNextBtnClick);


// if (page name = provance)
// {
// Create images array
var imagesSrcs = [];
imagesSrcs.push("images/provence1.jpg");
imagesSrcs.push("images/provence_side_view.png");
imagesSrcs.push("images/provence_full_size.png");
// }

// if (page name = palmyra)
// {
// // Create images array
// var imagesSrcs = [];
// imagesSrcs.push("images/provence1.jpg");
// imagesSrcs.push("images/provence_side_view.png");
// imagesSrcs.push("images/provence_full_size.png");
// }

var currentImageIndex = 0;
slideImage.src = imagesSrcs[currentImageIndex];
showPrevBtn.disabled = true;

// Functions definitions
function showPrevBtnClick() {
	currentImageIndex--;
	slideImage.src = imagesSrcs[currentImageIndex];
	showNextBtn.disabled = false;

	// Disable Next Button if it needs
	if (currentImageIndex === 0) {
		showPrevBtn.disabled = true;
	}
}

function showNextBtnClick() {
	currentImageIndex++;
	slideImage.src = imagesSrcs[currentImageIndex];
	showPrevBtn.disabled = false;

	// Disable Next Button if it needs
	if (currentImageIndex === (imagesSrcs.length - 1)) {
		showNextBtn.disabled = true;
	}
}


// export function headerTemplate(h2Text){
// 	const mainDiv = document.createElement("div")
// 	const productItem = document.createElement("div")
// 	const cardElem = document.createElement("div")
// 	const h2elem = document.createElement("h2")

// 	mainDiv.className = "container"
// 	productItem.className = "product_card"
// 	cardElem.className = "card"
// 	h2elem.innerHTML = h2Text

// 	mainDiv.appendChild(productItem)
// 	.appendChild(cardElem)
// 	.appendChild(h2elem)

// 	return mainDiv;
// }
const cornerSofas = [
	{
		title: "Прованс",
		text: {
			label: "kk"
		}
	},
	{
		title: "Прованс2",
		text: {
			label: "jij"
		}
	},
	{
		title: "Прованс3",
		text: {
			label: "bhh"
		}
	}
]
function headerTemplate(sofas){
const mainDiv = document.createElement("div")
	const productItem = document.createElement("div")
	const cardElem = document.createElement("div")
	const h2elem = document.createElement("h2")	

	
	// h2elem.innerHTML = h2Text

	// mainDiv.appendChild(productItem)
	// .appendChild(cardElem)
	for(let i = 0; i < sofas.length; i++){
		h2elem.innerHTML = sofas[i].title
		return document.createElement("div").appendChild(h2elem)
		// return mainDiv
	}
	// .appendChild(h2elem)

	// return mainDiv;
}
console.log(1111, headerTemplate(cornerSofas))

// console.log(2222, headerTemplate("fsdgfxhf!!!"))

// <div class="container" id="product_card">
// 				<div class="product_card">
// 					<div class="card">
// 						<h2>Прованс</h2>
// 						<div class="slider">
// 							<button id="show_previous"> < </button>
// 							<img src="images/provence1.jpg" alt="Provence" class="card_image">
// 							<button id="show_next"> > </button>
// 						</div>
// 							<!-- <img src="images/provence_side_view.png" alt="Provence side view" class="card_image">
// 							<img src="images/provence_full_size.png" alt="Provence full size" class="card_image"> -->
// 						<p><span class="bold">Опис товару:</span> Ця ошатна та комфортабельна модель підійде до будь-якого інтер'єру.</p>
// 						<p><span class="bold">Механізм трансформації:</span> єврокнижка - пантограф.</p>
// 						<p><span class="bold">Розміри:</span> 2.5*1.0, сп.м. 1.95*1.5</p>
// 						<p><span class="bold">Ціна:</span> від 9800 грн.</p>

// 					</div>
// 				</div>
// 			</div>
// // function slider(selector) {
// 	let slider = $(selector);
// 	let imgs = slider.children();

// 	slider
// 	.addClass('slider');
// 	.append('<a href="#" class="slider__arrow slider__arrow_left"></a>')
// 	.append('<div class="slider__slides"></div>')
// 	.append('<div class="slider__dots"></div>')
// 	.append('<a href="#" class="slider__arrow slider__arrow_right"></a>');

// 	let slides = slider.children(' .slider__slides');
// 	let dots = slider.children(' .slider__dots');

// 	imgs
// 	.prependTo(slides)
// 	.each(function (i) {

// 		if (!i) {
// 			dots.append(
// 				'<a href="#" class="slider__dot slider__dot_active"></a>'
// 			);

// 		} 
// 		else {
// 			dots.append(
// 				'<a href="#" class="slider__dot"></a>'
// 			);
// 		}
// 	})

// 	.addClass('slider__slide')
// 	.eq(0)
// 	.addClass('slider__slide_active');

// }
