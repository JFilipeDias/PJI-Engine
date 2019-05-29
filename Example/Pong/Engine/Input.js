class Input {

    static getKeyDown(keyCode) {
        return Input.pressed == keyCode;
    }

    
    static onKeyDown(event) {
        Input.pressed = event.code;
    }

    
    static onKeyUp(){
        Input.pressed = '';
    }
}