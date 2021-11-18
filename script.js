let keys = [];
let tic = 20;
let x = 0;
let playerY = 137;
let jumpValue = 80;
let player = document.getElementById('player');
let ground = document.getElementById('background5');
let closeTrees = document.getElementById('background4');
let distantTrees = document.getElementById('background3');
let clouds = document.getElementById('background2');

move();
jump();


// listen to key press and add key to array (only if it doesn't exist already)
document.addEventListener('keydown', function (event) {
    if (event.key && !keys.includes(event.key)) {
        keys.push(event.key);
        console.log(keys);
        checkInput();
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
    checkInput();
});

function move() {
    if (keys.includes('ArrowRight')) {
        x -= 1;
        player.style.transform = 'scaleX(1)';
    }
    if (keys.includes('ArrowLeft')) {
        x += 1;
        player.style.transform = 'scaleX(-1)';
    }
    ground.style.backgroundPositionX = 4 * x + "px";
    closeTrees.style.backgroundPositionX = 3 * x + "px";
    distantTrees.style.backgroundPositionX = 2 * x + "px";
    clouds.style.backgroundPositionX = x + "px";
    setTimeout(move, tic);
}

function checkInput() {
    if (keys.length != 0) {
        player.style.backgroundImage = 'url(./img/run.gif)';
    } else {
        player.style.backgroundImage = 'url(./img/idle.gif)';
    }
}

function jump() {
    if (keys.includes('ArrowUp')) {
        player.style.bottom = playerY + jumpValue + 'px';
    } else
        player.style.bottom = playerY + 'px';

    setTimeout(jump, tic);
}
