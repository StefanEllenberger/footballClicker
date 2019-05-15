//counters
var save = {
  dollarCount: 0,
  allTimeDollarCount: 0,
  fanCount: 0,
  fanCost: 10
}
// var dollarCount = 0;
// var allTimeDollarCount = 0;
// var fanCount = 0;
// //costs
// var fanCost = 10;


function update(){
  saveGame();
  temp = (save.fanCount * 0.0033)
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
}

function updateAchievements(){
  if (save.fanCount >= 100){
    document.getElementById("achievement1").style = "display:visible";
  }
}

function updateButtons(){
  if (save.fanCost > save.dollarCount){
    document.getElementById('buyFan').disabled = true;
  } else {
    document.getElementById('buyFan').disabled = false;
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

window.setInterval(function(){
  update();
}, 33);
