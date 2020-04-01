class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    ath1 = createSprite(200,200);
    ath1.addAnimation("ath1", ath1img);

    ath2 = createSprite(200,200);
    ath2.addAnimation("ath2", ath2img);

    ath3 = createSprite(200,200);
    ath3.addAnimation("ath3", ath3img);

    ath4 = createSprite(200,200);
    ath4.addAnimation("ath4", ath4img);
    athletes = [ath1, ath2, ath3, ath4];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    player.getAthletesAtEnd();
    
    if(allPlayers !== undefined){
      background(217, 101, 22);

     
        hurdle = createSprite(140, 650);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(280, 650);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(420, 650);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(560, 650);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(700, 650);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(840, 650);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(980, 650);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(1120, 650);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(1260, 650);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(1400, 650);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(1540, 650);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(1680, 650);
        hurdle.addImage("hurdle", hurdleimg);


        hurdle = createSprite(140, 720);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(280, 720);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(420, 720);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(560, 720);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(700, 720);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(840, 720);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(980, 720);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(1120, 720);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(1260, 720);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(1400, 720);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(1540, 720);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(1680, 720);
        hurdle.addImage("hurdle", hurdleimg);


        hurdle = createSprite(140, 800);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(280, 800);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(420, 800);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(560, 800);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(700, 800);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(840, 800);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(980, 800);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(1120, 800);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(1260, 800);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(1400, 800);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(1540, 800);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(1680, 800);
        hurdle.addImage("hurdle", hurdleimg);


        hurdle = createSprite(140, 880);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(280, 880);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(420, 880);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(560, 880);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(700, 880);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(840, 880);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(980, 880);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(1120, 880);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(1260, 880);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(1400, 880);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(1540, 880);
        hurdle.addImage("hurdle", hurdleimg);

        hurdle = createSprite(1680, 880);
        hurdle.addImage("hurdle", hurdleimg);

      
      
      image(track, 0,displayWidth/2 - 580,displayWidth, displayHeight/2);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      

      //x and y position of the cars
      var x = 1200;
      var y = 550;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        y = y + 70;
        //use data form the database to display the cars in y direction
        x = displayHeight - allPlayers[plr].distance -900;
        athletes[index-1].x = x;
        athletes[index-1].y = y;
      

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          athletes[index - 1].shapeColor = "red";
          
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        
      }

    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance +=-10
      player.update();
    }

    if(keyIsDown(UP_ARROW)){
      player.y = player.y + 80;
    }

    if(player.distance < -1470){
      gameState = 2;
      player.rank +=1
      Player.updateAthletesAtEnd(player.rank)
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank);
  }
}
