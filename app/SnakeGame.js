var game = (function () {

    var privateContext;
    var privateCanvas;

    /* Game Constants */
    var GAME_WIDTH;
    var GAME_HEIGHT;
    var RASTER_SIZE = 10; // i.e. size of snake elements and apples

    var snake;
    var apple;
    var counter;

    /* Variables and constants to control framerate */
    var FPS = 10; /* change this to change framerate in the game */
    var now;
    var then = Date.now();
    var interval = 1000 / FPS;
    var delta;

    /* key codes */
    var MOVE_UP = 38; //Arrow up
    var MOVE_RIGHT = 39; //Arrow right
    var MOVE_LEFT = 37; //Arrow left
    var MOVE_DOWN = 40; //Arrow down

    // Draws the canvas
    function privateDraw() {
        privateContext.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        window.requestAnimationFrame(privateDraw);

        now = Date.now();
        delta = now - then;

        if (delta > interval) {
            then = now - (delta % interval);
            //console.log("Tick, now drawing with: " + FPS + "fps!");
            snake.draw();
        }
    }

    // Setzt den Canvas und dessen Context als Variablen
    function privateSetContext(canvas) {
        privateCanvas = canvas;
        privateContext = canvas.getContext("2d");
    }

    /* Todo: Call this function only after player has pressed the start key */
    function privateStartGame() {
        /* Todo: initialize objects (i.e. apple, snake, counter) here */
        snake = new snakeElement(RASTER_SIZE, RASTER_SIZE, GAME_WIDTH, GAME_HEIGHT, privateContext);
        captureKeystrokes(privateCanvas);
        window.requestAnimationFrame(privateDraw);
    }

    function publicInit(canvas) {
        GAME_HEIGHT = canvas.height;
        GAME_WIDTH = canvas.width;
        privateSetContext(canvas);
        privateStartGame();
    }

    function captureKeystrokes(canvas) {
        //bring canvas into focus to capture key strokes
        canvas.setAttribute('tabindex', '0');
        canvas.focus();
        canvas.addEventListener("keydown", keyPressed, false);
    }

    function keyPressed(keyEvent) {
        var key = keyEvent.keyCode;

        switch (key) {
            /* To do: while-schleife, während noch keine andere Taste gedrückt wurde */
            case MOVE_UP:
                snake.moveUp();
                console.log("Up");
                break;
            case MOVE_RIGHT:
                snake.moveRight();
                console.log("Right");
                break;
            case MOVE_DOWN:
                snake.moveDown();
                console.log("Down");
                break;
            case MOVE_LEFT:
                snake.moveLeft();
                console.log("Left");
                break;
        }
    }

    return {
        init: publicInit
    };
})();
