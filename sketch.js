const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var box1=[]
var box2=[]
var box3=[]
var poly2


function preload() {

poly2= loadImage("polygon.png")



}
function setup() {
   var canvas = createCanvas(700,1400)
   engine = Engine.create();
    world = engine.world;
 
ground1= new Ground(400,600,400,20)
ground2= new Ground(500,400,350,20)
polygon= Bodies.circle(50,200,20,20)
World.add(world,polygon)
rope= new Slingshot(polygon.body,{x:200,y:300})


for( var i=100;i<600;i=i+50){
    box1.push(new Box(i,590,50,50))

}

}
//for(var v=100;v<600;v=v+50){
 //   box2.push(new Box(v,560,50,50))
//}






function draw() {

background("black")
image(poly2,polygon.position.x,polygon.position.y,40,40)
ground1.display()
ground2.display()
 for(var i=0;i<box1.length;i++){
box1[i].display()
 }
 //for(var v=0;v<box2.length;v++){
   //  box2[v].display()
 //}


}
function mouseDragged(){

    Matter.Body.setPosition(poly2.body, {x:mouseX,y: mouseY})



}

function mouseReleased(){

    slingshot.fly();


}
