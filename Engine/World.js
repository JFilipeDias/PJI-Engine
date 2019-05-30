class World {

    constructor() {
        // Game loop variables
        this.deltaTime = 0;
        this.lastFrameTime = 0;
        this.frameRate = 1000/60;
    }


    // Called once when the game start
    initialize() {
        World.canvas = document.getElementById('gameCanvas');
        World.canvasContext = World.canvas.getContext('2d');
        
        // Event listeners to inputs
        document.addEventListener('keydown', Input.onKeyDown);
        document.addEventListener('keyup', Input.onKeyUp);
        document.addEventListener('mousemove', Input.getMousePos);
        
        // Game entities list
        Hierarchy.createHierarchy();

        // Start the game loop
        requestAnimationFrame(this.gameLoop.bind(this));

        // Call initialize of every entities
        for(var i = 0; i < Hierarchy.entityList.length; i++)
            Hierarchy.entityList[i].initialize();
    }
    

    // Main game loop to control updates 
    gameLoop(timeStamp) {
        if (timeStamp < this.lastFrameTime + this.frameRate) {
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
        for(var i = 0; i < Hierarchy.entityList.length; i++)
            Hierarchy.entityList[i].render();
    }


    // Called on loop to physics
    update() {     
        // Call update of every entities and check collisions
        for(var count0 = 0; count0 < Hierarchy.entityList.length; count0++) {
            Hierarchy.entityList[count0].update();
            
            // Pears checking
            if(Hierarchy.entityList.length > 1) {
                for(var count1 = count0 + 1; count1 < Hierarchy.entityList.length; count1++)
                    Collision.checkColision(Hierarchy.entityList[count0], Hierarchy.entityList[count1]);
                    
            }
        }
    }
}
