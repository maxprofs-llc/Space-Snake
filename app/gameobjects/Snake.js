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
    var tailElement = new snakeElement(this.elemWidth, this.elemHeight, this.canvasWidth, this.canvasHeight, 10, 10, this.context);
    var middleElement = new snakeElement(this.elemWidth, this.elemHeight, this.canvasWidth, this.canvasHeight, 20, 10, this.context);
    var secondMiddleElement = new snakeElement(this.elemWidth, this.elemHeight, this.canvasWidth, this.canvasHeight, 30, 10, this.context);
    var headElement = new snakeElement(this.elemWidth, this.elemHeight, this.canvasWidth, this.canvasHeight, 40, 10, this.context);

    this.snakeArray[0] = tailElement;
    this.snakeArray[1] = middleElement;
    this.snakeArray[2] = secondMiddleElement;
    this.snakeArray[3] = headElement;
}

snakeHandler.prototype.updateSnake = function () {
    var oldHead = this.snakeArray[this.snakeArray.length - 1];
    var oldTail;
    var oldDirection = this.direction;

    switch (this.direction) {
        case this.UP:
            var newHead = new snakeElement(this.elemWidth, this.elemHeight, this.canvasWidth, this.canvasHeight, oldHead.xPos, oldHead.yPos - this.elemHeight, this.context)
            break;
        case this.DOWN:
            var newHead = new snakeElement(this.elemWidth, this.elemHeight, this.canvasWidth, this.canvasHeight, oldHead.xPos, oldHead.yPos + this.elemHeight, this.context)
            break;
        case this.RIGHT:
            var newHead = new snakeElement(this.elemWidth, this.elemHeight, this.canvasWidth, this.canvasHeight, oldHead.xPos + this.elemWidth, oldHead.yPos, this.context)
            break;
        case this.LEFT:
            var newHead = new snakeElement(this.elemWidth, this.elemHeight, this.canvasWidth, this.canvasHeight, oldHead.xPos - this.elemWidth, oldHead.yPos, this.context)
            break;
    }
    this.snakeArray.push(newHead);
    oldTail = this.snakeArray.shift();
    /* -1, -1, +2, +2 in order to remove residue from rectangle in Google Chrome */
    this.context.clearRect(oldTail.xPos - 1, oldTail.yPos - 1, this.elemWidth + 2, this.elemHeight + 2);
}

snakeHandler.prototype.setDirection = function (direction) {
    this.direction = direction;
    console.log(this.direction);
}

snakeHandler.prototype.getDirection = function () {
    if (this.direction == this.LEFT) {
        return this.LEFT;
    }
    if (this.direction == this.RIGHT) {
        return this.RIGHT;
    }
    if (this.direction == this.UP) {
        return this.UP;
    }
    if (this.direction == this.DOWN) {
        return this.DOWN;
    }
}

snakeHandler.prototype.reset = function () {
    this.snakeArray = [];
}

snakeHandler.prototype.checkWallCollisions = function () {
    if (this.direction == this.RIGHT && this.snakeArray[this.snakeArray.length - 1].xPos > this.canvasWidth - this.elemWidth)
        return true;
    if (this.direction == this.LEFT && this.snakeArray[this.snakeArray.length - 1].xPos < 0)
        return true;
    if (this.direction == this.UP && this.snakeArray[this.snakeArray.length - 1].yPos < 0)
        return true;
    if (this.direction == this.DOWN && this.snakeArray[this.snakeArray.length - 1].yPos > this.canvasHeight - this.elemHeight)
        return true;

}
/*
snakeHandler.prototype.checkSelfCollisions = function () {
    for(var i = 0; i < this.snakeArray.length; i++) {
        if((this.snakeArray[this.snakeArray.length - 1].xPos == this.snakeArray[i].xPos) && this.snakeArray[this.snakeArray.length - 1].yPos == this.snakeArray[i].yPos)
            return true;
    }
}
*/
