<!DOCTYPE html>
<html>
<body>

<h1>Ein Beispiel</h1>
<p>Einkaufsliste:
  <ul id="demoList" class="s_demoList"></ul>
</p>

<script>
var shoppingList = ["180g Schokolade", "180g Butter", "180 Mehl", "200g Zucker", "4 Eier", "Backpulver", '<script>alert("lol");</cript>'];
var demoList = document.getElementById("demoList");
for (var i = 0; i < shoppingList.length; i++) {
  var demoListEntry = document.createElement('li');
  demoListEntry.appendChild(document.createTextNode(shoppingList[i]));
  demoList.appendChild(demoListEntry);
}
</script>

</body>
</html>
