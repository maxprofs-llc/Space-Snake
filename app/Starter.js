/* Start the Snake game from here! */
window.onload = function () {
    var canvas1 = document.querySelector("#canvas1");
    var canvas2 = document.querySelector("#canvas2");
    game.init(canvas1);
    starsimulator.init(canvas2);
}
