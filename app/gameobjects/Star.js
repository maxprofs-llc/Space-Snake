var Star = function (StarWidth, StarHeight, canvasWidth, canvasHeight, context) {
    this.MAX_SPEED = 5;

    this.StarWidth = StarWidth;
    this.StarHeight = StarHeight;

    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.context = context;

    this.color = "white";
    this.speed = this.calculateRandomSpeed();

    this.yPos = this.createRandomLane();
    this.xPos = this.createRandomLane();
};

Star.prototype.draw = function () {
    this.context.fillStyle = this.color;
    this.context.strokeStyle = this.color;
    this.context.fillRect(this.xPos, this.yPos, this.StarWidth, this.StarHeight);
    this.context.clearRect(this.xPos, this.yPos-2, this.StarWidth, this.StarHeight);
};

Star.prototype.update = function () {
    this.yPos += this.speed;
    if (this.yPos > this.canvasWidth) {
        this.yPos = 0;
        this.speed = this.calculateRandomSpeed();
    }
};

Star.prototype.calculateRandomSpeed = function () {
    var speed = (Math.floor(Math.random() * (this.MAX_SPEED - 1) + 1));
    return speed;
};

Star.prototype.createRandomLane = function () {
    return (Math.floor(Math.random() * (120 + 1))) * 5;
};
