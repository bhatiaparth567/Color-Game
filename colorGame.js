var numSquares=6;
var colors=generateRandomColors(numSquares);

var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var heading=document.getElementById("color_display");
heading.textContent=pickedColor;
var barMessage=document.getElementById("message");
var h1=document.getElementById("head");
var resetButton=document.getElementById("reset");
var easy=document.getElementById('easyBtn');
var hard=document.getElementById('hardBtn');


easy.addEventListener('click',function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	color_display.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}

});

hard.addEventListener('click',function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	color_display.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		
		squares[i].style.backgroundColor=colors[i];
		
		squares[i].style.display="block";
		
	}

})


resetButton.addEventListener("click", function(){

	colors=generateRandomColors(numSquares);
	this.textContent="New Colors";
	barMessage.textContent="";
	pickedColor=pickColor();
	color_display.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
	}
	h1.style.backgroundColor="steelblue";

})

for(var i=0;i<squares.length;i++){

	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener('click',function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor==pickedColor){
			barMessage.textContent="Correct!";
			changeColor(clickedColor);
			h1.style.background=clickedColor;
			resetButton.textContent="Play Again?";
		}
		else{
			barMessage.textContent="Try Again";
			this.style.backgroundColor="#232323";
		}
	})
}

function changeColor(color){
	//loop through all the squares
	for(var i=0;i<colors.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){

	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		//get random color and push in array
		arr.push(randomColor());

	}

	return arr;

}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";


}

