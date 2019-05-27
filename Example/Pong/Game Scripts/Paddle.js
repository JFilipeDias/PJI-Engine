class Paddle extends Entity {
    constructor(positionX, positionY, width, height, speedY, color, isPlayable) {
        super(positionX, positionY, width, height);

        this.speedY = speedY;
        this.color = color;
        this.isPlayable = isPlayable;
    }


    // Called on loop to physics
    update() {
        if(this.isPlayable) {
            if(Input.getKeyDown('ArrowUp'))
                this.positionY -= this.speedY;
                //console.log("Sobe")
                
            if(Input.getKeyDown('ArrowDown'))
                this.positionY += this.speedY;
                //console.log("Desce")
                
        } else {
            //this.positionY
        }
    }
            
    
    // Called on loop to render 
	render() {
		Utils.colorRect(this.positionX - this.width/2, this.positionY - this.height/2, this.width, this.height, this.color);
	}
}