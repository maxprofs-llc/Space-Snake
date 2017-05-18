/* An apple in the game */

var appleHandler = function (elemWidth, elemHeight, canvasWidth, canvasHeight, context) {
    this.elemWidth = elemWidth;
    this.elemHeight = elemHeight;

    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.context = context;

    this.color = "red";

    this.xPos = this.determineRandomPosition();
    this.yPos = this.determineRandomPosition();
}

appleHandler.prototype.determineRandomPosition = function() {
    var maxNumber = (this.canvasHeight - this.elemHeight) / this.elemHeight;
    return (Math.floor(Math.random() * (maxNumber + 1))) * this.elemHeight;
}

appleHandler.prototype.draw = function () {
    this.context.fillStyle = this.color;
    this.context.strokeStyle = this.color;
    this.context.fillRect(this.xPos, this.yPos, this.elemWidth, this.elemHeight);
}