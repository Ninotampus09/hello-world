
var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var FPS = 60;



var bg = new Image();
var bird = new Image();
var floor = new Image();
var pipeup = new Image();
var pipedown = new Image();

bg.src = "./images/background.png";
bird.src = "./images/bird.png";
floor.src = "./images/floor.png";
pipeup.src = "./images/pipeup.png";
pipedown.src = "./images/pipedown.png";

var gap = 85;
var constant = pipedown.height + gap;
 

var bX = 10;
var bY = 200;

var gravity = 1;

document.addEventListener("keydown",moveUp);

function moveUp(){
	bY -= 25;
}

var pipe = [];
	pipe[0] ={
		x : cvs.width,
		y : 0,
	}


function draw() {

	



	ctx.drawImage(bg,0,0);
	for ( var i = 0; i < pipe.length; i ++){
		ctx.drawImage(pipedown,pipe[i].x,pipe[i].y);
		ctx.drawImage(pipeup,pipe[i].x,pipe[i].y + constant);

		pipe[i].x--;

		if (bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipedown.width && (bY <= pipe[i].y + pipedown.height || bY + bird.height >= pipe[i].y + constant) || bY + bird.height >= cvs.height - floor.height)
		{
		location.reload();	
		   
	}
	



		if (pipe[i].x == 90){
			pipe.push({
				x : cvs.width,
				y : Math.floor(Math.random()*pipedown.height)- pipedown.height, 
			});
		}
//ari pre o. akong score di makita sa baba sa canvas. di ko kabalo magdeclare.
		if (pipe[i].x == 5){
		score;	
		}
		
	


		
	}
 

	
	
	

	
	ctx.drawImage(floor,0,370);
	ctx.drawImage(bird,bX,bY);


	bY += gravity;

	
}
   

setInterval(draw, 1000/FPS);
