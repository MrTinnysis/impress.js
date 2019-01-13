var shoppingList_clean = ["180g Schokolade", "180g Butter", "180 Mehl", "200g Zucker", "4 Eier", "Backpulver", "<script>document.write('Juhu')</script>"];
function showList1() {
  var demoList = document.getElementById("demoList1");
  for (var i = 0; i < shoppingList_clean.length; i++) {
    var demoListEntry = document.createElement('li');
    demoList.appendChild(demoListEntry);
    demoListEntry.innerHTML = shoppingList_clean[i];
  }
}

function add(){
  //var add = alert("Böse Welt");
  var add2 = document.getElementById("input");
alert("Sie haben: "+add2.value+" hinzugefügt!")
  var element = document.getElementById("inhalt");
  document.getElementById("inhalt").innerHTML = demo;
}
