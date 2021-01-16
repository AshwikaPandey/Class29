class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
      this.Sling.bodyA= null  
    }

    display(){
        if(this.Sling.bodyA){
        var pointA = this.Sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointB.x, pointB.y, pointA.x, pointA.y);
    }
    }
    
}