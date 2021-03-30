class bob{
    constructor(x,y,r){
    var options={
    isStatic:false,
    restitution:1,
    firction:0,
    density:0.8
    
    }
    this.body=Bodies.rectangle(this.x,this.y,(this.r)/2,options)
    World.add(world,this.body)
    this.x=x
    this.y=y
    this.r=r
    
    
    
    }
    display(){
    push()
    translate(this.body.position.x,this.body.position.y)
    rectMode(CENTER)
    fill("blue")
    ellipse(0,0,this.r,this.r)
    pop()
    
    
    
    
    }
    
    
    }