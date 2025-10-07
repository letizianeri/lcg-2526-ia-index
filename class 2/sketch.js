let xMax = 400;
let yMax = 600;

let xRocket = xMax/2;
let yRocket = yMax*0.6;

function setup() {
  createCanvas(xMax, yMax);
}

function drawSingleStar(i, starX, starY, random_transparecy, random_size) {
  if(i % 2 == 0){ //--> tutti i numeri pari divisi x 2 danno come resto 0
      // stella tipo a
      fill(255,255,150,random_transparecy);
      ellipse(starX,starY,random_size);
      //le stelle b quando i è divisibile x 3
    } else if(i % 3 == 0) { //alla seconda iterazione i == 2
      //stella tipo b
      fill(200,100,255);
      ellipse(starX,starY,1.5);
    } else{
      //stella tipo c
      fill(255,255,100);
      ellipse(starX,starY,2.8);
    }
}

function drawStars(num_stars = 120) {
  for(let i=0; i < num_stars; i++){
    let starX = (i*37) % width + (i%3) * 5;
    let starY = (i*73) % height + (i%7);

    let random_transparecy = random (150,255);
    let random_size = random (6,10);

    drawSingleStar(i, starX, starY, random_transparecy, random_size)
  }

}

function drawRocket(xRocket, yRocket) {
  push();
  fill(220);
  stroke(40);

  rectMode(CENTER); // il rettangolo parte dal centro
  rect(xRocket,yRocket+30,80,180,20);
  //
  //pop();
  
  //triangle
  fill(200,40,40);
  strokeWeight(2);
  triangle(xRocket-40,yRocket-60,xRocket+40,yRocket-60,xRocket,yRocket-120);

  //circle
  fill(40,150,220);
  stroke(255);
  strokeWeight(3);
  ellipse(xRocket,yRocket+30,48,48);

  //triangolini
  fill(200,40,40);
  stroke(40);
  strokeWeight(2)
  triangle(xRocket-40,yRocket+90,xRocket-20,yRocket+90,xRocket-70,yRocket+120);

  triangle(xRocket+40,yRocket+90,xRocket+20,yRocket+90,xRocket+70,yRocket+120);
  pop();
}


function moveRocket(yRocket, step=1){
  yRocket = yRocket - step;
  let soglia = -(yMax * 0.6);
  if (yRocket < soglia) {
    yRocket = yMax;
  }
  return yRocket;
}



function draw() {
  background(20,24,40);
  // mostrare un testo bianco
  // che dice le coordinate al mouse
  //sul foglio da disegno
  fill(255); //bianco
  textSize(20);
  text("mouseX: " + mouseX +  ",    mouseY: " + mouseY,20,20);  //stringa, x, y


drawStars(100);


drawRocket(xRocket, yRocket);

yRocket = moveRocket(yRocket, step=1);

}