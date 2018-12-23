var horizontal=300;
			var vertical=300;
			var ballhorizontal=200;
			var ballvertical=200;
			var status=0;
			var count=0;
window.onload = function() {
			var canvas=document.getElementById('canvas');
			var can=canvas.getContext("2d");
			can.fillStyle = "black";
			can.fillRect(0,0,800,500);
			can.beginPath();
			can.arc(horizontal,vertical,7,0,2*Math.PI);
			can.fillStyle="yellow";
			can.fill();
			can.beginPath();
			can.arc(horizontal-3,vertical-1,1,0,2*Math.PI);
			can.fillStyle="black";
			can.fill();
			can.beginPath();
			can.arc(horizontal+3,vertical-1,1,0,2*Math.PI);
			can.fillStyle="black";
			can.fill();
			can.fillStyle = "black";
			can.fillRect(horizontal-3,vertical+2,6,1);
			can.beginPath();
			can.arc(ballhorizontal,ballvertical,5,0,2*Math.PI);
			can.fillStyle="red";
			can.fill();
		}
		function down() {
			exe1=setInterval(function() {
				fun();
				fun1();
			},30);
		}
		function up() {
			exe2=setInterval(function() {
				fun();
				fun2();
			},30);
		}
		function left() {
			exe=setInterval(function() {
				fun();
				fun4();
			},30);
		}
		function right() {
			exe3=setInterval(function() {
				fun();
				fun3();
			},30);
		}
		function ballcheck() {
			if(Math.abs(horizontal-ballhorizontal)<=7&&Math.abs(vertical-ballvertical)<=7)
			{
				count=count+10;
				
				document.getElementById('score').innerHTML=count;
				ballhorizontal=Math.random()*775;
				ballvertical=Math.random()*475;
			}
		}
		function borderckeck() {
			if (horizontal==10||vertical==10||horizontal==790||vertical==490) {
				check();
    			status=5;
    			document.getElementById('after').innerHTML="game over";
			}
		}
		function fun() {
			var canvas=document.getElementById('canvas');
			var can=canvas.getContext("2d");
			can.fillStyle = "black";
			can.fillRect(0,0,800,500);
			can.beginPath();
			can.arc(horizontal,vertical,7,0,2*Math.PI);
			can.fillStyle="yellow";
			can.fill();
			can.beginPath();
			can.arc(horizontal-3,vertical-1,1,0,2*Math.PI);
			can.fillStyle="black";
			can.fill();
			can.beginPath();
			can.arc(horizontal+3,vertical-1,1,0,2*Math.PI);
			can.fillStyle="black";
			can.fill();
			can.fillStyle = "black";
			can.fillRect(horizontal-3,vertical+2,6,1);
			ballcheck();
			can.beginPath();
			can.arc(ballhorizontal,ballvertical,5,0,2*Math.PI);
			can.fillStyle="red";
			can.fill();
			borderckeck();
		}
		function fun1() {
			vertical=vertical+5;
			horizontal=horizontal;
		}
		function fun2() {
			vertical=vertical-5;
			horizontal=horizontal;
		}
		function fun3() {
			horizontal=horizontal+5;
			vertical=vertical;
		}
		function fun4() {
			horizontal=horizontal-5;
			vertical=vertical;
		}
			function check() {
				if (status==1) {
					exe1=clearTimeout(exe1);
				}else if (status==2) {
					exe2=clearTimeout(exe2);
				}else if (status==3) {
					exe3=clearTimeout(exe3);
				}else if (status==4) {
					exe=clearTimeout(exe);
				}
			}
	$(document).ready(function(){
    		$(document).keydown(function(e){
   				if (e.keyCode == 38&&status!=1&&status!=5) {
   					check(); 
    				up();
    				status=2;
   				}else  if (e.keyCode == 39&&status!=4&&status!=5) { 
   					check();
					right();
					status=3;
    			}else if (e.keyCode == 40&&status!=2&&status!=5) {
    				check();
    				down();
    				status=1;
     
   				}else  if (e.keyCode == 37&&status!=3&&status!=5) {
    				check();
					left();
					status=4;
    			}
   			});
		});