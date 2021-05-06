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
		this.body=Bodies.rectangle(this.x, this.y,50,50,options)
		World.add(world, this.body);

		this.image = loadImage("paper.png");

	}
	display()
	{
		
		var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
			image(this.image,0,0,50,50);
			
			pop();
	}
}