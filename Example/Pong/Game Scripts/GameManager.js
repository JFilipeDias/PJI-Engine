class GameManager extends Entity {

    // Called once when the game start
    initialize() {
        this.isStartScreen = true;
        this.isGameOverScreen = false;
        
        this.playerWon = false;

        this.ballEntity = Hierarchy.entityList[0];
        this.playerScoreEntity = Hierarchy.entityList[3];
        this.computerScoreEntity = Hierarchy.entityList[4];
    }


    // Called on loop to physics
    update() {
        // Start gameplay
        if(this.isStartScreen && Input.getKeyDown('Space')) {
            this.isStartScreen = false;
            this.resetGameplay();
        }

        // Check game over
        if(!this.isStartScreen && this.playerScoreEntity.value > 2) {
            this.isGameOverScreen = true;
            this.playerWon = true;
        } else if(!this.isStartScreen && this.computerScoreEntity.value > 2) {
            this.isGameOverScreen = true;
            this.playerWon = false;
        }

        // Reset gameplay;
        if(this.isGameOverScreen && Input.getKeyDown('Space')) {
            this.isGameOverScreen = false;
            this.resetGameplay();
        }
    }


    // Called on loop to render 
    render() {
        if(this.isStartScreen) {
            Utils.clearScreen();
            Utils.colorText('Press space to start', World.canvas.width/2, World.canvas.height/2, 32, 'center', 'white');
        }
        
        if(this.isGameOverScreen) {
            Utils.clearScreen();
            if(this.playerWon)
                Utils.colorText('You won! Press start to play again.', World.canvas.width/2, World.canvas.height/2, 32, 'center', 'white');
            else if (!this.playerWon)
                Utils.colorText('You lose! Press start to play again.', World.canvas.width/2, World.canvas.height/2, 32, 'center', 'white');
        }
    }


    resetGameplay() {
        this.ballEntity.resetPosition(World.canvas.width/2, World.canvas.height/2);
        this.playerScoreEntity.resetScore();
        this.computerScoreEntity.resetScore();
    }
}