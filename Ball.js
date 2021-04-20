class Ball{
    constructor(x, y, width, height){
        var options=
        {
            restitution:0.8,
            friction:1,
            density:0.04
        }
        this.body=Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        this.width=width;
        this.height=height;
    }

    display()
    {
        var pos = this.body.position;
        var angle= this.body.angle;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode("center");
        fill("navy");
        ellipse(0, 0, this.width, this.height);
        pop()
        
    }
}