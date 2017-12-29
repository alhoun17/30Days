var slides = document.querySelectorAll('.slide');
	var currentSlide = 0;
	setInterval(function(){
		slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
	}, 5000);