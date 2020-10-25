 fx=50;

function preload()
{
  imgS = loadImage("s.png")
   imgT = loadImage("t.png")
}

function setup(){
  createCanvas(800,800);
  s = createSprite(24,45);
  s.addImage(imgS)
  s.scale=0.5
  t = createSprite(100,45,30,50);
  t.addImage(imgT)
  t.scale=0.5;
  grp = new Group ();
  reset = createSprite(700,350,20,30)
  
 
  
  
  
}


function draw(){
  //set background color 
  background("white");
  fill("white")
  rect(6,226,600,200);
  fill("black")
  //s = createSprite(24,45,30,50);
  text(mouseX+","+mouseY,mouseX, mouseY)
  
  //objectS = new rectangle();
  
  //text(mouseX+","+mouseY,mouseX, mouseY)
  //fill("white")
  
  /*
  if( mousePressedOver(s))
    {
      for(i=0;i<1;i++){
      fs = createSprite(fx,300,30,50);
      grp.add(fs)
      fs.addImage(imgS)
      }
      //fx+=50;
    
    }
  */
   
  
 
  //mouseDragged();
 drawSprites();
}


  
function mouseClicked()
    {
      if (mouseIsOver(s)) {
        fs = createSprite(fx,300,30,50);
        grp.add(fs)
        fs.addImage(imgS)
        fs.scale=0.5
        fx+=50; 
      }
      
      else if (mouseIsOver(t)) {
        ft = createSprite(fx,300,30,50);
        grp.add(ft)
        ft.addImage(imgT)
        fx+=50; 
      }
      
      else if (mouseIsOver(reset)) {
        grp.destroyEach();
        fx=50; 
      }
      //grp.destroyEach();
      //fx=50;
    }
 




  //function mouseDragged()
  //  {
     // if( mousePressed(s)){
  //   return true;
 //   s.x = mouseX;
 //   s.y = mouseY  
      
      
      
     // }
      
   // }


  

