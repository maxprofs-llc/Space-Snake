/* Start the Snake game from here! */
window.onload = function () {
    var canvas = document.querySelector("#canvas");
    game.init(canvas);
}
/*    var music = new Audio("/music/snakeplayback.mp3");
    
     Music loop with buffer for seamless play 
    music.addEventListener('timeupdate', function () {
        var buffer = .38;
        if (this.currentTime > this.duration - buffer) {
            this.currentTime = 0;
            this.play();
        }
    }, false);
    music.play();
}*/
