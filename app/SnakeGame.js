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
    var UP = 38; //Arrow up
    var RIGHT = 39; //Arrow right
    var LEFT = 37; //Arrow left
    var DOWN = 40; //Arrow down
    var RESTART = 27;

    var stopGame = false;

    // Draws the canvas
    function privateDraw() {
        if (stopGame)
            return;

        window.requestAnimationFrame(privateDraw);

        now = Date.now();
        delta = now - then;

        if (delta > interval) {
            then = now - (delta % interval);
            console.log("Tick, now drawing with: " + FPS + "fps!");
            snake.draw();
            snake.updateSnake();
            if (snake.checkWallCollisions()) { // || snake.checkSelfCollisions()) {
                stopGame = true;
                gameOver();
            }
            captureKeystrokes(privateCanvas);
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
        snake = new snakeHandler(RASTER_SIZE, RASTER_SIZE, GAME_WIDTH, GAME_HEIGHT, privateContext);
        snake.setupSnake();
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
        /* Opposite directions not allowed, same directions don't have to be checked */
        switch (key) {
            case UP:
                if (snake.getDirection() != DOWN && snake.getDirection() != UP) {
                    snake.setDirection(UP);
                }
                break;
            case RIGHT:
                if (snake.getDirection() != LEFT && snake.getDirection() != RIGHT) {
                    snake.setDirection(RIGHT);
                }
                break;
            case DOWN:
                if (snake.getDirection() != UP && snake.getDirection() != DOWN) {
                    snake.setDirection(DOWN);
                }
                break;
            case LEFT:
                if (snake.getDirection() != RIGHT && snake.getDirection() != LEFT) {
                    snake.setDirection(LEFT);
                }
                break;
            case RESTART:
                if (stopGame == true) {
                    privateContext.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
                    stopGame = false;
                    privateStartGame();
                }
        }
    }

    function gameOver() {
        privateContext.font = "30px Arial";
        privateContext.fillText("Game Over!", 50, 50);
    }

    return {
        init: publicInit,
    };
})();
