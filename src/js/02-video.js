import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);


// iframe.addEventListener('play', onPlay);

// function onPlay(evt) {npm
//     evt.preventDefault();
// }

player.on('play', onPlay);

function onPlay(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
    const currentTime = localStorage.getItem("videoplayer-current-time");
    return currentTime;
}

player.setCurrentTime(currentTime).then(function (seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});



player.on('timeupdate', throttle(onPlay, 1000));



