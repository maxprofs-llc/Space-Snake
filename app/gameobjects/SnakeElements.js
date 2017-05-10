/* A SnakeElement in the game */

var snakeElement = function(elemWidth, elemHeight, canvasWidth, canvasHeight, context) {
    this.elemWidth = elemWidth;
    this.elemHeight = elemHeight;
    
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.context = context;
    
    this.color = "yellow";
    this.speed = 10;
    
    this.xPos = 50;
    this.yPos = 50;
}

snakeElement.prototype.draw = function() {
    this.context.fillStyle = this.color;
    this.context.strokeStyle = this.color;
    this.context.fillRect(this.xPos, this.yPos, this.elemWidth, this.elemHeight);
}

snakeElement.prototype.moveUp = function() {
    this.yPos -= this.speed;
}

snakeElement.prototype.moveDown = function() {
    this.yPos += this.speed;
}

snakeElement.prototype.moveLeft = function() {
    this.xPos -= this.speed;
}

snakeElement.prototype.moveRight = function() {
    this.xPos += this.speed;
}