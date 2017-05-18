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
    var RESTART = 27; // Escape
    var SPACE = 32; // Space

    /* Start and gameOver booleans */
    var gameOver = false;
    var firstStart = true;
    
    /* Sound files */
    var music = new Audio("music/snakeplayback.mp3");
    var appleSound = new Audio("music/apple.wav");
    var gameOverSound = new Audio("music/GameOver.wav");
    
    /* Images */
    var snakeLogo = new Image();
    snakeLogo.src = "images/snakeLogo.png";

    // Draws the canvas
    function privateDraw() {
        if (gameOver)
            return;

        window.requestAnimationFrame(privateDraw);

        now = Date.now();
        delta = now - then;

        if (delta > interval) {
            then = now - (delta % interval);
            console.log("Tick, now drawing with: " + FPS + "fps!");
            snake.draw();
            apple.draw();
            counter.draw();
            snake.updateSnake();

            //updateSpeed();

            if (snake.checkWallCollisions() || snake.checkSelfCollisions()) {
                gameOver = true;
                setGameOver();
            }

            if (snake.eatApple()) {
                appleSound.play();
                apple = new appleHandler(RASTER_SIZE, RASTER_SIZE, GAME_WIDTH, GAME_HEIGHT, privateContext);
                snake.setNewApple(apple);
                counter.increase();
            }
            captureKeystrokes(privateCanvas);
        }
    }

    // Sets canvas and its context as variables
    function privateSetContext(canvas) {
        privateCanvas = canvas;
        privateContext = canvas.getContext("2d");
    }

    /* Todo: Call this function only after player has pressed the start key */
    function privateStartGame() {
        apple = new appleHandler(RASTER_SIZE, RASTER_SIZE, GAME_WIDTH, GAME_HEIGHT, privateContext);
        snake = new snakeHandler(RASTER_SIZE, RASTER_SIZE, GAME_WIDTH, GAME_HEIGHT, apple, privateContext);
        snake.setupSnake();
        counter = new counterHandler(privateContext);
        window.requestAnimationFrame(privateDraw);
    }

    function publicInit(canvas) {
        GAME_HEIGHT = canvas.height;
        GAME_WIDTH = canvas.width;
        privateSetContext(canvas);

        captureKeystrokes(privateCanvas);
        
        privateContext.drawImage(snakeLogo, 0, canvas.height * 0.1);
        
        privateContext.fillStyle = "white";
        privateContext.font = "20px Arial";
        privateContext.textAlign = "center";
        privateContext.textBaseline = "middle";
        privateContext.fillText("To Start Press Space", canvas.width / 2, canvas.height * 0.9);

        //musicLoop();

        //privateStartGame();
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
                if (gameOver == true && firstStart == false) {
                    privateContext.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
                    gameOver = false;
                    privateStartGame();
                    musicLoop();
                }
                break;
            case SPACE:
                if (firstStart == true) {
                    firstStart = false;
                    musicLoop();
                    privateContext.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
                    privateStartGame();
                }
                break;
        }
    }

    function musicLoop() {
        /* Music loop with buffer for seamless play */

        music.addEventListener('timeupdate', function () {
            var buffer = .31;
            if (this.currentTime > this.duration - buffer) {
                this.currentTime = 0;
                this.play();
            }
        }, false);
        music.play();
    }

    function setGameOver() {
        music.pause();
        music.currentTime = 0;

        gameOverSound.play();

        privateContext.fillStyle = "white";
        privateContext.font = "15px Arial";
        privateContext.fillText("Game Over! Press ESC to restart", canvas.width / 2, canvas.height / 2);
    }
/* 
    function updateSpeed() {
        if (counter.getScore() % 18 == 0) {
            FPS++;
            flag++
            interval = 1000 / FPS;
        }
    }
*/
    return {
        init: publicInit,
    };
})();
