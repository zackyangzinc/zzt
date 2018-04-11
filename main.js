REQUIRED_LENGTH = 100;
var cellValues = this.generateCellValues(REQUIRED_LENGTH);

function generateCellValues(length) {
  let outputArray = []
  for (let i = 0; i < length; i++) {
    outputArray.push(Math.round(Math.random() * 1000).toString())
  }
  return outputArray;
}

function Table(length) {
  this.tbl = document.createElement("table");
  this.tblBody = document.createElement("tbody");
  this.length = length;
}

Table.prototype.generate_table = function(requiredText) {
  this.tblBody.innerHTML = "";
  let newTable = [];
  let row = document.createElement("tr");
  let cell = document.createElement("td");
  let cellText = document.createTextNode("Random Numbers");
  cell.appendChild(cellText);
  row.appendChild(cell);
  this.tblBody.appendChild(row);
  cellValues.forEach((cellVal) => {
    if (cellVal.toString().includes(requiredText) || requiredText === undefined) {
      tableRow = new TableRow(cellVal)
      this.tblBody.appendChild(tableRow.row);
    }
  });
}

function TableRow(cellValue) {
  this.body = cellValue;
  this.row = document.createElement("tr");
  this.cell = document.createElement("td");
  this.cellText = document.createTextNode(this.body);
  this.cell.appendChild(this.cellText);
  this.row.appendChild(this.cell);
}

function refilter_results(event) {
  var body = document.getElementById("table");
  window.table.generate_table(event.value);
}

document.addEventListener("DOMContentLoaded", () => {
  window.table = new Table(REQUIRED_LENGTH);
  table.generate_table();
  var body = document.getElementById("table");
  body.appendChild(table.tblBody);
});
