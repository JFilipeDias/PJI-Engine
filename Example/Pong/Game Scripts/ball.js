class Ball{
    constructor(posX,posY,speedX,speedY,radius,color) {
        this.posX = posX;
		this.posY = posY;
		this.speedX = speedX;
		this.speedY = speedY;
		this.radius = radius;
        this.color = color;
	}
	

	// Call once per entity
	initialize(){

	}


	// Called every loop
    update(){
        this.move();
    }


	// Called every frame
    render() {
		Utils.colorCircle(this.posX,this.posY,this.radius,this.color);
	}


	// Move the ball
    move() {
        this.posX += this.speedX;
        this.posY += this.speedY;

        if(this.posX < 0) {
			this.speedX *= -1;
            //this.resetPos(400,300);
		}
		if(this.posX > 800) {
			this.speedX *= -1;
			//this.resetPos(400,300);
		}
		if(this.posY < 0) {
			this.speedY *= -1;
		}
		if(this.posY > 600) {
			this.speedY *= -1;
		}
	}
	
	
	// Reset ball position
    resetPos(posX, posY) {
		this.posX = posX;
		this.posY = posY;
	}
}