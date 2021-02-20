class Rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY


        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{
                x:this.offsetX, y:this.offsetY
            }
            
    }
this.rope = Constraint.create(options);
World.add(world, this.rope);



}
display(){
var pointA = this.rope.bodyA.position
var pointB = this.rope.bodyB.position
var anchorX = pointA.x
var anchorY = pointA.y
var anchor1X = pointB.x + this.offsetX
var anchor1Y = pointB.y + this.offsetY


strokeWeight(3);
line(anchorX, anchorY , anchor1X, anchor1Y )
}
} 




