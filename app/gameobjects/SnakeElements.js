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

    /* key codes */
    var UP = 38; //Arrow up
    var RIGHT = 39; //Arrow right
    var LEFT = 37; //Arrow left
    var DOWN = 40; //Arrow down

}
/*
snakeElement.prototype.setDirection = function (direction) {
    this.direction = direction;
    console.log(this.direction);
}

snakeElement.prototype.getDirection = function () {
    if (this.direction == this.UP)
        return this.UP;
    if (this.direction == this.DOWN)
        return this.DOWN;
    if (this.direction == this.LEFT)
        return this.LEFT;
    if (this.direction == this.RIGHT)
        return this.RIGHT;
}
*/
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
