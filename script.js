function insert_Row() {
    //Write your code here
  let table = document.getElementById('sampleTable');

  // insert new row at top of table
  let newRow = table.insertRow(0);

  // insert two new cells into row
  let leftCell = newRow.insertCell(0);
  let rightCell = newRow.insertCell(1);

  // set text content of new cells
  leftCell.textContent = 'New Cell1';
  rightCell.textContent = 'New Cell2';
  
}
