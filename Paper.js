class Paper{

constructor(x,y){
    friction:0.5
    density:1.2
    restitution:0.3
    isStatic:false

}

image=loadImage("paper.png")


display()
{
    image(this.image.x,this.image.y,this.image.width,this.image.height)
}


}