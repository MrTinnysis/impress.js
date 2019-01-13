var shoppingList_clean = ["180g Schokolade", "180g Butter", "180 Mehl", "200g Zucker", "4 Eier", "Backpulver"];
function showList1() {
  var demoList = document.getElementById("demoList1");
  for (var i = 0; i < shoppingList_clean.length; i++) {
    var demoListEntry = document.createElement('li');
    demoListEntry.appendChild(document.createTextNode(shoppingList_clean[i]));
    demoList.appendChild(demoListEntry);
  }
}

function showList2() {
  var demoList = document.getElementById("demoList2");
  for (var i = 0; i < shoppingList_clean.length; i++) {
    var demoListEntry = document.createElement('li');
    demoListEntry.appendChild(document.createTextNode(shoppingList_clean[i]));
    demoList.appendChild(demoListEntry);
  }
}

function addToList(){
  //var add = alert("Böse Welt");
  var input = document.getElementById("input1");
  var demoList = document.getElementById("demoList1");
  var demoListEntry = document.createElement('li');
  demoListEntry.appendChild(document.createTextNode(input.value));
  demoList.appendChild(demoListEntry);
}
