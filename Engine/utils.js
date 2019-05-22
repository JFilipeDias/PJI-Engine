class Utils{
    
    // Draw colorful rectangles
    static colorRect(topLeftX,topLeftY, boxWidth,boxHeight, fillColor) {
		World.canvasContext.fillStyle = fillColor;
		World.canvasContext.fillRect(topLeftX,topLeftY, boxWidth,boxHeight);
    }
    

    // Clear game screen
    static clearScreen() {
        this.colorRect(0, 0, World.canvas.width, World.canvas.height, 'black');
    }
}