let keys = [];
let tic = 20;
let x = 0;
let obstacleX = 0;
let playerY = 137;
let jumpValue = 80;
let player = document.getElementById('player');
let ground = document.getElementById('background5');
let closeTrees = document.getElementById('background4');
let distantTrees = document.getElementById('background3');
let clouds = document.getElementById('background2');
let obstacle = document.getElementById('obstacle');

gamer();

// listen to key press and add key to array (only if it doesn't exist already)
document.addEventListener('keydown', function (event) {
    if (event.key && !keys.includes(event.key)) {
        keys.push(event.key);
    }
});

// listen to key release and remove key from array
document.addEventListener('keyup', function (event) {
    if (event.key) {
        var index = keys.indexOf(event.key);
        if (index !== -1) {
            keys.splice(index, 1);
        }
    }
});

function move() {
    if (keys.includes('ArrowRight')) {
        x -= 1;
        obstacleX -= 1;
        player.style.transform = 'scaleX(1)';
    }
    if (keys.includes('ArrowLeft')) {
        x += 1;
        obstacleX += 1;
        player.style.transform = 'scaleX(-1)';
    }
    obstacle.style.left = 4 * obstacleX + 'px';
    ground.style.backgroundPositionX = 4 * x + "px";
    closeTrees.style.backgroundPositionX = 3 * x + "px";
    distantTrees.style.backgroundPositionX = 2 * x + "px";
    clouds.style.backgroundPositionX = x + "px";
}

function checkInput() {
    if (keys.length != 0 && (keys.includes('ArrowLeft') || keys.includes('ArrowRight')) && !keys.includes('ArrowUp')) {
        player.style.backgroundImage = 'url(./img/run.gif)';
    } else if (keys.includes('ArrowUp')) {
        player.style.backgroundImage = 'url(./img/jump.gif)';
    } else {
        player.style.backgroundImage = 'url(./img/idle.gif)';
    }
}

function jump() {
    if (keys.includes('ArrowUp')) {
        player.style.backgroundImage = 'url(./img/jump.gif)';
        player.style.bottom = playerY + jumpValue + 'px';
        player.style.transition = 'bottom 0.5s';
    } else if (!keys.includes('ArrowUp')) {
        player.style.bottom = playerY + 'px';
        player.style.transition = 'bottom 0.5s';
    }
}

function gamer() {
    move();
    jump();
    checkInput();
    setTimeout(gamer, tic);
}
