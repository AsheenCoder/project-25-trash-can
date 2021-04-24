class Paper
{
	constructor(x,y)
	{
	var options = {
		friction :0,
		density:1.2,
		restituton:0.3
	}
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(this.x, this.y, options)
		World.add(world, this.body);

		this.image = loadImage("paper.png");

	}
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			pop();
	}
}