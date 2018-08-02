let box = document.getElementById('box'),
	btn = document.getElementById('btn'),
	revbtn = document.getElementById('revbtn'),
	wrapper = document.getElementById('wrapper');
	id = 10;
	pos = 0;
function Animatis() {
	let	int = 10;
	id = setInterval(Frame, int)
	function Frame(){
		if(pos==300){
			clearInterval(id);
		} else{
			pos++;
			box.style.top = pos +"px";
			box.style.left = pos +"px";
		}

	}
}
function AnimatisRev() {
	let	int = 10;
	id = setInterval(Frame, int)
	function Frame(){
		if(pos==0){
			clearInterval(id);
		} else{
			pos--;
			box.style.top = pos +"px";
			box.style.left = pos +"px";
		}

	}
}

btn.addEventListener('click', function(){

	clearInterval(id);
	Animatis();
});
revbtn.addEventListener('click', function(){
	clearInterval(id);
	AnimatisRev();
});
