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
        for(var i = 0; i < this.gameHierarchy.entityList.length; i++){
            this.gameHierarchy.entityList[i].update();
            
            if(i < this.gameHierarchy.entityList.length)
                this.checkColision(this.gameHierarchy.entityList[i], this.gameHierarchy.entityList[i + 1]);
            else
                this.checkColision(this.gameHierarchy.entityList[i], this.gameHierarchy.entityList[0]);
        }
    }


    // AABB Collision
    checkColision(entity1, entity2){
        if(entity1.positionX < entity2.positionX + entity2.width &&
            entity1.positionX + entity1.width > entity2.positionX &&
            entity1.positionY < player2.positionY + entity2.height &&
            entity1.positionY + entity1.height > entity2.positionY){

            entity1.onCollisionEnter(entity2);
            entity2.onCollisionEnter(entity1);
        }
    }
}