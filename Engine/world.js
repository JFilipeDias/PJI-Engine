class World {

    constructor() {
        // Game loop variables
        this.deltaTime = 0;
        this.lastFrameTime = 0;
        this.frameRate = 1000/60;

        // Game entities list
        this.entitiesList = [];
    }


    // Called when the game start
    initialize(){
        World.canvas = document.getElementById('gameCanvas');
        World.canvasContext = World.canvas.getContext('2d');
        
        // Start the game loop
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    

    // Main game loop to control updates 
    gameLoop(timeStamp){
        if (timeStamp < this.lastFrameTime + this.frameRate){
            requestAnimationFrame(this.gameLoop.bind(this));
            return;
        }

        this.deltaTime += timeStamp - this.lastFrameTime;
        this.lastFrameTime = timeStamp;

        while(this.deltaTime >= this.frameRate) {
            this.update();
            this.deltaTime -= this.frameRate;
        }
        
        this.render();
    }


    // Rende the game canvas
    render() {
        Utils.clearScreen(); 
        
        for(var i = 0; i < this.entitiesList.length; i++)
            this.entitiesList[i].render();
    }


    // Called every frame 
    update(){        
        for(var i = 0; i < this.entitiesList.length; i++)
            this.entitiesList[i].update();
    }
}