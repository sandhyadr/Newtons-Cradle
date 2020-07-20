class SlingShot{
    constructor(bodyA,bodyB,offsetx,offsety){
        this.offsetX =offsetx
        this.offsetY =offsety
        var options = {
            bodyA: bodyA,
            bodyB:bodyB,
            pointB :{x:this.offsetX,y:this.offsetY}
        }
        
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
 

    display(){
////console.log(this.sling.bodyB.position)
       
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;
        strokeWeight(4);
        var anchorx= pointB.x+this.offsetX;
        var anchory= pointB.y+this.offsetY;
        line(pointA.x, pointA.y, anchorx, anchory);
    
    
} 
}