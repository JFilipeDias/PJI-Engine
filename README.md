# PJI-Engine
A PJI Engine é um protótipo de game engine para jogos 2D de navegador baseada em Javascript desenvolvida para a cadeira de Programação para Jogos I do curso de Sistemas e Mídias Digitais da Universidade Federal do Ceará.

## Começando
Para utilizar a engine, é necessário importar a pasta Engine para a raiz do seu projeto. Em seguida será necessário que o seu projeto possua um arquivo HTML. No arquivo deve ser criado um canvas com um id "gameCanvas" e referenciado todos os scripts da engine, como no exemplo abaixo.

```html
<body>
        <canvas id="gameCanvas" width="800" height="600"></canvas>

        <script src="Engine/Main.js"></script>
        <script src="Engine/World.js"></script>
        <script src="Engine/Entity.js"></script>
        <script src="Engine/Hierarchy.js"></script>
        <script src="Engine/Utils.js"></script>
        <script src="Engine/Input.js"></script>
        <script src="Engine/Collision.js"></script>
</body>
```
Logo abaixo é possível referenciar os scripts do jogo.

Neste repositório há um exemplo de um jogo desenvolvido com a engine na pasta Exemple. O jogo é uma versão de Pong com o uso do mouse para movimentação da barra esquerda.

## Entidades
A classe Entity é a classe base para as entidades do jogo. Quando uma entidade do jogo herda de Entity é possível utilizar os métodos initialize(), update(), onCollisionEnter() e render(). Não é necessário declarar todos no script da sua entidade.

Para a entidade do seu jogo utilizar os metodos basta usar a herança do Javascript como no exemplo abaixo.

```javascript
class MinhaClasse extends Entity {

}
```

Uma entidade possue propriedades name, positionX, positionY, width e height. Para defini-las basta usar o super da seguinte maneira.

```javascript
class MinhaClasse extends Entity {
    constructor(name, positionX, positionY, width, height, speed, color) {
        // Construtor da classe Entity
        super(name, positionX, positionY, width, height);

        this.speed = speed;
        this.color = color;
    }
}
```

## Hierarquia
Para que suas entidades sejam colocadas na cena do jogo, ou seja, renderizadas no canvas, é necessário fazer algumas alterações na classe Hierarchy. Ela está dentro da pasta Engine. Você deve instanciar as entidades dentro do metodo estático createHierarchy() e popular o vetor estático entityList com as entidades instanciadas, como feito a seguir.

```javascript
class Hierarchy {
    static entityList;

    static createHierarchy() {
        var ball = new Ball('Ball', 400, 300, 4, 5, 10, 'white');
        var playerPaddle = new Paddle('Player Paddle', 50, 300, 10, 80, 10, 'white', true);
        var computerPaddle = new Paddle('Computer Paddle', World.canvas.width - 50, 300, 10, 80, 4.5, 'white', false);
        var playerScore = new Score('Player Score', 200, 75, 32, 'white');
        var computerScore = new Score('Computer Score', 600, 75, 32, 'white');
        var gameManager = new GameManager();

        // Game entities list
        Hierarchy.entityList = [ball, playerPaddle, computerPaddle, playerScore, computerScore, gameManager];
    }
}
```

## Medodos da classe Entity

### initialize()
O método initialize é chamado apenas uma vez por entidade no momento em que a pagina web é carregada. Pode ser utilizada para definir algumas coisas no inicio do jogo.

```javascript
// Called once when the game start
initialize() {
    this.isStartScreen = true;
    this.isGameOverScreen = false;
    
    this.playerWon = false;
}
```

### update()
O método update é utilizado para atualizações de física como movimentar as entidades já que ele é chamado constantimente em um tempo fixo de 16 milissegundos.

```javascript
// Called on loop to physics
update() {
    // Move the ball
    this.positionX += this.speedX;
    this.positionY += this.speedY;
}
```

### onCollisionEnter()
O método onCollisionEnter é utilizado para identificar que uma entidade iniciou uma colisão com outra. Recebe por parâmetro o objeto other que é a outra entidade que faz parte da colisão.

```javascript
// Called when detect a colision
onCollisionEnter(other) {
    if(other.name == 'Player Paddle' || other.name == 'Computer Paddle')
        this.speedX *= -1;
}
```



### render()
O método render é chamado a cada frame do jogo. É utilizado para renderizar formas básicas, textos e imagens no canvas.

```javascript
// Called on loop to render 
render() {
    Utils.colorCircle(this.positionX, this.positionY, this.radius, this.color);
}
```

## Input
A engine trata inputs do teclado e da posição do mouse. 

A classe Input possui as propriedades mouseX e mouseY para as cordenadas X e Y do mouse.

```javascript
if(this.isPlayable) {
    // Mouse input
    this.positionY = Input.mouseY;    
}
```

Para checar input do teclado basta utilizar o método getKeyDown() da seguinte forma.

```javascript
// Start gameplay
if(Input.getKeyDown('Space')) {
    this.resetGameplay();
}
```

Os nome seguem o padrão da propriedade [KeyboardEvent.code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code) do Javascript.

## Utilidades