class World {

    constructor() {
        // Game loop variables
        this.deltaTime = 0;
        this.lastFrameTime = 0;
        this.frameRate = 1000/60;

        // Game entities list
        this.gameEntities = new Entities();
    }


    // Called when the game start
    initialize(){
        World.canvas = document.getElementById('gameCanvas');
        World.canvasContext = World.canvas.getContext('2d');
        
        // Start the game loop
        requestAnimationFrame(this.gameLoop.bind(this));

        // Call initialize of every entities
        for(var i = 0; i < this.gameEntities.list.length; i++)
            this.gameEntities.list[i].initialize();
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
        
        // Call render of every entities
        for(var i = 0; i < this.gameEntities.list.length; i++)
            this.gameEntities.list[i].render();
    }


    // Called every frame 
    update(){     
        // Call update of every entities   
        for(var i = 0; i < this.gameEntities.list.length; i++)
            this.gameEntities.list[i].update();
    }
}