let currentSlide = 0;
let totalSliders = document.querySelectorAll('.slider--item').length;
function goPrev(){
	currentSlide--;
	if(currentSlide < 0){
		currentSlide = totalSliders - 1;
	}
	updateMargin();
}
function goNext(){
	currentSlide++;
	if(currentSlide > (totalSliders - 1)){
		currentSlide = 0;
	}
	let h1 = document.querySelectorAll('.slider--item--h1 h1').forEach((item)=>{
		if(item.classList.contains('translationY')){
			item.classList.remove('translationY');
		}else{
			item.classList.add('translationY');
		}
	});
	let h2 = document.querySelectorAll('.slider--item--h2 h2').forEach((item)=>{
		if(item.classList.contains('translationX')){
		item.classList.remove('translationX');
	}else{
		item.classList.add('translationX');
	}
	});
	updateMargin();
}
function updateMargin(){
	let newMargin = (currentSlide * document.body.clientWidth);
	document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}
setInterval(goNext,3000);