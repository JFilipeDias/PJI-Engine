class Paddle extends Entity{
    constructor (positionX, positionY, width, height, speedY, color, isPlayable) {
        super(positionX, positionY, width, height)

        this.speedY = speedY;
        this.color = color;
        this.isPlayable = isPlayable;
    }
    
    
    // Called once per entity
    initialize(){
        if(this.isPlayable){
            window.addEventListener('keyup', function(event) { Input.onKeyUp(event); }, false);
            window.addEventListener('keydown', function(event) { Input.onKeyDown(event); }, false);
        }
    }

    // Called on loop to physics
    update () {
        if(this.isPlayable) {
            if(Input.getKeyDown(Input.keyUp))
                this.positionY += this.speedY;
                
            if(Input.getKeyDown(Input.keyDown))
                this.positionY -= this.speedY;
        } else {
            //this.positionY
        }
    }
            
    
    // Called on loop to render 
	render () {
		Utils.colorRect(this.positionX - this.width/2, this.positionY - this.height/2, this.width, this.height, this.color);
	}
}