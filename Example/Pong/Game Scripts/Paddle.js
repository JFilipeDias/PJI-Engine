class Paddle extends Entity {
    constructor(name, positionX, positionY, width, height, speedY, color, isPlayable) {
        super(name, positionX, positionY, width, height);

        this.speedY = speedY;
        this.color = color;
        this.isPlayable = isPlayable;
    }


    // Called on loop to physics
    update() {
        if(this.isPlayable) {
            /*if(Input.getKeyDown('ArrowUp') && this.positionY - this.height/2 > 0)
                this.positionY -= this.speedY;
                
            if(Input.getKeyDown('ArrowDown') && this.positionY + this.height/2 < World.canvas.height)
                this.positionY += this.speedY;
            */
            this.positionY = Input.mouseY;    
            
        } else {
            
        }
    }
            
    
    // Called on loop to render 
	render() {
		Utils.colorRect(this.positionX - this.width/2, this.positionY - this.height/2, this.width, this.height, this.color);
	}
}