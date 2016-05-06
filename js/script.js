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