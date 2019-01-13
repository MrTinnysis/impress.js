var shoppingList_clean = ["180g Schokolade", "180g Butter", "180 Mehl", "200g Zucker", "4 Eier", "Backpulver", "<script>document.write('Juhu')</script>"];
function showList() {
  var demoList = document.getElementById("demoList");
  for (var i = 0; i < shoppingList.length; i++) {
    var demoListEntry = document.createElement('li');
    demoListEntry.appendChild(document.createTextNode(shoppingList[i]));
    demoList.appendChild(demoListEntry);
  }
}

function add(){
  //var add = alert("Böse Welt");
  var add2 = document.getElementById("input");
alert("Sie haben: "+add2.value+" hinzugefügt!")
  var element = document.getElementById("inhalt");
  document.getElementById("inhalt").innerHTML = demo;
}
