let mySound;
let img;
let img2;

function preload() {
  soundFormats('mp3');
  mySound = loadSound('https://cdn.jsdelivr.net/gh/jdskyles/Sorrows/sorrows.mp3');
  img = loadImage('https://cdn.jsdelivr.net/gh/jdskyles/Sorrows/SkullVanGogh.jpg');
  img2 = loadImage('https://cdn.jsdelivr.net/gh/jdskyles/Sorrows/Dore.jpg')
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

