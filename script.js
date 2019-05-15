//counters
var save = {
  dollarCount: 0,
  allTimeDollarCount: 0,
  fanCount: 0,
  fanCost: 10,
  ultraCount: 0,
  ultraCost: 50,
  stadiumCost: 10000,
  stadiumCount: 0
}


function update() {
  saveGame();
  temp = (save.fanCount * 0.0033) + (save.ultraCount * 0.01); //increasers
  save.dollarCount += temp;
  save.allTimeDollarCount += temp;
  updateElements();
  updateAchievements();
  updateButtons();
}

function updateElements() {
  document.title = Math.floor(save.dollarCount) + " dollars"
  document.getElementById("counter").innerHTML = "" + Math.floor(save.dollarCount).toLocaleString() + " dollars";
  document.getElementById("allTime").innerHTML = Math.floor(save.allTimeDollarCount).toLocaleString();
  document.getElementById("buyFan").innerHTML = "Buy a fan (" + save.fanCost.toLocaleString() + ") - " + save.fanCount.toLocaleString();
  document.getElementById("buyUltra").innerHTML = "Buy an ultra (" + save.ultraCost.toLocaleString() + ") - " + save.ultraCount.toLocaleString();
  document.getElementById("upgradeStadium").innerHTML = "Upgrade stadium (" + save.stadiumCost.toLocaleString() + ") - " + save.stadiumCount.toLocaleString();

}

function updateAchievements() {
  if (save.fanCount >= 25) {
    document.getElementById("achievement1").style = "display:visible";
  }
  if (save.fanCount >= 50) {
    document.getElementById("achievement2").style = "display:visible";
  }
  if (save.fanCount >= 100) {
    document.getElementById("achievement3").style = "display:visible";
  }
}

function updateButtons() {
  var buttons = document.getElementsByClassName("buyButton");
  for (i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
  if (save.fanCost > save.dollarCount) {
    document.getElementById('buyFan').disabled = true;
  }
  if (save.ultraCost > save.dollarCount) {
    document.getElementById('buyUltra').disabled = true;
  }
  if (save.stadiumCost > save.dollarCount) {
    document.getElementById('upgradeStadium').disabled = true;
  }
}

function increment() {
  save.dollarCount++;
  save.allTimeDollarCount++;
}

function buyFan() {
  if (save.dollarCount >= save.fanCost) {
    save.fanCount++;
    save.dollarCount -= save.fanCost;
    save.fanCost = Math.floor(10 * Math.pow(1.1, save.fanCount));
  }
}

function buyUltra() {
  if (save.dollarCount >= save.ultraCost) {
    save.ultraCount++;
    save.dollarCount -= save.ultraCost;
    save.ultraCost = Math.floor(50 * Math.pow(1.1, save.ultraCount));
  }
}

function upgradeStadium(){
  if (save.dollarCount >= save.stadiumCost) {
    save.stadiumCount++;
    save.dollarCount -= save.stadiumCost;
    save.stadiumCost = save.stadiumCost * 10;
  }

}


window.setInterval(function() {
  update();
}, 33);


function saveGame() {
  localStorage.setItem("save", JSON.stringify(save));
}

function loadGame() {
  var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.dollarCount !== "undefined") save.dollarCount = savegame.dollarCount;
  if (typeof savegame.allTimeDollarCount !== "undefined") save.allTimeDollarCount = savegame.allTimeDollarCount;
  if (typeof savegame.fanCount !== "undefined") save.fanCount = savegame.fanCount;
  if (typeof savegame.fanCost !== "undefined") save.fanCost = savegame.fanCost;
  if (typeof savegame.ultraCount !== "undefined") save.ultraCount = savegame.ultraCount;
  if (typeof savegame.ultraCost !== "undefined") save.ultraCost = savegame.ultraCost;

}

function reset() {
  save.dollarCount = 0;
  save.allTimeDollarCount = 0;
  save.fanCount = 0;
  save.fanCost = 10;
  save.ultraCount = 0;
  save.ultraCost = 50;
}
