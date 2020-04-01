var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var bg;
var themes;

var athletes, ath1, ath2, ath3, ath4;

var hurdleimg;
var hurdle;

var track, ath1img, ath2img, ath3img, ath4img;

function preload(){
  track = loadImage("assets/background/background.png");
  ath1img = loadAnimation("assets/runner/run-1.png", "assets/runner/run-2.png", "assets/runner/run-3.png", "assets/runner/run-4.png");
  ath2img = loadAnimation("assets/runner/run-1.png", "assets/runner/run-2.png", "assets/runner/run-3.png", "assets/runner/run-4.png");
  ath3img = loadAnimation("assets/runner/run-1.png", "assets/runner/run-2.png", "assets/runner/run-3.png", "assets/runner/run-4.png");
  ath4img = loadAnimation("assets/runner/run-1.png", "assets/runner/run-2.png", "assets/runner/run-3.png", "assets/runner/run-4.png");
  ground = loadImage("images/ground.png");
  hurdleimg = loadImage("assets/items/hurdle.png");
  

  bg = loadImage("images/bg.jpg");

  themes= loadSound('The-Avengers-Theme-Song.mp3')


}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  
  
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
   game.end();
  }
  
}
