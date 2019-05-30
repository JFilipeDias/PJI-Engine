class Hierarchy{
    static entityList;

    static createHierarchy(){
        var ball = new Ball('Ball', 400, 300, 4, 5, 10, 'white');
        var playerPaddle = new Paddle('Player Paddle', 50, 300, 10, 80, 10, 'white', true);
        var computerPaddle = new Paddle('Computer Paddle', World.canvas.width - 50, 300, 10, 80, 4.5, 'white', false);
        var playerScore = new Score('Player Score', 200, 75, 32, 'white');
        var computerScore = new Score('Computer Score', 600, 75, 32, 'white')

        // Game entities list
        Hierarchy.entityList = [ball, playerPaddle, computerPaddle, playerScore, computerScore];
    }
}