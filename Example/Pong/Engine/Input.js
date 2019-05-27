let _pressed;

class Input {
    static get pressed() {
        return _pressed;
    }


    static set pressed(pressed){
        _pressed = pressed;
    }


    static getKeyDown(keyCode) {
        console.log(this.pressed + keyCode);
        return this.pressed == keyCode;
    }

    
    static onKeyDown(event) {
        this.pressed = event.code;
        
        //console.log("Apertou " + this.pressed);
    }

    
    static onKeyUp(){
        this.pressed = '';
    }
}