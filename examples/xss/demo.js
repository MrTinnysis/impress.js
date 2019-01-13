var demo = '<script>alert("lol");</script>'
var shoppingList = ["180g Schokolade", "180g Butter", "180 Mehl", "200g Zucker", "4 Eier", "Backpulver" , '<script>alert("lol");</script>'];
function showList() {
  var demoList = document.getElementById("demoList");
  //for (var i = 0; i < shoppingList.length; i++) {
  //  var demoListEntry = document.createElement('li');
  //  demoList.appendChild(demoListEntry);
  //  demoListEntry.appendChild();
  //}
  demoList.innerHTML(shoppingList[i])
}

function add(){
  var add = alert("Böse Welt");

  var element = document.getElementById("inhalt");
  element.innerHTML(add);
}
