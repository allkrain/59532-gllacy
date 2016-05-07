//слайдер

var slideBody = document.querySelector("body");

document.querySelector('label[for="slide1"]').addEventListener("click", function() {
	
	if(slideBody.className){				
		slideBody.classList.remove(slideBody.className);
	}
	slideBody.classList.add("slide1-background");
});

document.querySelector('label[for="slide2"]').addEventListener("click", function() {
	
	if(slideBody.className){				
		slideBody.classList.remove(slideBody.className);
	}
	slideBody.classList.add("slide2-background");
});

document.querySelector('label[for="slide3"]').addEventListener("click", function() {
	
	if(slideBody.className){			
		slideBody.classList.remove(slideBody.className);
	}
	slideBody.classList.add("slide3-background");
});

//фон слайда при загрузке страницы
var radioButtons = document.querySelectorAll("input[name='slide-switch']");

for (var i = 0; i< radioButtons.length; i++) {
	if(radioButtons[i].checked) {
		slideBody.classList.toggle("slide"+(i+1)+"-background");
	}
};


//обратная связь
var feedbackOpen = document.querySelector(".feedback-btn");
var feedbackClose = document.querySelector(".close");
var feedbackForm = document.querySelector(".feedback-form");
var overlay = document.querySelector(".overlay");

feedbackOpen.addEventListener("click", function(event) {
	event.preventDefault();
	feedbackForm.classList.add("feedback-form-on");
	overlay.classList.add("overlay-on");
});

feedbackClose.addEventListener("click", function(event) {
	event.preventDefault();
	feedbackForm.classList.remove("feedback-form-on");
	overlay.classList.remove("overlay-on");
});