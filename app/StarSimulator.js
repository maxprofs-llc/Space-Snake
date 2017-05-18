var starsimulator = (function () {
    var context;

    var CANVAS_WIDTH = 600;
    var CANVAS_HEIGHT = 600;

    var Star_WIDTH = 2;
    var Star_HEIGHT = 2;

    var Star_NUM = 100;
    var BG_COLOR = "black";

    var stars = [];

    function init(StarCanvas) {
        context = StarCanvas.getContext("2d");

        setupstars();
        window.requestAnimationFrame(draw);
    }

    function draw() {
        //drawBackground();
        context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        drawstars();
        window.requestAnimationFrame(draw);
    }

    function setupstars() {
        for (var i = 0; i < Star_NUM; i++) {
            stars[i] = new Star(Star_WIDTH, Star_HEIGHT, CANVAS_WIDTH, CANVAS_HEIGHT, context);
        }
    }

    function drawstars() {
        for (var i = 0; i < Star_NUM; i++) {
            stars[i].draw();
            stars[i].update();
        }
    }

    return {
        init: init
    }

})();
