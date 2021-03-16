class Stone
 {
    constructor(x,y)
     {
      var options={
       isStatic:false,
       restitution:0,
       friction:1,
       density:1.2
      }
      this.image=loadImage("images/stone.png")



     }
       display()
   {
    var stonePos=this.body.position;		
    push()
    translate(stonePos.x, stonePos.y);
    rectMode(CENTER)
    fill(128,128,128)
    rect(0,0,this.w, this.h);
    pop()






   }


}


