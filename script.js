//counters
var dollarCount = 0;
var allTimeDollarCount = 0;
var fanCount = 0;
//costs
var fanCost = 10;


function update(){
  document.getElementById("allTime").innerHTML = allTimeDollarCount;
  dollarCount += (fanCount * 0.0033);
  document.getElementById("counter").innerHTML = "" + Math.floor(dollarCount) + " dollars";
}

function increment(){
  dollarCount++;
  allTimeDollarCount++;
}

function buyFan(){
  if (dollarCount >= fanCost){
    fanCount++;
    dollarCount -= fanCost;
    document.getElementById("buyFan").innerHTML = "Buy a fan (" + fanCost + ") - " + fanCount;
  }
}

window.setInterval(function(){
  update();
}, 33);
