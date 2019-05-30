class Score extends Entity {
    constructor(name, positionX, positionY, size, color) {
        super(name, positionX, positionY, size, size);

        this.size = size;
        this.color = color;
        this.value = 0;
    }


  	// Called on loop to render 
    render() {
        Utils.colorText(this.value, this.positionX, this.positionY, this.size, this.color);
    }


    increaseScoreValue() {
        this.value++;
    }


    resetScore() {
        this.value = 0;
    }
}