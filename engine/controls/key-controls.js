var keyState = {};    
window.addEventListener('keydown',function(e){
    keyState[e.key || e.which] = true;
},true);    
window.addEventListener('keyup',function(e){
    keyState[e.key || e.which] = false;
},true);

controlLoop();
var keyOn = false;
function controlLoop() {
    var map = Object.entries(keyState);
    if (map.find(m => m[1])) {
        sprites.forEach(s => s.onkeydown(getKeysDown(keyState)));
        keyOn = true;
    } else if (keyOn) {
        sprites.forEach(s => s.onkeyup(getKeysDown(keyState)));
        keyOn = false;
    }
    // redraw/reposition your object here
    // also redraw/animate any objects not controlled by the user

    setTimeout(controlLoop, 10);
}    

function getKeysDown() {
    const map = new Map(Object.keys(keyState).map(key => [key, keyState[key]])) 
    const map1 = new Map([...map].filter(([k, v]) => v ));
    return Array.from(map1.keys());
}

function isKey(key, keys) {
    if (keys) {
        var found = false;
        for (const k of keys) {
            if (k == key) {
                found = true;
            }
        }
        return found;
    }
    return false;
}

function isKeyUp(keys) {
    return isKey('ArrowUp',keys) || isKey('z', keys) || isKey('w', keys);
}

function isKeyDown(keys) {
    return isKey('ArrowDown', keys) || isKey('s', keys);
}

function isKeyLeft(keys) {
    return isKey('ArrowLeft', keys) || isKey('q', keys) || isKey('a', keys);
}

function isKeyRight(keys) {
    return isKey('ArrowRight', keys) || isKey('d', keys);
}

function isKeyEnter(keys) {
    return isKey('Enter', keys) || isKey('NumpadEnter', keys);
}

function isKeySpace(keys) {
    return isKey(' ', keys);
}

function isKeyOk(keys) {
    return isKeyEnter(keys) || isKeySpace(keys) || isKey('x', keys);
}