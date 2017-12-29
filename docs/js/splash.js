var portrait = false;
var video = document.querySelector('video');

var chooseVideo = function() {
    if(window.innerHeight > window.innerWidth && !portrait) {
        portrait = true;
        video.setAttribute('src', '/assets/video/splash-portrait.mp4');
    } else if(window.innerWidth > window.innerHeight && portrait) {
        portrait = false;
        video.setAttribute('src', '/assets/video/splash.mp4');
    }
};
chooseVideo();
window.addEventListener('resize', chooseVideo);

var playBtn = document.getElementById('btn-play');
playBtn.addEventListener('click', function() {
    video.play();
    playBtn.style.display = 'none';
});
window.setTimeout(function() {
    var ua = navigator.userAgent.toLowerCase();
    if(video.currentTime == 0 && ua.indexOf("android") > -1) {
        playBtn.style.display = 'block';
    }
}, 500);
