class Paddle extends Entity {
    constructor(name, positionX, positionY, width, height, speedY, color, isPlayable) {
        super(name, positionX, positionY, width, height);

        this.speedY = speedY;
        this.color = color;
        this.isPlayable = isPlayable;
    }


    // Called once per entity
    initialize(){
        // Get the ball in entity list on hierarchy
        this.ballEntity = Hierarchy.entityList[0];
    }


    // Called on loop to physics
    update() {
        if(this.isPlayable) {
            // Keyboard input

            /*if(Input.getKeyDown('ArrowUp') && this.positionY - this.height/2 > 0)
                this.positionY -= this.speedY;
                
            if(Input.getKeyDown('ArrowDown') && this.positionY + this.height/2 < World.canvas.height)
                this.positionY += this.speedY;
            */

            // Mouse input
            this.positionY = Input.mouseY;    
            
        } else {
            if(this.positionY < this.ballEntity.positionY && this.ballEntity.speedX > 0)
                this.positionY += this.speedY;
            else if(this.positionY > this.ballEntity.positionY && this.ballEntity.speedX > 0)
                this.positionY -= this.speedY;
        }
    }
            
    
    // Called on loop to render 
	render() {
        Utils.renderImage("Images/Paddle.png", this.positionX, this.positionY, this.width, this.height);
	}
}