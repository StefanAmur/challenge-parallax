let keys = [];
let tic = 40;
let cloudsX = 0;
let closeTreesX = 0;
let groundX = 0;
let player = document.getElementById('player');
let ground = document.getElementById('background5');
let closeTrees = document.getElementById('background4');
let clouds = document.getElementById('background2');
console.log(ground);

// listen to key press and add key to array (only if it doesn't exist already)
document.addEventListener('keydown', function (event) {
    if (event.key && !keys.includes(event.key)) {
        keys.push(event.key);
        console.log(keys);
        move();
    }
});

// listen to key release and remove key from array
document.addEventListener('keyup', function (event) {
    if (event.key) {
        var index = keys.indexOf(event.key);
        if (index !== -1) {
            keys.splice(index, 1);
            console.log(keys);
        }
    }
});

function move() {
    if (keys.includes('ArrowRight')) {
        groundX -= 4;
        closeTreesX -= 2;
        cloudsX -= 1;
        player.style.transform = 'scaleX(1)';
    }
    if (keys.includes('ArrowLeft')) {
        groundX += 4;
        closeTreesX += 2;
        cloudsX -= 1;
        player.style.transform = 'scaleX(-1)';
    }
    ground.style.backgroundPositionX = groundX + "px";
    closeTrees.style.backgroundPositionX = closeTreesX + "px";
    clouds.style.backgroundPositionX = cloudsX + "px";
    setTimeout(move, tic);
}