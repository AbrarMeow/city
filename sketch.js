let building = [["grey", "lightGrey", "grey", "grey", "dark grey"],
            ["grey","grey","grey","grey","grey"]]

x = 100;
y = 100;

function setup() {
  createCanvas(400, 400);
}

function roadMarkings(x, y){
  translate(x, y);
  stroke(255, 255, 255);
  fill(255, 255, 255);
  rect(0, 50, 50, 15);
  translate(-x, -y);

function Windows(x,y){

}
}

function draw() {
  background(220);
//sky
  fill(137,207, 240);
  rect(100, 0, 100, 100);

  //road
  fill(43, 43, 43);
  rect(0, 250, 500, 400);

  roadMarkings(-24, 265);
  roadMarkings(65, 265);
  roadMarkings(175, 265);
  roadMarkings(285, 265);
  roadMarkings(395, 265);

  //pavement
  fill(158, 158, 158);
  rect(0, 150, 400, 100);

  stroke(110, 110, 100);
  fill(110, 110, 110);
  rect(0, 235, 400, 15);
  
  
 

  
  //building
  for(let i=0; i<building.length;i++){
    for(let j=0; j<building[i].length;j++){
      stroke(building[i][j])
      fill(building[i][j])
      square((x*j),(y*i), 100);

  
    }
  }
}

