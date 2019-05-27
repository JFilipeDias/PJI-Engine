let _pressed;

class Input {
    /*static get pressed() {
        return _pressed;
    }

    static set pressed(pressed){
        _pressed = pressed;
    }*/


    static getKeyDown(keyCode) {
        return _pressed = keyCode;
    }

    
    static onKeyDown(event) {
        _pressed = event.code;
        
        console.log("Apertou " + _pressed);
    }
}