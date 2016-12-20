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


$(document).ready(function() {
    $('#pagepiling').pagepiling({
        menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 110,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['section1', 'section2', 'section3', 'section4']
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events
        onLeave: function(index, nextIndex, direction){

        },
        afterLoad: function(anchorLink, index){


            if(index == 2){
                var ChNum = $('#getOne');
                $(ChNum).addClass('ChNum');
                var ChNum2 = $('#setTwo');
                $(ChNum2).addClass('ChNum2');
            }

            else if(index == 3){
                var ChNum = $('#getTwo');
                $(ChNum).addClass('ChNum');
                var ChNum2 = $('#setThree');
                $(ChNum2).addClass('ChNum2');
            }
            else if(index == 4){
                var ChNum = $('#getThree');
                $(ChNum).addClass('ChNum');
                var ChNum2 = $('#setFour');
                $(ChNum2).addClass('ChNum2');
            }
        },

        afterRender : function() {
            $('#one').toggleClass('Zoom-In');
        }
    });
});


