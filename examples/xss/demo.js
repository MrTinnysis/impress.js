var shoppingList = ["180g Schokolade", "180g Butter", "180 Mehl", "200g Zucker", "4 Eier", "Backpulver" , '<script>alert("lol");</script>'];
function showList() {
  var demoList = document.getElementById("demoList");
  for (var i = 0; i < shoppingList.length; i++) {
    var demoListEntry = document.createElement('li');
    demoListEntry.appendChild(document.createTextNode(shoppingList[i]));
    demoList.appendChild(demoListEntry);
  }
}
