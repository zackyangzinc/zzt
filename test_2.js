class TableManager {


  const generate_table = function generate_table() {
    var body = document.getElementsByTagName("body")[0];

    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    var row = document.createElement("tr");
    var cell = document.createElement("td");
    var cellText = document.createTextNode("Name");
    cell.appendChild(cellText);
    row.appendChild(cell);
    tblBody.appendChild(row);

    for (var i = 0; i < 10; i++) {
      var row = document.createElement("tr");
      var cell = document.createElement("td");
      var cellText = document.createTextNode(Math.round(Math.random()*1000));
      cell.appendChild(cellText);
      row.appendChild(cell);
      tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute("border", "2");
  }

  const refilter_results = function refilter_results(event) {
    console.log(event.value);
  }

}
