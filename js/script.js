// Find elements
var showPrevBtn = document.getElementById("show_previous");
var showNextBtn = document.getElementById("show_next");
var slideImage = document.getElementById("slide_image");


showPrevBtn.addEventListener("click", showPrevBtnClick);
showNextBtn.addEventListener("click", showNextBtnClick);

// Create images array
var imagesSrcs = [];
imagesSrcs.push("images/provence1.jpg");
imagesSrcs.push("images/provence_side_view.png");
imagesSrcs.push("images/provence_full_size.png");

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
