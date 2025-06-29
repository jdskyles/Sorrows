let mySound;
let img;
let img2;

function preload() {
  soundFormats('mp3');
  mySound = loadSound('https://cdn.glitch.global/e366aae4-919b-4039-8551-b81809ae73d9/sorrows.mp3?v=1678505165924');
  img = loadImage('https://cdn.glitch.global/e366aae4-919b-4039-8551-b81809ae73d9/Skull-%20Van%20Gogh.jpg?v=1678506183746');
  img2 = loadImage('https://cdn.glitch.global/e366aae4-919b-4039-8551-b81809ae73d9/Dore.jpg?v=1678603922012')
}

function setup() {
  let cnv = createCanvas(500, 700);
  cnv.parent('content_2');
  cnv.mousePressed(canvasPressed);
  background(img);
  fill(215);
  text('tap to play', 225, 20);
}

function canvasPressed() {
  if (mySound.isPlaying()) {
    // .isPlaying() returns a boolean
    mySound.stop();
    background(img);
    fill(215);
    text('tap to play', 225, 20);
  } else {
    mySound.loop();
    background(img2);
    fill(215);
    text('tap to stop', 225, 20);
  }
}

