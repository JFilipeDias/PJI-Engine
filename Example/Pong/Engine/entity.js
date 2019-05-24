class Entity{
    constructor(name, positionX, positionY, width, height){
        this.name = name;
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = width;
        this.height = height;
    }

    // Called once per entity
    initialize(){

    }


    // Called on loop to physics
    update(){

    }


    // Called when detect a colision
    onCollisionEnter(other){

    }


    // Called on loop to render 
    render(){

    }

}