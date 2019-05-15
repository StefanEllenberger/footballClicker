//counters
var save = {
  dollarCount: 0,
  allTimeDollarCount: 0,
  fanCount: 0,
  fanCost: 10,
  ultraCount: 0,
  ultraCost: 50
}


function update(){
  saveGame();
  temp = (save.fanCount * 0.0033) + (save.ultraCount * 0.01): //increasers
  save.dollarCount += temp;
  save.allTimeDollarCount += temp;
  updateElements();
  updateAchievements();
  updateButtons();
}

function updateElements(){
  document.getElementById("counter").innerHTML = "" + Math.floor(save.dollarCount) + " dollars";
  document.getElementById("allTime").innerHTML = Math.floor(save.allTimeDollarCount);
  document.title = Math.floor(save.dollarCount) + " dollars"
  document.getElementById("buyFan").innerHTML = "Buy a fan (" + save.fanCost + ") - " + save.fanCount;
  document.getElementById("buyUltra").innerHtml = "Buy an ultra (" + save.ultraCost + ") - " + save.ultraCount;
}

function updateAchievements(){
  if (save.fanCount >= 25){
    document.getElementById("achievement1").style = "display:visible";
  }
  if (save.fanCount >= 50){
    document.getElementById("achievement2").style = "display:visible";
  }
  if (save.fanCount >= 100){
    document.getElementById("achievement3").style = "display:visible";
  }
}

function updateButtons(){
  if (save.fanCost > save.dollarCount){
    document.getElementById('buyFan').disabled = true;
  } else {
    document.getElementById('buyFan').disabled = false;
  }
  if (save.ultraCost > save.dollarCount){
    document.getElementById('buyUltra').disabled = true;
  } else {
    document.getElementById('buyUltra').disabled = false;
  }
}

function increment(){
  save.dollarCount++;
  save.allTimeDollarCount++;
}

function buyFan(){
  if (save.dollarCount >= save.fanCost){
    save.fanCount++;
    save.dollarCount -= save.fanCost;
    save.fanCost = Math.floor(10 * Math.pow(1.1,save.fanCount));
  }
}

function buyUltra(){
  if (save.dollarCount >= save.ultraCost){
    save.ultraCount++;
    save.dollarCount -= save.ultraCost;
    save.ultraCost = Math.floor(10 * Math.pow(1.1,save.ultraCount));
  }
}


window.setInterval(function(){
  update();
}, 33);


function saveGame(){
  localStorage.setItem("save",JSON.stringify(save));
}

function loadGame(){
  var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.dollarCount !== "undefined") save.dollarCount = savegame.dollarCount;
  if (typeof savegame.allTimeDollarCount !== "undefined") save.allTimeDollarCount = savegame.allTimeDollarCount;
  if (typeof savegame.fanCount !== "undefined") save.fanCount = savegame.fanCount;
  if (typeof savegame.fanCost !== "undefined") save.fanCost = savegame.fanCost;
  if (typeof savegame.ultraCount !== "undefined") save.ultraCount = savegame.ultraCount;
  if (typeof savegame.ultraCost !== "undefined") save.ultraCost = savegame.ultraCost;

}

function reset(){
  save.dollarCount = 0;
  save.allTimeDollarCount = 0;
  save.fanCount = 0;
  save.fanCost = 0;
  save.ultraCount = 0;
  save.ultraCost = 0;
}
