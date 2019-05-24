class World {

    constructor() {
        // Game loop variables
        this.deltaTime = 0;
        this.lastFrameTime = 0;
        this.frameRate = 1000/60;

        // Game entities list
        this.gameHierarchy = new Hierarchy();
    }


    // Called once when the game start
    initialize(){
        World.canvas = document.getElementById('gameCanvas');
        World.canvasContext = World.canvas.getContext('2d');
        
        // Start the game loop
        requestAnimationFrame(this.gameLoop.bind(this));

        // Call initialize of every entities
        for(var i = 0; i < this.gameHierarchy.entityList.length; i++)
            this.gameHierarchy.entityList[i].initialize();
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
        requestAnimationFrame(this.gameLoop.bind(this));
    }


    // Called on loop to render 
    render() {
        Utils.clearScreen(); 
        
        // Call render of every entities
        for(var i = 0; i < this.gameHierarchy.entityList.length; i++)
            this.gameHierarchy.entityList[i].render();
    }


    // Called on loop to physics
    update(){     
        // Call update of every entities   
        for(var i = 0; i < this.gameHierarchy.entityList.length; i++)
            this.gameHierarchy.entityList[i].update();
    }
}