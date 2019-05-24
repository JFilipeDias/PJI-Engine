class Utils{
    
    // Render a colorful rectangle
    static colorRect(topLeftX,topLeftY, boxWidth,boxHeight, fillColor) {
		World.canvasContext.fillStyle = fillColor;
		World.canvasContext.fillRect(topLeftX,topLeftY, boxWidth,boxHeight);
    }
    

    // Render a colorful circle
    static colorCircle(centerX,centerY, radius, fillColor) {
		World.canvasContext.fillStyle = fillColor;
		World.canvasContext.beginPath();
		World.canvasContext.arc(centerX,centerY,radius, 0,Math.PI*2, true);
		World.canvasContext.fill();
	}


    // Render a colorful text
	static colorText(showWords, textX,textY, fillColor) {
		World.canvasContext.fillStyle = fillColor;
		World.canvasContext.fillText(showWords, textX, textY);
	}


    // Render a image on canvas
    static renderImage(imageSource, posX, posY){
        var image = document.createElement("img");
        image.setAttribute('src', imageSource);
        World.canvasContext.drawImage(image, posX, posY);
    }


    // Clear game screen
    static clearScreen() {
        this.colorRect(0, 0, World.canvas.width, World.canvas.height, 'black');
    }
}