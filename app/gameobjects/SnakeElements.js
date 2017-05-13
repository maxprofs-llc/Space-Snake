/* A SnakeElement in the game */

var snakeElement = function (elemWidth, elemHeight, canvasWidth, canvasHeight, xPos, yPos, context) {
    this.elemWidth = elemWidth;
    this.elemHeight = elemHeight;

    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.context = context;

    this.color = "yellow";

    this.xPos = xPos;
    this.yPos = yPos;
}

snakeElement.prototype.getXPos = function () {
    return this.xPos;
}

snakeElement.prototype.getYPos = function () {
    return this.yPos;
}

snakeElement.prototype.setxPos = function (xPos) {
    this.xPos = xPos;
}
snakeElement.prototype.setyPos = function (yPos) {
    this.yPos = yPos;
}

snakeElement.prototype.draw = function () {
    this.context.fillStyle = this.color;
    this.context.strokeStyle = this.color;
    this.context.fillRect(this.xPos, this.yPos, this.elemWidth, this.elemHeight);
}
