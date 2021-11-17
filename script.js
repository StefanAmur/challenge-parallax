let keys = [];

// listen to key press and add key to array (only if it doesn't exist already)
document.addEventListener('keydown', function (event) {
    if (event.key && !keys.includes(event.key)) {
        keys.push(event.key);
        console.log(keys);
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