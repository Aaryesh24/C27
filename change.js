class Change{
    constructor(bodyA, bodyB){
        var Neww = {
            bodyA:bodyA,
            bodyB:bodyB,
            length:0,
            stiffness:1
        }
        this.chain = Matter.Constraint.create(Neww);
        World.add(world, this.chain);
    }
    display(){
        var pos1 = this.chain.bodyA.position;
        var pos2 = this.chain.bodyB.position;
        strokeWeight(5);
        line(pos1.x, pos1.y, pos2.x, pos2.y);
    }
}