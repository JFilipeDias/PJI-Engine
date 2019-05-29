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
        for(var i = 0; i < Hierarchy.entityList.length; i++) {
            Hierarchy.entityList[i].update();
            
            if(Hierarchy.entityList.length > 1) {
                if(i < Hierarchy.entityList.length - 1)
                    this.checkColision(Hierarchy.entityList[i], Hierarchy.entityList[i + 1]);
                else
                    this.checkColision(Hierarchy.entityList[i], Hierarchy.entityList[0]);
            }
        }
    }


    // AABB Collision
    checkColision(entity1, entity2) {
        if(entity1.positionX < entity2.positionX + entity2.width &&
            entity1.positionX + entity1.width > entity2.positionX &&
            entity1.positionY < entity2.positionY + entity2.height &&
            entity1.positionY + entity1.height > entity2.positionY) {
            
            if(!entity1.isColliding){
                entity1.isColliding = true;
                entity1.onCollisionEnter(entity2);
            }

            if(!entity2.isColliding){
                entity2.isColliding = true;
                entity2.onCollisionEnter(entity1);
            }
        }
        else{
            entity1.isColliding = false;
            entity2.isColliding = false;
        }
    }
}