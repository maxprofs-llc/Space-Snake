var counterHandler = function (context) {
    this.count = 0;
    this.context = context;
}

counterHandler.prototype.increase = function () {
    this.count += 9;
    this.context.clearRect(170, 20, 50, 16);
}

counterHandler.prototype.draw = function () {    
    this.context.fillStyle = "white";
    this.context.font = "16px verdana, sans-serif";
    this.context.fillText("Score: " , 115, 35);
    this.context.fillText(this.count, 175, 35 )
}
