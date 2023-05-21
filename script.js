var canvas = document.getElementById('#game');
var contest = canvas.getContext('2d');
var grid = 16;
var count = 0;
var snake = {
    X: 160,
    Y: 160,
    dX: grid,
    dY: 0,
    cells: [],
    maxCells: 4
}

var apple = {
    x = 320,
    y = 320
}

function getRandomInt(min, max) {
    return math.floor(Math.random() * (max - min) + min)
}

function loop() {
    requestAnimationFrame(loop);
    if (++count < 4) {
        return;
    };
    count = 0;
    content.clearRect
    snake.X += snake.dX;
    snake.Y += snake.dY;
    if (snake.X < 0) {
        snake.X = canvas.width - grid
    }else if(snake.x >= 0){
        snake.Y = 0
    }
    if (snake.Y < 0) {
        snake.Y = canvas.height - grid
    }else if(snake.Y >= 0){
        snake.Y = 0

};

snake.cells.unshift(){
    X: snake.X,
    Y: snake.Y
};
    if(snake.cells.length > snake.maxCells){
        snake.cells.pop;
    };
    context.fill.style = "red";
    context.fill.rect = (apple.X, apple.Y, grid.Y-1, grid.X-1);
};
