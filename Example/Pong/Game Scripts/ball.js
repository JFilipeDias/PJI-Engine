class Ball extends Entity{
    constructor(name, positionX, positionY, speedX,speedY, radius, color) {
		super(name, positionX, positionY, radius*2, radius*2);

		this.speedX = speedX
		this.speedY = speedY;
		this.radius = radius;
		this.color = color;
	}


    // Called on loop to physics
    update(){
        this.move();
    }


    // Called on loop to render 
    render() {
		Utils.colorCircle(this.positionX, this.positionY, this.radius, this.color);
	}


    // Called when detect a colision
	onCollisionEnter(other){
		this.speedX *= -1;
	}


	// Move the ball
    move() {
        this.positionX += this.speedX;
        this.positionY += this.speedY;

        if(this.positionX < 0) {
			this.speedX *= -1;
            //this.resetPos(400,300);
		}
		if(this.positionX > 800) {
			this.speedX *= -1;
			//this.resetPos(400,300);
		}
		if(this.positionY < 0) {
			this.speedY *= -1;
		}
		if(this.positionY > 600) {
			this.speedY *= -1;
		}
	}
	
	
	// Reset ball position
    resetPos(positionX, positionY) {
		this.positionX = positionX;
        this.positionY = positionY;
	}
}