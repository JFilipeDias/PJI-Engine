class Input{
    constructor(){ 
        this._pressed = {};
        this.keyLeft = 37;
        this.keyUp = 38;
        this.keyRight = 39;
        this.keyDown = 40;
    }

    static getKeyDown(keyCode){
        return this._pressed[keyCode];
    }

    
    static onKeyDown(event){
        this._pressed[event.keyCode] = true;
    }


    static onKeyUp(event){
        delete this._pressed[event.keyCode];
    }
}