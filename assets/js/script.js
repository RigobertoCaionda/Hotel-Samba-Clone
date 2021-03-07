let currentSlide = 0;
let currentS = 0;
let totSliders = document.querySelectorAll('.testemunho--slider--width--item').length;
let totalSliders = document.querySelectorAll('.slider--item').length;
let vetor=[];
function goPrev(){
	currentSlide--;
	if(currentSlide < 0){
		currentSlide = totalSliders - 1;
	}
	updateMargin();
}

function goPrevs(){
	currentS--;
	if(currentS < 0){
		currentS = totSliders - 1;
	}
	updateMargins();
}
function goNexts(){
	currentS++;
	if(currentS > (totSliders - 1)){
		currentS = 0;
	}
	updateMargins();
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

function updateMargins(){
	let newMargin = (currentS * document.body.clientWidth);
	document.querySelector('.testemunho--slider--width').style.marginLeft = `-${newMargin}px`;
}
setInterval(goNexts,3000);

document.querySelectorAll('.executive--hotel--samba-inner--item--text p').forEach((item)=>{
	let v = item.innerHTML.slice(0,220);
	vetor.push(item.innerHTML);
	item.innerHTML = v;
});
	document.querySelectorAll('.btn--show').forEach((item, index)=>{
		item.addEventListener('click',(e)=>{
			
			elemento = e.target.closest('.executive--hotel--samba-inner--item').querySelector('.executive--hotel--samba-inner--item--text p');
			elemento.innerHTML = vetor[index];
			if(item.innerHTML == "Ver menos"){
				item.innerHTML = "Ver mais";
				elemento.innerHTML = elemento.innerHTML.slice(0,220);
			}else{
				item.innerHTML = "Ver menos";
				elemento.innerHTML = vetor[index];
				
			}
		});
	});