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
                    this.checkColision(Hierarchy.entityList[count0], Hierarchy.entityList[count1]);
                    
            }
        }
    }


    checkColision(entity1, entity2) {
        var minimumX1 = entity1.positionX - entity1.width/2;
        var minimumY1 = entity1.positionY - entity1.height/2;
        var maximumX1 = entity1.positionX + entity1.width/2;
        var maximumY1 = entity1.positionY + entity1.height/2;

        var minimumX2 = entity2.positionX - entity2.width/2;
        var minimumY2 = entity2.positionY - entity2.height/2;
        var maximumX2 = entity2.positionX + entity2.width/2;
        var maximumY2 = entity2.positionY + entity2.height/2;


        if(maximumX1 > minimumX2 &&
            minimumX1 < maximumX2 &&
            maximumY1 > minimumY2 &&
            minimumY1 < maximumY2) {
            
            if(!entity1.isColliding) {
                entity1.isColliding = true;
                entity1.onCollisionEnter(entity2);
            }

            if(!entity2.isColliding) {
                entity2.isColliding = true;
                entity2.onCollisionEnter(entity1);
            }
        }
        else {
            entity1.isColliding = false;
            entity2.isColliding = false;
        }
    }
}