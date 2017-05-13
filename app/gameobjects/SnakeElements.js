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

snakeElement.prototype.draw = function () {
    this.context.fillStyle = this.color;
    this.context.strokeStyle = this.color;
    this.context.fillRect(this.xPos, this.yPos, this.elemWidth, this.elemHeight);
}
