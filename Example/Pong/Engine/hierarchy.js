class Hierarchy{
    constructor() {
        // Entities
        this.ball = new Ball('ball', 400, 300, 2, 2, 10, 'white');
        
        // Game entities list
        this.entityList = [this.ball];
    }
}