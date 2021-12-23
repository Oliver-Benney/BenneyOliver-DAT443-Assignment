
var sheepX, sheepY, sheepHeight, sheepWidth, r, g, b 

function setup() {
    var canvas = createCanvas(1600, 900);
    canvas.parent("p5container");
}

function draw() {
console.log(mouseX)
    sheepX = width/2
    sheepY = height/2
    sheepWidth = 27
    sheepHeight = 30
    r = 255
    g = 67
    b = 0

    if(mouseX <= sheepX-534){
        r = 255, g = 67, b = 0;
    }else if(mouseX <= sheepX-250){
        r = 255, g = 167, b = 0;
    }else if(mouseX >= sheepX+168){
        r = 255, g = 167, b = 0;
    }else if(sheepX-534 < mouseX <= sheepX-368){
        r = 128, g = 222, b = 234;  
    }
    noStroke();
    //sky
    fill(r,g,b);
    rect(0,0,width,2*height/3);
    //grass
    fill(120,160,90);
    rect(0,2*height/3, width, height/3);
    //fence
    fill(98,67,33);
    rect(0,550,10,85);
    rect(40,550,10,85);
    rect(80,550,10,85);
    rect(120,550,10,85);
    rect(160,550,10,85);
    rect(200,550,10,85);
    rect(240,550,10,85);
    rect(280,550,10,85);
    rect(320,550,10,85);
    rect(360,550,10,85);
    rect(400,550,10,85);
    rect(440,550,10,85);
    rect(480,550,10,85);
    rect(520,550,10,85);
    rect(560,550,10,85);
    rect(600,550,10,85);
    rect(640,550,10,85);
    rect(680,550,10,85);
    rect(720,550,10,85);
    rect(760,550,10,85);
    rect(800,550,10,85);
    rect(840,550,10,85);
    rect(880,550,10,85);
    rect(920,550,10,85);
    rect(960,550,10,85);
    rect(1000,550,10,85);
    rect(1040,550,10,85);
    rect(1080,550,10,85);
    rect(1120,550,10,85);
    rect(1160,550,10,85);
    rect(1200,550,10,85);
    rect(1240,550,10,85);
    rect(1280,550,10,85);
    rect(1320,550,10,85);
    rect(1360,550,10,85);
    rect(1400,550,10,85);
    rect(1440,550,10,85);
    rect(1480,550,10,85);
    rect(1520,550,10,85);
    rect(1560,550,10,85);
    rect(1599,550,10,85);
    rect(0,575,width,10);
    //rect of barn
    fill(255,0,0);
    rect(1100,650,350,150);
    //roof of barn
    fill(130,67,33);
    quad(1275,430,1080,650,1080,650,1470,650);
    //triangle of barn
    fill(255,0,0);
    quad(1275,450,1100,650,1100,650,1450,650);
    //border of top window
    fill(255);
    rect(1237,540,70);
    //black square of top window
    fill(0);
    rect(1247,550,50);
    //border of door
    fill(255);
    rect(1187,680,170,120);
    //door
    fill(255,0,0);
    rect(1207,700,130,100);
    //xs across door
    fill(255);
    quad(1187,700,1197,685,1347,790,1337,800);
    fill(255);
    quad(1207,800,1197,785,1337,695,1337,715);
    //sheep
      fill(0);
    ellipse(sheepX-170,sheepY+295,sheepWidth);
    ellipse(sheepX-210,sheepY+320,sheepHeight-22,sheepWidth);
    ellipse(sheepX-205,sheepY+320,sheepHeight-22,sheepWidth);
    ellipse(sheepX-190,sheepY+320,sheepHeight-22,sheepWidth);
    ellipse(sheepX-185,sheepY+320,sheepHeight-22,sheepWidth);
    fill(255)
    ellipse(sheepX-200,sheepY+310,sheepWidth+3);
    ellipse(sheepX-205,sheepY+303,sheepWidth+3);
    ellipse(sheepX-200,sheepY+300,sheepWidth+3);
    ellipse(sheepX-190,sheepY+300,sheepWidth+3);
    ellipse(sheepX-190,sheepY+309,sheepWidth+3);
    ellipse(sheepX-189,sheepY+304,sheepWidth+3);
  
    
}