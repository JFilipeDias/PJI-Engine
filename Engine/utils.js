class Utils{
    
    // Draw colorful rectangles
    static colorRect(topLeftX,topLeftY, boxWidth,boxHeight, fillColor) {
		World.canvasContext.fillStyle = fillColor;
		World.canvasContext.fillRect(topLeftX,topLeftY, boxWidth,boxHeight);
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