class Paddle extends Entity{
    constructor (positionX, positionY, width, height, color, isPlayable) {
        super(positionX, positionY, width, height)

        this.color = color;
        this.isPlayable = isPlayable;
	}
    

    // Called on loop to physics
    update () {
        if(isPlayable) {
            this.positionY = MouseInput.x - (this.width/2);
        } else {
            this.positionY
        }
    }
            
    
    // Called on loop to render 
	render () {
		Utils.colorRect(this.positionX - this.width/2, this.positionY - this.height/2, this.width, this.height, this.color);
	}
}