// <section>
// 			<div class="container" id="product_card">
// 				<div class="product_card">
// 					<div class="card">
// 						<h2>Прованс</h2>
// 						<div class="slider">
// 							<button id="show_previous"> < </button>
// 							<img src="" id="slide_image" alt="Provence" class="card_image">
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
// </section>
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
export function headerTemplate(sofas){
	const mainDiv = document.createElement("div")
	const productItem = document.createElement("div")
	const cardElem = document.createElement("div")
	const h2elem = document.createElement("h2")

	mainDiv.className = "container"
	productItem.className = "product_card"
	cardElem.className = "card"
	// h2elem.innerHTML = h2Text

	mainDiv.appendChild(productItem)
	.appendChild(cardElem)
	for(let i = 0; i < sofas.length; i++){
		mainDiv.appendChild(sofas[i].title)
		return mainDiv
	}
	// .appendChild(h2elem)

	//return mainDiv;
}