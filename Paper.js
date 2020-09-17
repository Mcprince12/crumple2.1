class Paper{
    constructor(x, y, radius){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("imgs/paper.png");
        
        World.add(world, this.body);
    }
    display(){
       
        
        var pos = this.body.position;
        //ImageMode(RADIUS);
        image(this.image, pos.x, pos.y, this.width, this.height);

        //ellipseMode(RADIUS);
    
    }
}