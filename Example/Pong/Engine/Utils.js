class Utils {
    
    // Render a colorful rectangle
    static colorRect(positionX, positionY, width, height, fillColor) {
		World.canvasContext.fillStyle = fillColor;
		World.canvasContext.fillRect(positionX - width/2, positionY - height/2, width, height);
    }
    

    // Render a colorful circle
    static colorCircle(positionX, positionY, radius, fillColor) {
		World.canvasContext.fillStyle = fillColor;
		World.canvasContext.beginPath();
		World.canvasContext.arc(positionX, positionY, radius, 0, Math.PI*2, true);
		World.canvasContext.fill();
	}


    // Render a colorful text
	static colorText(text, positionX, positionY, size, fillColor) {
        World.canvasContext.fillStyle = fillColor;
        World.canvasContext.font =  size + 'px serif';
		World.canvasContext.fillText(text, positionX, positionY);
	}


    // Render a image on canvas
    static renderImage(imageSource, positionX, positionY) {
        var image = document.createElement("img");
        image.setAttribute('src', imageSource);
        World.canvasContext.drawImage(image, positionX, positionY);
    }


    // Clear game screen
    static clearScreen() {
        this.colorRect(0, 0, World.canvas.width*2, World.canvas.height*2, 'black');
    }
}
