// Melinda Buckner ©2016 HomeWork3

var x;

function setup(){
  createCanvas(1200,500);
  noStroke();
    x=20;
  println("What what=",x,"width =",width,"height =",height);
}
function draw(){
  background(40,200,120);

  for(var b =0; b<1500; b=b+5){


    println("the value y", b)
    fill(200,255,255);

    ellipse(b,0,50);
    fill(190,245,245);

    ellipse(b,25,50);
    fill(180,235,235);

    ellipse(b,50,50);
    fill(170,225,225);

    ellipse(b,75,50);
    fill(160,215,215);

    ellipse(b,100,50);
    fill(150,205,205);

    ellipse(b,125,50);
    fill(140,195,195);

    ellipse(b,150,50);
    fill(130,185,185);

    ellipse(b,175,50);
    fill(120,175,175);

    ellipse(b,200,50);
    fill(110,165,165);

    ellipse(b,225,50);
    fill(100,155,155);

    ellipse(b,250,50);
    fill(90,145,145);

    ellipse(b,275,50);
    fill(80,135,135);

    ellipse(b,300,50);
    fill(70,125,125);

    ellipse(b,325,50);
    fill(60,115,115);

    ellipse(b,350,50);
    fill(50,105,105);

    ellipse(b,375,50);
    fill(40,95,95);

    ellipse(b,400,50);
    fill(30,85,85);

    ellipse(b,425,50);
    fill(10,65,65);

    ellipse(b,450,50);
    fill(0,45,45);

    ellipse(b,475,50);
    fill(0,25,25);

    ellipse(b,500,50);
    fill(0,5,15);
  }

  for(var n =0; n < 1500; n=n+20){
    println("the value y:", n);

    fill(200,255,255);
    ellipse(n-15,0,x-3);
    fill(240,255,255);

    ellipse(n-5,10,x-4);
    fill(190,245,245);
    ellipse(n+5,20,x-3);
    fill(230,255,254);

    ellipse(n+15,30,x-2);
    fill(180,235,235);
    ellipse(n+25,40,x-1);
    fill(220,255,253);

    ellipse(n+30,50,x);
    fill(170,225,225);
    ellipse(n+40,60,x);
    fill(210,255,252);

    ellipse(n+55,70,x);
    fill(160,215,215);
    ellipse(n+65,80,x);
    fill(200,255,251);

    ellipse(n+73,90,x);
    fill(150,205,205);
    ellipse(n+79,100,x);
    fill(190,255,250);

    ellipse(n+83,110,x);
    fill(140,195,195);
    ellipse(n+84,120,x);
    fill(180,255,245);

    ellipse(n+85,130,x);
    fill(130,185,185);
    ellipse(n+90,140,x);
    fill(170,255,230);

    ellipse(n+98,150,x);
    fill(120,175,175);
    ellipse(n+105,160,x);
    fill(160,255,225);

    ellipse(n+120,170,x);
    fill(110,165,165);
    ellipse(n+130,180,x);
    fill(150,255,220);

    ellipse(n+140,190,x);
    fill(100,155,155);
    ellipse(n+150,200,x);
    fill(140,255,215);

    ellipse(n+160,210,x);
    fill(90,145,145);
    ellipse(n+170,220,x);
    fill(130,255,210);

    ellipse(n+185,230,x);
    fill(80,135,135);
    ellipse(n+195,240,x);
    fill(120,255,200);

    ellipse(n+205,250,x);
    fill(70,125,125);
    ellipse(n+215,260,x);
    fill(110,255,190);

    ellipse(n+225,270,x);
    fill(60,115,115);
    ellipse(n+235,280,x);
    fill(100,255,180);

    ellipse(n+245,290,x);
    fill(50,105,105);
    ellipse(n+255,300,x);
    fill(90,255,170);

    ellipse(n+264,310,x+1);
    fill(40,95,95);
    ellipse(n+272,320,x+2);
    fill(80,255,160);

    ellipse(n+279,330,x+3);
    fill(30,85,85);
    ellipse(n+285,340,x+4);
    fill(70,245,150);

    ellipse(n+290,350,x+5);
    fill(20,75,75);
    ellipse(n+294,360,x+6);
    fill(60,235,140);

    ellipse(n+297,370,x+7);
    fill(10,65,65);
    ellipse(n+299,380,x+8);
    fill(50,220,130);

    ellipse(n+300,390,x+9);
    fill(0,55,55);
    ellipse(n+301,400,x+10);
    fill(40,200,120);

    ellipse(n+300,410,x+11);
    fill(0,45,45);
    ellipse(n+299,420,x+12);
    fill(30,180,110);

    ellipse(n+297,430,x+13);
    fill(0,35,35);
    ellipse(n+294,440,x+14);
    fill(20,160,100);

    ellipse(n+290,450,x+15);
    fill(0,25,25);
    ellipse(n+285,460,x+16);
    fill(10,150,90);

    ellipse(n+279,470,x+17);
    fill(0,15,15);
    ellipse(n+272,480,x+18);
    fill(0,130,80);

    ellipse(n+264,490,x+19);
    fill(0,5,15);
    ellipse(n+255,500,x+20);
    fill(0,110,70);
  }


}
