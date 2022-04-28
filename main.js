
    drawScore();
   
 
    models();
    
  
     move();
     if(rightwristSCORE > 0.2){
       fill("#ff0000");
       stroke("#ff0000");
       circle(rightwristX,rightwristY,20);
     }
 
 
 
 
 function reset(){
    ball.x = width/2+100,
    ball.y = height/2+100;
    ball.dx=3;
    ball.dy =3;
    
 }
 
 

 function midline(){
     for(i=0;i<480;i+=10) {
     var y = 0;
     fill("white");
     stroke(0);
     rect(width/2,y+i,10,480);
     }
 }
 
 
 
 function drawScore(){
     textAlign(CENTER);
     textSize(20);
     fill("white");
     stroke(250,0,0)
     text("Player:",100,50)
     text(playerscore,140,50);
     text("Computer:",500,50)
     text(pcscore,555,50)
 }
 
 

 function move(){
    fill(50,350,0);
    stroke(255,0,0);
    strokeWeight(0.5);
    ellipse(ball.x,ball.y,ball.r,20)
    ball.x = ball.x + ball.dx;
    ball.y = ball.y + ball.dy;
    if(ball.x+ball.r>width-ball.r/2){
        ball.dx=-ball.dx-0.5;       
    }
   if (ball.x-2.5*ball.r/2< 0){
   if (ball.y >= paddle1Y&& ball.y <= paddle1Y + paddle1Height) {
     ball.dx = -ball.dx+0.5; 
   }
   else{
     pcscore++;
     reset();
     navigator.vibrate(100);
   }
 }
 if(pcscore ==4){
     fill("#FFA500");
     stroke(0)
     rect(0,0,width,height-1);
     fill("white");
     stroke("white");
     textSize(25)
     text("Game Over!☹☹",width/2,height/2);
     text("Reload The Page!",width/2,height/2+30)
     noLoop();
     pcscore = 0;
 }
    if(ball.y+ball.r > height || ball.y-ball.r <0){
        ball.dy =- ball.dy;
    }   
 }
 
 

 function models(){
     textSize(18);
     fill(255);
     noStroke();
     text("Width:"+width,135,15);
     text("Speed:"+abs(ball.dx),50,15);
     text("Height:"+height,235,15)
 }
 
 

 function paddleInCanvas(){
   if(mouseY+paddle1Height > height){
     mouseY=height-paddle1Height;
   }
   if(mouseY < 0){
     mouseY =0;
   }  
 }
 
 function modelLoaded(){
   console.log("model_loaded");
 }
 function gotPoses(results){
   if(results.length > 0){
     console.log(results);
     rightwristX = results[0].pose.rightWrist.x;
     rightwristY = results[0].pose.rightWrist.y;
     rightwristSCORE = results[0].pose.keypoints[10].score;
     console.log("rightwristX = "+rightwristX+" ,rightwristY = "+rightwristY+" ,rightwristSCORE = "+rightwristSCORE);
   }
 }