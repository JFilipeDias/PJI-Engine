class Ball extends Entity {
	constructor(name, positionX, positionY, speedX, speedY, radius, color) {
		super(name,positionX, positionY, radius * 2, radius * 2);

		this.speedX = speedX
		this.speedY = speedY;
		this.radius = radius;
		this.color = color;
	}


	// Called on loop to physics
	update() {
		// Move the ball
		this.positionX += this.speedX;
		this.positionY += this.speedY;

		if (this.positionX < 0) {
			this.resetPosition(World.canvas.width/2, World.canvas.height/2);
		}
		if (this.positionX > 800) {
			this.resetPosition(World.canvas.width/2, World.canvas.height/2);
		}
		if (this.positionY < 0) {
			this.speedY *= -1;
		}
		if (this.positionY > 600) {
			this.speedY *= -1;
		}
	}


	// Called on loop to render 
	render() {
		Utils.colorCircle(this.positionX, this.positionY, this.radius, this.color);
	}


	// Called when detect a colision
	onCollisionEnter(other) {
		this.speedX *= -1;
	}


	// Reset ball position
	resetPosition(positionX, positionY) {
		this.speedX *= -1;
		this.positionX = positionX;
		this.positionY = positionY;
	}
}
