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

É possivel ver uma exemplo de jogo desenvolvido com a engine na pasta Exemple.

## Entidades
A classe Entity é a classe base para as entidades do jogo. Quando uma entidade do jogo herda de Entity é possível utilizar os métodos initialize(), update(), onCollisionEnter() e render().

Para a entidade do seu jogo utilizar os metodos basta usar a herança do Javascript como no exemplo abaixo.

```javascript
class MinhaClasse extends Entity {

}
```

