class roof{
constructor(x,y,w,h){
var options={
isStatic:true

}
this.body=Bodies.rectangle(x,y,w,h,options)
World.add(world,this.body)
this.x=x
this.y=y
this.w=w
this.h=h


}
display(){
push()
translate(this.body.position.x,this.body.position.y)
rectMode(CENTER)
fill("purple")
rect(0,0,this.w,this.h)
pop()




}


}