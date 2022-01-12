var sheepX, sheepY, sheepHeight, sheepWidth, r, g, b, midx, midy, sheep, img, a, c, d

const rainDropCount = 1000;
const size = 2;
const gravity = 5;

var rainDrops = [];

function preload(){
  img = loadImage("img/bg.jpg")
}

function setup() {
    var canvas = createCanvas(1600, 900);
    canvas.parent("p5container");
    
    for(let i = 0; i < rainDropCount; i++){
        
        rainDrops.push({
            x: random(width),
            y: random(height) 
      });
    }
}

function draw() {

    noStroke();

    sheep=true
    sheepX = 800
    sheepY = height/2
    sheepWidth = 27
    sheepHeight = 30
    r = 255
    g = 67
    b = 0
    midx = width/2
    midy = height/2

    //color borders for sky
    if(mouseX <= midx-600){
        r = 255, g = 67, b = 0;
    }else if(mouseX <= midx-400){
        r = 255, g = 167, b = 0;
    }else if(mouseX >= midx+350){
        r = 69, g = 82, b = 112;
    }else if(midx-534 < mouseX <= midx-368){
        r = 128, g = 222, b = 234;  
    }

    //sky
    fill(r,g,b);
    rect(0,0,width,2*height/3);

    //color borders for sky
    if(mouseX <= midx-600){
        a = 255, c = 100, d = 0;
    }else if(mouseX <= midx-400){
        a = 255, c = 200, d = 0;
    }else if(mouseX >= midx+350){
        a = 255, c = 255, d = 255;
    }else if(midx-534 < mouseX <= midx-368){
        a = 255, c = 255, d = 20;  
    }

    //sun
    fill(a,c,d);
    let x1 = map(mouseX, 0, 1600, 0, 1600,true);
    ellipse(x1,100,100);

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

    //Left Haybale
    fill(255,212,1);
    ellipse(1050,750,100);
    fill(251,177,23);
    ellipse(1050,750,80);
    fill(255,212,1);
    ellipse(1050,750,75);
    fill(251,177,23);
    ellipse(1050,750,40);
    fill(255,212,1);
    ellipse(1050,750,35);

    //Right Haybale
    rect(1450,730,90,70);
    fill(255,100,0);
    rect(1450,750,90,5);
    rect(1450,780,90,5);

    //image for new background
    if(keyIsDown(66)){
      image(img,0,0,width,height);
      fill(255)
      rect(1010,780,25)
      rect(1020,800,40)
      rect(1060,805,5,30)
      fill(255,0,0)
      rect(1005,800,5,10)
      fill(255,255,0)
      rect(1000,790,10)
      rect(1030,840,5,20)
      rect(1045,840,5,20)
      rect(1020,860,30,5)
    } 

    //sheep
     if(keyIsDown(LEFT_ARROW)){
      fill(0);
      ellipse(sheepX-222,sheepY+295,sheepWidth);
      ellipse(sheepX-175,sheepY+307,sheepWidth-10);
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
    }else if(sheep=true){
      fill(0);
      ellipse(sheepX-170,sheepY+295,sheepWidth);
      ellipse(sheepX-217,sheepY+307,sheepWidth-10);
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

    //pig
    fill(255,192,203)
    ellipse(midx-600, midy+300, 150, 75);
    ellipse(midx-525, midy+273, 75, 60);
    ellipse(midx-550, midy+340, 20, 50);
    ellipse(midx-575, midy+340, 20, 50);
    ellipse(midx-625, midy+340, 20, 50);
    ellipse(midx-650, midy+340, 20, 50);
    triangle(midx-550,midy+255,midx-525,midy+255,midx-540,midy+215);
    triangle(midx-525,midy+255,midx-500,midy+255,midx-515,midy+215);
    fill(255,150,180);
    ellipse(midx-490,midy+277, 30, 25);
    fill(98,67,33);
    ellipse(midx-550, midy+360, 15, 10);
    ellipse(midx-575, midy+360, 15, 10);
    ellipse(midx-625, midy+360, 15, 10);
    ellipse(midx-650, midy+360, 15, 10);

    //rain
    if(keyIsDown(82)){
      raining=true;
      noStroke();
      fill(50,50,255);
      for(let i = 0; i < rainDrops.length; i++){
      var rainDrop = rainDrops[i];
      rect(rainDrop.x,rainDrop.y,size,10);

    if(rainDrop.y > height + size){
      rainDrop.y = -size
      } else {
      rainDrop.y += gravity
      }
    }
  }
}