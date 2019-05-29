class Hierarchy{
    static entityList;

    static createHierarchy(){
        var ball = new Ball('Ball', 400, 300, 4, 5, 10, 'white');
        var playerPaddle = new Paddle('Player Paddle', 50, 300, 10, 80, 10, 'white', true);
        var computerPaddle = new Paddle('Computer Paddle', World.canvas.width - 50, 300, 10, 80, 4.8, 'white', false);

        // Game entities list
        Hierarchy.entityList = [ball, playerPaddle, computerPaddle];
    }
}