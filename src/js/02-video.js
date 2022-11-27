import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// import { set } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

let videotime;
player.on('timeupdate', function (data) {
  videotime = data.seconds;
  return videotime;
  //   console.log(videotime);
});
console.log(videotime);

// const data = localStorage.setItem('videoplayer', JSON.stringify(videotime));

// console.log(data);

/*
player
  .setCurrentTime(JSON.parse(localStorage.getItem(data.videotime)))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

  */
