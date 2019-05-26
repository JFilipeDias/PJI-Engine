class Input{

    static isDown(keyCode){
        return this.pressed[keyCode];
    }

    
    static onKeyDown(event){
        this.pressed[event.keyCode] = true;
    }


    static onKeyUp(event){
        delete this.pressed[event.keyCode];
    }
}


// Static property
this.pressed;
this.keyLeft = 37;
this.keyUp = 38;
this.keyRight = 39;
this.keyDown = 40;