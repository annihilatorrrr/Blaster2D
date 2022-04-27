module.exports.random = function(number1, number2){
  return Math.round(Math.random() * (number2 - number1)) + number1;
}

module.exports.generateCode = function(){
  const characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var code = "";
  for(i = 0; i < 10; i++){
    code += characters[module.exports.random(0, characters.length - 1)];
  }
  return code;
}

module.exports.checkUser = function(id){
  for(let info of Object.keys(rooms.main.players)){
    if(info == id) return true;
  }
  return false;
}

module.exports.setUpRoom = function(){
  if(Object.keys(rooms.main.players).length == 0){
    const random = module.exports.random;
    const coinsize = 37.5;
    const treesize = 300;
    const size = 3000;
    rooms.main.coins = [];
    rooms.main.trees = [];
    for(let i = 0; i < random(30, 50); i++){
      rooms.main.coins.push({
        id: i,
        x: random(coinsize / 2, size - coinsize / 2),
        y: random(coinsize / 2, size - coinsize / 2)
      });
    }
    for(let i = 0; i < random(10, 15); i++){
      let percent = random(50, 100);
      let realsize = treesize * percent / 100;
      rooms.main.trees.push({
        id: i,
        size: realsize,
        x: random(realsize / 2, size - realsize / 2),
        y: random(realsize / 2, size - realsize / 2)
      });
    }
  }
}