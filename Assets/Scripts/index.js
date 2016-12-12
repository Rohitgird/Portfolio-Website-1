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
