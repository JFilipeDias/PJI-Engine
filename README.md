# PJI-Engine
A PJI Engine é um protótipo de game engine para jogos 2D de navegador baseada em Javascript desenvolvida para a cadeira de Programação para Jogos I do curso de Sistemas e Mídias Digitais da Universidade Federal do Ceará.

##Começando
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
        
        <script src="Game Scripts/Ball.js"></script>
        <script src="Game Scripts/Paddle.js"></script>
        <script src="Game Scripts/Score.js"></script>
        <script src="Game Scripts/GameManager.js"></script>
</body>
```
