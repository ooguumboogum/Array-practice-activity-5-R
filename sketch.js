let shapes = ['sqaure','rect','ellipse']
let shapeType='square'
let deletAShape=shapes.splice()

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0;i<25;i++) {
      shape1={
   x=random(width),
   y= random(height),
    color:random(['red','blue','black'])
  }
  shapes.push(shape1);
}
}

function draw() {
  background(200);
 for (let shape of shapes) {
     fill(shape.color)
     if(shape.shapeType==='square'){
         rect(shape.x,shape.y,100,100);
     }
     if(shape.shapeType==='circle'){
         circle(shape.x,shape.y,100)

     }
     if(shape.shapeType==='ellipse'){
         ellipse(shape.x,shape.y,15,150)
     }
     if(mouseIsPressed){
         mousePressed();
     }
 }
}

function mousePressed() {
 shapes.pop();
}

