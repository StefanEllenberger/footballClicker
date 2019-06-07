function changeName() {
  var input = prompt("Change the name of your team");
  if (input == null || input == "") {
  } else {
    document.getElementById('teamName').innerHTML = input
  }
}
