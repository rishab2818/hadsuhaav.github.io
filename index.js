let dir_vec ={x:0,y:0};
speed = 7;
prev_time=0;
score = 0;
let body_arr = [
{x:14 , y: 5}
	];
food = {x:10, y:15};

function main(ctime){
	window.requestAnimationFrame(main);

	if((ctime-prev_time)/1000< 1/speed){
		return;
	}
	prev_time = ctime;
	run_game();
}
function game_over(arr){	
	if(arr[0].x >=18 || arr[0].x<=0 || arr[0].y >=18 || arr[0].y <=0)
	{
		return true;
	}
	for (let i=1 ; i<arr.length ; i++)
	{
		if(arr[0].x === arr[i].x && arr[0].y === arr[i].y)
			return true;
	}
	return false;
}
function run_game(){
	if(game_over(body_arr))
	{
		alert("HADASKONDI TAMMA HATRA NING");
		dir_vec ={x:0,y:0};
		body_arr = [{x:14 , y: 5}];
		score=0;
		document.getElementById("num").innerHTML = score;
	}
	

if(body_arr[0].x === food.x && body_arr[0].y === food.y)
{
	body_arr.unshift({x:body_arr[0].x+dir_vec.x , y:body_arr[0].y + dir_vec.y});
	score = score+1;
	document.getElementById("num").innerHTML = score;
	let a=2;
	let b=16;
	food = {x: Math.round(a + (b-a)* Math.random()),y: Math.round(a + (b-a)* Math.random())};
}

for (let i = body_arr.length-2; i >= 0; i--) {
		body_arr[i+1] = {...body_arr[i]};
} 
body_arr[0].x += dir_vec.x;
body_arr[0].y += dir_vec.y;
	
	//create snake and food class
	//snake creation 
	playground.innerHTML="";
	body_arr.forEach((e,index)=>{
		build_snake = document.createElement('div');
		build_snake.style.gridRowStart= e.y;
		build_snake.style.gridColumnStart= e.x;
		if(index===0)
		{
			build_snake.classList.add('head');
		}
		else
		{
			build_snake.classList.add('snake');
		}
		playground.appendChild(build_snake);
	});
	
	
	//food creation
	build_food = document.createElement('div');
	build_food.style.gridRowStart = food.y;
	build_food.style.gridColumnStart = food.x;
	build_food.classList.add('food');
	playground.appendChild(build_food);
	
}


window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
	dir_vec ={x:0,y:1}
	switch(e.key){
		case  "ArrowUp":
				dir_vec.y = -1;
				dir_vec.x =  0;
				break;
		case  "ArrowDown":
				dir_vec.y =  1;
				dir_vec.x =  0;
				break;
		case  "ArrowLeft":
				dir_vec.y =  0;
				dir_vec.x = -1;
				break;
		case  "ArrowRight":
				dir_vec.y =  0;
				dir_vec.x =  1;
				break;
		default:
				break;
	}
});