class Hierarchy{
    constructor() {
        // Entities
        this.ball = new Ball(400, 300, 2, 2, 10, 'white');
        this.playerPaddle = new Paddle(50, 300, 10, 30, 10, 'white', true);
        
        // Game entities list
        this.entityList = [this.ball, this.playerPaddle];
    }
}