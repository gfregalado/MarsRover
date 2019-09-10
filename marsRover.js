// Rover Object Goes Here
// ======================
const rover = {
    direction: "n",
    x: 0,
    y: 0,
    travelLog: [{x:0, y:0}]
  }
  
  
  // =====================
  
  function turnLeft(player){
    
    console.log("turnLeft was called!");
    switch (player.direction){
      case "n":
        player.direction = "w"
        console.log(`rover is facing ${player.direction}`)
        break;
      case "w":
        player.direction = "s"
        console.log(`rover is facing ${player.direction}`)
        break;
      case "s":
        player.direction = "e"
        console.log(`rover is facing ${player.direction}`)
        break;
      case "e":
        player.direction = "n"
        console.log(`rover is facing ${player.direction}`)
        break;
    }
  }
  
  
  function turnRight(player){
    console.log("turnRight was called!");
    switch (player.direction){
      case "n":
        player.direction = "e"
        console.log(`rover is facing ${player.direction}`)
        break;
      case "e":
        player.direction = "s"
        console.log(`rover is facing ${player.direction}`)
        break;
      case "s":
        player.direction = "w"
        console.log(`rover is facing ${player.direction}`)
        break;
      case "w":
        player.direction = "n"
        console.log(`rover is facing ${player.direction}`)
        break;
    }
  }
  
  function moveForward(player){
    console.log("moveForward was called")
    switch (player.direction){
      case "n":
        if (player.y === 0){
            console.log('The Rover is out of Boundaries Fool')
          } else{
        player.y--
        console.log(`rover position is ${player.x},${player.y}`)}
        break;
      case "e":
        if (player.x === 9){
            console.log('The Rover is out of Boundaries Fool')
          } else{
        player.x++
        console.log(`rover position is ${player.x},${player.y}`)}
        break;
      case "s":
        if (player.y === 9){
            console.log('The Rover is out of Boundaries Fool')
          } else{
        player.y++
        console.log(`rover position is ${player.x},${player.y}`)}
        break;
      case "w":
        if (player.x === 0){
            console.log('The Rover is out of Boundaries Fool')
          } else{
        player.x--
        console.log(`rover position is ${player.x},${player.y}`)}
        break;
    }
  }
  
  function moveBackwards(player){
    console.log("moveBackwards was called")
    switch (player.direction){
      case "n":
        if (player.y === 9){
            console.log('The Rover is out of Boundaries Fool')
          } else{
        player.y++
        console.log(`rover position is ${player.x},${player.y}`)}
        break;
      case "e":
        if (player.x === 0){
            console.log('The Rover is out of Boundaries Fool')
          } else{
        player.x--
        console.log(`rover position is ${player.x},${player.y}`)}
        break;
      case "s":
        if (player.y === 0){
            console.log('The Rover is out of Boundaries Fool')
          } else{
        player.y--
        console.log(`rover position is ${player.x},${player.y}`)}
        break;
      case "w":
        if (player.x === 9){
            console.log('The Rover is out of Boundaries Fool')
          } else{
        player.x++
        console.log(`rover position is ${player.x},${player.y}`)}
        break;
    }
  }
  
  
  //command Function
  
  function command(player,orders){
   
    for (let i = 0; i < orders.length; i++){
      let order = orders[i];
      switch(order){
        case "f": // forward
          moveForward(player);
          break;
        case "r": // right
          turnRight(player);
          break;
        case "l": // left
          turnLeft(player);
          break;
        case "b": //Backwards
          moveBackwards(player);
          break;
          default:
      console.log('Sorry that is not a valid direction');
      }
      let newPosition = {x: player.x, y: player.y};
    player.travelLog.push(newPosition);
    }
    console.log(player.travelLog);
  }
  
  command(rover,"rrffflffffflffffff");
  