let canvasSize = 360;
let level_shape = [
  
  ["1111111",
  "1111121",
  "1111111",
  "1010011",
  "1110011",
  "1111111",
  "1111111",]]

randomLevel = level_shape[Math.floor(Math.random() * level_shape.length)];

let grid2d;
imageURL = "/JJ.png"
meURL = "/me.png"
let Grid;
let headPosition = [];
//number of frames to complete animation//
let animationTime = 1;
//tracks animation frames //
let animationTimer = 0;
let directionNextPosition;
let headImage;
let movingImage;
let buttons = [];

/* whole board and single square sizes */
let boardSize;
let cellSize;

function reloadP(){
  window.location.reload()
}



function setup() {
  
  let cnv = createCanvas(canvasSize, canvasSize);
  background(255, 0, 200);
  cnv.addClass("canvas")


  

  



  boardSize = randomLevel.length;
  cellSize = canvasSize / boardSize;

  Grid = randomLevel.map(dataRow => dataRow.split(""));
  //head//
  for (let y=0; y <randomLevel.length; y++){
    let headX = randomLevel[y].indexOf("2");
    if(headX !== -1){
      headPosition = [headX,y];
      break;
    }
  }

  //images//
  movingImage = createImg(meURL, "jasper");
  movingImage.hide()
  headImage = createImg(imageURL, "me");
  headImage.hide()
  //button directions//
  const directionss = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];

  //button//
  ["←", "→", "↑", "↓"].forEach(makeControl);
  //creating buttons to control main block//
  function makeControl(direction, index){
    buttons[index] = createButton(direction);
    buttons[index].addClass('p5Buttons');
  
    buttons[index].mousePressed(function(){
      startMoving(directionss[index])
      

    })
    }
  } 
  function startMoving(velocity){
    //allows animation to end before direction can be changed //
    if (animationTimer > 0) return;

    let[nextX,nextY] = nextPosition(velocity);
    grid2d= Grid.flat(1)

    // creating grid edges block wouldnt move outside the grid //

    const xbound = nextX >= 0 && nextX < boardSize;
    const ybound = nextY >= 0 && nextY < boardSize;
    
    
    //stops jasper from moving out of the grid//

    if(!(xbound && ybound)) return;

    // checks if jasper can move to next block //

    if (Grid[nextY][nextX] === "1"){
      directionNextPosition = velocity;
      animationTimer = animationTime
      console.log(animationTimer)
    }

    
  }


  function updateMoving(){
    if(animationTimer>0){
      animationTimer--;
    if(animationTimer===0){
        stopMoving()
    }}
  }
  function nextPosition(velocity){
    let finalPosition;

    
    // current position plus direction gives you next position //
    return finalPosition = [
      headPosition[0] + velocity[0],
      headPosition[1] + velocity[1] 
    ]
    
    ;
  

  }
  function stopMoving(){
    headPosition = nextPosition(directionNextPosition);
    Grid[headPosition[1]][headPosition[0]] = "2";;
    console.log(grid2d)
   // if (){
     // alert("Congrats! You lost!");}

    if (checkWin()){
     alert("Congrats! You WON!");
    location.reload()}

  
    if (checkLoss()){
      alert("Congrats! You Lost!");
     location.reload()}
      
  


    // keeps moving with one click instead of having to move every block // 
    startMoving(directionNextPosition)
    
  }
  
  function checkWin(){
    return !Grid.flat(1).includes("1");
  }

  function checkLoss(){
  if( grid2d === ['1', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '1', '1', '1', '1', '1', '2', '2', '0', '1', '0', '0', '1', '2', '2', '1', '1', '0', '0', '1', '2', '2', '1', '1', '1', '1', '1', '2', '2', '2', '2', '2', '2', '2', '2']){
    alert("u lost")
      }}



function createBoard(){
  for(let y=0; y < boardSize; y++){
    for(let x=0; x < boardSize; x++){
      let cellData = Grid[y][x];

      if(cellData === "0"){
        fill(0);
      }

      else if(cellData === "1"){
        fill("#8DA658");
      }
      
      else{
        fill(50, 115, 100);
      }
      rect(x * cellSize, y * cellSize, cellSize,cellSize);
    }
  }}
     

function movingAndHeadImage(){
  

  //animation when moving jasper// 
  if(animationTimer > 0){
    //adding movement animation instead of moving 1 block at a time by adding a filling while moving //
    let movementFactor = (animationTime-animationTimer)/ animationTime;
    let renderVelocity = [
      directionNextPosition[0] * movementFactor,
      directionNextPosition[1] * movementFactor
    ]
    let renderPosition = nextPosition(renderVelocity)
    image(movingImage,renderPosition[0]* cellSize, 
      renderPosition[1] * cellSize, cellSize, cellSize)
    
  }
  else{
  image(headImage, headPosition[0]* cellSize, 
    headPosition[1] * cellSize, cellSize, cellSize)
}}



function keyPressed(){
  if (keyCode === UP_ARROW){
  startMoving([0,-1]);}
  
  if (keyCode === DOWN_ARROW){
    startMoving([0,1]);}
  
  if (keyCode === LEFT_ARROW) startMoving([-1,0]);
  
  if (keyCode === RIGHT_ARROW) startMoving([1,0]);
  
  }
  function windowResized() { 
    if(windowWidth < 550) {
        size = 10;
    } else {
        size = 100;
    }
}

function draw(){
  updateMoving()

  createBoard()

  movingAndHeadImage()
    
  }
