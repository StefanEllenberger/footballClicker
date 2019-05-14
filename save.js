function saveGame(){
  localStorage.setItem("save",JSON.stringify(save));
}

function loadGame(){
  var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.dollarCount !== "undefined") save.dollarCount = savegame.dollarCount;
  if (typeof savegame.allTimeDollarCount !== "undefined") save.allTimeDollarCount = savegame.allTimeDollarCount;
  if (typeof savegame.fanCount !== "undefined") save.fanCount = savegame.fanCount;
  if (typeof savegame.fanCost !== "undefined") save.fanCost = savegame.fanCost;
}

function reset(){
  save.dollarCount = 0;
  save.allTimeDollarCount = 0;
  save.fanCount = 0;
  save.fanCost = 0;
}
