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
    constructor(name, positionX, positionY, width, height, speedY, color, isPlayable) {
        // Construtor da classe Entity
        super(name, positionX, positionY, width, height);

		this.speedY = speedY;
		this.radius = radius;
		this.color = color;
	}
}
```

## Hierarquia
Para que suas entidades sejam colocadas na cena do jogo, ou seja, renderizadas no canvas é necessário o uso da classe Hierarchy. Ela está dentro da pasta Engine. Será necessário instanciar as entidades dentro do metodo createHierarchy() e popular o vetor estático entityList com as entidades instanciadas como feito a seguir.

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

## Medodos de Entity

### update()
O método update é utilizado para atualizações de física como movimentar as entidades. Ele é chamado a cada 16ms

 

