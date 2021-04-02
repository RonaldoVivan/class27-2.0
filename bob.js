class Bob {
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            'restitution': 1.0,
            'friction':0.0,
            'density':1.2
        }
        
        this.body = Bodies.circle(x,y,radius, options);
        this.radius = radius

        World.add(world, this.body);
    }
    display(){
        
        ellipseMode(RADIUS);

        fill("lightblue");

        circle(this.body.position.x, this.body.position.y, this.radius);

    }       
};