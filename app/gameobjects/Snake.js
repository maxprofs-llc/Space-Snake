var snakeHandler = function (elemWidth, elemHeight, canvasWidth, canvasHeight, context) {
    this.snakeArray = [];
    this.elemWidth = elemWidth;
    this.elemHeight = elemHeight;

    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.context = context;

    this.UP = 38; //Arrow up
    this.RIGHT = 39; //Arrow right
    this.LEFT = 37; //Arrow left
    this.DOWN = 40; //Arrow down

    this.direction = this.RIGHT;
}

snakeHandler.prototype.draw = function () {
    for (var i = 0; i < this.snakeArray.length; i++) {
        this.snakeArray[i].draw();
    }
}

snakeHandler.prototype.setupSnake = function () {
    var headElement = new snakeElement(10, 10, this.canvasWidth, this.canvasHeight, 10, 10, this.context);
    var middleElement = new snakeElement(10, 10, this.canvasWidth, this.canvasHeight, 20, 10, this.context);
    var tailElement = new snakeElement(10, 10, this.canvasWidth, this.canvasHeight, 30, 10, this.context);

    this.snakeArray[0] = headElement;
    this.snakeArray[1] = middleElement;
    this.snakeArray[2] = tailElement;
}

snakeHandler.prototype.updateSnake = function () {
    var oldHead = this.snakeArray[this.snakeArray.length - 1];
    
    switch (this.direction) {
        case this.UP:
            var newHead = new snakeElement(this.elemWidth, this.elemHeight, this.canvasWidth, this.canvasHeight, oldHead.xPos, oldHead.yPos - this.elemHeight, this.context)
            this.snakeArray.push(newHead);
            this.snakeArray.shift();
            break;
        case this.DOWN:
            var newHead = new snakeElement(this.elemWidth, this.elemHeight, this.canvasWidth, this.canvasHeight, oldHead.xPos, oldHead.yPos + this.elemHeight, this.context)
            this.snakeArray.push(newHead);
            this.snakeArray.shift();
            break;
        case this.RIGHT:
            var newHead = new snakeElement(this.elemWidth, this.elemHeight, this.canvasWidth, this.canvasHeight, oldHead.xPos + this.elemWidth, oldHead.yPos, this.context)
            this.snakeArray.push(newHead);
            this.snakeArray.shift();
            break;
        case this.LEFT:
            var newHead = new snakeElement(this.elemWidth, this.elemHeight, this.canvasWidth, this.canvasHeight, oldHead.xPos - this.elemWidth, oldHead.yPos, this.context)
            this.snakeArray.push(newHead);
            this.snakeArray.shift();
            break;
    }
}

snakeHandler.prototype.setDirection = function (direction) {
    this.direction = direction;
    console.log(this.direction);
}

snakeHandler.prototype.getDirection = function () {

    console.log(this.direction);
}
/*
var snakeHandler = (function() {
    var snake = [];
    var numberOfElements = 3;
    var GAME_HEIGHT = 300;
    var GAME_WIDTH = 300;
    
    var direction;
    
    function draw() {
        context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        drawSnake();
    }
    
    function drawSnake() {
        for (var i = 0; i < numberOfElements; i++) {
            snake[i].draw();
        }
    }
        
    function setupSnake() {
        var headElement = new snakeElement(10, 10, GAME_WIDTH, GAME_HEIGHT, game.getContext);
        headElement.setxPos(10);
        headElement.setyPos(10);
        var middleElement = new snakeElement(10, 10, GAME_WIDTH, GAME_HEIGHT, game.getContext);
        middleElement.setxPos(20);
        middleElement.setyPos(10);
        var tailElement = new snakeElement(10, 10, GAME_WIDTH, GAME_HEIGHT, game.getContext);
        tailElement.setxPos(30);
        tailElement.setyPos(10);
        
        snake[0] = headElement;
        snake[1] = middleElement;
        snake[2] = tailElement;
    }
    
    return {
        setupSnake: setupSnake
    }
        

})();
*/
