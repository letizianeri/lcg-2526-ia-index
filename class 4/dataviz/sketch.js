let xMax = 400;
let yMax = 600;

let table;
let star_img;

let stars_valid = []; //array che contiene tutte le righe valide

function isStarSizeValid(value) { //se il dato in ingresso è corretto o meno
  return value > 0; //un booleano --> il nome della funzione che inizia con "is" ci indica il tipo di return
}

function preload() { //funzione che serve a caricare le risorse e gli asset
  table = loadTable("stars.csv", "csv", "header");
  star_img = loadImage("star.png");
}

function setup() {
  createCanvas(xMax, yMax);
  frameRate(10);

  //applichiamo la funzione di filtro con un ciclo
  for(let i=0; i < table.getRowCount(); i++){
    let star_value = table.getNum(i,"starSize");
    if(isStarSizeValid(star_value)){
      stars_valid.push(star_value);
    }
  }
}

function drawSingleStarFromFile(index, posX, posY) {
  let starSize = table.getNum(index, "starSize");
  image(star_img, posX, posY, starSize, starSize);

}

function drawStarsFromFile() {
  for(let k = 0; k < table.getRowCount(); k++) {
    let starX = (k*37) % width + (k%3) * 5;
    let starY = (k*73) % height + (k%7);

    drawSingleStarFromFile(k, starX, starY);
  }

}


function drawSingleStar(i, starX, starY, random_transparecy, random_size) {
  if(i % 2 == 0){
      // stella tipo a
      fill(255,255,150,random_transparecy);
      ellipse(starX,starY,random_size);
    } else if(i % 3 == 0) {
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
    let random_size = random (5,9);

    drawSingleStar(i, starX, starY, random_transparecy, random_size)
  }

}


function draw() {
  background("lightblue");
  fill(0);
  textSize(20);
  text("mouseX: " + mouseX +  ",    mouseY: " + mouseY,20,20);

  push()

  noStroke();
  drawStarsFromFile();

  pop();

}

