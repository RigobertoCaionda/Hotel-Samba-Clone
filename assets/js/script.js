let currentSlide = 0;
let totalSliders = document.querySelectorAll('.slider--item').length;
let bb;
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

let text = document.querySelectorAll('.executive--hotel--samba-inner--item--text p');
document.querySelectorAll('.executive--hotel--samba-inner--item--text p').forEach((item)=>{
	let v = item.innerHTML.slice(0,220);
	item.innerHTML = v;
});
	document.querySelectorAll('.btn--show').forEach((item, index)=>{
		item.addEventListener('click',(e)=>{
			e.target.closest('.executive--hotel--samba-inner--item').querySelector('.executive--hotel--samba-inner--item--text').innerHTML = "VALOR";
			if(item.innerHTML == "Ver menos"){
				item.innerHTML = "Ver mais";
			}else{
				item.innerHTML = "Ver menos";
			}
		});
	});