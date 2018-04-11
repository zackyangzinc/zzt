var cellValues = {}

function generateRandomLetter() {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return alphabet[Math.round(Math.random()*25)];
}

function populateCellValueArray() {
  var table = document.getElementById("newTable");
  for (var i = 0, row; row = table.rows[i]; i++) {
     let indexCell = row.cells[0];
     let rowEntry = `${generateRandomLetter()}${generateRandomLetter()}${generateRandomLetter()}${generateRandomLetter()}`;
     cellValues[indexCell.innerHTML] = rowEntry;
  }
}

function renderCells(event) {
  var table = document.getElementById("newTable");
  table_row = 0
  for (let key in cellValues) {
    if (cellValues[key].includes(event.value) || event.value == undefined) {
      table.rows[table_row].cells[0].innerHTML = key;
      table.rows[table_row].cells[1].innerHTML = cellValues[key];
    } else {
      table.rows[table_row].cells[0].innerHTML = "";
      table.rows[table_row].cells[1].innerHTML = "";
    }
    table_row += 1;
  }
}

// function generateCellValues() {
//   var table = document.getElementById("newTable");
//   for (var i = 0, row; row = table.rows[i]; i++) {
//      for (var j = 0, col; col = row.cells[j]; j++) {
//        if (j == 1){
//          col.innerHTML = `${generateRandomLetter()}${generateRandomLetter()}${generateRandomLetter()}${generateRandomLetter()}`
//        }
//      }
//   }
// }
//
// function searchValues(event) {
//   searchResults = document.getElementById("searchResults");
//   searchResults.innerHTML = "";
//   var table = document.getElementById("newTable");
//   for (var i = 0, row; row = table.rows[i]; i++) {
//      for (var j = 0, col; col = row.cells[j]; j++) {
//        if (j == 1 && col.innerHTML.includes(event.value)){
//          result = document.createElement("div");
//          result.innerHTML = col.innerHTML;
//          searchResults.appendChild(result);
//        }
//      }
//   }
// }

document.addEventListener("DOMContentLoaded", () => {
  populateCellValueArray();
  renderCells(this);
});
