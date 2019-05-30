class Input {

    static keyPressed;

    static mouseX;
    static mouseY;

    //Keyboard input
    static getKeyDown(keyCode) {
        return Input.keyPressed == keyCode;
    }

    
    static onKeyDown(event) {
        Input.keyPressed = event.code;
    }

    
    static onKeyUp(){
        Input.keyPressed = '';
    }


    // Mouse input
    static getMousePos(event) {
		var rect = World.canvas.getBoundingClientRect();
		var root = document.documentElement;

		Input.mouseX = event.clientX - rect.left - root.scrollLeft;
		Input.mouseY = event.clientY - rect.top - root.scrollTop;
	}
}