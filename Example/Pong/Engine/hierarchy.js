class Hierarchy{
    constructor() {
        // Entities
        this.ball = new Ball(400, 300, 5, 5, 10, 'white');
        this.playerPaddle = new Paddle(50, 300, 10, 80, 10, 'white', true);
        
        // Game entities list
        this.entityList = [this.ball, this.playerPaddle];
    }
}