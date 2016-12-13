if (screenfull.enabled) {
    screenfull.request();
}

document.fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.documentElement.webkitRequestFullScreen;

function requestFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
}

if (document.fullscreenEnabled) {
    requestFullscreen(document.documentElement);
}

document.getElementById('btn').addEventListener('click', () => {
    if (screenfull.enabled) {
        screenfull.request();
    } else {
        // Ignore or do something else
    }
});



$('#pagepiling').pagepiling({
    onLeave: function(index, nextIndex, direction){
        
        if(index == 1 && direction =='down'){
            console.log("Going to section 3!");
        }

        else if(index == 2 && direction == 'up'){
            console.log("Going to section 1!");
        }
    }
});
